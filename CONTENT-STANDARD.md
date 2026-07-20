# EmbeddedKnowledge Learning-Content Standard v1

**Status:** authoritative lesson-writing and learning-design contract
**Applies to:** lesson authors, authoring agents, learning-design reviewers, academic reviewers, and adjudicators
**Companion contracts:** [`FORMAT.md`](FORMAT.md) defines the interchange format; [`lessons/README.md`](lessons/README.md) defines pack construction; this document defines what the teaching must do.

## 1. The standard

An EmbeddedKnowledge lesson is not an article followed by a quiz. It is an instructional argument designed to help a declared learner build, test, retain, and transfer a useful mental model.

For every mapped outcome, the lesson must enable the learner to answer:

1. **What question, phenomenon, or task does this knowledge address?**
2. **What model, principle, or procedure should I construct?**
3. **Why does it work, and what evidence or reasoning supports it?**
4. **How is the same idea represented in words, diagrams, equations, data, or chemical notation?**
5. **When does the idea apply, when does it fail, and what is easily confused with it?**
6. **Can I reconstruct and use it without the lesson in front of me?**
7. **Can I select and adapt it in a new, bounded context?**

The content is ready for review only when it supports all seven questions at the depth declared by the lesson. **Comprehension is a prerequisite for learning, not a cosmetic extra.** If the declared learner cannot say what the lesson is about, why it matters, and how its central idea works after one careful first read, the lesson is not ready. Fluency, familiarity, completion, and time-on-page still are not evidence of mastery.

## 2. Design before prose

Before drafting scenes, create a private authoring brief. It does not replace structured lesson metadata and need not ship as learner-facing prose.

```text
Target outcomes:
Declared learner and level:
Required prerequisites:
Prerequisite diagnostic and recovery route:
Target explanatory model:
Observable evidence of mastery:
Common helpful prior ideas:
Common misconceptions or boundary errors:
Anchor question, phenomenon, or task:
Worked-example task:
Practice variations:
Transfer context:
Representations required and the job of each:
Material claims, sources, scope, and uncertainty:
Accessibility equivalents:
Safety, privacy, clinical, and route boundaries:
Delayed retrieval links to earlier/later lessons:
```

If the target model, learner, prerequisite route, or mastery evidence is unknown, stop and resolve it before writing polished exposition. Do not use elegant prose to conceal an undefined instructional goal.

### Outcome-first alignment

- Use only existing atomic graph outcomes and teach the full meaning of every mapped outcome.
- Write observable objectives that require a learner performance, not exposure: prefer “predict,” “explain,” “distinguish,” “calculate,” “interpret,” or “construct” over “understand” or “be familiar with.”
- Map each objective to instruction, supported practice, an assessment item, feedback, and a recovery route.
- Do not assess a distinction, convention, fact, or operation that the lesson did not teach or identify as a prerequisite.
- Do not add adjacent facts merely because they are true. Include them only when they support the target model, a prerequisite, a boundary, or transfer.

## 3. The instructional arc

Use this as a functional sequence, not a demand for nine separate scenes.

1. **Purpose:** open with a meaningful question, observable phenomenon, decision, or task. State what the lesson will and will not establish.
2. **Prior knowledge:** elicit or verify the few prerequisites that the new model actually uses. Give a non-punitive recovery route.
3. **Model construction:** explain the central relationships, mechanism, assumptions, and evidence as a connected argument.
4. **Representation:** coordinate words with the necessary diagram, equation, table, graph, molecular structure, or data. Explain what each representation reveals and hides.
5. **Modelled use:** work through a representative task while exposing expert decisions, not only calculations.
6. **Discrimination and repair:** compare cases, non-cases, boundaries, and a high-value misconception; reconstruct the correct model.
7. **Retrieval and supported practice:** ask learners to recall, explain, predict, or choose before revealing feedback; move from support to independence.
8. **Transfer:** require the learner to select and adapt the model in a novel but bounded context.
9. **Synthesis and spacing:** reconnect the outcome to the knowledge graph and schedule later retrieval rather than ending with passive restatement.

Earlier knowledge should be retrieved when it becomes useful, not recopied in full. Later lessons should revisit high-value ideas after a delay and in changed contexts.

