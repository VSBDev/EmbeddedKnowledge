#!/usr/bin/env node

// Canonical, deterministic builder for the Psychiatry common-curriculum graph.
// Edit the compact curriculum declarations below, then run this file.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(HERE, "../site/data/psychiatry-graph.json");

const sources = [
  { tag: "PSY-SYNTH", title: "Psychiatry curriculum source catalog", kind: "local-analysis", url: "../../research/PSYCHIATRY-SOURCE-CATALOG.md", stability: "versioned" },
  { tag: "ACGME-2026", title: "ACGME Program Requirements for Graduate Medical Education in Psychiatry", kind: "primary-normative", url: "https://www.acgme.org/globalassets/pfassets/programrequirements/2026-prs/400_psychiatry_2026.pdf", stability: "annual" },
  { tag: "ACGME-M2", title: "ACGME Psychiatry Milestones 2.0", kind: "primary-competency", url: "https://www.acgme.org/globalassets/PDFs/Milestones/PsychiatryMilestones2.0.pdf", stability: "review-annually" },
  { tag: "RCP-CORE", title: "Royal College of Psychiatrists Core Psychiatry Curriculum", kind: "primary-competency", url: "https://www.rcpsych.ac.uk/docs/default-source/training/curricula-and-guidance/2022-curricula/core-psychiatry-curriculum-final-17-august-2022.pdf?sfvrsn=36b5ba25_10", stability: "review-annually" },
  { tag: "RCPSC-2026", title: "Royal College Psychiatry Training Experiences v2.0", kind: "primary-competency", url: "https://www.royalcollege.ca/content/dam/documents/ibd/psychiatry/psychiatry-training-experiences-e.pdf", stability: "review-annually" },
  { tag: "RANZCP-2026", title: "RANZCP Fellowship Program", kind: "primary-competency", url: "https://www.ranzcp.org/training-exams-and-assessments/fellowship-program/program-overview", stability: "review-annually" },
  { tag: "UEMS-2022", title: "UEMS European Training Requirements for Psychiatry", kind: "primary-competency", url: "https://www.uemspsychiatry.org/s/ETR2022-compiled.pdf", stability: "review-annually" },
  { tag: "WPA-2023", title: "WPA High Quality Post-Graduate Training in Psychiatry", kind: "primary-competency", url: "https://www.wpanet.org/wp-content/uploads/2025/09/3.GA23.10.3-High-Quality-Psych-Training-Position-Statement-7.2.-14.6-1.pdf", stability: "review-annually" },
  { tag: "WHO-QR", title: "WHO QualityRights guidance and training tools", kind: "rights-framework", url: "https://www.who.int/publications/i/item/who-qualityrights-guidance-and-training-tools/", stability: "review-annually" },
  { tag: "WHO-OHCHR", title: "WHO/OHCHR Mental health, human rights and legislation", kind: "rights-framework", url: "https://www.who.int/publications/i/item/9789240080737", stability: "review-annually" }
];

const pathways = [
  { id: "open-scholar", title: "Open scholar", description: "Academic psychiatry for advanced learners without a claim of clinical authority.", includesCommonAcademic: true },
  { id: "physician-learner", title: "Physician learner", description: "Academic outcomes used alongside an independently recognized clinical program.", includesCommonAcademic: true },
  { id: "educator-system", title: "Educator or system learner", description: "Curriculum, evidence, teaching, quality, and service-design study without clinical privileges.", includesCommonAcademic: true }
];

const PATHWAY_IDS = pathways.map((pathway) => pathway.id);
const requirementLegend = {
  "common-academic": "Part of the 1,440-hour common academic curriculum for every route.",
  "clinical-host": "Requires supervised workplace evidence from an independently authorized clinical host and is not claimed by this graph.",
  "jurisdiction-local": "Requires current local law, policy, culture, or regulator authority and cannot be made universal.",
  "area-of-depth": "Belongs to one selected 120–240-hour extension and is outside this common graph."
};

const levelLegend = {
  "stage-1-foundation": "Person, mind, brain, and method.",
  "stage-2-reasoning": "Formulation, safety, and presentations.",
  "stage-3-treatment": "Treatment, lifespan, and continuity.",
  "stage-4-integration": "Rights, systems, scholarship, and independent integration."
};

const stages = [
  ["stage-1", "Stage I · Person, mind, brain, and method", "Build a humane, medically grounded language for observing, listening, explaining, and evaluating evidence.", "#a78bfa"],
  ["stage-2", "Stage II · Formulation, safety, and presentations", "Reason from presentation to alternatives, urgency, formulation, and a collaborative initial plan.", "#f97360"],
  ["stage-3", "Stage III · Treatment, lifespan, and continuity", "Compare treatments, follow outcomes, and coordinate longitudinal care across ages and settings.", "#9fd4e8"],
  ["stage-4", "Stage IV · Rights, systems, and scholarship", "Lead, improve, teach, evaluate technology, and integrate the curriculum under uncertainty.", "#dfff00"]
].map(([slug, title, description, color], order) => ({ id: `domain-psy-${slug}`, title, description, color, order }));

