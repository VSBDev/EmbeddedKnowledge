#!/usr/bin/env node

// Canonical, deterministic builder for the Premed curriculum graph.
// Edit the compact curriculum declarations below, then run this file.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(HERE, "../site/data/premed-graph.json");

const sources = [
  { tag: "ADJUDICATION", title: "Premed research adjudication", kind: "local-analysis", url: "../../research/ADJUDICATION-2026-07-19.md", stability: "versioned" },
  { tag: "AAMC-MCAT", title: "What's on the MCAT Exam? Content Outline", kind: "primary-descriptive", url: "https://students-residents.aamc.org/media/9261/download", stability: "stable-framework" },
  { tag: "AAMC-COMP", title: "Premed Competencies for Entering Medical Students", kind: "primary-competency", url: "https://students-residents.aamc.org/real-stories-demonstrating-premed-competencies/premed-competencies-entering-medical-students", stability: "review-annually" },
  { tag: "AAMC-MATH", title: "MCAT general mathematical concepts and techniques", kind: "primary-descriptive", url: "https://students-residents.aamc.org/scientific-inquiry-and-reasoning-skills/scientific-inquiry-reasoning-skills-general-mathematical-concepts-and-techniques", stability: "stable-framework" },
  { tag: "AAMC-MSAR", title: "MSAR Premed Course Requirements 2027", kind: "primary-normative-directory", url: "https://students-residents.aamc.org/media/7041/download", stability: "annual" },
  { tag: "QAA-MED", title: "Access to HE Diploma Subject Descriptor: Medicine", kind: "primary-normative", url: "https://www.qaa.ac.uk/docs/qaa/access-to-he/ahe-subject-descriptor-medicine-25.pdf?sfvrsn=30cfa581_2", stability: "review-annually" },
  { tag: "RD243", title: "Spain RD 243/2022 Bachillerato curriculum", kind: "primary-normative", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521", stability: "legislation" },
  { tag: "RD534", title: "Spain RD 534/2024 PAU rules", kind: "primary-normative", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858", stability: "legislation" },
  { tag: "AQA-BIO", title: "AQA A-level Biology 7401/7402", kind: "primary-secondary", url: "https://filestore.aqa.org.uk/resources/biology/specifications/AQA-7401-7402-SP-2015.PDF", stability: "specification-cycle" },
  { tag: "AP-BIO", title: "AP Biology Course and Exam Description", kind: "primary-secondary", url: "https://apcentral.collegeboard.org/media/pdf/ap-biology-course-and-exam-description.pdf", stability: "review-annually" },
  { tag: "FR-PC", title: "French terminale Physics-Chemistry curriculum", kind: "primary-secondary", url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm", stability: "legislation" },
  { tag: "FR-SVT", title: "French terminale SVT curriculum", kind: "primary-secondary", url: "https://www.education.gouv.fr/bo/19/Special8/MENE1921252A.htm", stability: "legislation" },
  { tag: "OPENSTAX-BIO", title: "OpenStax Biology 2e", kind: "learning-resource", url: "https://openstax.org/details/books/biology-2e", stability: "edition-specific" },
  { tag: "OPENSTAX-CHEM", title: "OpenStax Chemistry 2e", kind: "learning-resource", url: "https://openstax.org/details/books/chemistry-2e", stability: "edition-specific" },
  { tag: "OPENSTAX-ORG", title: "OpenStax Organic Chemistry", kind: "learning-resource", url: "https://openstax.org/details/books/organic-chemistry", stability: "edition-specific" },
  { tag: "OPENSTAX-PHYS", title: "OpenStax College Physics 2e", kind: "learning-resource", url: "https://openstax.org/details/books/college-physics-2e", stability: "edition-specific" },
  { tag: "OPENSTAX-AP", title: "OpenStax Anatomy and Physiology 2e", kind: "learning-resource", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", stability: "edition-specific" },
  { tag: "OPENSTAX-PSY", title: "OpenStax Psychology 2e", kind: "learning-resource", url: "https://openstax.org/details/books/psychology-2e", stability: "edition-specific" },
  { tag: "OPENSTAX-SOC", title: "OpenStax Introduction to Sociology 3e", kind: "learning-resource", url: "https://openstax.org/details/books/introduction-sociology-3e", stability: "edition-specific" }
];

// Route resolution rule (documented in course/PREMED-KNOWLEDGE-GRAPH.md section 5):
// a route's effective topic set is the UNION of the topics carrying that route tag and every
// `portable-core` topic. `portable-core` resolves to exactly its own tagged set. `sourceTags`
// record evidence provenance only and never confer or withhold route membership.
const ROUTE_RULE = "A route's effective topic set is the union of its own route tag and every portable-core topic. sourceTags are evidence provenance and never determine route membership.";
const pathways = [
  { id: "portable-core", title: "Portable academic core", description: "High-confidence cross-system scientific preparation.", includesPortableCore: false },
  { id: "medicine-bridge", title: "Medicine-facing bridge", description: "Useful preparation for medical study, but not a universal entrant minimum.", includesPortableCore: true },
  { id: "us-mcat", title: "US / MCAT", description: "MCAT-aligned college-level science, behavioral science, and critical analysis.", includesPortableCore: true },
  { id: "uk-direct-entry", title: "UK direct entry", description: "A-level and access-course preparation; institution rules vary.", includesPortableCore: true },
  { id: "spain-bach-pau", title: "Spain Bachillerato / PAU", description: "National science curriculum coverage; admission weightings remain university-specific.", includesPortableCore: true },
  { id: "continental-science", title: "Continental direct entry", description: "French, German, and related secondary-science depth.", includesPortableCore: true },
  { id: "access-foundation", title: "Access / foundation", description: "Novice on-ramp, scientific inquiry, laboratory practice, and foundational quantitative work.", includesPortableCore: true },
  { id: "broad-biology", title: "Broad biological literacy", description: "Evolution, ecology, and plant science beyond the medicine-specific minimum.", includesPortableCore: true },
  { id: "advanced-quantitative", title: "Advanced quantitative", description: "Optional calculus and mathematical extensions not required by the MCAT.", includesPortableCore: true }
];

const requirementLegend = {
  "portable-core": "Part of the adjudicated, cross-system academic spine.",
  "medicine-bridge": "Medicine-facing content whose entrant status varies by system.",
  pathway: "Required only for a named route or retained for a broad qualification.",
  "on-ramp": "Foundation skill included so a novice can enter the core safely.",
  enrichment: "Useful extension, explicitly outside the guaranteed minimum."
};

const levelLegend = {
  foundation: "No specialist prerequisite; secondary-school on-ramp.",
  secondary: "Upper-secondary / access-course depth.",
  "college-intro": "Introductory college sequence depth.",
  "first-semester": "First-semester specialist course depth.",
  bridge: "Integration toward first-year medical science."
};

const domains = [
  ["learning-practice", "Scientific Practice", "Begin the course, turn questions into evidence, and work safely and reproducibly.", "#a78bfa"],
  ["quantitative", "Quantitative Foundations", "Mathematical language, statistics, and data fluency used across the sciences.", "#38bdf8"],
  ["biology", "Biology", "Cells, information, inheritance, evolution, and organismal context.", "#34d399"],
  ["biochemistry", "Biochemistry", "Molecular structure, catalysis, bioenergetics, and metabolism.", "#84cc16"],
  ["general-chemistry", "General Chemistry", "Matter, bonding, reactions, energy, equilibrium, acids, and redox.", "#fbbf24"],
  ["organic-chemistry", "Organic Chemistry", "Carbon structure, stereochemistry, reactivity, and biological molecules.", "#fb923c"],
  ["physics", "Physics", "Mechanics, fluids, heat, fields, waves, optics, and atomic phenomena.", "#60a5fa"],
  ["human-systems", "Human Systems", "Homeostasis, anatomy, physiology, immunity, and microbes as a medical bridge.", "#f472b6"],
  ["behavior-society", "Behavior & Society", "Psychological and social determinants of behavior and health.", "#c084fc"],
  ["integration", "Critical Analysis & Integration", "Evidence reading, cross-domain cases, and readiness synthesis.", "#f87171"]
].map(([id, title, description, color], order) => ({ id: `domain-${id}`, title, description, color, order }));

const moduleRows = [
  ["welcome", "learning-practice", "Welcome to Premed", "Preview the subjects and concepts ahead, why they matter, and what you will be able to do by the end.", "portable-core", ["portable-core"], ["ADJUDICATION"]],
  ["scientific-inquiry", "learning-practice", "Scientific Inquiry", "Questions, hypotheses, causal inference, uncertainty, and reproducibility.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT", "AP-BIO", "AQA-BIO"]],
  ["quantitative-foundations", "quantitative", "Quantitative Foundations", "Units, algebra, functions, estimation, and mathematical models.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MATH", "QAA-MED"]],
  ["statistics-data", "quantitative", "Statistics & Data", "Describe variation, quantify uncertainty, test hypotheses, and interpret evidence.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT", "QAA-MED", "AP-BIO"]],
  ["cell-biology", "biology", "Cell Biology", "Cell structure, membranes, transport, signaling, and division.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT", "RD243", "AQA-BIO", "AP-BIO"]],
  ["molecular-genetics", "biology", "Molecular Genetics", "DNA information flow, inheritance, variation, and biotechnology.", "portable-core", ["portable-core", "us-mcat", "spain-bach-pau"], ["AAMC-MCAT", "RD243", "AP-BIO"]],
  ["evolution", "biology", "Evolution", "Population change, selection, speciation, and phylogenetic reasoning.", "medicine-bridge", ["us-mcat", "broad-biology"], ["AAMC-MCAT", "AQA-BIO", "AP-BIO"]],
  // Spain's 2o Bachillerato Biology (RD 243/2022) has no ecology block and no broad plant unit; only
  // autotrophic anabolism (photosynthesis) is defensible. See research/ADJUDICATION-2026-07-19.md s1.8.
  // So `spain-bach-pau` / `RD243` are NOT module defaults here; they are applied to the photosynthesis topic only.
  ["ecology-plants", "biology", "Ecology & Plant Biology", "Energy flow, populations, ecosystems, and plant function.", "pathway", ["broad-biology", "uk-direct-entry"], ["AQA-BIO", "AP-BIO"]],
  ["biomolecules", "biochemistry", "Biomolecules", "Amino acids, proteins, carbohydrates, lipids, and nucleic acids.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT", "RD243"]],
  ["enzymes", "biochemistry", "Enzymes", "Catalysis, kinetics, regulation, and experimental analysis.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT", "RD243"]],
  ["metabolism", "biochemistry", "Metabolism & Bioenergetics", "Energy capture, pathway integration, and metabolic regulation.", "portable-core", ["portable-core", "us-mcat", "spain-bach-pau"], ["AAMC-MCAT", "RD243"]],
  ["atomic-structure", "general-chemistry", "Atomic Structure & Periodicity", "Electronic structure, periodic trends, and nuclear notation.", "portable-core", ["portable-core"], ["AAMC-MCAT", "QAA-MED"]],
  ["bonding-molecular-structure", "general-chemistry", "Bonding & Molecular Structure", "Chemical bonds, geometry, polarity, and intermolecular forces.", "portable-core", ["portable-core"], ["AAMC-MCAT", "FR-PC"]],
  ["stoichiometry", "general-chemistry", "Stoichiometry & Reactions", "Amounts, formulas, reaction accounting, and yields.", "portable-core", ["portable-core"], ["AAMC-MCAT", "QAA-MED"]],
  ["states-solutions", "general-chemistry", "States, Gases & Solutions", "Particle behavior, phase change, gases, concentration, and colligative effects.", "portable-core", ["portable-core"], ["AAMC-MCAT", "FR-PC"]],
  ["thermochemistry-kinetics-equilibrium", "general-chemistry", "Thermodynamics, Kinetics & Equilibrium", "Energy, spontaneity, reaction rates, and dynamic equilibrium.", "portable-core", ["portable-core"], ["AAMC-MCAT", "FR-PC"]],
  ["acids-bases", "general-chemistry", "Acids, Bases & Buffers", "Proton transfer, pH, titration, and physiological buffering.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT", "FR-PC"]],
  ["redox-electrochemistry", "general-chemistry", "Redox & Electrochemistry", "Electron transfer, electrochemical cells, and biochemical redox.", "portable-core", ["portable-core"], ["AAMC-MCAT", "RD243"]],
  ["organic-foundations", "organic-chemistry", "Organic Foundations", "Carbon bonding, naming, conformations, and stereochemistry.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT"]],
  ["organic-reactivity", "organic-chemistry", "Organic Reactivity", "Mechanistic reasoning for substitution, elimination, and addition.", "medicine-bridge", ["us-mcat", "uk-direct-entry", "continental-science"], ["AAMC-MCAT", "FR-PC"]],
  ["carbonyl-biochemistry", "organic-chemistry", "Carbonyls & Biological Organic Chemistry", "Carbonyl chemistry and reactions of biologically important functional groups.", "portable-core", ["portable-core", "us-mcat"], ["AAMC-MCAT"]],
  ["organic-analysis", "organic-chemistry", "Separation & Structure Analysis", "Purification, chromatography, and spectroscopy.", "medicine-bridge", ["us-mcat", "uk-direct-entry"], ["AAMC-MCAT", "AQA-BIO"]],
  ["laboratory-practice", "learning-practice", "Laboratory Practice", "Plan, perform, document, interpret, and critique experimental work.", "portable-core", ["portable-core", "uk-direct-entry", "access-foundation"], ["QAA-MED", "AQA-BIO", "AP-BIO"]],
  ["mechanics", "physics", "Mechanics", "Motion, forces, work, energy, momentum, and rotation.", "portable-core", ["portable-core"], ["AAMC-MCAT", "QAA-MED", "FR-PC"]],
  ["fluids", "physics", "Fluids", "Pressure, buoyancy, flow, viscosity, and circulation applications.", "portable-core", ["portable-core", "medicine-bridge"], ["AAMC-MCAT", "QAA-MED", "FR-PC"]],
  ["thermal-physics", "physics", "Thermal Physics & Gases", "Temperature, heat transfer, thermodynamics, and gas behavior.", "portable-core", ["portable-core"], ["AAMC-MCAT", "FR-PC"]],
  ["electricity-magnetism", "physics", "Electricity & Magnetism", "Charge, fields, potential, circuits, capacitance, and magnetism.", "portable-core", ["portable-core"], ["AAMC-MCAT", "QAA-MED"]],
  ["waves-sound", "physics", "Waves & Sound", "Oscillation, wave behavior, acoustics, and hearing.", "portable-core", ["portable-core", "medicine-bridge"], ["AAMC-MCAT", "QAA-MED"]],
  ["optics", "physics", "Optics", "Geometric and wave optics with vision applications.", "portable-core", ["portable-core", "medicine-bridge"], ["AAMC-MCAT", "QAA-MED", "FR-PC"]],
  ["atomic-nuclear-physics", "physics", "Atomic & Nuclear Physics", "Photons, electronic transitions, radioactivity, and medical applications.", "medicine-bridge", ["us-mcat", "uk-direct-entry", "continental-science"], ["AAMC-MCAT", "QAA-MED", "FR-PC"]],
  ["calculus-extension", "quantitative", "Calculus Extension", "Rates, accumulation, and simple differential models for optional pathways.", "pathway", ["advanced-quantitative", "continental-science"], ["ADJUDICATION"]],
  ["homeostasis", "human-systems", "Anatomy, Homeostasis & Tissues", "Structural organization, tissue types, feedback, and internal balance.", "medicine-bridge", ["medicine-bridge", "us-mcat", "access-foundation"], ["AAMC-MCAT", "QAA-MED"]],
  ["nervous-system", "human-systems", "Nervous System", "Electrical signaling, neural organization, sensation, and motor control.", "medicine-bridge", ["medicine-bridge", "us-mcat"], ["AAMC-MCAT"]],
  ["endocrine-system", "human-systems", "Endocrine System", "Hormonal signaling, axes, feedback, and metabolic coordination.", "medicine-bridge", ["medicine-bridge", "us-mcat"], ["AAMC-MCAT"]],
  ["cardiovascular-system", "human-systems", "Cardiovascular System", "Heart, vessels, blood, pressure, and transport.", "medicine-bridge", ["medicine-bridge", "us-mcat", "access-foundation"], ["AAMC-MCAT", "QAA-MED"]],
  ["respiratory-system", "human-systems", "Respiratory System", "Ventilation, gas exchange, transport, and regulation.", "medicine-bridge", ["medicine-bridge", "us-mcat", "access-foundation"], ["AAMC-MCAT", "QAA-MED"]],
  ["renal-system", "human-systems", "Renal System", "Filtration, transport, water balance, acid-base balance, and blood pressure.", "medicine-bridge", ["medicine-bridge", "us-mcat"], ["AAMC-MCAT"]],
  ["digestive-system", "human-systems", "Digestive System", "Digestion, absorption, liver function, and nutritional integration.", "medicine-bridge", ["medicine-bridge", "us-mcat", "access-foundation"], ["AAMC-MCAT", "QAA-MED"]],
  ["musculoskeletal-system", "human-systems", "Musculoskeletal System", "Bone, muscle, joints, movement, and mechanical integration.", "medicine-bridge", ["medicine-bridge", "us-mcat"], ["AAMC-MCAT"]],
  ["reproduction-development", "human-systems", "Reproduction & Development", "Gametogenesis, reproductive physiology, embryogenesis, and development.", "medicine-bridge", ["medicine-bridge", "us-mcat"], ["AAMC-MCAT"]],
  ["immunity", "human-systems", "Immunity", "Innate and adaptive defenses, immune memory, and dysfunction.", "medicine-bridge", ["medicine-bridge", "us-mcat", "spain-bach-pau"], ["AAMC-MCAT", "RD243"]],
  ["microbiology", "human-systems", "Microbiology", "Microbial structure, growth, genetics, viruses, and host interaction.", "medicine-bridge", ["medicine-bridge", "us-mcat"], ["AAMC-MCAT", "RD243"]],
  ["psychology", "behavior-society", "Psychology", "Behavior, cognition, development, identity, and mental processes.", "pathway", ["us-mcat", "medicine-bridge"], ["AAMC-MCAT", "AAMC-COMP"]],
  ["sociology-health", "behavior-society", "Sociology & Health", "Social structure, culture, inequality, demographics, and health outcomes.", "pathway", ["us-mcat", "medicine-bridge"], ["AAMC-MCAT", "AAMC-COMP"]],
  ["critical-reading", "integration", "Critical Reading & Argument", "Analyze unfamiliar texts, evidence, assumptions, and competing interpretations.", "pathway", ["us-mcat", "access-foundation"], ["AAMC-MCAT", "QAA-MED"]],
  ["integrative-capstones", "integration", "Integrative Capstones", "Apply multiple sciences to biological and medicine-facing problems.", "medicine-bridge", ["medicine-bridge", "portable-core"], ["ADJUDICATION", "AAMC-MCAT"]]
];