## 4. Write explanations, not compressed notes

### First-read gate: write for a learner, not for the contract

The standard belongs in the authoring process, not in the voice of the lesson. Learners should encounter an inviting explanation, not the vocabulary of a design brief, schema, validator, or review rubric.

- Open with a concrete question, phenomenon, surprising observation, or useful problem that the learner can picture. Make the reason to continue clear before listing objectives, definitions, exclusions, or caveats.
- Give the concrete case before the abstract label when the label would otherwise be empty. A sentence such as “A baseline is a routing tool” does not orient a novice until *baseline*, *routing*, and the decision being routed have ordinary-language meaning.
- Prefer people and things doing actions over strings of abstract nouns. Use the technical term once the learner has a distinction to attach it to.
- Use the shortest ordinary word that remains accurate. Explain necessary scientific vocabulary; do not replace it with a second layer of invented course jargon.
- Keep qualifications beside the claim they constrain, but do not make the learner cross a wall of disclaimers before reaching the idea. State routine course boundaries once and return to them only when they affect a decision.
- Keep internal IDs, schema fields, claim-map terminology, candidate status, quorum language, and validator instructions out of learner prose unless the mapped outcome explicitly requires that project machinery.
- Write source notes for learners: say what the evidence supports and where it is limited. Do not narrate the claims ledger or rights workflow.
- Read representative paragraphs aloud. Rewrite any sentence that an informed teacher would not naturally say to the declared learner, or that requires a second reading because the grammar hides the main action.
- Build motivation through visible meaning and attainable progress, not hype, fake enthusiasm, decorative stories, or claims that the topic is “important” without showing what it helps explain or do.

Before completing the full pack, test the opening, central explanation, and one example as a learner-visible prototype. Give a cold reader only the declared learner, target outcome, and prototype—not the authoring brief or quality rubric. The prototype passes when that reader can explain in plain language what they are learning, why it matters, and the central relation or procedure, and can identify no sentence whose meaning depends on hidden project knowledge. This developmental read does not count toward review quorum or evidence of learning.

### 4.1 Build coherence for the declared novice

- Give each paragraph one instructional job. Lead with its controlling idea, then supply reasoning, evidence, example, qualification, or consequence.
- Make causal, conditional, contrastive, and inferential links explicit: use “because,” “therefore,” “if,” “only when,” “whereas,” and “this evidence rules out” when those relations are real.
- Keep the same name for the same entity. Do not alternate synonyms for stylistic variety when terminology carries identity.
- Replace vague referents such as “this,” “it,” or “they” when more than one antecedent is plausible.
- State intermediate reasoning that a novice cannot safely infer. Do not turn every inference into prose for an expert; write at the lesson's declared prerequisite boundary.
- Preview the conceptual route before a dense explanation and close by reconnecting the parts, not by repeating the introduction sentence by sentence.

High cohesion is not the same as low intellectual level. The goal is to expose the structure of a difficult idea, not remove the idea's necessary complexity.

### 4.2 Control terminology

- Introduce a technical term only when the underlying distinction is ready to be named.
- On first use, give the term, its meaning in this lesson, its conditions, and—when useful—a non-example or contrast.
- Flag ordinary words that acquire a narrower scientific meaning, such as “work,” “fitness,” “significant,” “organic,” or “theory.”
- Define every symbol, abbreviation, index, sign convention, and unit before relying on it.
- Prefer the precise common word over ornamental academic language. Retain disciplinary terminology that learners must master; explain it instead of replacing it with an inaccurate simplification.
- Treat readability scores as a warning signal only. Never shorten sentences, delete connectives, or substitute familiar but imprecise words merely to hit a grade-level score.

### 4.3 Explain mechanisms and evidence