const moduleRows = [
  ["101", "stage-1", "What psychiatry is", "Competing models, histories, limits, power, recovery, rights, and the uses and harms of classification.", 40, ["WPA-2023", "WHO-QR", "WHO-OHCHR"]],
  ["110", "stage-1", "Clinical neuroscience and mind–brain models", "Neural development, signalling, networks, plasticity, sleep, stress systems, genetics, methods, and inference limits.", 80, ["ACGME-M2", "RCP-CORE"]],
  ["120", "stage-1", "Development, relationships, and the life course", "Development from prenatal life through ageing, relationships, adversity, resilience, identity, and intergenerational evidence.", 60, ["RCP-CORE", "RCPSC-2026"]],
  ["130", "stage-1", "Interview, observation, alliance, and communication", "Role clarity, narrative inquiry, observation, communication access, alliance, boundaries, documentation, and repair.", 80, ["ACGME-M2", "RCPSC-2026", "RANZCP-2026"]],
  ["140", "stage-1", "Epidemiology, evidence, and measurement", "Population evidence, measurement, causal inference, diagnostic accuracy, outcomes, harms, and open science.", 60, ["ACGME-M2", "RCP-CORE"]],

  ["210", "stage-2", "Formulation, classification, and diagnostic reasoning", "Problem representation, classification literacy, differential diagnosis, causal formulation, culture, strengths, and updating.", 60, ["ACGME-M2", "RCP-CORE", "RCPSC-2026"]],
  ["220", "stage-2", "Medicine, neurology, investigations, and physical health", "Medical and neurologic alternatives, investigations, delirium, medication burden, prevention, and the physical-health gap.", 60, ["ACGME-2026", "ACGME-M2", "UEMS-2022"]],
  ["230", "stage-2", "Urgency, safety, and crisis care", "Urgency, self-harm, violence, intoxication, safeguarding, capacity, least-restrictive response, and crisis systems.", 60, ["ACGME-2026", "RCP-CORE", "WHO-QR"]],
  ["240", "stage-2", "Psychosis and unusual experiences", "Phenomenology, alternatives, course, recovery, treatment evidence, harms, and collaborative longitudinal care.", 60, ["ACGME-2026", "ACGME-M2", "WPA-2023"]],
  ["250", "stage-2", "Depression, bipolarity, and mood variation", "Mood phenomenology, alternatives, longitudinal course, safety, treatment evidence, and recovery planning.", 60, ["ACGME-2026", "ACGME-M2", "UEMS-2022"]],
  ["260", "stage-2", "Anxiety, obsessive-compulsive, trauma-related, and dissociative presentations", "Description, differential reasoning, mechanisms, trauma-aware care, evidence, culture, and treatment limits.", 60, ["ACGME-2026", "RCP-CORE", "RANZCP-2026"]],
  ["270", "stage-2", "Substance use and behavioural addictions", "Substance effects, withdrawal, harm reduction, assessment, interventions, systems, stigma, and behavioural addictions.", 60, ["ACGME-2026", "RCPSC-2026", "RANZCP-2026"]],
  ["280", "stage-2", "Relational, behavioural, and bodily presentations", "Personality function, eating, sleep, somatic distress, pain, sexual health, and integrated formulation.", 60, ["RCP-CORE", "RCPSC-2026", "UEMS-2022"]],

  ["310", "stage-3", "Psychopharmacology and deprescribing", "Mechanisms, evidence, interactions, shared decisions, monitoring, withdrawal, deprescribing, and population variation.", 70, ["ACGME-M2", "RCPSC-2026", "RANZCP-2026"]],
  ["320", "stage-3", "Psychotherapy science and core models", "Alliance, common factors, formulation, major models, supervision, outcomes, harms, and model selection.", 70, ["ACGME-M2", "RCP-CORE", "UEMS-2022"]],
  ["330", "stage-3", "Recovery, rehabilitation, social and interventional treatments", "Recovery, peer support, housing and occupation, rehabilitation, physical health, social interventions, and neuromodulation.", 50, ["WPA-2023", "WHO-QR", "UEMS-2022"]],
  ["340", "stage-3", "Child, adolescent, and family psychiatry", "Developmental assessment, family and school systems, neurodevelopment, safeguarding, treatment, and transition.", 55, ["ACGME-2026", "RCPSC-2026", "RANZCP-2026"]],
  ["350", "stage-3", "Older-adult, neurocognitive, and neuropsychiatric care", "Ageing, cognition, delirium, neurocognitive syndromes, capacity, carers, treatment burden, and palliative context.", 45, ["ACGME-2026", "RCPSC-2026", "RANZCP-2026"]],
  ["360", "stage-3", "Consultation-liaison and integrated care", "Mind–body interactions, consultation, reproductive mental health, pain, palliative care, and integrated services.", 55, ["ACGME-2026", "ACGME-M2", "UEMS-2022"]],
  ["370", "stage-3", "Community, public, rural, and global mental health", "Community models, prevention, access, rural and resource variation, global systems, and population equity.", 55, ["ACGME-2026", "WPA-2023", "WHO-QR"]],

  ["410", "stage-4", "Ethics, law, forensic questions, and human rights", "Power, consent, capacity, confidentiality, local law, forensic reasoning, supported decisions, and coercion reduction.", 40, ["RCP-CORE", "WHO-QR", "WHO-OHCHR"]],
  ["420", "stage-4", "Culture, identity, spirituality, and structural competence", "Cultural humility, racism, colonialism, identity, disability, spirituality, migration, language, and structural action.", 40, ["RCP-CORE", "RANZCP-2026", "WPA-2023"]],
  ["430", "stage-4", "Quality, safety, implementation, and service design", "Safety science, improvement, implementation, co-design, equity, evaluation, and stopping ineffective practice.", 40, ["ACGME-2026", "RCP-CORE", "RCPSC-2026"]],
  ["440", "stage-4", "Digital psychiatry, telehealth, AI, and data ethics", "Telehealth, digital measurement, AI evaluation, human factors, privacy, security, bias, and refusal conditions.", 30, ["PSY-SYNTH", "RCP-CORE"]],
  ["450", "stage-4", "Leadership, teaching, supervision, and professional sustainability", "Team leadership, teaching, feedback, supervision, boundaries, errors, help-seeking, and sustainable practice.", 40, ["ACGME-2026", "RCP-CORE", "WPA-2023"]],
  ["460", "stage-4", "Integration and capstone", "Independent integration of case reasoning, evidence, systems, teaching, calibration, and public defence.", 50, ["PSY-SYNTH", "WPA-2023"]]
];

const stageBySlug = Object.fromEntries(stages.map((stage) => [stage.id.replace("domain-psy-", ""), stage]));
const modules = moduleRows.map(([code, stageSlug, title, description, hours, sourceTags], order) => ({
  id: `module-psy-${code}`,
  code: `PSY-${code}`,
  domainId: `domain-psy-${stageSlug}`,
  domain: `domain-psy-${stageSlug}`,
  subject: stageBySlug[stageSlug].title,
  title,
  description,
  declaredHours: hours,
  requirement: "common-academic",
  core: true,
  pathway: PATHWAY_IDS,
  syllabusModuleIds: [`PSY-${code}`],
  sourceTags: ["PSY-SYNTH", ...sourceTags],
  order: order + 1
}));

const moduleByCode = Object.fromEntries(modules.map((module) => [module.code.replace("PSY-", ""), module]));
const rowsByModule = new Map();
const add = (code, rows) => rowsByModule.set(code, rows);
const R = (code, slug) => `topic-psy-${code}-${slug}`;

add("101", [
  ["field-and-boundaries", "Psychiatry's field and boundaries", "Explain how psychiatry studies mind, brain, person, relationship, culture, and system while distinguishing academic learning from clinical authority."],
  ["description-and-inference", "Description, inference, and interpretation", "Distinguish a person's report, another person's report, direct observation, inference, classification, and causal explanation."],
  ["explanatory-models", "Competing explanatory models", "Compare biological, psychological, relational, social, cultural, and disability models by the questions they answer, evidence they use, and limits they retain."],
  ["history-power-and-rights", "History, power, and rights", "Analyze how institutions, racism, colonialism, gender, sexuality, stigma, and survivor movements have shaped psychiatric knowledge and care."],
  ["person-recovery-classification", "Person, recovery, and classification", "Evaluate useful and harmful uses of classification while preserving personhood, strengths, neurodiversity, recovery goals, and the right to participate in decisions."]
]);