const domainBySlug = Object.fromEntries(domains.map(d => [d.id.replace("domain-", ""), d]));
const syllabusModuleMap = {
  welcome: ["WEL-000"],
  "scientific-inquiry": ["QRS-100"],
  "laboratory-practice": ["QRS-100", "INT-300"],
  "quantitative-foundations": ["QRS-100"],
  "statistics-data": ["QRS-100"],
  "calculus-extension": ["PW-QNT"],
  "cell-biology": ["BIO-110", "BIO-120"],
  "molecular-genetics": ["BIO-130", "BIO-140", "BCH-240"],
  evolution: ["BIO-150", "PW-BIO"],
  "ecology-plants": ["PW-BIO"],
  biomolecules: ["BIO-110", "BCH-210", "BCH-220"],
  enzymes: ["BIO-120", "BCH-210"],
  metabolism: ["BIO-120", "BCH-230", "BCH-240"],
  "atomic-structure": ["CHE-110"],
  "bonding-molecular-structure": ["CHE-120"],
  stoichiometry: ["CHE-120"],
  "states-solutions": ["CHE-130"],
  "thermochemistry-kinetics-equilibrium": ["CHE-130", "CHE-140"],
  "acids-bases": ["CHE-140"],
  "redox-electrochemistry": ["CHE-140"],
  "organic-foundations": ["ORG-210"],
  "organic-reactivity": ["ORG-220"],
  "carbonyl-biochemistry": ["ORG-220", "BCH-220"],
  "organic-analysis": ["ORG-230"],
  mechanics: ["PHY-110"],
  fluids: ["PHY-120"],
  "thermal-physics": ["PHY-150"],
  "electricity-magnetism": ["PHY-140"],
  "waves-sound": ["PHY-130"],
  optics: ["PHY-130"],
  "atomic-nuclear-physics": ["PHY-150"],
  homeostasis: ["MED-310"],
  "nervous-system": ["MED-310"],
  "endocrine-system": ["MED-310", "MED-320"],
  "cardiovascular-system": ["MED-310"],
  "respiratory-system": ["MED-310"],
  "renal-system": ["MED-310"],
  "digestive-system": ["MED-320"],
  "musculoskeletal-system": ["MED-310", "MED-320"],
  "reproduction-development": ["MED-320"],
  immunity: ["MED-330"],
  microbiology: ["BIO-150", "MED-330"],
  psychology: ["PW-US", "INT-300"],
  "sociology-health": ["PW-US", "INT-300"],
  "critical-reading": ["PW-US", "QRS-100"],
  "integrative-capstones": ["INT-300", "CAP-400"]
};
const modules = moduleRows.map(([slug, domainSlug, title, description, requirement, pathway, sourceTags], index) => ({
  id: `module-${slug}`,
  code: `PREM-${String(index + 1).padStart(2, "0")}`,
  domainId: `domain-${domainSlug}`,
  domain: `domain-${domainSlug}`,
  subject: domainBySlug[domainSlug].title,
  title,
  description,
  requirement,
  core: requirement === "portable-core",
  pathway,
  syllabusModuleIds: syllabusModuleMap[slug],
  sourceTags,
  order: index + 1
}));

const moduleBySlug = Object.fromEntries(modules.map(m => [m.id.replace("module-", ""), m]));
const topicRows = [];
const add = (moduleSlug, rows) => {
  for (const row of rows) topicRows.push([moduleSlug, ...row]);
};
// Topic tuple: slug, title, outcome, hours, optional prerequisites, optional cross-links,
// optional overrides {level, requirement, pathway, sourceTags, evidenceConfidence}.
const R = (moduleSlug, topicSlug) => `topic-${moduleSlug}-${topicSlug}`;

add("welcome", [
  ["course-journey", "Welcome to Premed", "Describe the Premed subject journey, explain how its major concepts connect to medical study, and identify the knowledge and scientific capabilities expected by course completion.", 1]
]);

add("scientific-inquiry", [
  ["observations-questions", "Observations and testable questions", "Convert an observation into a bounded, empirically answerable question.", 2],
  ["hypotheses-predictions", "Hypotheses and predictions", "Distinguish hypotheses from predictions and derive discriminating expected outcomes.", 2.5, [R("scientific-inquiry", "observations-questions")]],
  ["variables-controls", "Variables and controls", "Identify independent, dependent, controlled, confounding, positive-control, and negative-control variables.", 3, [R("scientific-inquiry", "hypotheses-predictions")]],
  ["study-designs", "Experimental and observational designs", "Choose among experiments, cohorts, case-control studies, cross-sectional studies, and natural experiments.", 3, [R("scientific-inquiry", "variables-controls")]],
  ["sampling-randomization", "Sampling, randomization, and blinding", "Explain how selection, allocation, concealment, and blinding affect inference.", 3, [R("scientific-inquiry", "study-designs")]],
  ["measurement-validity", "Measurement, reliability, and validity", "Evaluate operational definitions, measurement error, repeatability, and construct validity.", 3, [R("scientific-inquiry", "variables-controls")]],
  ["correlation-causation", "Correlation, causation, and confounding", "Judge whether a design supports association, mechanism, or causal attribution.", 3, [R("scientific-inquiry", "study-designs")]],
  ["bias", "Bias and threats to validity", "Detect selection, information, observer, attrition, publication, and survivorship biases.", 3, [R("scientific-inquiry", "sampling-randomization"), R("scientific-inquiry", "measurement-validity")]],
  ["replication-reproducibility", "Replication, reproducibility, and transparency", "Explain preregistration, open methods, replication, and sensitivity analysis as safeguards.", 2.5, [R("scientific-inquiry", "bias")]],
  ["models-and-limits", "Scientific models and their limits", "Use a model productively while identifying assumptions, scale, domain, and failure modes.", 2.5, [R("scientific-inquiry", "hypotheses-predictions")]],
  ["mechanism-evidence", "Mechanistic and convergent evidence", "Integrate molecular, organismal, population, and intervention evidence into a calibrated claim.", 3, [R("scientific-inquiry", "correlation-causation"), R("scientific-inquiry", "models-and-limits")]]
]);


add("quantitative-foundations", [
  ["arithmetic-estimation", "Arithmetic, estimation, and scientific notation", "Calculate reliably, estimate order of magnitude, and check whether an answer is plausible.", 3],
  ["units-dimensional", "Units and dimensional analysis", "Convert units and use dimensions to construct and verify quantitative relationships.", 3, [R("quantitative-foundations", "arithmetic-estimation")]],
  ["ratios-proportions", "Ratios, proportions, and percentages", "Model mixtures, rates, risk, and scaling with ratios and proportional reasoning.", 3, [R("quantitative-foundations", "arithmetic-estimation")]],
  ["algebra-equations", "Algebra and equation solving", "Rearrange expressions and solve linear and simple nonlinear equations in scientific contexts.", 4, [R("quantitative-foundations", "arithmetic-estimation")]],
  ["exponents-roots", "Exponents, roots, and orders of magnitude", "Use exponent laws, roots, and powers of ten without a calculator dependency.", 3, [R("quantitative-foundations", "algebra-equations")]],
  ["logarithms", "Logarithms and exponential change", "Interpret logarithmic scales and solve simple exponential growth, decay, pH, and attenuation problems.", 4, [R("quantitative-foundations", "exponents-roots")]],
  ["functions-graphs", "Functions, graphs, and transformations", "Move between equation, table, graph, and verbal model; identify slope, intercept, and asymptote.", 4, [R("quantitative-foundations", "algebra-equations")]],
  ["geometry-trigonometry", "Geometry and trigonometry", "Use areas, volumes, triangles, angles, and basic trigonometric relations in science problems.", 4, [R("quantitative-foundations", "algebra-equations")]],
  ["vectors", "Vectors and components", "Resolve and combine vectors and distinguish vector from scalar quantities.", 3, [R("quantitative-foundations", "geometry-trigonometry")]],
  ["proportional-models", "Direct, inverse, and power-law models", "Recognize scaling relationships and predict how one variable changes with another.", 3, [R("quantitative-foundations", "ratios-proportions"), R("quantitative-foundations", "functions-graphs")]]
]);

add("statistics-data", [
  ["data-types", "Variables and data types", "Distinguish categorical, ordinal, discrete, continuous, paired, and independent data.", 2],
  ["graphs-tables", "Tables and graphical displays", "Choose and critique plots that reveal distribution, comparison, association, or change.", 3, [R("statistics-data", "data-types"), R("quantitative-foundations", "functions-graphs")]],
  ["center-spread", "Center, spread, and distribution shape", "Calculate and interpret mean, median, range, variance, standard deviation, and skew.", 4, [R("statistics-data", "data-types")]],
  ["probability", "Probability foundations", "Use complements, conditional probability, independence, and counting for simple events.", 4, [R("quantitative-foundations", "ratios-proportions")]],
  ["distributions", "Probability distributions", "Interpret normal and binomial models and recognize when their assumptions fail.", 3.5, [R("statistics-data", "probability"), R("statistics-data", "center-spread")]],
  ["sampling-standard-error", "Sampling distributions and standard error", "Explain why estimates vary between samples and how precision changes with sample size.", 3, [R("statistics-data", "distributions"), R("scientific-inquiry", "sampling-randomization")]],
  ["confidence-intervals", "Confidence intervals", "Construct or interpret a confidence interval without treating it as a probability that the fixed parameter lies inside.", 3, [R("statistics-data", "sampling-standard-error")]],
  ["hypothesis-tests", "Hypothesis tests and p-values", "Formulate null and alternative hypotheses and interpret a p-value with effect size and design quality.", 4, [R("statistics-data", "sampling-standard-error")]],
  ["errors-power", "Type I/II errors, power, and multiplicity", "Relate false positives, false negatives, sample size, effect size, and multiple testing.", 3, [R("statistics-data", "hypothesis-tests")]],
  ["association-risk", "Association, risk, and diagnostic measures", "Interpret correlation, relative risk, odds ratio, sensitivity, specificity, and predictive values.", 4, [R("statistics-data", "probability"), R("scientific-inquiry", "correlation-causation")]],
  ["regression", "Regression and model fit", "Interpret slope, residuals, uncertainty, and overfitting in simple linear models.", 3.5, [R("statistics-data", "graphs-tables"), R("statistics-data", "center-spread")]],
  ["statistical-practical-significance", "Statistical versus practical significance", "Judge a reported difference using magnitude, uncertainty, bias, and real-world relevance.", 3, [R("statistics-data", "confidence-intervals"), R("statistics-data", "hypothesis-tests")]]
]);