- Distinguish description, mechanism, model, correlation, causal claim, convention, and inference.
- For a mechanism, identify relevant entities, changes, interactions, sequence, and constraints.
- For a model, state what question it answers, its assumptions, predictive use, scale, and limits.
- For an empirical claim, connect the claim to the observation or evidence that warrants it and preserve material uncertainty.
- Treat factual, quantitative, definitional, causal, mechanistic, safety, health, standards, and other evidence-dependent teaching statements as material claims. Map them to structured sources and expose that evidence in the scene where the learner encounters or applies the claim.
- Declare a scene as containing no material claims only when it is limited to routing, instructions, reflection, or another non-evidentiary learning action. Repetition in practice, retrieval, synthesis, or transfer does not make a sourced teaching claim cease to be material.
- When several explanations are plausible, say what evidence discriminates among them. Do not present the preferred explanation as inevitable.
- Never imply that a diagram, analogy, simulation, or equation is the phenomenon itself.

### 4.4 Use analogy carefully

An analogy must name:

- the source and target;
- the relations that map;
- the feature the analogy makes easier to see; and
- at least one important place where the mapping fails.

Do not elaborate decorative story details that are not used in the mapping. Retire the analogy once the scientific representation can do the work.

### 4.5 Let length follow meaning

There is no evidence-based universal word count for a scene, paragraph, or lesson. Use the shortest treatment that fully exposes the required model and the longest treatment that remains relevant and coherent.

- Split at a change in instructional purpose, learner action, representation, or resumable idea—not at an arbitrary screen quota.
- Keep a long causal chain together when breaking it would force the learner to reconstruct hidden links.
- Add a descriptive heading when a reader would need one to locate, resume, or summarize a section.
- Move optional enrichment and derivations out of the core route only when the mapped outcome does not depend on them.

## 5. Examples, cases, equations, and representations

### 5.1 Worked examples for initial learning

A worked example must include:

1. the task and what is being asked;
2. the representation of givens, constraints, and unknowns;
3. the principle or model selected and why it fits;
4. an explicit plan;
5. ordered execution with reasons for material steps;
6. units, signs, assumptions, and boundary conditions;
7. an independent check or plausibility test;
8. interpretation of the result in the original context; and
9. a self-explanation prompt about the decision that most strongly determines the solution.

After one or more complete models, fade support through completion problems, partial prompts, and independent problems. Assistance should decline as demonstrated knowledge rises; do not force advanced learners through redundant scaffolding.

### 5.2 Compare cases to reveal structure

- Use at least two cases when a single example could leave the governing feature ambiguous.
- Ask learners to identify the relation shared by analogous cases or the critical feature that distinguishes contrasting cases.
- Vary irrelevant surface features while preserving the target structure.
- Include a near miss or boundary case where discrimination is part of the outcome.
- State the general principle after the learner has inspected the cases, then verify it in another context.

### 5.3 Connect concrete and abstract

When both are useful, move from an interpretable phenomenon or concrete representation to the abstract notation, explicitly map their parts, then apply the abstraction to a different case. A concrete story is not automatically helpful: strip away features that could be mistaken for the general rule.

### 5.4 Coordinate, do not accumulate, representations

Every representation must have a declared instructional job.

- Place explanatory labels and corresponding words next to the part of a figure they explain when the format permits.
- Cue the feature or transition the learner should inspect; do not make the learner search an undifferentiated visual.
- Explain how a change in one representation appears in the others.
- Preserve consistent notation, scale, orientation, color meaning, and naming across scenes.
- Do not add a photograph, animation, character, historical anecdote, or “fun fact” solely to make the page look engaging.
- Do not narrate visible text word for word by default. Accessibility captions and transcripts remain required; learner-controlled alternatives are not “redundant decoration.”

### 5.5 Mathematics and chemistry

- Introduce an equation from a relationship or question, not as an isolated object to memorize.
- Define symbols, units, sign conventions, domain restrictions, and assumptions adjacent to first use.
- Read important expressions in words and interpret the result physically, chemically, or biologically.
- Show why a transformation is permitted in a derivation; do not hide decisive algebra in “after simplification.”
- For chemical equations, balance matter and charge, state physical form and conditions when material, and distinguish equilibrium from one-way change.
- Coordinate macroscopic observation, particulate model, and symbolic notation where the outcome crosses those levels.

## 6. Make the learner generate and retrieve

Interaction counts only when it requires relevant thought. Clicking “next,” revealing definitions immediately, copying a displayed procedure, and decorating a page with controls are not active learning.