add("110", [
  ["neural-organization", "Cells, circuits, and networks", "Relate cellular signalling, circuits, large-scale networks, and behaviour without treating one scale as a complete explanation."],
  ["signalling-and-plasticity", "Neural signalling and plasticity", "Explain synaptic signalling, neuromodulation, learning, and plasticity with explicit timescale and causal limits."],
  ["development-genetics-epigenetics", "Development, genetics, and epigenetics", "Appraise how development, genetic variation, and environmentally responsive regulation contribute probabilistically rather than deterministically."],
  ["stress-endocrine-immune", "Stress, endocrine, immune, and metabolic systems", "Construct a bounded model of interacting stress, endocrine, immune, and metabolic processes and identify where clinical claims exceed evidence."],
  ["sleep-and-circadian", "Sleep and circadian biology", "Explain sleep regulation and circadian timing and predict how disruption can affect cognition, emotion, and physical health."],
  ["neuropsychology", "Neuropsychological systems", "Use attention, memory, language, executive, social-cognitive, and motor systems to interpret a fictional pattern of strengths and difficulties."],
  ["neuroscience-methods", "Neuroscience methods and causal inference", "Compare lesion, stimulation, electrophysiology, imaging, genetic, pharmacologic, and computational evidence by the inferences each design can support."],
  ["mind-brain-integration", "Mind–brain model integration", "Build and critique a multi-level mind–brain account that states entities, relations, assumptions, predictions, and unresolved alternatives."]
]);

add("120", [
  ["developmental-principles", "Developmental principles", "Explain continuity, change, timing, plasticity, and person–environment transactions across the life course."],
  ["attachment-and-caregiving", "Attachment and caregiving", "Compare attachment and caregiving models while separating observed relationship patterns from deterministic predictions."],
  ["cognition-language-identity", "Cognition, language, and identity", "Trace interacting changes in cognition, language, emotion, identity, and moral understanding across development."],
  ["adversity-and-resilience", "Adversity, protection, and resilience", "Evaluate evidence about adversity and protection without treating exposure as destiny or resilience as an individual obligation."],
  ["family-peer-culture", "Family, peers, culture, and institutions", "Analyze how family, peers, education, work, migration, culture, and structural conditions shape developmental opportunities."],
  ["life-course-formulation", "Life-course formulation", "Revise a fictional formulation across four ages while preserving uncertainty, strengths, turning points, and cohort context."]
]);

add("130", [
  ["setting-role-consent", "Setting, role, and consent", "Prepare an accessible simulated encounter by clarifying role, purpose, privacy, consent, communication needs, and limits."],
  ["open-and-focused-inquiry", "Open and focused inquiry", "Move from an open invitation to focused questions without replacing the person's narrative with a checklist."],
  ["chronology-function-goals", "Chronology, function, strengths, and goals", "Construct a time course that connects experiences with function, strengths, priorities, context, and change from baseline."],
  ["mental-status-observation", "Mental-status observation", "Describe a time-bound mental-status examination while separating observation from inference and avoiding dehumanizing shorthand."],
  ["communication-access", "Communication access and interpreters", "Adapt a simulated interview for language, sensory, cognitive, developmental, and communication differences using appropriate support."],
  ["alliance-rupture-repair", "Alliance, rupture, and repair", "Recognize a simulated relational rupture, name its possible contribution, and attempt an accountable repair."],
  ["boundaries-documentation", "Boundaries and documentation", "Produce respectful documentation that is necessary, source-labelled, uncertainty-aware, and protected against inappropriate disclosure."],
  ["feedback-and-calibration", "Feedback and calibration", "Use transcript annotation, observer feedback, and self-assessment to identify one communication strength, one error, and a specific next practice target."]
]);

add("140", [
  ["population-frequency-burden", "Frequency, burden, and service use", "Interpret incidence, prevalence, burden, and service-use estimates with their population, period, sampling, and measurement limits."],
  ["measurement-validity", "Measurement, validity, and invariance", "Evaluate reliability, validity, responsiveness, measurement invariance, missing data, and instrument rights for a proposed measure."],
  ["diagnostic-accuracy", "Diagnostic and prognostic evidence", "Interpret sensitivity, specificity, predictive values, likelihood ratios, calibration, and decision thresholds in context."],
  ["study-designs-causality", "Study designs and causal claims", "Compare trials, observational studies, qualitative research, natural experiments, and causal diagrams by the questions they can answer."],
  ["effects-harms-heterogeneity", "Effects, harms, and heterogeneity", "Appraise absolute effects, uncertainty, clinical importance, heterogeneity, adverse outcomes, conflicts, and selective reporting."],
  ["measurement-informed-care", "Measurement-informed learning and care", "Design a fictional longitudinal measurement plan that tracks symptoms, function, quality of life, physical health, harms, preference, and equity without surrendering judgment to a score."]
]);

add("210", [
  ["problem-representation", "Problem representation", "Build a concise, source-labelled problem representation that preserves time course, function, context, strengths, and uncertainty."],
  ["classification-literacy", "Classification literacy", "Use ICD and DSM-related terminology critically without reproducing proprietary criteria or treating a code as a person."],
  ["differential-and-bayes", "Differential diagnosis and Bayesian updating", "Construct and reprioritize medical, neurologic, substance-related, developmental, psychiatric, and contextual alternatives as evidence changes."],
  ["causal-maintenance-formulation", "Causal and maintenance formulation", "Connect predisposing, precipitating, perpetuating, protective, and structural factors in a revisable causal or maintenance model."],
  ["culture-strengths-and-meaning", "Culture, strengths, and meaning", "Integrate explanatory models, identity, spirituality, culture, power, goals, and strengths without stereotyping or diagnostic overshadowing."],
  ["communicate-and-update", "Communicating and updating a formulation", "Explain a working formulation collaboratively, state confidence and alternatives, invite correction, and define evidence that would prompt revision."]
]);

add("220", [
  ["medical-neurologic-alternatives", "Medical and neurologic alternatives", "Generate prioritized medical, neurologic, medication, substance, sleep, and physiologic alternatives for a fictional psychiatric presentation."],
  ["integrated-history", "Integrated history and medication reconciliation", "Organize medical, neurologic, developmental, medication, substance, reproductive, sleep, and family information with source and chronology."],
  ["examination-and-investigations", "Examination and investigations", "Select and interpret bounded physical, neurologic, cognitive, laboratory, and imaging information while avoiding indiscriminate testing."],
  ["delirium-and-cognitive-change", "Delirium and cognitive change", "Distinguish acute attention and awareness change from longer-term cognitive and psychiatric patterns and identify urgent escalation in simulation."],
  ["physical-health-gap", "Physical health, prevention, and treatment burden", "Analyze preventable physical-health inequity, medication burden, lifestyle constraints, access, and diagnostic overshadowing."],
  ["integrated-physical-plan", "Integrated physical-health plan", "Construct an academic monitoring and coordination plan that states priorities, interactions, uncertainty, roles, and when licensed care is required."]
]);