add("cell-biology", [
  ["cell-theory-scale", "Cell theory, scale, and emergence", "Relate cellular scale and organization to the properties of living systems.", 3],
  ["cell-types", "Prokaryotic and eukaryotic cells", "Compare cellular architectures and connect structural differences to function.", 4, [R("cell-biology", "cell-theory-scale")]],
  ["organelles", "Organelles and compartmentalization", "Explain how membranes and organelles organize synthesis, energy, transport, and degradation.", 4, [R("cell-biology", "cell-types")]],
  ["membrane-structure", "Membrane structure and fluidity", "Predict how lipids, proteins, cholesterol, and temperature alter membrane behavior.", 3.5, [R("biomolecules", "lipids")]],
  ["membrane-transport", "Membrane transport", "Compare diffusion, osmosis, facilitated diffusion, active transport, and vesicular transport.", 5, [R("cell-biology", "membrane-structure"), R("quantitative-foundations", "proportional-models")]],
  ["cell-signaling", "Cell signaling", "Trace reception, transduction, amplification, response, and termination in signaling pathways.", 4, [R("cell-biology", "membrane-structure"), R("biomolecules", "proteins")]],
  ["cytoskeleton-motility", "Cytoskeleton, adhesion, and motility", "Relate microfilaments, intermediate filaments, microtubules, junctions, and motors to cell behavior.", 4, [R("cell-biology", "organelles")]],
  ["cell-cycle-mitosis", "Cell cycle and mitosis", "Explain checkpoints, chromosome segregation, cytokinesis, and sources of proliferative error.", 4, [R("cell-biology", "organelles"), R("molecular-genetics", "chromosomes")]],
  ["meiosis", "Meiosis and genetic variation", "Trace homologs and chromatids through meiosis and explain recombination and independent assortment.", 4, [R("cell-biology", "cell-cycle-mitosis"), R("molecular-genetics", "chromosomes")]],
  ["cell-death-cancer", "Cell death, senescence, and cancer", "Connect apoptosis, failed checkpoints, mutation, and tissue context to malignant growth.", 4, [R("cell-biology", "cell-cycle-mitosis"), R("cell-biology", "cell-signaling")], [R("immunity", "transplant-tumor")]]
]);

add("molecular-genetics", [
  ["nucleic-acid-structure", "Nucleic acid structure", "Relate nucleotide chemistry and antiparallel base pairing to information storage.", 3, [R("biomolecules", "nucleic-acids")]],
  ["chromosomes", "Chromosomes and genomes", "Describe chromatin organization, ploidy, homologs, loci, and genome architecture.", 3, [R("molecular-genetics", "nucleic-acid-structure")]],
  ["dna-replication", "DNA replication and repair", "Explain semiconservative replication, polymerase directionality, proofreading, and major repair principles.", 5, [R("molecular-genetics", "nucleic-acid-structure")]],
  ["transcription-rna", "Transcription and RNA processing", "Trace RNA synthesis and eukaryotic processing from promoter to mature transcript.", 4, [R("molecular-genetics", "dna-replication")]],
  ["translation", "Translation and the genetic code", "Explain how ribosomes, tRNAs, and codons produce a polypeptide and terminate accurately.", 4, [R("molecular-genetics", "transcription-rna"), R("biomolecules", "amino-acids")]],
  ["gene-regulation", "Gene regulation and epigenetics", "Compare prokaryotic and eukaryotic control at chromatin, transcriptional, RNA, and protein levels.", 5, [R("molecular-genetics", "translation")]],
  ["mutation-variation", "Mutation and genetic variation", "Classify sequence and chromosomal variants and predict possible functional consequences.", 4, [R("molecular-genetics", "dna-replication"), R("molecular-genetics", "translation")]],
  ["mendelian-inheritance", "Mendelian inheritance", "Solve mono- and dihybrid inheritance and interpret dominance without conflating it with frequency or fitness.", 4, [R("cell-biology", "meiosis")]],
  ["nonmendelian-inheritance", "Non-Mendelian and sex-linked inheritance", "Analyze linkage, recombination, incomplete dominance, codominance, penetrance, and maternal inheritance.", 4, [R("molecular-genetics", "mendelian-inheritance")]],
  ["pedigrees-probability", "Pedigrees and genetic probability", "Infer plausible inheritance patterns and calculate recurrence probabilities with stated assumptions.", 3.5, [R("molecular-genetics", "mendelian-inheritance"), R("statistics-data", "probability")]],
  ["population-genetics", "Population genetics", "Use allele and genotype frequencies and Hardy-Weinberg reasoning as a null model.", 4, [R("molecular-genetics", "mendelian-inheritance"), R("statistics-data", "probability")], [R("evolution", "selection")]],
  ["biotechnology", "Recombinant DNA, PCR, and CRISPR", "Explain the purposes, steps, controls, and limitations of cloning, PCR, sequencing, and targeted editing.", 5, [R("molecular-genetics", "dna-replication"), R("microbiology", "horizontal-gene-transfer")]],
  ["dna-analysis", "Genomics and DNA analysis", "Interpret gels, sequence comparisons, expression data, and simple genetic test results.", 4, [R("molecular-genetics", "biotechnology"), R("statistics-data", "graphs-tables")]]
]);

add("evolution", [
  ["evidence-common-ancestry", "Evidence for common ancestry", "Evaluate fossil, anatomical, developmental, biogeographic, and molecular evidence for descent with modification.", 3, [R("molecular-genetics", "dna-analysis")]],
  ["selection", "Natural and sexual selection", "Predict how heritable variation and differential reproduction change populations without invoking purpose.", 4, [R("molecular-genetics", "population-genetics")]],
  ["drift-gene-flow", "Genetic drift and gene flow", "Compare stochastic allele change, founder effects, bottlenecks, and migration with selection.", 3, [R("evolution", "selection")]],
  ["speciation", "Speciation and reproductive isolation", "Explain how barriers to gene flow and divergent selection can generate lineages.", 3, [R("evolution", "drift-gene-flow")]],
  ["phylogenetics", "Phylogenetic reasoning", "Read and construct cladograms without treating living taxa as ancestors or progress rankings.", 3.5, [R("evolution", "evidence-common-ancestry")]],
  ["evolution-health", "Evolution and health", "Apply evolutionary reasoning to antimicrobial resistance, virulence, trade-offs, and mismatch.", 3, [R("evolution", "selection"), R("microbiology", "antimicrobial-resistance")]]
]);

add("ecology-plants", [
  ["population-ecology", "Population ecology", "Model population growth, density dependence, life histories, and limiting factors.", 4, [R("quantitative-foundations", "functions-graphs")]],
  ["communities", "Communities and species interactions", "Predict effects of competition, predation, mutualism, disturbance, and succession.", 3, [R("ecology-plants", "population-ecology")]],
  ["ecosystems", "Ecosystems and biogeochemical cycles", "Trace energy and matter through trophic networks and major elemental cycles.", 4, [R("ecology-plants", "communities"), R("metabolism", "bioenergetics-overview")]],
  ["biodiversity-conservation", "Biodiversity and conservation", "Analyze biodiversity loss using genetic, population, community, and ecosystem perspectives.", 3, [R("ecology-plants", "ecosystems"), R("evolution", "phylogenetics")]],
  ["plant-structure-transport", "Plant structure and transport", "Relate roots, stems, leaves, xylem, phloem, stomata, and water potential to plant function.", 4, [R("cell-biology", "membrane-transport")]],
  // Only topic in this module carried by the Spanish route: RD 243/2022 specifies autotrophic anabolism.
  ["photosynthesis", "Photosynthesis", "Trace light capture, electron transfer, carbon fixation, and environmental constraints on photosynthesis.", 5, [R("metabolism", "electron-transport-oxidative-phosphorylation")], [R("ecology-plants", "ecosystems")], { pathway: ["broad-biology", "uk-direct-entry", "spain-bach-pau"], sourceTags: ["RD243"] }],
  ["plant-signaling-reproduction", "Plant signaling and reproduction", "Explain major tropisms, hormones, alternation of generations, and flowering-plant reproduction.", 3.5, [R("cell-biology", "cell-signaling")]]
]);

add("biomolecules", [
  ["water-noncovalent", "Water and noncovalent interactions", "Explain how polarity, hydrogen bonding, hydrophobic effects, and ionization shape biological systems.", 4, [R("bonding-molecular-structure", "polarity")]],
  ["amino-acids", "Amino acids", "Classify amino-acid side chains and predict charge, interactions, and behavior as pH changes.", 5, [R("acids-bases", "ph-poh")]],
  ["proteins", "Protein structure and folding", "Relate sequence to structural levels, folding forces, domains, denaturation, and function.", 5, [R("biomolecules", "amino-acids"), R("bonding-molecular-structure", "intermolecular-forces")]],
  ["carbohydrates", "Carbohydrates", "Recognize monosaccharides, stereochemical relationships, glycosidic bonds, and major storage and structural polymers.", 4, [R("organic-foundations", "stereochemistry")]],
  ["lipids", "Lipids and membranes", "Compare fatty acids, triacylglycerols, phospholipids, sphingolipids, and steroids by structure and function.", 4, [R("organic-foundations", "functional-groups")]],
  ["nucleic-acids", "Nucleotides and nucleic acids", "Relate bases, sugars, phosphate linkages, and nucleotide energy carriers to biological roles.", 4, [R("organic-foundations", "functional-groups")]],
  ["biomolecule-methods", "Biomolecule methods", "Choose separation, detection, and quantification strategies for proteins and nucleic acids.", 4, [R("biomolecules", "proteins"), R("biomolecules", "nucleic-acids")], [R("laboratory-practice", "chromatography-electrophoresis")]]
]);

add("enzymes", [
  ["catalysis-free-energy", "Catalysis and free-energy barriers", "Explain how enzymes accelerate reactions without changing equilibrium or net free-energy change.", 3, [R("thermochemistry-kinetics-equilibrium", "activation-energy")], [R("biomolecules", "proteins")]],
  ["active-sites-specificity", "Active sites and specificity", "Connect binding interactions, induced fit, transition-state stabilization, and selectivity.", 3, [R("enzymes", "catalysis-free-energy"), R("biomolecules", "proteins")]],
  ["kinetics", "Michaelis-Menten kinetics", "Interpret initial-rate data, Km, Vmax, saturation, and turnover with appropriate assumptions.", 5, [R("enzymes", "active-sites-specificity"), R("quantitative-foundations", "functions-graphs")]],
  ["inhibition", "Enzyme inhibition", "Distinguish competitive, noncompetitive, uncompetitive, irreversible, and allosteric effects from kinetic evidence.", 4, [R("enzymes", "kinetics")]],
  ["regulation", "Enzyme regulation", "Explain allostery, cooperativity, covalent modification, zymogens, and pathway feedback.", 4, [R("enzymes", "inhibition"), R("cell-biology", "cell-signaling")]],
  ["cofactors-vitamins", "Cofactors, coenzymes, and vitamins", "Relate metal ions and vitamin-derived coenzymes to catalytic chemistry and deficiency mechanisms.", 3, [R("enzymes", "active-sites-specificity")]]
]);

add("metabolism", [
  ["bioenergetics-overview", "Bioenergetics and metabolic logic", "Relate free energy, coupling, ATP, oxidation state, compartmentation, and pathway regulation.", 4, [R("enzymes", "regulation"), R("redox-electrochemistry", "oxidation-numbers")]],
  ["glycolysis", "Glycolysis", "Trace carbon, ATP, redox carriers, regulation, and aerobic versus anaerobic fates of pyruvate.", 5, [R("metabolism", "bioenergetics-overview"), R("biomolecules", "carbohydrates")]],
  ["gluconeogenesis", "Gluconeogenesis", "Explain bypass reactions, energy cost, substrate choice, and reciprocal control with glycolysis.", 4, [R("metabolism", "glycolysis")]],
  ["glycogen", "Glycogen metabolism", "Compare synthesis and breakdown and predict hormonal regulation in liver and muscle.", 3.5, [R("metabolism", "glycolysis"), R("endocrine-system", "pancreatic-hormones")]],
  ["pentose-phosphate", "Pentose phosphate pathway", "Explain production of NADPH and ribose and connect oxidative stress to pathway demand.", 3, [R("metabolism", "glycolysis")]],
  ["pyruvate-tca", "Pyruvate oxidation and citric acid cycle", "Account for carbon and reducing equivalents from pyruvate through the cycle and its regulation.", 5, [R("metabolism", "glycolysis")]],
  ["electron-transport-oxidative-phosphorylation", "Electron transport and oxidative phosphorylation", "Explain proton-motive coupling, ATP synthase, oxygen use, inhibitors, and uncoupling.", 6, [R("metabolism", "pyruvate-tca"), R("redox-electrochemistry", "cell-potentials")]],
  ["fatty-acid-oxidation", "Fatty-acid mobilization and oxidation", "Trace activation, transport, beta-oxidation cycles, energy yield, and regulation.", 5, [R("metabolism", "bioenergetics-overview"), R("biomolecules", "lipids")]],
  ["fatty-acid-synthesis", "Fatty-acid synthesis", "Contrast location, carriers, reducing power, and regulation with fatty-acid oxidation.", 4, [R("metabolism", "fatty-acid-oxidation"), R("metabolism", "pentose-phosphate")]],
  ["ketone-bodies", "Ketone bodies and fasting", "Explain hepatic ketogenesis, peripheral utilization, and the metabolic logic of fasting.", 3, [R("metabolism", "fatty-acid-oxidation"), R("metabolism", "gluconeogenesis")]],
  ["amino-acid-metabolism", "Amino-acid and nitrogen metabolism", "Explain transamination, nitrogen disposal principles, and glucogenic versus ketogenic carbon use.", 4, [R("biomolecules", "amino-acids"), R("metabolism", "pyruvate-tca")]],
  ["fed-fasted-integration", "Fed, fasted, and exercise integration", "Predict fuel use and hormonal coordination across liver, muscle, adipose tissue, brain, and blood.", 5, [R("metabolism", "glycogen"), R("metabolism", "ketone-bodies"), R("metabolism", "amino-acid-metabolism")]],
  ["metabolic-measurement", "Measuring metabolism", "Interpret respirometry, isotope-tracing, enzyme, and metabolite data with explicit controls.", 3, [R("metabolism", "fed-fasted-integration"), R("scientific-inquiry", "variables-controls")]]
]);