### Retrieval checks

- Put the prompt before the answer or explanation.
- Ask for recall, explanation, prediction, discrimination, representation, or a next step—not recognition alone unless discrimination is the construct.
- Make the first attempt low stakes and psychologically safe.
- Give the correct answer and reasoning after an attempt; address likely wrong reasoning, not just the wrong option.
- Revisit high-value knowledge after a delay and in a changed context.
- Use cumulative checks that connect prerequisite and current outcomes.

### Practice progression

Use a deliberate progression:

```text
complete model → completion problem → supported problem → independent problem → mixed selection → transfer
```

- Keep initial tasks close enough to the model for successful schema construction.
- Vary numbers, surface features, representation, and context without silently changing the underlying construct.
- Interleave categories when the learning goal is choosing among confusable strategies or concepts. Block initial practice when the learner is still acquiring each procedure.
- Include enough practice to reveal a pattern of performance; do not infer mastery from one lucky response.
- Ensure retakes require renewed retrieval or reasoning rather than replaying an identical answer sequence.

### Feedback

Useful feedback answers:

1. What was correct or incorrect?
2. Which principle, step, or distinction explains that result?
3. What should the learner do next?

Prefer task, process, and self-regulation information over praise or judgment about the person. Keep feedback close enough to the attempt to repair the model, while allowing a genuine retrieval attempt first.

## 7. Repair misconceptions without caricature

Use a misconception only when sources or strong domain-review evidence show it is common, consequential, or highly plausible from prerequisite knowledge.

A repair sequence must:

1. elicit a prediction or commitment where appropriate;
2. state the incorrect model accurately and neutrally;
3. identify the observation, counterexample, or consequence it cannot explain;
4. supply a more adequate model;
5. compare the models on the same case; and
6. recheck the learner in a new case.

Do not merely label an answer “a common misconception.” Do not shame an intuitive model, invent a straw version, or assume that one contradiction produces durable conceptual change.

## 8. Design for retention and transfer

- Treat retrieval and spacing as properties of the course sequence, not a single end-of-lesson quiz.
- Reuse graph prerequisites as later retrieval opportunities and record delayed links in lesson design.
- Mix problem types only after each type has a usable initial representation.
- Assess the outcome at the level taught: factual recall, conceptual explanation, procedural execution, model selection, data interpretation, or transfer are not interchangeable.
- A transfer task must require selection, adaptation, or coordination in a context not copied from the worked example. Changing only names or numbers is near practice, not genuine transfer.
- Ask learners to explain why an answer follows and when it would change. Correct output without a defensible model is insufficient for conceptual mastery.

## 9. Digital book and print behavior

The canonical source is semantic, not slide-sized.

- A scene is a bounded learning purpose; a frame is an adaptive presentation subdivision.
- Guided mode may reveal a scene in page-like frames. Reading mode must preserve continuous, searchable, selectable prose for sustained study.
- Never delete reasoning to make a frame fit. Split presentation at meaningful subheadings or use bounded local overflow with an obvious continuation.
- Preserve stable progress, headings, source order, backtracking, and the learner's place.
- Keep core explanations available without hover, animation timing, or an online-only interaction.
- Print/PDF export must preserve the complete explanation, prompt conditions, visual equivalents, citations, and answer references even when the interactive presentation differs.

## 10. Epistemic and scholarly integrity

- Verify each material factual claim against the source actually cited; a plausible citation is not evidence.
- Treat evidence and reuse rights as separate checks. Follow `RIGHTS-POLICY.md`: independently synthesize facts in original language and instructional structure rather than closely paraphrasing source expression.
- Record every source use, rights basis and evidence, and dated agent-access state. An agent must not process a source marked `human-only`.
- Prefer primary standards, primary research, systematic reviews, and current scholarly reference works for the claims they can support.
- Use synthesis sources to establish consensus and primary sources for specific findings when practical.
- Record the population, conditions, jurisdiction, model, date/version, and uncertainty that limit a claim.
- Distinguish established consensus, active debate, simplifying model, historical interpretation, and author inference.
- Put qualifications next to the claim they constrain.
- Do not fabricate data, quotations, patients, experiments, citations, worked results, or source access.
- A fictional teaching case must be labelled fictional and must not imply clinical prevalence or diagnostic authority.
- Premed content is educational. It must not direct diagnosis, treatment, unsafe self-experimentation, ingestion, pathogen culture, or circumvention of professional supervision.