add("230", [
  ["recognize-urgency", "Recognizing urgency", "Identify fictional patterns that require emergency assessment while distinguishing urgency from prediction certainty."],
  ["self-harm-suicide-formulation", "Self-harm and suicide formulation", "Build a dynamic, person-centred safety formulation using current and changing factors, protective resources, uncertainty, and direct escalation."],
  ["violence-agitation-safety", "Violence, agitation, and safety", "Analyze agitation or threatened violence without equating diagnosis with dangerousness and propose proportionate, least-restrictive simulated responses."],
  ["intoxication-withdrawal-catatonia", "Intoxication, withdrawal, delirium, and catatonia", "Discriminate time-critical fictional presentations and identify the limits of remote or unsupervised response."],
  ["safeguarding-capacity-rights", "Safeguarding, capacity, and rights", "Reason through safeguarding, decision-making ability, supported choices, confidentiality, and local-law uncertainty in a fictional crisis."],
  ["collaborative-crisis-plan", "Collaborative crisis planning and learning", "Construct a simulation-only crisis and recovery plan with the person's priorities, supporters, access barriers, warning signs, local routes, follow-up, and post-event learning."]
]);

add("240", [
  ["psychosis-phenomenology", "Psychosis phenomenology and language", "Describe unusual beliefs, perceptions, thought, communication, self-experience, negative symptoms, cognition, and function without ridicule or premature explanation."],
  ["psychosis-differential", "Psychosis differential and context", "Differentiate psychiatric, mood-related, substance, medication, neurologic, medical, sleep, developmental, trauma-related, and culturally situated explanations."],
  ["course-outcomes-recovery", "Course, outcomes, and recovery", "Explain heterogeneous courses and recovery without presenting population patterns as an individual's destiny."],
  ["antipsychotic-evidence-harms", "Antipsychotic evidence and harms", "Compare evidence for benefits, adverse effects, uncertainty, monitoring, preference, and withdrawal without issuing personal treatment advice."],
  ["psychosocial-family-interventions", "Psychological, family, peer, and social interventions", "Compare psychosocial, family, peer, rehabilitation, housing, and community approaches by goals, evidence, access, and burden."],
  ["collaborative-psychosis-plan", "Collaborative longitudinal reasoning", "Build a fictional longitudinal plan that integrates meaning, safety, physical health, treatment choices, rights, social goals, and review points."]
]);

add("250", [
  ["mood-phenomenology", "Mood phenomenology and function", "Describe depressive, elevated, irritable, mixed, psychotic, cognitive, sleep, energy, and functional changes with time course and source."],
  ["mood-differential-course", "Mood differential and longitudinal course", "Distinguish unipolar, bipolar-spectrum, medical, neurologic, medication, substance, grief, trauma, and contextual alternatives using longitudinal evidence."],
  ["mood-safety-and-uncertainty", "Safety and uncertainty in mood presentations", "Integrate self-harm, suicide, impulsivity, vulnerability, safeguarding, protective factors, and uncertainty without false precision."],
  ["mood-medication-evidence", "Medication and interventional evidence", "Compare medication and interventional options by indication, benefit, harms, switching risk, monitoring, access, and stopping considerations."],
  ["mood-psychosocial-evidence", "Psychological and social evidence", "Compare psychological, family, behavioural, peer, occupational, and social approaches by phase, preference, mechanism, and evidence."],
  ["mood-longitudinal-plan", "Longitudinal mood formulation", "Revise a fictional mood formulation over time and construct a collaborative relapse, recovery, physical-health, and outcome-monitoring plan."]
]);

add("260", [
  ["anxiety-trauma-phenomenology", "Anxiety, obsession, trauma, and dissociation phenomenology", "Describe fear, worry, panic, compulsions, trauma responses, avoidance, dissociation, bodily arousal, and function without assuming one cause."],
  ["anxiety-trauma-differential", "Differential and boundary reasoning", "Differentiate anxiety, obsessive-compulsive, trauma-related, dissociative, medical, substance, developmental, mood, psychotic, and culturally patterned experiences."],
  ["learning-cognitive-context-models", "Learning, cognitive, and contextual models", "Compare conditioning, cognitive, memory, attachment, stress, and social-context models by their predictions and limits."],
  ["psychotherapy-evidence", "Psychotherapy evidence and adaptation", "Compare exposure-based, cognitive, trauma-focused, supportive, and other relevant approaches by indication, process, harms, preference, and adaptation."],
  ["medication-evidence", "Medication evidence and limits", "Compare medication evidence, adverse effects, dependence or withdrawal concerns, comorbidity, monitoring, and patient preference."],
  ["trauma-aware-plan", "Trauma-aware and culturally responsive planning", "Construct a fictional plan that supports choice, pacing, safety, communication access, culture, function, and recovery without requiring disclosure of personal trauma."]
]);

add("270", [
  ["substance-spectrum-harm-reduction", "Substance-use spectrum and harm reduction", "Describe use, intoxication, withdrawal, dependence, harms, protective practices, and recovery using non-stigmatizing language."],
  ["substance-pharmacology", "Substance pharmacology and time course", "Relate major substance classes to acute and chronic effects, interactions, tolerance, withdrawal, and medical urgency."],
  ["substance-assessment-differential", "Assessment and differential reasoning", "Integrate chronology, quantity uncertainty, route, context, function, co-occurring conditions, prescribed medicines, and toxicology limits."],
  ["substance-interventions", "Psychological, medication, peer, and social interventions", "Compare intervention options by substance, goal, evidence, harms, access, preference, and stage of change."],
  ["addiction-systems-stigma", "Systems, policy, and stigma", "Analyze how criminalization, supply, marketing, inequality, housing, trauma, service design, and stigma shape risk and access."],
  ["behavioural-addictions", "Behavioural addictions and contested boundaries", "Appraise a proposed behavioural addiction by impairment, reinforcement, alternatives, classification evidence, moral judgment, and risk of over-medicalization."]
]);