add("atomic-structure", [
  ["matter-measurement", "Matter, measurement, and classification", "Classify matter and connect measured properties to particles, units, uncertainty, and significant figures.", 3, [R("quantitative-foundations", "units-dimensional")]],
  ["atomic-theory", "Atomic theory and isotopes", "Use atomic number, mass number, isotopic abundance, and ions to describe atoms quantitatively.", 3, [R("atomic-structure", "matter-measurement")]],
  ["electromagnetic-quantization", "Electromagnetic radiation and quantization", "Relate wavelength, frequency, photon energy, and line spectra to quantized electronic states.", 4, [R("waves-sound", "wave-parameters"), R("quantitative-foundations", "proportional-models")]],
  ["electronic-structure", "Electronic structure", "Use shells, subshells, orbitals, quantum numbers, and electron configurations to describe atoms.", 5, [R("atomic-structure", "atomic-theory"), R("atomic-structure", "electromagnetic-quantization")]],
  ["periodic-trends", "Periodicity", "Explain trends in radius, ionization energy, electron affinity, and electronegativity from electronic structure.", 4, [R("atomic-structure", "electronic-structure")]],
  ["photoelectron-spectroscopy", "Photoelectron spectra", "Infer electron configurations and relative binding energies from simple spectra.", 3, [R("atomic-structure", "electronic-structure")]],
  ["nuclear-notation-stability", "Nuclear notation and stability", "Balance nuclear equations and relate neutron-proton ratio and binding to stability.", 3, [R("atomic-structure", "atomic-theory")], [R("atomic-nuclear-physics", "radioactive-decay")]]
]);

add("bonding-molecular-structure", [
  ["ionic-covalent-metallic", "Ionic, covalent, and metallic bonding", "Compare bonding models and connect microscopic structure to macroscopic properties.", 4, [R("atomic-structure", "periodic-trends")]],
  ["lewis-formal-charge", "Lewis structures and formal charge", "Construct plausible Lewis structures, resonance forms, and formal-charge assignments.", 5, [R("bonding-molecular-structure", "ionic-covalent-metallic")]],
  ["geometry-hybridization", "Molecular geometry and hybridization", "Predict three-dimensional geometry, bond angles, and simple hybridization from electron domains.", 4, [R("bonding-molecular-structure", "lewis-formal-charge")]],
  ["polarity", "Bond and molecular polarity", "Use electronegativity and geometry to predict dipoles and molecular polarity.", 3, [R("bonding-molecular-structure", "geometry-hybridization")]],
  ["intermolecular-forces", "Intermolecular forces", "Compare dispersion, dipole, hydrogen-bonding, and ion-dipole interactions and resulting properties.", 4, [R("bonding-molecular-structure", "polarity")]],
  ["orbital-bonding", "Sigma, pi, and delocalized bonding", "Relate orbital overlap, bond order, resonance, and conjugation to structure and reactivity.", 4, [R("bonding-molecular-structure", "geometry-hybridization")]],
  ["coordination-metals", "Coordination chemistry in biology", "Describe ligand-metal coordination and recognize roles of metal centers in proteins and medicine.", 3, [R("bonding-molecular-structure", "lewis-formal-charge")], [R("biomolecules", "proteins")]]
]);

add("stoichiometry", [
  ["moles-molar-mass", "Moles, molar mass, and Avogadro's constant", "Convert among particles, moles, mass, and composition with units intact.", 4, [R("quantitative-foundations", "units-dimensional"), R("atomic-structure", "atomic-theory")]],
  ["formulas-composition", "Formulas and percent composition", "Derive empirical and molecular formulas from composition data.", 3, [R("stoichiometry", "moles-molar-mass")]],
  ["reaction-equations", "Chemical equations", "Write and balance molecular, complete ionic, and net ionic equations.", 3, [R("stoichiometry", "moles-molar-mass")]],
  ["reaction-classes", "Reaction classes", "Recognize precipitation, acid-base, gas-forming, combustion, and redox transformations.", 3, [R("stoichiometry", "reaction-equations")]],
  ["limiting-yield", "Limiting reagents and yield", "Determine limiting reagent, theoretical yield, percent yield, and sources of loss.", 4, [R("stoichiometry", "reaction-equations")]],
  ["solution-stoichiometry", "Solution stoichiometry", "Solve reaction problems using concentration and volume, including dilution and titration contexts.", 4, [R("stoichiometry", "limiting-yield"), R("states-solutions", "concentration")]],
  ["combustion-analysis", "Combustion and elemental analysis", "Infer composition and formulas from combustion or elemental data.", 3, [R("stoichiometry", "formulas-composition")]]
]);

add("states-solutions", [
  ["kinetic-molecular-theory", "Kinetic molecular theory", "Connect particle motion and intermolecular interactions to temperature, pressure, and phase.", 3, [R("bonding-molecular-structure", "intermolecular-forces")]],
  ["gas-laws", "Gas laws and ideal gases", "Solve state and mixture problems and identify departures from ideal behavior.", 5, [R("states-solutions", "kinetic-molecular-theory"), R("quantitative-foundations", "algebra-equations")]],
  ["phase-changes-diagrams", "Phase changes and phase diagrams", "Interpret heating curves and phase diagrams using energetic and molecular reasoning.", 4, [R("states-solutions", "kinetic-molecular-theory")]],
  ["solution-formation", "Solution formation and solubility", "Predict how interactions, temperature, and pressure affect dissolution and solubility.", 4, [R("bonding-molecular-structure", "intermolecular-forces")]],
  ["concentration", "Concentration units", "Interconvert molarity, molality, mole fraction, mass percent, and parts-per notation.", 4, [R("stoichiometry", "moles-molar-mass"), R("quantitative-foundations", "ratios-proportions")]],
  ["colligative-properties", "Colligative properties and osmosis", "Relate particle concentration to vapor pressure, boiling, freezing, and osmotic pressure.", 4, [R("states-solutions", "concentration"), R("cell-biology", "membrane-transport")]],
  ["mixtures-separation", "Mixtures and physical separation", "Choose filtration, extraction, distillation, and chromatography using relevant physical properties.", 3.5, [R("states-solutions", "solution-formation")], [R("organic-analysis", "chromatography")]]
]);

add("thermochemistry-kinetics-equilibrium", [
  ["systems-energy", "Systems, energy, heat, and work", "Define system and surroundings and apply sign conventions to transfers of energy.", 3, [R("quantitative-foundations", "units-dimensional")]],
  ["calorimetry-enthalpy", "Calorimetry and enthalpy", "Calculate heat transfer, reaction enthalpy, and Hess-law combinations from data.", 5, [R("thermochemistry-kinetics-equilibrium", "systems-energy")]],
  ["entropy-free-energy", "Entropy and Gibbs free energy", "Predict spontaneity and temperature dependence while separating thermodynamics from rate.", 5, [R("thermochemistry-kinetics-equilibrium", "calorimetry-enthalpy")]],
  ["reaction-rate-laws", "Reaction rates and rate laws", "Extract reaction order and rate constants from concentration-time or initial-rate data.", 5, [R("statistics-data", "graphs-tables"), R("quantitative-foundations", "logarithms")]],
  ["activation-energy", "Activation energy and temperature", "Use collision and transition-state models and interpret Arrhenius behavior qualitatively and quantitatively.", 4, [R("thermochemistry-kinetics-equilibrium", "reaction-rate-laws")]],
  ["mechanisms-catalysts", "Reaction mechanisms and catalysts", "Relate elementary steps, molecularity, intermediates, rate-determining steps, and catalysts to an observed rate law.", 4, [R("thermochemistry-kinetics-equilibrium", "activation-energy")]],
  ["equilibrium-constant", "Dynamic equilibrium and equilibrium constants", "Write and interpret equilibrium expressions and reaction quotients.", 5, [R("stoichiometry", "reaction-equations"), R("quantitative-foundations", "algebra-equations")]],
  ["le-chatelier", "Le Châtelier reasoning", "Predict equilibrium responses to concentration, pressure, volume, and temperature changes.", 3, [R("thermochemistry-kinetics-equilibrium", "equilibrium-constant")]],
  ["equilibrium-calculations", "Equilibrium calculations", "Solve ICE-table and approximation problems and verify physical plausibility.", 5, [R("thermochemistry-kinetics-equilibrium", "equilibrium-constant")]],
  ["thermodynamic-equilibrium-link", "Free energy and equilibrium", "Connect standard free energy, equilibrium constants, and nonstandard conditions.", 4, [R("thermochemistry-kinetics-equilibrium", "entropy-free-energy"), R("thermochemistry-kinetics-equilibrium", "equilibrium-constant")]]
]);

add("acids-bases", [
  ["acid-base-models", "Acid-base models", "Apply Brønsted-Lowry and Lewis definitions and identify conjugate pairs.", 3, [R("bonding-molecular-structure", "lewis-formal-charge")]],
  ["water-autoionization", "Water autoionization", "Relate Kw, hydronium, hydroxide, temperature, and neutrality.", 2.5, [R("thermochemistry-kinetics-equilibrium", "equilibrium-constant")]],
  ["ph-poh", "pH, pOH, and strong acids/bases", "Calculate and interpret logarithmic acidity and basicity for strong electrolytes.", 4, [R("acids-bases", "water-autoionization"), R("quantitative-foundations", "logarithms")]],
  ["weak-acid-base", "Weak acids and bases", "Use Ka, Kb, pKa, percent ionization, and structure to compare weak acid-base behavior.", 5, [R("acids-bases", "ph-poh"), R("thermochemistry-kinetics-equilibrium", "equilibrium-calculations")]],
  ["buffers", "Buffers", "Explain buffer action and calculate composition, pH, capacity, and response to added acid or base.", 5, [R("acids-bases", "weak-acid-base")]],
  ["titrations", "Acid-base titrations", "Interpret titration curves, equivalence points, indicators, and calculations for strong and weak systems.", 5, [R("acids-bases", "buffers"), R("stoichiometry", "solution-stoichiometry")]],
  ["polyprotic-species", "Polyprotic and amphoteric species", "Predict sequential ionization and dominant forms as pH changes.", 3.5, [R("acids-bases", "weak-acid-base")]],
  ["solubility-equilibria", "Solubility equilibria", "Use Ksp, common-ion effects, and pH to predict dissolution and precipitation.", 4, [R("thermochemistry-kinetics-equilibrium", "equilibrium-calculations"), R("acids-bases", "ph-poh")]],
  ["physiological-acid-base", "Physiological acid-base chemistry", "Integrate bicarbonate buffering, ventilation, renal handling, and disturbances conceptually.", 4, [R("acids-bases", "buffers"), R("respiratory-system", "gas-transport"), R("renal-system", "acid-base")]]
]);

add("redox-electrochemistry", [
  ["oxidation-numbers", "Oxidation states and redox balancing", "Assign oxidation states, identify oxidants and reductants, and balance redox reactions.", 4, [R("stoichiometry", "reaction-equations")]],
  ["galvanic-cells", "Galvanic cells", "Trace electron and ion flow and calculate standard cell potential from half-reactions.", 4, [R("redox-electrochemistry", "oxidation-numbers")]],
  ["cell-potentials", "Cell potential, free energy, and concentration", "Connect potential to spontaneity, free energy, equilibrium, and nonstandard concentrations.", 5, [R("redox-electrochemistry", "galvanic-cells"), R("thermochemistry-kinetics-equilibrium", "thermodynamic-equilibrium-link")]],
  ["electrolysis", "Electrolytic cells and electrolysis", "Predict electrode processes and quantify deposited or consumed material from current and time.", 4, [R("redox-electrochemistry", "galvanic-cells"), R("electricity-magnetism", "current-resistance")]],
  ["concentration-cells", "Concentration cells", "Explain how concentration differences generate voltage and approach equilibrium.", 3, [R("redox-electrochemistry", "cell-potentials")]],
  ["biological-redox", "Biological redox carriers", "Relate NAD, FAD, quinones, and electron-transfer chains to chemical redox principles.", 3, [R("redox-electrochemistry", "cell-potentials")], [R("metabolism", "electron-transport-oxidative-phosphorylation")]]
]);

add("organic-foundations", [
  ["carbon-frameworks", "Carbon frameworks and representations", "Translate among line-angle, condensed, expanded, and three-dimensional representations.", 3, [R("bonding-molecular-structure", "geometry-hybridization")]],
  ["nomenclature", "Organic nomenclature", "Name and draw foundational hydrocarbons and common oxygen-, nitrogen-, and sulfur-containing compounds.", 5, [R("organic-foundations", "carbon-frameworks")]],
  ["functional-groups", "Functional groups", "Recognize functional groups and predict broad polarity, acidity, intermolecular interactions, and reactivity.", 4, [R("organic-foundations", "nomenclature"), R("bonding-molecular-structure", "polarity")]],
  ["conformations", "Conformations", "Analyze rotation, Newman projections, ring strain, and chair conformations.", 4, [R("organic-foundations", "carbon-frameworks")]],
  ["stereochemistry", "Stereochemistry", "Assign configuration and distinguish enantiomers, diastereomers, meso compounds, and conformers.", 6, [R("organic-foundations", "conformations")]],
  ["resonance-induction", "Resonance and inductive effects", "Draw resonance contributors and predict charge stabilization and reactivity using electron distribution.", 5, [R("bonding-molecular-structure", "orbital-bonding"), R("organic-foundations", "functional-groups")]],
  ["organic-acid-base", "Organic acid-base reasoning", "Compare acidity and basicity using resonance, induction, hybridization, aromaticity, and solvent effects.", 5, [R("organic-foundations", "resonance-induction"), R("acids-bases", "weak-acid-base")]],
  ["nucleophiles-electrophiles", "Nucleophiles, electrophiles, and curved arrows", "Identify electron donors and acceptors and use arrows to represent plausible elementary steps.", 4, [R("organic-foundations", "resonance-induction")]],
  ["isomer-properties", "Structure-property relationships", "Predict boiling point, solubility, partitioning, and biological accessibility from molecular structure.", 3.5, [R("organic-foundations", "functional-groups"), R("bonding-molecular-structure", "intermolecular-forces")]]
]);