## 11. Accessibility is part of the explanation

- Use a logical heading hierarchy and semantic source order.
- Explain uncommon jargon and abbreviations at first use.
- Give complex figures a short identification and an outcome-equivalent long description; provide data tables for quantitative charts.
- Express important equations and chemical relationships in words as well as notation.
- Never encode a distinction only by color, position, sound, motion, hover, pointer gesture, or time.
- Provide keyboard and non-drag routes for interactions, captions and transcripts for media, and non-physical alternatives for practical work where appropriate.
- Use descriptive references such as “the increase from pH 4 to pH 5” rather than “the green line on the right” as the only locator.
- Test at 200% zoom, reflow, narrow viewport, keyboard-only use, reduced motion, and representative screen-reader navigation.

An alternative must preserve the learning operation, not merely announce that a visual or interaction exists.

## 12. Required agent workflow

An authoring agent must complete these phases in order.

### Phase A — Ground

1. Read `llms.txt`, this standard, the format and pack guides, `RIGHTS-POLICY.md`, the graph outcome, schemas, and current quorum policy.
2. Confirm the outcome is uncovered and unclaimed.
3. Build the authoring brief and a source dossier with exact support, scope, uncertainty, version, use type, rights basis/evidence, and agent-access terms.
4. Identify the prerequisite route and high-value learner difficulties from evidence; do not invent “common misconceptions.”

### Phase B — Design

1. Write the target explanatory model in a few precise propositions.
2. Choose an anchor phenomenon or task and the smallest set of representations that reveal the model.
3. Design the worked example, faded practice sequence, transfer task, retrieval schedule, feedback, and recovery routes before polishing prose.
4. Map every objective to scenes and assessment evidence.
5. Choose the smallest instructional arc that can teach and assess the outcome. Do not turn the nine functional stages into nine compulsory scenes or repeat the same explanation to satisfy multiple checklist labels.

### Phase C — Draft

1. Draft a learner-visible prototype containing the opening, core causal or relational explanation, and one worked use before constructing the rest of the pack.
2. Run the first-read gate above in a fresh context where possible. Repair the prototype before multiplying its voice across scenes, practice, ledgers, and assessment.
3. Add definitions, representations, examples, qualifications, and sources where they reduce a real learner inference gap.
4. Add prompts before explanations they are intended to retrieve.
5. Keep essential content in canonical source, not styling or interaction state.

### Phase D — Challenge

Run four separate self-audits before requesting independent review:

- **Academic:** recompute results; check terminology, scope, current consensus, citations, safety, and all representations against each other.
- **Learning:** attempt every prompt as the declared learner; inspect prerequisite gaps, hidden steps, scaffolding, feedback, misconception repair, spacing, and transfer.
- **Clarity:** read learner-visible scenes without metadata or ledgers; remove irrelevant detail and rubric leakage; replace compressed abstraction with concrete meaning; repair ambiguous referents and terminology drift; expose causal links; read representative passages aloud; and check long-form continuity.
- **Accessibility and rights:** verify equivalent meaning and operation, reflow, navigation, original synthesis versus close paraphrase, source-use and agent-access declarations, asset provenance, licence, privacy, and non-clinical boundaries.

Self-audit does not create a review artifact or count toward quorum.

### Phase E — Validate and freeze

1. Resolve schema, link, rendering, overflow, accessibility, and deterministic-build failures.
2. Verify that the candidate satisfies every gate below.
3. Freeze one candidate commit and record provenance before independent review begins.
4. Never manufacture approvals, adjudication, learner results, or evidence of effectiveness.

## 13. Acceptance gates

Every standard lesson must pass all applicable gates. A reviewer records evidence and a concrete revision, not a vague quality score.