add("280", [
  ["personality-relational-function", "Personality and relational function", "Formulate enduring and context-sensitive patterns in self, emotion, relationships, coping, and function without reducing a person to a trait label."],
  ["eating-and-feeding", "Eating and feeding presentations", "Integrate nutritional, medical, developmental, psychological, cultural, and social evidence and recognize fictional medical urgency."],
  ["sleep-presentations", "Sleep presentations", "Differentiate insomnia, circadian, breathing-related, movement-related, parasomnia, substance, medication, mood, and environmental contributors."],
  ["somatic-distress-pain-fatigue", "Somatic distress, pain, and fatigue", "Construct a both-and formulation that validates suffering, keeps medical alternatives open, and avoids false divisions between physical and psychological."],
  ["sexual-gender-bodily-context", "Sexual, gender, and bodily context", "Discuss sexual function, gender-related care, reproductive context, body image, disability, and medication effects with consent, appropriate language, and role boundaries."],
  ["integrated-relational-plan", "Integrated relational and functional plan", "Build a fictional plan that coordinates medical safety, psychological formulation, relationships, behaviour, environment, strengths, and patient-defined goals."]
]);

add("310", [
  ["psychopharmacology-principles", "Psychopharmacology principles", "Connect receptor, circuit, pharmacodynamic, and clinical models while identifying where mechanism does not predict patient-important benefit."],
  ["pharmacokinetics-interactions", "Pharmacokinetics and interactions", "Reason about absorption, distribution, metabolism, elimination, dose–exposure variation, interactions, adherence, and organ function."],
  ["medication-evidence-appraisal", "Medication evidence appraisal", "Appraise comparative benefits, absolute effects, harms, time course, study populations, missing outcomes, conflicts, and applicability."],
  ["shared-medication-decisions", "Shared medication decisions", "Construct a balanced fictional explanation of options, uncertainty, alternatives, burdens, access, preference, and what would prompt reconsideration."],
  ["monitoring-and-adverse-effects", "Monitoring and adverse effects", "Design an academic monitoring plan for therapeutic response, physical health, interactions, adverse effects, function, quality of life, and equity."],
  ["deprescribing-and-withdrawal", "Deprescribing and withdrawal", "Distinguish relapse, rebound, withdrawal, and adverse effects and explain gradual, monitored, shared deprescribing principles without personal instructions."],
  ["population-and-safety-variation", "Population variation and safety", "Analyze medication decisions across age, pregnancy, organ impairment, polypharmacy, genetics, culture, access, and jurisdiction while retaining specialist boundaries."]
]);

add("320", [
  ["alliance-common-factors", "Alliance, common factors, and process", "Explain how goals, tasks, bond, expectancy, empathy, collaboration, feedback, and rupture can influence psychotherapy process and outcomes."],
  ["supportive-motivational", "Supportive and motivational approaches", "Use simulation to distinguish supportive, motivational, psychoeducational, and crisis-focused purposes, methods, and limits."],
  ["cognitive-behavioural", "Cognitive and behavioural models", "Construct and test a cognitive-behavioural maintenance formulation and select a bounded intervention rationale in simulation."],
  ["psychodynamic", "Psychodynamic models", "Explain conflict, defence, attachment, relational patterns, transference, and reflective use of the therapeutic relationship with appropriate uncertainty."],
  ["interpersonal-family-systemic", "Interpersonal, family, and systemic models", "Compare interpersonal, family, couple, and systemic formulations by their unit of analysis, change processes, evidence, and boundaries."],
  ["dialectical-group-and-integrative", "Dialectical, group, and integrative approaches", "Compare dialectical-behavioural, group, and integrative approaches by structure, skills, indications, risks, and training requirements."],
  ["selection-outcomes-harms-supervision", "Selection, outcomes, harms, and supervision", "Select a psychotherapy model for a fictional goal, monitor process and adverse effects, respond to rupture, and explain why supervised patient work cannot be replaced by reading or role-play."]
]);

add("330", [
  ["recovery-and-peer-knowledge", "Recovery and peer knowledge", "Compare clinical and personal recovery and explain how peer expertise, self-determination, hope, identity, and rights change goals and governance."],
  ["rehabilitation-housing-occupation", "Rehabilitation, housing, education, and work", "Design a fictional rehabilitation pathway that coordinates skills, environment, supported education or employment, housing, benefits, and social connection."],
  ["social-family-community-interventions", "Social, family, and community interventions", "Compare family, network, community, welfare, legal, and practical interventions by mechanism, evidence, burden, and access."],
  ["physical-health-and-wellbeing", "Physical health and wellbeing", "Integrate prevention, screening, movement, sleep, nutrition, substance use, sexual health, medication burden, and access without moralizing health behaviour."],
  ["neuromodulation-and-interventional", "Neuromodulation and interventional treatments", "Compare ECT, magnetic stimulation, other neuromodulation, and emerging interventions by evidence, consent, harms, uncertainty, and specialist setting."],
  ["integrated-recovery-plan", "Integrated recovery and treatment plan", "Construct a longitudinal plan led by a fictional person's goals that combines clinical, peer, social, physical, and rights-based supports with measurable review points."]
]);

add("340", [
  ["child-development-family-systems", "Development and family systems", "Use developmental stage, attachment, family, peers, school, identity, culture, and structural context to frame child or adolescent concerns."],
  ["child-assessment-communication", "Developmentally adapted assessment", "Plan a simulation using age-appropriate communication, assent, consent, confidentiality, collateral information, interpreters, and school evidence."],
  ["neurodevelopmental-presentations", "Neurodevelopmental presentations", "Differentiate developmental variation, disability, autism, attention, learning, language, intellectual, motor, and medical contributors without deficit-only framing."],
  ["child-emotional-behavioural-presentations", "Emotional, behavioural, and psychotic presentations", "Build developmentally informed differentials for mood, anxiety, trauma, behaviour, eating, substance, psychotic, and bodily presentations."],
  ["child-safeguarding-treatment", "Safeguarding and treatment evidence", "Integrate safeguarding, family partnership, psychological, social, educational, and medication evidence with growth, physical health, rights, and uncertainty."],
  ["transition-and-cultural-safety", "Transition and cultural safety", "Design a fictional transition plan across child and adult systems that preserves relationships, identity, disability access, culture, education, and shared goals."]
]);

add("350", [
  ["ageing-cognition-context", "Ageing, cognition, and context", "Relate normal variation, sensory change, frailty, isolation, culture, medication burden, and neurologic disease to mental health in later life."],
  ["delirium-dementia-depression", "Delirium, neurocognitive syndromes, and depression", "Differentiate acute and progressive cognitive change, depression, psychosis, medication effects, medical illness, and baseline variation."],
  ["capacity-carers-and-safeguarding", "Capacity, carers, and safeguarding", "Reason through decision support, capacity, consent, confidentiality, carer knowledge and burden, abuse, neglect, and local legal uncertainty."],
  ["older-adult-treatment-burden", "Treatment evidence and burden in later life", "Compare psychological, social, medication, and interventional options with frailty, comorbidity, polypharmacy, falls, cognition, goals, and access."],
  ["neuropsychiatry-and-palliative-context", "Neuropsychiatry and palliative context", "Formulate behavioural and psychiatric changes in neurologic or life-limiting illness while integrating comfort, communication, carers, function, and advance preferences."]
]);