add("organic-reactivity", [
  ["reaction-energy", "Reaction coordinate diagrams", "Interpret transition states, intermediates, activation barriers, thermodynamic control, and kinetic control.", 3, [R("thermochemistry-kinetics-equilibrium", "activation-energy"), R("organic-foundations", "nucleophiles-electrophiles")]],
  ["sn1-sn2", "Nucleophilic substitution", "Compare SN1 and SN2 mechanisms, kinetics, stereochemistry, substrate, nucleophile, leaving group, and solvent effects.", 6, [R("organic-reactivity", "reaction-energy"), R("organic-foundations", "stereochemistry")]],
  ["e1-e2", "Elimination", "Compare E1 and E2 pathways and predict regiochemical and stereochemical products.", 5, [R("organic-reactivity", "sn1-sn2")]],
  ["alkene-addition", "Alkene addition", "Predict products and stereochemical outcomes of common electrophilic additions, hydration, oxidation, and reduction.", 6, [R("organic-reactivity", "reaction-energy")]],
  ["alkyne-reactions", "Alkyne reactions", "Apply addition, reduction, oxidation, and terminal-alkyne acidity principles.", 3.5, [R("organic-reactivity", "alkene-addition")]],
  ["radicals", "Radical reactions", "Describe radical initiation, propagation, termination, selectivity, and biological oxidative damage.", 3.5, [R("organic-reactivity", "reaction-energy")], [R("metabolism", "pentose-phosphate")]],
  ["alcohols-ethers", "Alcohols, ethers, and epoxides", "Predict preparation and reactions including oxidation, substitution, dehydration, and ring opening.", 5, [R("organic-reactivity", "sn1-sn2"), R("organic-reactivity", "alkene-addition")]],
  ["aromaticity", "Aromaticity and aromatic reactions", "Apply aromaticity criteria and reason about substitution patterns at an introductory level.", 4, [R("organic-foundations", "resonance-induction")]],
  ["multistep-synthesis", "Multistep synthesis and retrosynthesis", "Plan short syntheses by identifying functional-group changes, order constraints, and selectivity.", 5, [R("organic-reactivity", "alcohols-ethers"), R("carbonyl-biochemistry", "carbonyl-reactivity")], [], { requirement: "pathway", pathway: ["uk-direct-entry", "continental-science"], level: "first-semester" }]
]);

add("carbonyl-biochemistry", [
  ["carbonyl-reactivity", "Carbonyl reactivity", "Explain polarization and predict nucleophilic addition versus acyl substitution.", 4, [R("organic-foundations", "nucleophiles-electrophiles")]],
  ["aldehydes-ketones", "Aldehydes and ketones", "Predict hydration, acetal formation, imine formation, reduction, and oxidation.", 5, [R("carbonyl-biochemistry", "carbonyl-reactivity")]],
  ["carboxylic-derivatives", "Carboxylic acids and derivatives", "Compare acidity and derivative reactivity and predict acyl-transfer products.", 5, [R("carbonyl-biochemistry", "carbonyl-reactivity")]],
  ["enolate-chemistry", "Enols, enolates, and alpha-carbon chemistry", "Explain tautomerism and introductory carbon-carbon bond formation at alpha carbons.", 4, [R("carbonyl-biochemistry", "aldehydes-ketones"), R("organic-foundations", "organic-acid-base")]],
  ["biological-acyl-transfer", "Biological acyl and phosphoryl transfer", "Connect organic mechanisms to peptide, ester, thioester, and phosphate-transfer chemistry.", 4, [R("carbonyl-biochemistry", "carboxylic-derivatives"), R("biomolecules", "proteins")]],
  ["carbohydrate-reactivity", "Carbohydrate stereochemistry and reactions", "Relate ring-chain forms, anomers, reducing sugars, and glycosidic bond formation.", 4, [R("biomolecules", "carbohydrates"), R("carbonyl-biochemistry", "aldehydes-ketones")]],
  ["lipid-reactivity", "Lipid reactions", "Explain ester hydrolysis, saponification, hydrogenation, oxidation, and phospholipid assembly.", 3.5, [R("biomolecules", "lipids"), R("carbonyl-biochemistry", "carboxylic-derivatives")]],
  ["amino-acid-peptide-reactivity", "Amino-acid and peptide reactivity", "Predict ionization, peptide-bond formation and hydrolysis, and common side-chain chemistry.", 4, [R("biomolecules", "amino-acids"), R("carbonyl-biochemistry", "carboxylic-derivatives")]]
]);

add("organic-analysis", [
  ["extraction-recrystallization", "Extraction and recrystallization", "Select solvents and manipulate acid-base state to separate and purify compounds.", 4, [R("states-solutions", "mixtures-separation"), R("organic-foundations", "organic-acid-base")]],
  ["chromatography", "Chromatography", "Explain partitioning and interpret paper, TLC, column, gas, and liquid chromatography.", 4, [R("organic-foundations", "isomer-properties")]],
  ["distillation", "Distillation", "Choose simple, fractional, vacuum, or steam distillation using volatility and stability.", 3, [R("states-solutions", "phase-changes-diagrams")]],
  ["mass-spectrometry", "Mass spectrometry", "Interpret molecular ions, isotopic patterns, and simple fragmentation evidence.", 4, [R("atomic-structure", "atomic-theory"), R("organic-foundations", "functional-groups")]],
  ["infrared", "Infrared spectroscopy", "Identify major functional-group signals and use absence as well as presence of peaks.", 3.5, [R("waves-sound", "electromagnetic-spectrum"), R("organic-foundations", "functional-groups")]],
  ["nmr", "NMR spectroscopy", "Use chemical shift, integration, splitting, and symmetry to constrain simple structures.", 6, [R("electricity-magnetism", "magnetic-fields"), R("organic-foundations", "carbon-frameworks")]],
  ["uv-visible", "UV-visible spectroscopy and Beer-Lambert law", "Connect electronic absorption to conjugation and quantify concentration in the linear range.", 3.5, [R("atomic-structure", "electromagnetic-quantization"), R("states-solutions", "concentration")]],
  ["structure-elucidation", "Integrated structure elucidation", "Combine formula, reactivity, MS, IR, and NMR evidence into a justified structure.", 5, [R("organic-analysis", "mass-spectrometry"), R("organic-analysis", "infrared"), R("organic-analysis", "nmr")]]
]);

add("laboratory-practice", [
  ["safety-risk", "Laboratory safety and risk", "Identify hazards, select controls and PPE, and respond appropriately to spills, exposure, and waste.", 3],
  ["notebook-integrity", "Notebook practice and data integrity", "Keep a contemporaneous, reproducible record without deleting inconvenient observations.", 2, [R("laboratory-practice", "safety-risk")]],
  ["measurement-uncertainty", "Measurement and uncertainty", "Read instruments, propagate appropriate precision, and distinguish random from systematic error.", 3, [R("quantitative-foundations", "units-dimensional")]],
  ["solutions-dilutions", "Solutions and serial dilutions", "Prepare solutions and dilution series accurately using mass, volume, and concentration calculations.", 3.5, [R("stoichiometry", "moles-molar-mass"), R("states-solutions", "concentration")]],
  ["pipetting-balance", "Pipetting, weighing, and calibration", "Select and verify volumetric and mass-measurement tools for the required precision.", 3, [R("laboratory-practice", "measurement-uncertainty")]],
  ["microscopy-staining", "Microscopy, staining, and image scale", "Prepare and inspect specimens, calculate scale, and avoid common image-interpretation artifacts.", 4, [R("cell-biology", "cell-types")], [R("optics", "lenses-images")]],
  ["spectrophotometry-curves", "Spectrophotometry and calibration curves", "Use blanks, standards, Beer-Lambert behavior, and residuals to estimate an unknown.", 4, [R("statistics-data", "graphs-tables"), R("states-solutions", "concentration")], [R("organic-analysis", "uv-visible")]],
  ["chromatography-electrophoresis", "Chromatography and electrophoresis", "Select and interpret separations based on charge, size, polarity, or affinity.", 4, [R("bonding-molecular-structure", "intermolecular-forces")], [R("organic-analysis", "chromatography"), R("molecular-genetics", "dna-analysis")]],
  ["enzyme-investigation", "Enzyme investigation", "Design a controlled rate experiment and estimate kinetic effects from noisy observations.", 4, [R("enzymes", "kinetics")], [R("statistics-data", "regression")]],
  ["aseptic-culture", "Aseptic technique and microbial culture", "Explain contamination control and interpret growth while recognizing biosafety limits of home practice.", 4, [R("microbiology", "growth-control")], [R("laboratory-practice", "safety-risk")]],
  ["dissection-simulation", "Anatomical investigation and simulation", "Orient a specimen or simulation, identify structures, and relate form to function ethically.", 3, [R("homeostasis", "anatomical-language")]],
  ["lab-report", "Laboratory report and critique", "Present methods, results, uncertainty, interpretation, and limitations so another learner could reproduce the work.", 4, [R("laboratory-practice", "notebook-integrity"), R("laboratory-practice", "measurement-uncertainty"), R("scientific-inquiry", "bias")]]
]);

add("mechanics", [
  ["kinematics", "Kinematics", "Represent one- and two-dimensional motion using position, displacement, velocity, acceleration, graphs, and equations.", 5, [R("quantitative-foundations", "vectors"), R("quantitative-foundations", "functions-graphs")]],
  ["newton-laws", "Newton's laws and free-body diagrams", "Model interactions as forces and predict acceleration using a defined system and free-body diagram.", 6, [R("mechanics", "kinematics")]],
  ["friction-drag", "Friction and drag", "Compare static, kinetic, rolling, and fluid resistance in idealized models.", 3, [R("mechanics", "newton-laws")]],
  ["circular-gravitation", "Circular motion and gravitation", "Apply centripetal dynamics and inverse-square gravitation without inventing an outward force.", 4, [R("mechanics", "newton-laws")]],
  ["work-energy-power", "Work, energy, and power", "Use work-energy and conservation methods and distinguish energy, force, and power.", 5, [R("mechanics", "newton-laws")]],
  ["momentum-collisions", "Momentum, impulse, and collisions", "Apply momentum conservation and impulse in one- and two-object systems.", 4, [R("mechanics", "newton-laws")]],
  ["torque-equilibrium", "Torque and static equilibrium", "Calculate moments and analyze balanced forces and torques in bodies and limbs.", 4, [R("mechanics", "newton-laws"), R("quantitative-foundations", "geometry-trigonometry")]],
  ["rotation", "Rotational motion", "Relate angular variables, moment of inertia, torque, and rotational kinetic energy.", 4, [R("mechanics", "torque-equilibrium"), R("mechanics", "work-energy-power")]],
  ["elasticity", "Elasticity and material response", "Interpret stress, strain, modulus, elastic energy, and failure in biological and technical materials.", 3, [R("mechanics", "work-energy-power")]],
  ["simple-harmonic-motion", "Simple harmonic motion", "Relate restoring force, period, energy, and resonance in ideal oscillators.", 4, [R("mechanics", "work-energy-power")], [R("waves-sound", "wave-parameters")]]
]);

add("fluids", [
  ["density-pressure", "Density and pressure", "Calculate density and pressure and distinguish absolute, gauge, and hydrostatic pressure.", 3, [R("quantitative-foundations", "units-dimensional")]],
  ["hydrostatics", "Hydrostatics and Pascal's principle", "Predict pressure variation and force transmission in stationary fluids.", 4, [R("fluids", "density-pressure")]],
  ["buoyancy", "Buoyancy", "Apply Archimedes' principle and force balance to floating and immersed objects.", 3, [R("fluids", "hydrostatics"), R("mechanics", "newton-laws")]],
  ["continuity-flow", "Continuity and volume flow", "Relate cross-sectional area, speed, and volume flow for steady incompressible flow.", 3.5, [R("fluids", "density-pressure"), R("quantitative-foundations", "proportional-models")]],
  ["bernoulli", "Bernoulli's principle", "Use energy conservation along a streamline and state when the idealization is invalid.", 4, [R("fluids", "continuity-flow"), R("mechanics", "work-energy-power")]],
  ["viscosity-poiseuille", "Viscosity and Poiseuille flow", "Predict resistance and laminar flow dependence on length, viscosity, radius, and pressure difference.", 4, [R("fluids", "continuity-flow"), R("quantitative-foundations", "proportional-models")]],
  ["surface-tension", "Surface tension and capillarity", "Explain interfaces, wetting, capillary action, and pressure across curved surfaces.", 3, [R("bonding-molecular-structure", "intermolecular-forces")]],
  ["blood-flow-application", "Hemodynamics application", "Integrate pressure, resistance, compliance, and flow while recognizing limits of rigid-tube models.", 4, [R("fluids", "viscosity-poiseuille")], [R("cardiovascular-system", "hemodynamics")]]
]);

add("thermal-physics", [
  ["temperature-equilibrium", "Temperature and thermal equilibrium", "Relate microscopic energy distributions to temperature and the zeroth law.", 3, [R("states-solutions", "kinetic-molecular-theory")]],
  ["thermal-expansion", "Thermal expansion", "Predict linear and volume changes and reason about constrained materials.", 2.5, [R("thermal-physics", "temperature-equilibrium")]],
  ["heat-capacity-phase", "Heat capacity and latent heat", "Calculate heating, cooling, and phase-change energy from material properties.", 4, [R("thermal-physics", "temperature-equilibrium"), R("thermochemistry-kinetics-equilibrium", "calorimetry-enthalpy")]],
  ["heat-transfer", "Conduction, convection, and radiation", "Compare heat-transfer mechanisms and apply them to insulation and thermoregulation.", 4, [R("thermal-physics", "heat-capacity-phase")]],
  ["first-law", "First law of thermodynamics", "Account for internal energy, heat, and work in gas and biological-system idealizations.", 4, [R("states-solutions", "gas-laws"), R("thermochemistry-kinetics-equilibrium", "systems-energy")]],
  ["second-law", "Second law and efficiency", "Explain entropy production, heat-engine limits, and why energy quality matters.", 3, [R("thermal-physics", "first-law"), R("thermochemistry-kinetics-equilibrium", "entropy-free-energy")]]
]);

add("electricity-magnetism", [
  ["charge-coulomb", "Charge and Coulomb's law", "Relate quantized charge, superposition, separation, and medium to electric force.", 4, [R("mechanics", "newton-laws"), R("quantitative-foundations", "vectors")]],
  ["electric-fields", "Electric fields", "Represent fields and calculate force on charges in simple geometries.", 4, [R("electricity-magnetism", "charge-coulomb")]],
  ["potential-energy", "Electric potential and potential energy", "Connect field, potential difference, work, and energy while keeping scalar and vector quantities distinct.", 4, [R("electricity-magnetism", "electric-fields"), R("mechanics", "work-energy-power")]],
  ["current-resistance", "Current, resistance, and Ohm's law", "Relate current, voltage, resistance, resistivity, geometry, and power.", 4, [R("electricity-magnetism", "potential-energy")]],
  ["dc-circuits", "DC circuits", "Analyze series-parallel resistor networks and apply junction and loop rules.", 6, [R("electricity-magnetism", "current-resistance")]],
  ["capacitance", "Capacitance and dielectrics", "Calculate capacitance, stored energy, and simple RC charging and discharging behavior.", 5, [R("electricity-magnetism", "dc-circuits")]],
  ["membrane-electricity", "Membranes as electrical circuits", "Use capacitance, resistance, gradients, and current to interpret membrane potentials cautiously.", 4, [R("electricity-magnetism", "capacitance"), R("cell-biology", "membrane-transport")], [R("nervous-system", "membrane-potentials")]],
  ["magnetic-fields", "Magnetic fields and forces", "Predict forces on moving charges and currents and describe field generation qualitatively.", 4, [R("electricity-magnetism", "electric-fields")]],
  ["induction", "Electromagnetic induction", "Explain magnetic flux, induced emf, Lenz's law, and basic transformer behavior.", 4, [R("electricity-magnetism", "magnetic-fields")]],
  ["medical-electricity", "Bioelectric and medical applications", "Relate ECG/EEG signals, defibrillation, electrical safety, and measurement limits to circuit principles.", 3, [R("electricity-magnetism", "membrane-electricity"), R("electricity-magnetism", "dc-circuits")]]
]);