| Gate | Pass evidence | Blocking failure |
|---|---|---|
| Alignment | Outcomes, objectives, instruction, practice, and assessment describe the same performance. | Content or assessment drifts beyond the mapped outcome. |
| Human first read | A cold reader at the declared level can explain what the lesson teaches, why it matters, and how the central idea works; the opening and examples use natural, concrete language without hidden project machinery. | The prose is grammatically valid but opaque, bureaucratic, needlessly abstract, validator-facing, or dependent on unexplained internal vocabulary. |
| Learner model | Declared level, prerequisites, diagnostic, and recovery route are usable. | Hidden prerequisites or no recovery path. |
| Coherence | The central model forms a connected causal, relational, or procedural argument. | Fact list, unexplained jumps, or terminology drift. |
| Accuracy | Claims, calculations, notation, representations, and boundaries agree with verified sources. | Material error, unsupported claim, or fabricated source. |
| Model use | At least one complete worked example exposes selection, reasons, checks, and interpretation. | Answer-only demonstration or unguided initial problem solving. |
| Discrimination | Examples, non-examples, boundaries, or misconception repair reveal the governing distinction. | One example is treated as the rule or misconception is merely labelled. |
| Generation | Learners retrieve, explain, predict, compare, calculate, interpret, or construct before feedback. | Interaction is passive reveal or copying. |
| Practice | Support fades; tasks vary; feedback diagnoses reasoning; retry and remediation exist. | Single attempt, answer-only feedback, or no route after error. |
| Transfer | A novel bounded task requires selecting or adapting the model. | Only names or numbers change. |
| Retention | Delayed/cumulative retrieval connections are identified. | All practice is immediate and isolated. |
| Representation | Each visual/symbolic form has a job and is explicitly connected to the others. | Decorative media, split attention, or inconsistent notation. |
| Accessibility | Equivalent meaning and operation survive nonvisual, keyboard, zoom/reflow, print, and reduced-motion paths. | Outcome depends on one sensory or motor channel. |
| Epistemics | Evidence type, scope, uncertainty, version, and educational/clinical boundary are visible. | False certainty, authority laundering, or unsafe implication. |
| Rights and provenance | Authorship, agent runs, original synthesis, source uses, agent-access terms, assets, licences, modifications, and rights evidence are complete. | Close paraphrase, unknown origin, incompatible rights, prohibited agent access, or undisclosed material agent use. |

## 14. Prohibited shortcuts

Do not:

- tailor instruction to unsupported “visual,” “auditory,” or “kinesthetic” learning-style labels;
- equate shorter prose, more pictures, more interaction, or more entertainment with better learning;
- use unguided discovery as the default for a novice's first encounter with a complex model;
- use decorative detail to manufacture interest;
- make readability grade level, word count, frame count, or completion rate the learning target;
- convert exposition into fragments that no longer form a coherent explanation;
- confuse density, abstraction, or institutional tone with rigor;
- expose the authoring checklist, internal graph machinery, evidence ledger, or governance workflow as if it were the lesson;
- mechanically create one scene for every stage of the instructional arc or repeat the same point under several rubric headings;
- present a formula, diagram, or mnemonic without meaning, conditions, and use;
- call repeated exposure “retrieval practice”;
- call a changed number a transfer task;
- call a bibliography a claim-evidence map;
- call validation, agent self-critique, or model agreement evidence that students learned.

## 15. Evidence basis and revision

This standard is based on the dated rapid evidence synthesis in [`research/CONTENT-AUTHORING-EVIDENCE-2026-07-19.md`](research/CONTENT-AUTHORING-EVIDENCE-2026-07-19.md). The strongest recurring support concerns explicit novice guidance, coherent text, worked examples, retrieval practice, spacing, feedback, relevant and integrated representations, active generation, and misconception repair. Interleaving, prequestions, multiple representations, emotional design, concept maps, and digital pagination are useful under identifiable conditions rather than universal mandates.

Educational research is heterogeneous and does not establish a single optimal textbook recipe. This standard therefore separates durable defaults from context-sensitive choices, requires declared learners and outcomes, and treats real learner testing as the next evidentiary layer. Revise the standard when stronger syntheses, Premed learner data, accessibility findings, or format capabilities warrant a change; preserve the reason and evidence for each material revision.