add("360", [
  ["mind-body-interaction", "Mind–body interaction", "Explain bidirectional relations among illness, inflammation, pain, sleep, medication, behaviour, meaning, care experiences, and function without dualistic shortcuts."],
  ["consultation-question-and-communication", "Consultation question and communication", "Clarify the referrer's question, patient priorities, urgency, roles, evidence, and a concise answer useful to the wider team."],
  ["reproductive-and-perinatal", "Reproductive and perinatal mental health", "Integrate reproductive goals, pregnancy or postpartum context, infant and family needs, medication evidence, physical health, safety, and specialist boundaries."],
  ["pain-fatigue-and-palliative", "Pain, fatigue, and palliative care", "Build an integrated formulation of pain or fatigue and communicate symptom relief, uncertainty, goals, and palliative context without invalidation."],
  ["integrated-care-models", "Integrated and collaborative care", "Compare liaison, primary-care, collaborative, stepped, and co-located models by population, workflow, measurement, access, and evidence."],
  ["consultation-liaison-plan", "Consultation-liaison synthesis", "Produce a fictional consultation that integrates medical and psychiatric alternatives, capacity, medication interactions, team roles, communication, and follow-up."]
]);

add("370", [
  ["community-service-models", "Community and crisis service models", "Compare community, outreach, home-treatment, crisis, inpatient, peer, rehabilitation, and primary-care models by purpose, evidence, rights, and access."],
  ["public-mental-health-prevention", "Public mental health and prevention", "Design a prevention framework across universal, selective, and indicated action while avoiding individual blame and diagnostic expansion."],
  ["rural-and-resource-variation", "Rural, remote, and resource variation", "Adapt a fictional pathway for distance, workforce, language, digital access, transport, continuity, local knowledge, and emergency limits."],
  ["global-systems-and-coloniality", "Global systems and coloniality", "Compare mental-health systems by financing, workforce, law, community assets, conflict, colonization, and imported-model risks."],
  ["population-equity-and-access", "Population equity and access", "Analyze service data for need, reach, quality, outcomes, coercion, exclusion, and inequity while identifying measurement gaps."],
  ["community-system-design", "Community system design", "Co-design a fictional, rights-based service pathway with affected communities, balancing access, continuity, safety, choice, outcomes, cost, and unintended effects."]
]);

add("410", [
  ["ethics-power-and-conflict", "Ethics, power, and conflict", "Analyze a psychiatric dilemma using autonomy, benefit, harm, justice, relationship, power, uncertainty, conflicts, and accountability."],
  ["capacity-consent-confidentiality", "Capacity, consent, and confidentiality", "Explain decision-specific capacity, supported decision-making, informed consent, confidentiality, disclosure limits, and documentation with jurisdiction labels."],
  ["mental-health-law", "Mental-health law and jurisdiction", "Compare legal and ethical questions without presenting one jurisdiction's detention, treatment, review, safeguarding, or duty rules as universal."],
  ["forensic-reasoning", "Forensic questions and role boundaries", "Distinguish therapeutic and forensic roles, evidence standards, risk uncertainty, report duties, bias, and the limits of academic simulation."],
  ["human-rights-and-coercion", "Human rights and coercion reduction", "Evaluate supported decisions, advance planning, community inclusion, restraint and seclusion reduction, complaint routes, and accountable alternatives to coercion."]
]);

add("420", [
  ["cultural-humility-models", "Cultural humility and explanatory models", "Elicit and compare explanatory models, language, identity, values, and healing practices while examining the learner's own assumptions."],
  ["racism-colonialism-structure", "Racism, colonialism, and structural conditions", "Analyze how racism, colonization, migration policy, poverty, housing, education, policing, and services shape exposure, interpretation, access, and outcome."],
  ["identity-disability-neurodiversity", "Identity, disability, and neurodiversity", "Integrate gender, sexuality, disability, neurodiversity, age, class, and intersectionality without treating identity as pathology or a checklist."],
  ["spirituality-language-migration", "Spirituality, language, and migration", "Discuss spirituality, religion, idioms of distress, interpreters, migration, exile, and belonging with curiosity, consent, and differential awareness."],
  ["culturally-safe-action", "Culturally safe formulation and action", "Revise a fictional formulation and service plan with community authority, cultural safety, structural action, communication access, and a test for unintended harm."]
]);

add("430", [
  ["safety-science", "Safety science and learning systems", "Use systems thinking to analyze a fictional adverse event without reducing causes to individual blame."],
  ["quality-measures-and-process", "Quality measures and process mapping", "Define an aim, population, process, outcome, balancing measures, run-chart logic, and data-quality limits for an improvement problem."],
  ["implementation-science", "Implementation and de-implementation", "Select implementation strategies from identified barriers and mechanisms and define conditions for adaptation, de-implementation, or stopping."],
  ["co-design-equity-governance", "Co-design, equity, and governance", "Design stakeholder governance that gives affected people real authority, compensation, accessibility, privacy, conflict disclosure, and equity measures."],
  ["evaluate-and-stop", "Evaluation, spread, and stopping rules", "Construct an ethical evaluation with comparison, uncertainty, harms, resource effects, sustainability, and explicit rules to stop or reverse ineffective practice."]
]);

add("440", [
  ["telepsychiatry", "Telepsychiatry and hybrid care", "Evaluate telepsychiatry for access, communication, privacy, safety, exclusion, emergency limits, licensing, workflow, and equivalent non-digital routes."],
  ["digital-phenotyping-and-measures", "Digital measures and phenotyping", "Appraise passive and active digital measures for construct validity, consent, missingness, surveillance, context, bias, drift, and clinical usefulness."],
  ["ai-evaluation-human-factors", "AI evaluation and human factors", "Evaluate a psychiatric AI claim using task definition, data provenance, subgroup performance, calibration, explainability, workflow, automation bias, and failure modes."],
  ["privacy-security-governance", "Privacy, security, and refusal conditions", "Design governance for data minimization, access, security, monitoring, incident response, withdrawal, accountability, and a defensible decision not to deploy."]
]);