add("waves-sound", [
  ["wave-parameters", "Wave parameters and propagation", "Relate amplitude, wavelength, frequency, period, speed, phase, and energy.", 4, [R("mechanics", "simple-harmonic-motion"), R("quantitative-foundations", "proportional-models")]],
  ["superposition-standing", "Superposition and standing waves", "Predict interference, nodes, antinodes, and harmonics in strings and columns.", 4, [R("waves-sound", "wave-parameters")]],
  ["sound-intensity", "Sound intensity and decibels", "Relate amplitude, intensity, inverse-square spreading, and logarithmic sound level.", 4, [R("waves-sound", "wave-parameters"), R("quantitative-foundations", "logarithms")]],
  ["sound-properties", "Pitch, timbre, and resonance", "Connect frequency content and resonance to perceived sound while distinguishing physical and perceptual quantities.", 3, [R("waves-sound", "superposition-standing")]],
  ["doppler", "Doppler effect", "Predict observed frequency shifts for moving sources, observers, and medical ultrasound contexts.", 4, [R("waves-sound", "wave-parameters"), R("quantitative-foundations", "algebra-equations")]],
  ["ultrasound", "Ultrasound imaging", "Explain pulse-echo timing, impedance mismatch, attenuation, resolution, and Doppler flow measurement.", 4, [R("waves-sound", "doppler"), R("fluids", "continuity-flow")]],
  ["hearing-physics", "Physics of hearing", "Trace sound transmission through outer, middle, and inner ear and relate frequency to cochlear location.", 3.5, [R("waves-sound", "sound-properties")], [R("nervous-system", "sensory-systems")]],
  ["electromagnetic-spectrum", "Electromagnetic spectrum", "Order electromagnetic bands and relate photon energy, frequency, interaction, and biological risk.", 3, [R("atomic-structure", "electromagnetic-quantization")]]
]);

add("optics", [
  ["reflection-refraction", "Reflection and refraction", "Apply reflection and Snell's law and explain refractive index and total internal reflection.", 4, [R("waves-sound", "wave-parameters"), R("quantitative-foundations", "geometry-trigonometry")]],
  ["lenses-images", "Lenses, mirrors, and images", "Use ray diagrams and equations to locate and characterize images and magnification.", 5, [R("optics", "reflection-refraction")]],
  ["eye-vision", "Optics of the eye", "Relate cornea, lens, accommodation, retina, and common refractive errors to image formation.", 4, [R("optics", "lenses-images")], [R("nervous-system", "sensory-systems")]],
  ["optical-instruments", "Microscopes and optical instruments", "Explain magnification, resolution, numerical aperture, and common optical limitations.", 4, [R("optics", "lenses-images")], [R("laboratory-practice", "microscopy-staining")]],
  ["diffraction-interference", "Diffraction and interference", "Explain wave-optical limits on resolution and interpret simple interference patterns.", 4, [R("waves-sound", "superposition-standing"), R("optics", "reflection-refraction")]],
  ["polarization", "Polarization", "Describe polarization and recognize applications in microscopy and molecular analysis.", 3, [R("waves-sound", "electromagnetic-spectrum")]]
]);

add("atomic-nuclear-physics", [
  ["photoelectric-photons", "Photons and the photoelectric effect", "Use photon energy and threshold frequency to explain the photoelectric effect.", 4, [R("atomic-structure", "electromagnetic-quantization")]],
  ["atomic-transitions", "Atomic transitions and spectra", "Relate emission and absorption spectra to transitions among quantized energy levels.", 3, [R("atomic-nuclear-physics", "photoelectric-photons")]],
  ["radioactive-decay", "Radioactive decay", "Balance alpha, beta, and gamma processes and calculate activity and half-life.", 4, [R("atomic-structure", "nuclear-notation-stability"), R("quantitative-foundations", "logarithms")]],
  ["nuclear-energy", "Binding energy, fission, and fusion", "Relate mass defect and binding energy to nuclear stability and energy release.", 3, [R("atomic-nuclear-physics", "radioactive-decay")]],
  ["ionizing-radiation", "Ionizing radiation and matter", "Compare penetration, ionization, attenuation, dose concepts, and stochastic versus tissue effects.", 4, [R("atomic-nuclear-physics", "radioactive-decay"), R("waves-sound", "electromagnetic-spectrum")]],
  ["medical-imaging-radiation", "Radiation imaging and therapy", "Explain the physical basis and trade-offs of radiography, CT, nuclear imaging, and radiotherapy at survey depth.", 4, [R("atomic-nuclear-physics", "ionizing-radiation")]]
]);

add("calculus-extension", [
  ["limits-rate", "Limits and instantaneous rate", "Connect average change to instantaneous rate conceptually and graphically.", 3, [R("quantitative-foundations", "functions-graphs")]],
  ["derivatives", "Derivatives and optimization", "Differentiate elementary functions and use derivatives for rates and extrema.", 5, [R("calculus-extension", "limits-rate")]],
  ["integrals", "Integrals and accumulation", "Interpret definite integrals as accumulated change and area, and evaluate simple cases.", 5, [R("calculus-extension", "derivatives")]],
  ["differential-models", "Simple differential models", "Interpret exponential growth, decay, and first-order rate equations as differential models.", 4, [R("calculus-extension", "derivatives"), R("quantitative-foundations", "logarithms")]]
]);

add("homeostasis", [
  ["anatomical-language", "Anatomical language and organization", "Use planes, directions, regions, cavities, and levels of organization precisely.", 3],
  ["tissues", "Epithelial, connective, muscle, and nervous tissues", "Recognize major tissue classes and relate cellular organization and extracellular matrix to function.", 5, [R("cell-biology", "cell-types"), R("homeostasis", "anatomical-language")]],
  ["homeostatic-control", "Homeostatic control systems", "Map regulated variables, sensors, integrators, effectors, feedback, and feedforward control.", 4, [R("cell-biology", "cell-signaling"), R("quantitative-foundations", "functions-graphs")]],
  ["body-fluid-compartments", "Body fluid compartments", "Explain compartment volumes, composition, osmotic shifts, and edema at introductory depth.", 4, [R("cell-biology", "membrane-transport"), R("states-solutions", "colligative-properties")]],
  ["thermoregulation", "Thermoregulation", "Integrate heat transfer, metabolism, circulation, sweating, shivering, and behavioral control.", 4, [R("homeostasis", "homeostatic-control"), R("thermal-physics", "heat-transfer")]],
  ["integration-stress", "Physiological integration and stress", "Explain how neural, endocrine, immune, and behavioral responses coordinate across time scales.", 3, [R("homeostasis", "homeostatic-control")], [R("endocrine-system", "stress-axis"), R("psychology", "stress-coping")]]
]);

add("nervous-system", [
  ["neural-cells", "Neurons and glia", "Relate neuronal compartments and major glial functions to signaling and tissue maintenance.", 3, [R("homeostasis", "tissues")]],
  ["membrane-potentials", "Resting membrane potential", "Explain equilibrium potentials, electrochemical gradients, permeability, and the resting potential.", 5, [R("cell-biology", "membrane-transport"), R("electricity-magnetism", "membrane-electricity")]],
  ["action-potentials", "Action potentials and conduction", "Trace voltage-gated channel events and predict effects of myelination, diameter, and refractory periods.", 5, [R("nervous-system", "membrane-potentials")]],
  ["synapses", "Synaptic transmission", "Compare electrical and chemical synapses and explain transmitter release, receptors, integration, and termination.", 4, [R("nervous-system", "action-potentials"), R("cell-biology", "cell-signaling")]],
  ["nervous-organization", "Central, peripheral, somatic, and autonomic organization", "Trace information flow and compare sympathetic, parasympathetic, and somatic outputs.", 4, [R("nervous-system", "synapses"), R("homeostasis", "anatomical-language")]],
  ["sensory-systems", "Sensory transduction", "Explain receptor potentials, coding, adaptation, and survey pathways for touch, pain, vision, hearing, taste, and smell.", 5, [R("nervous-system", "action-potentials")], [R("optics", "eye-vision"), R("waves-sound", "hearing-physics")]],
  ["motor-control", "Motor control and reflexes", "Trace reflex arcs and describe hierarchical control of posture and voluntary movement.", 4, [R("nervous-system", "nervous-organization")], [R("musculoskeletal-system", "muscle-contraction")]],
  ["brain-behavior", "Brain systems and behavior", "Relate major brain regions and circuits to arousal, reward, memory, emotion, language, and executive control.", 5, [R("nervous-system", "nervous-organization")], [R("psychology", "memory"), R("psychology", "emotion-motivation")]]
]);

add("endocrine-system", [
  ["hormone-classes", "Hormone classes and receptors", "Predict transport, receptor location, signaling time course, and termination from hormone chemistry.", 4, [R("cell-biology", "cell-signaling"), R("biomolecules", "lipids")]],
  ["hypothalamic-pituitary", "Hypothalamic-pituitary axes", "Trace releasing, tropic, and target hormones through feedback loops.", 4, [R("endocrine-system", "hormone-classes"), R("homeostasis", "homeostatic-control")]],
  ["thyroid-calcium", "Thyroid and calcium regulation", "Explain thyroid control and integrate parathyroid hormone, vitamin D, calcitonin, bone, gut, and kidney.", 4, [R("endocrine-system", "hypothalamic-pituitary")]],
  ["adrenal", "Adrenal hormones", "Compare cortical steroid and medullary catecholamine synthesis, control, and effects.", 3.5, [R("endocrine-system", "hormone-classes")]],
  ["pancreatic-hormones", "Pancreatic hormones and fuel regulation", "Predict insulin, glucagon, and somatostatin responses and their metabolic consequences.", 4, [R("endocrine-system", "hormone-classes"), R("metabolism", "glycolysis")]],
  ["stress-axis", "Stress physiology", "Integrate sympathoadrenal and hypothalamic-pituitary-adrenal responses and consequences of chronic activation.", 3.5, [R("endocrine-system", "adrenal"), R("nervous-system", "nervous-organization")], [R("psychology", "stress-coping")]],
  ["endocrine-integration", "Endocrine cases and feedback disorders", "Localize primary, secondary, and tertiary dysfunction from hormone and feedback patterns.", 4, [R("endocrine-system", "hypothalamic-pituitary"), R("endocrine-system", "thyroid-calcium"), R("endocrine-system", "pancreatic-hormones")]]
]);

add("cardiovascular-system", [
  ["blood-components", "Blood components and functions", "Relate plasma, erythrocytes, leukocytes, and platelets to transport, defense, and hemostasis.", 4, [R("homeostasis", "tissues")]],
  ["hemoglobin-oxygen", "Hemoglobin and oxygen binding", "Explain cooperative binding and predict effects of pH, carbon dioxide, temperature, and 2,3-BPG.", 4, [R("biomolecules", "proteins"), R("acids-bases", "buffers")]],
  ["heart-anatomy-flow", "Heart anatomy and blood flow", "Trace blood through chambers, valves, pulmonary and systemic circuits, and coronary supply.", 4, [R("homeostasis", "anatomical-language")]],
  ["cardiac-electrical", "Cardiac electrical activity", "Explain pacemaker activity, conduction, excitation-contraction coupling, and the basis of an ECG.", 5, [R("nervous-system", "action-potentials"), R("cardiovascular-system", "heart-anatomy-flow")]],
  ["cardiac-cycle-output", "Cardiac cycle and output", "Relate pressure, volume, valve state, heart sounds, stroke volume, rate, and cardiac output.", 5, [R("cardiovascular-system", "heart-anatomy-flow"), R("fluids", "hydrostatics")]],
  ["vessels-circulation", "Blood vessels and microcirculation", "Relate vessel wall structure to arterial, capillary, venous, and lymphatic function.", 4, [R("homeostasis", "tissues"), R("cardiovascular-system", "heart-anatomy-flow")]],
  ["hemodynamics", "Hemodynamics", "Predict pressure, resistance, compliance, flow, and velocity changes across the circulation.", 5, [R("fluids", "blood-flow-application"), R("cardiovascular-system", "vessels-circulation")]],
  ["blood-pressure-control", "Blood pressure regulation", "Integrate baroreflex, autonomic tone, cardiac output, vascular resistance, kidney, and hormones.", 5, [R("cardiovascular-system", "hemodynamics"), R("homeostasis", "homeostatic-control")], [R("renal-system", "raas-blood-pressure")]],
  ["hemostasis", "Hemostasis", "Trace vasoconstriction, platelet plug formation, coagulation, anticoagulant controls, and fibrinolysis.", 4, [R("cardiovascular-system", "blood-components"), R("enzymes", "regulation")]],
  ["cardiovascular-cases", "Cardiovascular integration cases", "Use pressure, flow, oxygen delivery, and compensation to reason through introductory perturbations.", 5, [R("cardiovascular-system", "cardiac-cycle-output"), R("cardiovascular-system", "blood-pressure-control"), R("cardiovascular-system", "hemoglobin-oxygen")]]
]);