add("450", [
  ["team-leadership", "Team leadership and collaboration", "Lead a simulated multidisciplinary discussion that clarifies purpose, roles, disagreement, patient participation, evidence, decision, and follow-up."],
  ["teaching-and-assessment", "Teaching and assessment", "Design a short teaching activity with a learner model, observable outcome, guided practice, feedback, transfer, accessibility, and valid evidence of learning."],
  ["supervision-and-feedback", "Supervision and feedback", "Prepare for supervision, present uncertainty, seek help, give task-focused feedback, respond to challenge, and define what must remain with an authorized supervisor."],
  ["boundaries-wellbeing-impairment", "Boundaries, wellbeing, and impairment", "Analyze workload, moral injury, boundaries, fatigue, impairment, mistreatment, help-seeking, and organizational responsibility without making resilience an individual cure."],
  ["conflict-error-and-repair", "Conflict, error, and repair", "Respond to a simulated conflict or error with disclosure, immediate protection, apology where appropriate, investigation, learning, support, and accountable repair."]
]);

add("460", [
  ["integrated-case-reasoning", "Integrated case reasoning", "Construct and revise a complex fictional formulation spanning person, brain and body, development, relationships, culture, systems, safety, and uncertainty."],
  ["independent-evidence-synthesis", "Independent evidence synthesis", "Answer a bounded psychiatric question using transparent search, critical appraisal, absolute effects, harms, lived-experience evidence, applicability, rights, and uncertainty."],
  ["service-and-rights-design", "Service and rights design", "Design a rights-based service response with co-governance, implementation theory, quality measures, equity analysis, privacy, cost, and stopping rules."],
  ["teaching-and-public-explanation", "Teaching and public explanation", "Teach a difficult psychiatric idea to a declared audience using accurate, accessible, non-stigmatizing explanation and respond to uncertainty and disagreement."],
  ["portfolio-calibration", "Portfolio, calibration, and limits", "Defend a portfolio showing retrieval, transfer, feedback uptake, confidence calibration, corrections, help-seeking, and the boundary between academic and clinical evidence."],
  ["capstone-defence", "Capstone defence", "Defend an independently authored capstone before academic, clinical, lived-experience, rights, and systems perspectives and resolve every material correction."]
]);

const modulePrerequisites = {
  "110": [R("101", "explanatory-models")],
  "120": [R("101", "person-recovery-classification")],
  "130": [R("101", "description-and-inference")],
  "140": [R("101", "explanatory-models")],
  "210": [R("130", "feedback-and-calibration"), R("140", "effects-harms-heterogeneity")],
  "220": [R("110", "mind-brain-integration"), R("130", "chronology-function-goals")],
  "230": [R("210", "communicate-and-update"), R("220", "delirium-and-cognitive-change")],
  "240": [R("210", "communicate-and-update"), R("230", "collaborative-crisis-plan")],
  "250": [R("210", "communicate-and-update"), R("230", "collaborative-crisis-plan")],
  "260": [R("210", "communicate-and-update"), R("230", "safeguarding-capacity-rights")],
  "270": [R("210", "differential-and-bayes"), R("230", "intoxication-withdrawal-catatonia")],
  "280": [R("120", "life-course-formulation"), R("210", "causal-maintenance-formulation")],
  "310": [R("140", "effects-harms-heterogeneity"), R("220", "integrated-physical-plan")],
  "320": [R("130", "alliance-rupture-repair"), R("210", "causal-maintenance-formulation")],
  "330": [R("310", "shared-medication-decisions"), R("320", "selection-outcomes-harms-supervision")],
  "340": [R("120", "life-course-formulation"), R("230", "safeguarding-capacity-rights")],
  "350": [R("120", "life-course-formulation"), R("220", "delirium-and-cognitive-change")],
  "360": [R("220", "integrated-physical-plan"), R("310", "monitoring-and-adverse-effects")],
  "370": [R("140", "population-frequency-burden"), R("330", "integrated-recovery-plan")],
  "410": [R("101", "history-power-and-rights"), R("230", "safeguarding-capacity-rights")],
  "420": [R("101", "history-power-and-rights"), R("210", "culture-strengths-and-meaning")],
  "430": [R("140", "measurement-informed-care"), R("370", "community-system-design"), R("410", "human-rights-and-coercion")],
  "440": [R("140", "measurement-validity"), R("410", "capacity-consent-confidentiality")],
  "450": [R("130", "feedback-and-calibration"), R("430", "co-design-equity-governance")],
  "460": [R("410", "human-rights-and-coercion"), R("420", "culturally-safe-action"), R("430", "evaluate-and-stop"), R("440", "privacy-security-governance"), R("450", "conflict-error-and-repair")]
};

const topics = [];
for (const module of modules) {
  const code = module.code.replace("PSY-", "");
  const rows = rowsByModule.get(code);
  if (!rows?.length) throw new Error(`Module ${module.code} has no atomic outcomes.`);
  const baseHours = Math.floor(module.declaredHours / rows.length);
  const extraHours = module.declaredHours % rows.length;
  rows.forEach(([slug, title, outcome], localIndex) => {
    const prerequisites = localIndex === 0
      ? (modulePrerequisites[code] ?? [])
      : [R(code, rows[0][0])];
    topics.push({
      id: R(code, slug),
      code: `${module.code}.${String(localIndex + 1).padStart(2, "0")}`,
      kind: "topic",
      title,
      label: title,
      summary: outcome,
      outcome,
      domain: module.domainId,
      domainId: module.domainId,
      subject: module.subject,
      module: module.id,
      moduleId: module.id,
      syllabusModuleIds: module.syllabusModuleIds,
      level: module.domainId.endsWith("stage-1") ? "stage-1-foundation" : module.domainId.endsWith("stage-2") ? "stage-2-reasoning" : module.domainId.endsWith("stage-3") ? "stage-3-treatment" : "stage-4-integration",
      requirement: "common-academic",
      core: true,
      pathway: PATHWAY_IDS,
      estimatedHours: baseHours + (localIndex < extraHours ? 1 : 0),
      evidenceConfidence: "pending-external-review",
      sourceTags: module.sourceTags,
      prerequisites,
      crossLinks: [],
      order: topics.length + 1
    });
  });
}