add("respiratory-system", [
  ["airway-lung-anatomy", "Airway and lung anatomy", "Trace airflow and relate conducting and respiratory zones, pleura, and alveolar structure to function.", 3.5, [R("homeostasis", "anatomical-language")]],
  ["ventilation-mechanics", "Mechanics of ventilation", "Explain pressure-volume changes, compliance, resistance, surfactant, and respiratory muscle action.", 5, [R("respiratory-system", "airway-lung-anatomy"), R("fluids", "density-pressure")]],
  ["lung-volumes", "Lung volumes and ventilation", "Interpret spirometry and calculate minute, alveolar, and dead-space ventilation.", 4, [R("respiratory-system", "ventilation-mechanics"), R("quantitative-foundations", "ratios-proportions")]],
  ["gas-exchange", "Alveolar gas exchange", "Apply partial pressure, diffusion, area, thickness, and matching of ventilation to perfusion.", 5, [R("states-solutions", "gas-laws"), R("cell-biology", "membrane-transport"), R("respiratory-system", "lung-volumes")]],
  ["gas-transport", "Oxygen and carbon dioxide transport", "Explain dissolved and bound transport, bicarbonate chemistry, and exchange in tissues and lungs.", 5, [R("respiratory-system", "gas-exchange"), R("cardiovascular-system", "hemoglobin-oxygen")]],
  ["control-breathing", "Control of breathing", "Integrate brainstem rhythm, chemoreceptors, mechanics, and acid-base status.", 4, [R("respiratory-system", "gas-transport"), R("nervous-system", "nervous-organization")]],
  ["respiratory-cases", "Respiratory integration cases", "Interpret introductory obstructive, restrictive, diffusion, perfusion, and acid-base patterns.", 5, [R("respiratory-system", "control-breathing"), R("acids-bases", "physiological-acid-base")]]
]);

add("renal-system", [
  ["kidney-anatomy", "Kidney and nephron anatomy", "Trace renal blood flow and filtrate through nephron segments and collecting system.", 3.5, [R("homeostasis", "anatomical-language"), R("cardiovascular-system", "vessels-circulation")]],
  ["filtration", "Glomerular filtration", "Explain filtration forces, barrier selectivity, filtration rate, and clearance concepts.", 4.5, [R("renal-system", "kidney-anatomy"), R("fluids", "hydrostatics")]],
  ["tubular-transport", "Tubular reabsorption and secretion", "Predict solute and water handling using transporters, gradients, saturation, and segment specialization.", 5, [R("renal-system", "filtration"), R("cell-biology", "membrane-transport")]],
  ["concentration-dilution", "Urine concentration and dilution", "Explain countercurrent multiplication, exchange, medullary gradients, and ADH action.", 5, [R("renal-system", "tubular-transport"), R("states-solutions", "colligative-properties")]],
  ["water-electrolytes", "Water and electrolyte balance", "Integrate thirst, ADH, aldosterone, atrial peptides, and renal handling.", 4, [R("renal-system", "concentration-dilution"), R("homeostasis", "body-fluid-compartments")]],
  ["acid-base", "Renal acid-base regulation", "Explain filtered bicarbonate recovery, acid secretion, ammonium, and compensation over time.", 4, [R("renal-system", "tubular-transport"), R("acids-bases", "buffers")]],
  ["raas-blood-pressure", "RAAS and blood pressure", "Trace renin-angiotensin-aldosterone signaling and integrate volume with vascular control.", 4, [R("renal-system", "water-electrolytes"), R("endocrine-system", "hormone-classes")], [R("cardiovascular-system", "blood-pressure-control")]],
  ["renal-cases", "Renal integration cases", "Interpret introductory clearance, volume, electrolyte, and acid-base perturbations.", 5, [R("renal-system", "acid-base"), R("renal-system", "raas-blood-pressure")]]
]);

add("digestive-system", [
  ["gi-anatomy", "GI tract and accessory-organ anatomy", "Trace food, secretions, blood, and lymph through the digestive tract, liver, gallbladder, and pancreas.", 4, [R("homeostasis", "anatomical-language")]],
  ["motility-secretion", "Motility and secretion", "Explain swallowing, peristalsis, segmentation, sphincters, enteric control, acid, bicarbonate, bile, and digestive secretions.", 4, [R("digestive-system", "gi-anatomy"), R("nervous-system", "nervous-organization")]],
  ["digestion-absorption", "Digestion and absorption", "Connect enzymatic digestion and transport mechanisms to carbohydrate, protein, lipid, vitamin, mineral, and water uptake.", 5, [R("digestive-system", "motility-secretion"), R("enzymes", "catalysis-free-energy"), R("cell-biology", "membrane-transport")]],
  ["liver-bile", "Liver and biliary function", "Explain portal processing, bile production, detoxification principles, plasma proteins, and metabolic integration.", 4, [R("digestive-system", "gi-anatomy"), R("metabolism", "fed-fasted-integration")]],
  ["exocrine-pancreas", "Exocrine pancreas", "Relate pancreatic enzyme and bicarbonate secretion to digestion and duodenal conditions.", 3, [R("digestive-system", "digestion-absorption"), R("acids-bases", "buffers")]],
  ["nutrition-energy", "Nutrition and energy balance", "Reason about macro- and micronutrient needs, energy intake, storage, expenditure, and limitations of simple balance models.", 4, [R("digestive-system", "digestion-absorption"), R("metabolism", "fed-fasted-integration")]],
  ["gut-microbiome", "Gut barrier and microbiome", "Explain barrier defense, microbial ecology, host metabolism, and limits of causal claims about microbiomes.", 3.5, [R("digestive-system", "digestion-absorption"), R("microbiology", "host-microbe")]],
  ["digestive-cases", "Digestive integration cases", "Localize introductory maldigestion, malabsorption, motility, hepatic, and nutritional problems from evidence.", 4, [R("digestive-system", "liver-bile"), R("digestive-system", "nutrition-energy")]]
]);

add("musculoskeletal-system", [
  ["bone-structure-remodeling", "Bone structure and remodeling", "Relate matrix, cells, architecture, loading, minerals, and hormonal control to bone function.", 4, [R("homeostasis", "tissues"), R("endocrine-system", "thyroid-calcium")]],
  ["joints-levers", "Joints, connective tissue, and levers", "Connect joint anatomy and connective tissues to range, stability, mechanical advantage, and injury risk.", 4, [R("mechanics", "torque-equilibrium"), R("homeostasis", "tissues")]],
  ["muscle-contraction", "Skeletal muscle contraction", "Trace excitation-contraction coupling, cross-bridge cycling, calcium regulation, and relaxation.", 5, [R("nervous-system", "action-potentials"), R("biomolecules", "proteins"), R("metabolism", "bioenergetics-overview")]],
  ["muscle-force", "Motor units, force, and fatigue", "Explain recruitment, frequency summation, length-tension, fiber types, fuel use, and fatigue.", 4, [R("musculoskeletal-system", "muscle-contraction"), R("metabolism", "fed-fasted-integration")]],
  ["smooth-cardiac-muscle", "Smooth and cardiac muscle", "Compare control, calcium handling, coupling, and mechanical roles across muscle types.", 4, [R("musculoskeletal-system", "muscle-contraction")], [R("cardiovascular-system", "cardiac-electrical")]],
  ["movement-case", "Movement integration case", "Analyze a movement using neural activation, muscle mechanics, joints, energy, and feedback.", 4, [R("musculoskeletal-system", "muscle-force"), R("nervous-system", "motor-control"), R("mechanics", "torque-equilibrium")]]
]);

add("reproduction-development", [
  ["gametogenesis", "Gametogenesis", "Compare spermatogenesis and oogenesis, meiotic timing, ploidy, and sources of variation and error.", 4, [R("cell-biology", "meiosis")]],
  ["reproductive-anatomy", "Reproductive anatomy and physiology", "Relate gonads, ducts, accessory organs, and cycles to reproductive function.", 4, [R("homeostasis", "anatomical-language"), R("reproduction-development", "gametogenesis")]],
  ["hormonal-control", "Hormonal control of reproduction", "Trace hypothalamic-pituitary-gonadal regulation and ovarian, uterine, and testicular responses.", 4, [R("endocrine-system", "hypothalamic-pituitary"), R("reproduction-development", "reproductive-anatomy")]],
  ["fertilization-implantation", "Fertilization and implantation", "Explain gamete interaction, blocks to polyspermy, early cleavage, blastocyst formation, and implantation.", 4, [R("reproduction-development", "gametogenesis"), R("cell-biology", "cell-signaling")]],
  ["embryonic-development", "Early embryonic development", "Trace germ layers, neurulation, body patterning, and introductory organogenesis.", 5, [R("reproduction-development", "fertilization-implantation"), R("molecular-genetics", "gene-regulation")]],
  ["placenta-pregnancy", "Placenta, pregnancy, and birth", "Explain maternal-fetal exchange, endocrine maintenance, physiological adaptation, and parturition.", 4, [R("reproduction-development", "embryonic-development"), R("endocrine-system", "hormone-classes")]],
  ["development-lifespan", "Development across the lifespan", "Relate biological maturation, sensitive periods, aging, and environmental context without biological determinism.", 3, [R("reproduction-development", "embryonic-development")], [R("psychology", "development")]],
  ["inheritance-development-case", "Reproduction and development case", "Integrate pedigrees, meiosis, hormonal control, and developmental timing in an introductory case.", 4, [R("reproduction-development", "placenta-pregnancy"), R("molecular-genetics", "pedigrees-probability")]]
]);

add("immunity", [
  ["barriers-innate", "Barriers and innate recognition", "Explain physical and chemical barriers and recognition of damage- and pathogen-associated patterns.", 4, [R("homeostasis", "tissues"), R("microbiology", "microbial-diversity")]],
  ["inflammation", "Inflammation", "Trace vascular and cellular events, mediators, systemic responses, resolution, and damaging dysregulation.", 4, [R("immunity", "barriers-innate"), R("cardiovascular-system", "vessels-circulation")]],
  ["phagocytes-complement", "Phagocytes, complement, and innate effectors", "Compare cellular killing, opsonization, lysis, chemotaxis, and antiviral responses.", 4, [R("immunity", "barriers-innate")]],
  ["antigens-presentation", "Antigens and presentation", "Explain antigen processing, MHC classes, presentation, and recognition principles.", 4, [R("immunity", "phagocytes-complement"), R("biomolecules", "proteins")]],
  ["b-cells-antibodies", "B cells and antibodies", "Trace activation, clonal expansion, class switching, affinity maturation, memory, and antibody effector functions.", 5, [R("immunity", "antigens-presentation"), R("molecular-genetics", "gene-regulation")]],
  ["t-cells", "T cells", "Compare helper, cytotoxic, regulatory, and memory T-cell activation and functions.", 5, [R("immunity", "antigens-presentation")]],
  ["adaptive-integration", "Adaptive immune integration", "Explain primary versus secondary responses and coordination of cellular and humoral immunity.", 4, [R("immunity", "b-cells-antibodies"), R("immunity", "t-cells")]],
  ["vaccination", "Vaccination and immunological memory", "Compare vaccine platforms and reason about individual protection, population effects, schedules, and waning.", 4, [R("immunity", "adaptive-integration"), R("statistics-data", "association-risk")]],
  ["hypersensitivity", "Hypersensitivity and allergy", "Classify major hypersensitivity mechanisms and connect immune effectors to tissue injury.", 4, [R("immunity", "adaptive-integration")]],
  ["autoimmunity-immunodeficiency", "Autoimmunity and immunodeficiency", "Explain breakdown of tolerance and distinguish inherited, acquired, primary, and secondary immune deficits.", 4, [R("immunity", "adaptive-integration")]],
  ["transplant-tumor", "Transplant and tumor immunity", "Explain allorecognition, rejection, tolerance challenges, immune surveillance, and immune escape at survey depth.", 4, [R("immunity", "t-cells"), R("cell-biology", "cell-death-cancer")]],
  ["immune-data", "Interpreting immune data", "Interpret cell counts, antibody curves, flow plots, and controlled immune experiments without overclaiming.", 4, [R("immunity", "adaptive-integration"), R("statistics-data", "graphs-tables")]]
]);

add("microbiology", [
  ["microbial-diversity", "Microbial diversity and classification", "Compare bacteria, archaea, fungi, protozoa, and viruses without treating all microbes as pathogens.", 3, [R("cell-biology", "cell-types")]],
  ["bacterial-structure", "Bacterial structure", "Relate envelopes, walls, membranes, appendages, spores, and biofilms to function and control.", 4, [R("microbiology", "microbial-diversity"), R("cell-biology", "membrane-structure")]],
  ["growth-control", "Microbial growth and control", "Model growth phases and explain how physical and chemical controls affect populations.", 4, [R("microbiology", "bacterial-structure"), R("quantitative-foundations", "logarithms")]],
  ["microbial-metabolism", "Microbial metabolism", "Compare respiratory, fermentative, phototrophic, and chemotrophic strategies.", 4, [R("microbiology", "growth-control"), R("metabolism", "bioenergetics-overview")]],
  ["horizontal-gene-transfer", "Microbial genetics and horizontal transfer", "Explain mutation, transformation, transduction, conjugation, plasmids, and mobile elements.", 4, [R("molecular-genetics", "mutation-variation"), R("microbiology", "bacterial-structure")]],
  ["viruses", "Viruses and replication", "Compare viral architectures, life cycles, host dependence, latency, and sources of variation.", 5, [R("molecular-genetics", "translation"), R("cell-biology", "membrane-transport")]],
  ["pathogenesis", "Colonization, virulence, and pathogenesis", "Trace exposure, adherence, invasion, damage, transmission, and host susceptibility.", 4, [R("microbiology", "microbial-diversity"), R("immunity", "barriers-innate")]],
  ["antimicrobial-resistance", "Antimicrobials and resistance", "Explain selective toxicity, major target classes, resistance mechanisms, selection, and stewardship.", 5, [R("microbiology", "horizontal-gene-transfer"), R("enzymes", "inhibition")], [R("evolution", "evolution-health")]],
  ["host-microbe", "Microbiota and host interaction", "Distinguish colonization, mutualism, dysbiosis hypotheses, opportunism, and causal evidence.", 3.5, [R("microbiology", "pathogenesis"), R("scientific-inquiry", "correlation-causation")]],
  ["epidemiology-transmission", "Transmission and outbreak reasoning", "Use reservoirs, routes, chains of transmission, incidence, prevalence, and intervention logic.", 4, [R("microbiology", "pathogenesis"), R("statistics-data", "association-risk")], [R("sociology-health", "population-health")]]
]);