const topicById = new Map(topics.map((topic) => [topic.id, topic]));
const crossPairs = [
  [R("101", "explanatory-models"), R("210", "causal-maintenance-formulation")],
  [R("101", "history-power-and-rights"), R("410", "human-rights-and-coercion")],
  [R("101", "person-recovery-classification"), R("330", "recovery-and-peer-knowledge")],
  [R("110", "sleep-and-circadian"), R("250", "mood-phenomenology")],
  [R("110", "neuroscience-methods"), R("440", "ai-evaluation-human-factors")],
  [R("120", "adversity-and-resilience"), R("260", "learning-cognitive-context-models")],
  [R("120", "family-peer-culture"), R("340", "child-development-family-systems")],
  [R("130", "mental-status-observation"), R("210", "problem-representation")],
  [R("130", "communication-access"), R("420", "spirituality-language-migration")],
  [R("140", "measurement-validity"), R("430", "quality-measures-and-process")],
  [R("210", "culture-strengths-and-meaning"), R("420", "cultural-humility-models")],
  [R("220", "physical-health-gap"), R("330", "physical-health-and-wellbeing")],
  [R("230", "safeguarding-capacity-rights"), R("410", "capacity-consent-confidentiality")],
  [R("240", "course-outcomes-recovery"), R("370", "community-service-models")],
  [R("250", "mood-longitudinal-plan"), R("340", "child-emotional-behavioural-presentations")],
  [R("260", "trauma-aware-plan"), R("320", "selection-outcomes-harms-supervision")],
  [R("270", "addiction-systems-stigma"), R("370", "population-equity-and-access")],
  [R("280", "somatic-distress-pain-fatigue"), R("360", "mind-body-interaction")],
  [R("310", "deprescribing-and-withdrawal"), R("350", "older-adult-treatment-burden")],
  [R("320", "alliance-common-factors"), R("450", "supervision-and-feedback")],
  [R("330", "recovery-and-peer-knowledge"), R("410", "human-rights-and-coercion")],
  [R("340", "transition-and-cultural-safety"), R("420", "culturally-safe-action")],
  [R("350", "capacity-carers-and-safeguarding"), R("410", "capacity-consent-confidentiality")],
  [R("360", "integrated-care-models"), R("370", "community-system-design")],
  [R("370", "global-systems-and-coloniality"), R("420", "racism-colonialism-structure")],
  [R("430", "co-design-equity-governance"), R("440", "privacy-security-governance")],
  [R("440", "ai-evaluation-human-factors"), R("450", "teaching-and-assessment")]
];

for (const [left, right] of crossPairs) {
  if (!topicById.has(left) || !topicById.has(right)) throw new Error(`Unknown cross-link endpoint: ${left} / ${right}`);
  topicById.get(left).crossLinks.push(right);
  topicById.get(right).crossLinks.push(left);
}

const topicHoursByModule = Object.fromEntries(modules.map((module) => [module.id, topics.filter((topic) => topic.moduleId === module.id).reduce((sum, topic) => sum + topic.estimatedHours, 0)]));
const moduleNodes = modules.map(({ declaredHours, ...module }) => ({
  ...module,
  kind: "module",
  label: module.title,
  summary: module.description,
  module: module.id,
  estimatedHours: topicHoursByModule[module.id],
  level: module.domainId.endsWith("stage-1") ? "stage-1-foundation" : module.domainId.endsWith("stage-2") ? "stage-2-reasoning" : module.domainId.endsWith("stage-3") ? "stage-3-treatment" : "stage-4-integration",
  evidenceConfidence: "pending-external-review"
}));

const domainNodes = stages.map((stage) => {
  const stageModules = moduleNodes.filter((module) => module.domainId === stage.id);
  return {
    ...stage,
    kind: "domain",
    label: stage.title,
    summary: stage.description,
    domain: stage.id,
    subject: stage.title,
    estimatedHours: stageModules.reduce((sum, module) => sum + module.estimatedHours, 0),
    pathway: PATHWAY_IDS
  };
});

const links = [];
for (const module of moduleNodes) links.push({ id: `link-contains-${module.domainId}-${module.id}`, source: module.domainId, target: module.id, type: "contains" });
for (const topic of topics) {
  links.push({ id: `link-contains-${topic.moduleId}-${topic.id}`, source: topic.moduleId, target: topic.id, type: "contains" });
  for (const prerequisite of topic.prerequisites) links.push({ id: `link-prerequisite-${prerequisite}-${topic.id}`, source: prerequisite, target: topic.id, type: "prerequisite" });
  for (const related of topic.crossLinks) {
    const pair = [topic.id, related].sort();
    const id = `link-cross-${pair[0]}-${pair[1]}`;
    if (!links.some((link) => link.id === id)) links.push({ id, source: pair[0], target: pair[1], type: "cross-link" });
  }
}

const totalHours = topics.reduce((sum, topic) => sum + topic.estimatedHours, 0);
if (totalHours !== 1440) throw new Error(`Psychiatry graph hours ${totalHours} do not match the 1,440-hour common syllabus.`);

const graph = {
  schemaVersion: "2.0.0",
  graphVersion: "0.1.0",
  generatedAt: "2026-07-23",
  status: "proposed-intake",
  course: {
    id: "psychiatry",
    title: "Psychiatry",
    subtitle: "Mind, brain, person, society",
    description: "A rights-aware, evidence-centred common academic graph spanning person-centred reasoning, medicine, neuroscience, psychotherapy, treatment, lifespan, systems, culture, and scholarship.",
    estimatedHours: totalHours,
    disclaimer: "Academic study and simulation only. This graph is not a residency, clinical placement, licence, board-eligibility route, treatment guide, or authorization to practise psychiatry."
  },
  scope: {
    included: "The fixed 1,440-hour common academic curriculum across PSY-101 through PSY-460.",
    excluded: "The selected 120–240-hour area of depth and all real-patient, workplace-entrustment, licensure, and jurisdiction-specific authorization requirements.",
    stabilityRule: "After merge, topic IDs are stable public identifiers. Renaming or restructuring requires an explicit migration map; IDs are never silently reused for a different outcome."
  },
  schema: {
    nodeKinds: ["domain", "module", "topic"],
    linkTypes: {
      contains: "Parent hierarchy: stage to module, or module to atomic outcome.",
      prerequisite: "Source should be learned before target; these links form a directed acyclic graph.",
      "cross-link": "A symmetric conceptual connection; it does not impose study order."
    },
    requiredNodeFields: ["id", "kind", "title", "label", "summary", "domain", "subject", "estimatedHours", "pathway"],
    topicFields: ["code", "module", "level", "requirement", "core", "outcome", "evidenceConfidence", "sourceTags", "prerequisites", "crossLinks"],
    requirementLegend,
    levelLegend,
    routeResolutionRule: "All three learner routes study the same common academic outcomes; route differences concern prerequisites, evidence context, and authority outside this graph."
  },
  pathways,
  sources,
  nodes: [...domainNodes, ...moduleNodes, ...topics],
  links,
  metrics: {
    domains: domainNodes.length,
    modules: moduleNodes.length,
    topics: topics.length,
    links: links.length,
    prerequisiteLinks: links.filter((link) => link.type === "prerequisite").length,
    crossLinks: links.filter((link) => link.type === "cross-link").length,
    estimatedHours: totalHours,
    commonAcademicTopics: topics.length
  }
};

await writeFile(OUTPUT, `${JSON.stringify(graph, null, 2)}\n`, "utf8");
console.log(`Wrote ${OUTPUT}`);
console.log(JSON.stringify(graph.metrics, null, 2));