add("psychology", [
  ["psych-science", "Psychology as a science", "Evaluate psychological constructs, operationalization, study designs, and replication challenges.", 3, [R("scientific-inquiry", "measurement-validity")]],
  ["biological-bases", "Biological bases of behavior", "Connect neural, endocrine, genetic, and environmental influences without reducing behavior to one level.", 4, [R("nervous-system", "brain-behavior"), R("endocrine-system", "stress-axis")]],
  ["sensation-perception", "Sensation and perception", "Distinguish detection from interpretation and explain thresholds, signal detection, attention, and organization.", 4, [R("nervous-system", "sensory-systems")]],
  ["consciousness-sleep", "Consciousness and sleep", "Describe sleep architecture, circadian regulation, altered states, and limits of subjective report.", 3, [R("psychology", "biological-bases")]],
  ["learning", "Learning", "Compare classical conditioning, operant conditioning, observational learning, and biological constraints.", 4, [R("psychology", "psych-science")]],
  ["memory", "Memory", "Explain encoding, storage, retrieval, working memory, forgetting, reconstruction, and major memory systems.", 4, [R("psychology", "learning"), R("nervous-system", "brain-behavior")]],
  ["cognition-language", "Cognition, problem solving, and language", "Analyze concepts, judgment, decision biases, language processes, and cognitive load.", 4, [R("psychology", "memory")]],
  ["emotion-motivation", "Emotion and motivation", "Compare major models and integrate arousal, appraisal, reward, goals, and social context.", 4, [R("psychology", "biological-bases")]],
  ["development", "Human development", "Compare physical, cognitive, moral, social, and identity development across the lifespan.", 4, [R("psychology", "psych-science")]],
  ["personality", "Personality", "Compare trait, psychodynamic, humanistic, social-cognitive, and biological perspectives with evidence limits.", 3, [R("psychology", "psych-science")]],
  ["identity-self", "Identity and the self", "Explain self-concept, self-esteem, identity formation, social identity, and impression management.", 3, [R("psychology", "development")], [R("sociology-health", "socialization")]],
  ["stress-coping", "Stress, coping, and health", "Explain appraisal, physiological stress, coping resources, allostatic load, and health associations.", 4, [R("psychology", "emotion-motivation"), R("endocrine-system", "stress-axis")]],
  ["psychopathology", "Psychological disorders", "Describe classification, multifactorial models, impairment, stigma, and major disorder families at survey depth.", 4, [R("psychology", "biological-bases"), R("psychology", "development")]],
  ["treatment", "Psychological treatment", "Compare major psychotherapy principles, biological treatments, evidence, therapeutic alliance, and access barriers.", 4, [R("psychology", "psychopathology"), R("scientific-inquiry", "study-designs")]]
]);

add("sociology-health", [
  ["sociological-imagination", "The sociological imagination", "Connect individual experience to institutions, history, culture, and patterned inequality.", 3],
  ["theory-levels", "Sociological theories and levels", "Use functionalist, conflict, symbolic-interaction, and social-construction lenses without treating them as facts.", 3, [R("sociology-health", "sociological-imagination")]],
  ["culture", "Culture", "Explain norms, values, symbols, language, subcultures, cultural change, and ethnocentrism.", 3, [R("sociology-health", "sociological-imagination")]],
  ["socialization", "Socialization, roles, and groups", "Analyze agents of socialization, status, roles, reference groups, networks, and organizations.", 4, [R("sociology-health", "culture")]],
  ["institutions", "Social institutions", "Compare family, education, religion, economy, government, and healthcare as interdependent institutions.", 4, [R("sociology-health", "socialization")]],
  ["stratification", "Stratification and social class", "Explain how resources, power, mobility, and cumulative advantage produce patterned outcomes.", 4, [R("sociology-health", "institutions")]],
  ["race-ethnicity", "Race, ethnicity, and racism", "Distinguish race from biology and analyze prejudice, discrimination, structural racism, and health effects.", 4, [R("sociology-health", "stratification")]],
  ["gender-sexuality", "Sex, gender, and sexuality", "Distinguish constructs and analyze socialization, institutions, discrimination, and health without essentialism.", 4, [R("sociology-health", "socialization")]],
  ["age-disability", "Age, disability, and intersectionality", "Analyze life-course position, ableism, access, and intersecting social locations.", 3, [R("sociology-health", "stratification")]],
  ["demography", "Demography and population change", "Interpret fertility, mortality, migration, age structure, and demographic transition.", 4, [R("statistics-data", "graphs-tables"), R("sociology-health", "institutions")]],
  ["population-health", "Population health and epidemiologic measures", "Use incidence, prevalence, mortality, burden, and distribution to describe health patterns.", 4, [R("sociology-health", "demography"), R("statistics-data", "association-risk")]],
  ["social-determinants", "Social determinants of health", "Trace how material conditions, policy, discrimination, place, work, and education shape exposure and opportunity.", 4, [R("sociology-health", "stratification"), R("sociology-health", "population-health")]],
  ["health-disparities", "Health disparities and inequity", "Distinguish difference, disparity, and inequity and evaluate multilevel explanations and interventions.", 4, [R("sociology-health", "social-determinants"), R("scientific-inquiry", "correlation-causation")]],
  ["healthcare-systems", "Healthcare systems and medicalization", "Compare access, financing, professions, organizations, medicalization, and patient roles at survey depth.", 4, [R("sociology-health", "institutions"), R("sociology-health", "health-disparities")]]
]);

add("critical-reading", [
  ["passage-structure", "Passage structure and purpose", "Identify central claim, function of paragraphs, scope, tone, and argumentative architecture.", 3],
  ["claims-reasons", "Claims, reasons, and conclusions", "Separate evidence, warrants, assumptions, counterclaims, and conclusions in unfamiliar prose.", 4, [R("critical-reading", "passage-structure")]],
  ["evidence-assumptions", "Evidence and assumptions", "Judge whether cited evidence supports the claimed strength and locate unstated dependencies.", 4, [R("critical-reading", "claims-reasons"), R("scientific-inquiry", "mechanism-evidence")]],
  ["perspective-context", "Perspective and context", "Infer a writer's commitments without substituting outside knowledge for passage evidence.", 3, [R("critical-reading", "claims-reasons")]],
  ["analogy-transfer", "Analogy and transfer", "Apply a passage principle to a novel case and test where the analogy breaks.", 3, [R("critical-reading", "evidence-assumptions")]],
  ["competing-interpretations", "Competing interpretations", "Compare explanations by consistency, evidence, assumptions, and explanatory reach.", 4, [R("critical-reading", "perspective-context"), R("critical-reading", "evidence-assumptions")]],
  ["dense-visual-text", "Integrating prose with figures", "Synthesize a dense passage with tables, graphs, diagrams, and captions while tracking units and definitions.", 4, [R("statistics-data", "graphs-tables"), R("critical-reading", "passage-structure")]],
  ["timed-reasoning", "Timed reasoning without panic", "Use triage, passage maps, evidence checks, and post-hoc error analysis under optional time constraints.", 3, [R("critical-reading", "competing-interpretations")]]
]);

add("integrative-capstones", [
  ["membrane-excitability", "Capstone: membrane excitability", "Integrate gradients, electrochemistry, transport, circuits, channels, and neural signaling in a quantitative model.", 8, [R("nervous-system", "action-potentials"), R("redox-electrochemistry", "cell-potentials"), R("laboratory-practice", "measurement-uncertainty")]],
  ["oxygen-delivery", "Capstone: oxygen delivery", "Integrate ventilation, diffusion, hemoglobin, cardiac output, flow, metabolism, and compensation.", 8, [R("respiratory-system", "gas-transport"), R("cardiovascular-system", "cardiovascular-cases"), R("metabolism", "electron-transport-oxidative-phosphorylation")]],
  ["glucose-homeostasis", "Capstone: glucose homeostasis", "Integrate digestion, hormones, liver, muscle, adipose tissue, metabolism, and data interpretation.", 8, [R("digestive-system", "nutrition-energy"), R("endocrine-system", "pancreatic-hormones"), R("metabolism", "fed-fasted-integration")]],
  ["acid-base-case", "Capstone: acid-base balance", "Integrate buffer chemistry, ventilation, renal function, electroneutrality, and compensatory reasoning.", 8, [R("respiratory-system", "respiratory-cases"), R("renal-system", "renal-cases"), R("acids-bases", "physiological-acid-base")]],
  ["infection-evidence", "Capstone: infection and evidence", "Integrate transmission, microbial mechanisms, immunity, diagnostics, study design, and risk communication.", 8, [R("microbiology", "epidemiology-transmission"), R("immunity", "immune-data"), R("statistics-data", "association-risk")]],
  ["drug-molecule", "Capstone: from molecule to effect", "Use structure, acid-base state, binding, kinetics, membranes, metabolism, and variability to explain a hypothetical drug.", 8, [R("organic-analysis", "structure-elucidation"), R("enzymes", "inhibition"), R("cell-biology", "cell-signaling")]],
  ["health-inequality", "Capstone: health inequality", "Integrate biological mechanisms with behavior, social structure, causal inference, evidence, and intervention trade-offs.", 8, [R("sociology-health", "health-disparities"), R("psychology", "stress-coping"), R("scientific-inquiry", "correlation-causation")]],
  ["independent-investigation", "Capstone: independent investigation", "Ask a bounded question, find evidence, analyze data, communicate uncertainty, and defend a reproducible conclusion.", 12, [R("laboratory-practice", "lab-report"), R("scientific-inquiry", "replication-reproducibility"), R("statistics-data", "confidence-intervals")]],
  ["readiness-portfolio", "Premed readiness portfolio", "Demonstrate durable knowledge, quantitative reasoning, laboratory literacy, integrative problem solving, and reflective growth.", 6, [R("integrative-capstones", "oxygen-delivery"), R("integrative-capstones", "acid-base-case"), R("integrative-capstones", "infection-evidence"), R("integrative-capstones", "independent-investigation")]]
]);

const topics = topicRows.map(([moduleSlug, slug, title, outcome, estimatedHours, prerequisites = [], crossLinks = [], overrides = {}], index) => {
  const module = moduleBySlug[moduleSlug];
  if (!module) throw new Error(`Unknown module slug: ${moduleSlug}`);
  const requirement = overrides.requirement ?? module.requirement;
  return {
    id: R(moduleSlug, slug),
    code: `${module.code}.${String(topicRows.filter(row => row[0] === moduleSlug).findIndex(row => row[1] === slug) + 1).padStart(2, "0")}`,
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
    level: overrides.level ?? (requirement === "on-ramp" ? "foundation" : requirement === "pathway" ? "college-intro" : requirement === "medicine-bridge" ? "bridge" : "college-intro"),
    requirement,
    core: requirement === "portable-core",
    pathway: overrides.pathway ?? module.pathway,
    estimatedHours,
    evidenceConfidence: overrides.evidenceConfidence ?? (requirement === "portable-core" ? "high" : requirement === "medicine-bridge" ? "medium-high" : "medium"),
    sourceTags: [...new Set(["ADJUDICATION", ...module.sourceTags, ...(overrides.sourceTags ?? [])])],
    prerequisites,
    crossLinks,
    order: index + 1
  };
});

const topicHoursByModule = Object.fromEntries(modules.map(m => [m.id, topics.filter(t => t.moduleId === m.id).reduce((sum, t) => sum + t.estimatedHours, 0)]));
const moduleNodes = modules.map(m => ({
  ...m,
  kind: "module",
  label: m.title,
  summary: m.description,
  module: m.id,
  estimatedHours: topicHoursByModule[m.id],
  level: m.requirement === "on-ramp" ? "foundation" : m.requirement === "medicine-bridge" ? "bridge" : "college-intro",
  evidenceConfidence: m.requirement === "portable-core" ? "high" : "medium-high"
}));

const domainNodes = domains.map(d => {
  const domainModules = moduleNodes.filter(m => m.domainId === d.id);
  return {
    ...d,
    kind: "domain",
    label: d.title,
    summary: d.description,
    domain: d.id,
    subject: d.title,
    estimatedHours: domainModules.reduce((sum, m) => sum + m.estimatedHours, 0),
    pathway: [...new Set(domainModules.flatMap(m => m.pathway))]
  };
});

const links = [];
for (const module of moduleNodes) {
  links.push({ id: `link-contains-${module.domainId}-${module.id}`, source: module.domainId, target: module.id, type: "contains" });
}
for (const topic of topics) {
  links.push({ id: `link-contains-${topic.moduleId}-${topic.id}`, source: topic.moduleId, target: topic.id, type: "contains" });
  for (const prerequisite of topic.prerequisites) {
    links.push({ id: `link-prerequisite-${prerequisite}-${topic.id}`, source: prerequisite, target: topic.id, type: "prerequisite" });
  }
  for (const related of topic.crossLinks) {
    const pair = [topic.id, related].sort();
    const id = `link-cross-${pair[0]}-${pair[1]}`;
    if (!links.some(link => link.id === id)) links.push({ id, source: pair[0], target: pair[1], type: "cross-link" });
  }
}

const totalHours = topics.reduce((sum, t) => sum + t.estimatedHours, 0);
// Apply the single route-resolution rule so every consumer sees the same effective route sets.
const effectiveRouteTopics = pathway => topics.filter(t => t.pathway.includes(pathway.id) || (pathway.includesPortableCore && t.core));
const routeTopicCounts = Object.fromEntries(pathways.map(p => {
  const routeTopics = effectiveRouteTopics(p);
  return [p.id, { tagged: topics.filter(t => t.pathway.includes(p.id)).length, effective: routeTopics.length, estimatedHours: routeTopics.reduce((sum, t) => sum + t.estimatedHours, 0) }];
}));
const graph = {
  schemaVersion: "2.0.0",
  generatedAt: "2026-07-20",
  course: {
    id: "premed",
    title: "Premed",
    subtitle: "A rigorous, pathway-aware foundation for medical study",
    description: "An evidence-backed knowledge graph spanning the portable science core, medicine-facing bridges, route-specific preparation, scientific inquiry, laboratory practice, and integration.",
    estimatedHours: totalHours,
    disclaimer: "Educational preparation only. It is not a degree, admission guarantee, medical qualification, or medical advice."
  },
  schema: {
    nodeKinds: ["domain", "module", "topic"],
    linkTypes: {
      contains: "Parent hierarchy: domain to module, or module to topic.",
      prerequisite: "Source should be learned before target; these links form a directed acyclic graph.",
      "cross-link": "A symmetric conceptual connection; it does not impose study order."
    },
    requiredNodeFields: ["id", "kind", "title", "label", "summary", "domain", "subject", "estimatedHours", "pathway"],
    topicFields: ["code", "module", "level", "requirement", "core", "outcome", "evidenceConfidence", "sourceTags", "prerequisites", "crossLinks"],
    requirementLegend,
    levelLegend,
    routeResolutionRule: ROUTE_RULE
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
    prerequisiteLinks: links.filter(l => l.type === "prerequisite").length,
    crossLinks: links.filter(l => l.type === "cross-link").length,
    estimatedHours: totalHours,
    portableCoreTopics: topics.filter(t => t.core).length,
    medicineBridgeTopics: topics.filter(t => t.requirement === "medicine-bridge").length,
    pathwayTopics: topics.filter(t => t.requirement === "pathway").length,
    routeTopicCounts
  }
};

await writeFile(OUTPUT, `${JSON.stringify(graph, null, 2)}\n`, "utf8");
console.log(`Wrote ${OUTPUT}`);
console.log(JSON.stringify(graph.metrics, null, 2));
