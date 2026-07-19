# Premed Curriculum Implementation Map

**Companion to:** `PREMED-SYLLABUS.md` version 1.0 candidate<br>
**Purpose:** registrar/editor crosswalk for sequencing, assessment coverage, and content production<br>
**Not the visual knowledge graph:** the site graph may render these stable IDs and relationships differently.

> **Boundary.** This is educational preparation only. It is **not** a degree, academic credit, admission guarantee, medical qualification, or medical advice. Enumerating a medical curriculum does not confer clinical authority; nothing here should be used to make a decision about a real patient, including yourself.

## 1. Node contract

Every implemented topic node must contain:

| Field | Requirement |
|---|---|
| Stable ID | Exact syllabus topic ID; never recycle an ID for a different outcome. |
| Title and one-sentence purpose | Learner-readable, medicine relevance accurate and non-sensational. |
| Status | `PORTABLE-CORE`, `EK-BRIDGE`, `PATHWAY-US`, `PATHWAY-UK`, `PATHWAY-ES`, `PATHWAY-BIO`, `PATHWAY-QNT`, or `ONRAMP`. |
| Prerequisites | Topic or module IDs that must be at least `P`; mark `hard` or `recommended`. |
| Measurable outcome | Observable verb plus scope, representations, and expected depth. |
| Exclusions | At least one boundary when learners may reasonably overgeneralize the node. |
| Representations | Applicable set: verbal, symbolic, equation, graph, table, particle, mechanism, pathway, image, causal model. |
| Learning evidence | acquisition resource, retrieval prompts, worked examples, independent problems, transfer task. |
| Assessment evidence | gate item family, rubric dimensions, misconception traps, retention task. |
| Practical link | relevant `LAB-*` family and valid modality, or `none`. |
| Source alignment | exact source/version and whether it supports scope, depth, practice, or route only. |
| Rights and accessibility | asset-level rights entry; transcript/alt text/math/keyboard status. |
| Stewardship | named domain owner, last review, next review, open flags, version. |

The graph may show progress by node. It must not infer prerequisite mastery from time spent, resource completion, or confidence alone.

## 2. Module registry

| Order | Module | Status | Hard prerequisites | May co-study | Direct downstream modules | Principal gate evidence |
|---:|---|---|---|---|---|---|
| 0 | `ONR-000` | ONRAMP | entry diagnostic prescription | — | all 100-level | station retry and two-week study cycle |
| 1 | `QRS-100` | PORTABLE-CORE | selected `ONR-*` | all disciplines after foundations | every later module | multi-figure study critique |
| 2 | `CHE-110` | PORTABLE-CORE | `QRS-101`–`104` | `BIO-110` | `CHE-120`, `BIO-110` | unknown-material evidence argument |
| 3 | `BIO-110` | PORTABLE-CORE | entry bio primer or diagnostic | `CHE-110` | `BIO-120`, `BCH-220` | unfamiliar transport disorder |
| 4 | `CHE-120` | PORTABLE-CORE | `CHE-110`, `QRS-102` | `BIO-120`, `PHY-110` | `CHE-130`, `BIO-120` | microscale synthesis audit |
| 5 | `BIO-120` | PORTABLE-CORE | `BIO-110` | `CHE-120` | `BIO-130`, `BCH-210` | enzyme/cell-cycle experiment |
| 6 | `PHY-110` | PORTABLE-CORE | `QRS-101`–`103` | `CHE-120`, `BIO-120` | `PHY-120`–`150`, `MED-315` | movement model validation |
| 7 | `CHE-130` | PORTABLE-CORE | `CHE-120` | `BIO-130`, `PHY-120` | `CHE-140`, `PHY-150` | gas/solution/thermal model |
| 8 | `BIO-130` | PORTABLE-CORE | `BIO-120`, `QRS-107` | `CHE-130` | `BIO-140`, pathways | multi-level trait evidence |
| 9 | `PHY-120` | PORTABLE-CORE | `PHY-110` | `CHE-130` | `MED-316`–`318` | branching-flow model |
| 10 | `CHE-140` | PORTABLE-CORE | `CHE-130`, `QRS-102` | `BIO-140`, `PHY-130` | `ORG-210`, `BCH-210` | unknown acid/base system |
| 11 | `BIO-140` | PORTABLE-CORE | `BIO-130` | `CHE-140` | `BIO-150`, `BCH-240` | molecular strategy/design |
| 12 | `PHY-130` | PORTABLE-CORE | `PHY-110`, `QRS-102/103` | `CHE-140` | `ORG-230`, medicine bridge | wave/optical measurement system |
| 13 | `BIO-150` | PORTABLE-CORE | `BIO-140` | `PHY-140` | `MED-330` | resistance scenario investigation |
| 14 | `PHY-140` | PORTABLE-CORE | `PHY-110`, recommended `CHE-140` | `BIO-150`, `ORG-210` | medicine bridge | circuit diagnosis and safety |
| 15 | `ORG-210` | PORTABLE-CORE | `CHE-140`, `BIO-110` | `PHY-140/150` | `ORG-220`, `BCH-210` | structure/reactivity inference |
| 16 | `PHY-150` | PORTABLE-CORE | `CHE-130`, `PHY-130` | `ORG-210` | medicine bridge | radiation/thermal communication |
| 17 | `ORG-220` | PORTABLE-CORE | `ORG-210` | `BCH-210` | `ORG-230`, `BCH-220` | bounded reaction network |
| 18 | `BCH-210` | PORTABLE-CORE | `BIO-120`, `CHE-140`, `ORG-210` | `ORG-220` | `BCH-220/230` | protein-function evidence |
| 19 | `ORG-230` | PORTABLE-CORE | `ORG-220`, `PHY-130` | `BCH-220` | research evidence nodes | structure elucidation |
| 20 | `BCH-220` | PORTABLE-CORE | `BCH-210`, `ORG-220` | `ORG-230` | `BCH-230`, `MED-310` | membrane/storage problem |
| 21 | `BCH-230` | PORTABLE-CORE | `BCH-210/220`, `CHE-140` | — | `BCH-240`, `MED-320` | metabolic perturbation |
| 22 | `BCH-240` | PORTABLE-CORE | `BIO-140`, `BCH-230` | — | `MED-330` | multi-panel causal mechanism |
| 23 | `MED-310` | EK-BRIDGE | Biology 100-level, `PHY-120`, `BCH-220` | pathways | `MED-320`, `INT-305` | homeostatic perturbation |
| 24 | `MED-320` | EK-BRIDGE | `MED-310`, `BCH-230` | `MED-330` | `INT-305` | time-resolved integration |
| 25 | `MED-330` | EK-BRIDGE | `BIO-150`, `BCH-240` | `MED-320` | `INT-305/306` | infection/immune evidence packet |
| 26 | `INT-300` | PORTABLE-CORE | staged triggers | all stages | `CAP-400` | six cross-domain artefacts |
| 27 | one `PW-*` | PATHWAY | pathway-dependent; most core completed | medicine bridge | `CAP-400` | route-specific gate and current audit |
| 28 | `CAP-400` | PORTABLE-CORE | all required gates, pathway near complete | — | later medical sciences | reproducible synthesis and defence |

## 3. Hard dependency chains

These chains are used by the mastery tracker to prevent superficially advanced progress from hiding a foundational gap.

```text
units/algebra -> stoichiometry -> solutions -> equilibrium/pH -> amino-acid charge -> enzyme/metabolic regulation

bonding/IMFs -> membrane chemistry -> transport/gradients -> membrane potential -> neural/cardiovascular/renal physiology

cell division -> meiosis -> heredity -> DNA information flow -> molecular methods -> biochemical regulation

energy/forces -> fluids/pressure -> cardiovascular/respiratory models -> integrated homeostasis

waves/optics -> spectroscopy/microscopy -> structure evidence -> research-figure appraisal

probability -> genetic inference -> diagnostic test reasoning -> evidence communication

experimental design -> practical controls -> causal inference -> integration studios -> capstone
```

“Hard” means later assessment assumes the earlier representation or operation. Editors can introduce motivating previews before mastery, but a learner cannot earn downstream `M` while the hard dependency remains below `P`.

## 4. Cross-domain integration edges

| From | To | Relationship learners must demonstrate |
|---|---|---|
| `CHE-122` intermolecular forces | `BIO-114`, `BCH-223` membranes | molecular interaction explains assembly, fluidity, and permeability |
| `CHE-133` solutions | `BIO-115`, `MED-318` | concentration/osmolarity models predict water and solute movement |
| `CHE-144/145` pH/buffers | `BCH-211/214`, `MED-317/318` | proton state alters proteins; organ systems contribute to acid-base regulation |
| `CHE-136` free energy | `BIO-121`, `BCH-231` | spontaneity, coupling, and cellular work share one thermodynamic account |
| `CHE-146` redox | `BCH-231/235` | electron potentials and carriers underlie respiratory energy conversion |
| `BIO-114` gradients | `PHY-143`, `MED-313` | membranes combine chemical and electrical driving forces and capacitance |
| `BIO-122` enzymes | `BCH-214/215` | qualitative rate/regulation becomes quantitative biochemical evidence |
| `BIO-126` meiosis | `BIO-131/133` | chromosome behavior produces inheritance patterns and aneuploidy |
| `BIO-143/144` expression | `BCH-241/244` | information processing and regulation link variant to cellular phenotype |
| `PHY-115` torque | `MED-315` | mechanical advantage and force apply to muscles and joints with model limits |
| `PHY-123` fluid resistance | `MED-316/317` | radius, pressure, viscosity, and branching constrain transport models |
| `PHY-133` sound | `MED-313`, pathway behaviour | waves become sensory transduction only after physiological processing |
| `PHY-134/135` optics | `BIO-117`, `ORG-233` | instrument evidence depends on light-matter interaction and resolution |
| `PHY-153/154` radiation | `MED` imaging contexts | physical signal/dose must be separated from clinical interpretation |
| `ORG-214` stereochemistry | `BCH-211/221` | three-dimensional molecular identity affects biochemical recognition |
| `ORG-224/225` mechanisms | `BCH-221/222/232` | biomolecular bonds and metabolic reactions are organic chemistry in context |
| `BCH-213` oxygen binding | `MED-316/317` | molecular binding, transport, partial pressure, and flow jointly determine delivery |
| `BCH-230` metabolism | `MED-320` | tissue/organ context regulates fuel selection rather than merely listing pathways |
| `BIO-150` evolution | `MED-334` | pathogen/resistance change is population evolution, not individual adaptation |
| `QRS-107` Bayes reasoning | `MED-336` | test meaning depends on pretest prevalence and conditional probabilities |
| `QRS-105/108` design/inference | every bridge case | the strength of a health claim depends on design and uncertainty, not plausibility alone |

## 5. Program outcome coverage

`I` = introduced, `D` = developed, `M` = principal mastery evidence, `T` = transfer evidence.

| PLO | Primary modules | Coverage progression |
|---|---|---|
| `PLO-01` molecular interactions | `CHE-110`–`140`, `ORG-210`, `BCH-220` | I → D → M → T in `INT-301/304` |
| `PLO-02` cells as systems | `BIO-110/120/150`, `BCH-240` | I → D → M → T in `MED-330` |
| `PLO-03` genetic information | `BIO-130/140`, `BCH-240` | I → D/M → T in `INT-304` or capstone |
| `PLO-04` enzymes/metabolism | `BIO-120`, `BCH-210/230` | I → D → M → T in `MED-320` |
| `PLO-05` organic chemistry | `ORG-210/220/230`, `BCH-210/220` | I → D/M → T in `INT-304` |
| `PLO-06` physics | `PHY-110`–`150` | I/D/M across sequence → T in `INT-303` |
| `PLO-07` homeostasis | `MED-310/320` | I/D/M → T in `INT-305` |
| `PLO-08` immunity/biotech | `BIO-140/150`, `MED-330` | I → D → M/T |
| `PLO-09` study design | `QRS-105`, every lab, `CAP-401` | I → D → M in `LAB-14` → T in capstone |
| `PLO-10` quantitative reasoning | `QRS-100`, all science modules | I/D distributed → M in QRS gate → T in capstone |
| `PLO-11` representations | all modules, `ORG-230` | I/D distributed → M in gate portfolio → T in studios |
| `PLO-12` evidence quality | `QRS-108/110/111`, labs | I/D → M in paper portfolio → T in capstone |
| `PLO-13` reproducibility | `QRS-112`, labs, capstone | I → D → M/T in capstone package |
| `PLO-14` integration | `INT-300`, bridge, capstone | I/D in studios → M/T in capstone |
| `PLO-15` paper reading | `QRS-111`, six appraisals | I → D → M in portfolio → T in capstone |
| `PLO-16` communication | every gate, studios, capstone | I/D distributed → M/T in dual-audience capstone |
| `PLO-17` advice boundary | bridge cases and public artefacts | I/D → M in `MED-330` → T in capstone |
| `PLO-18` self-regulation | `ONR-007`, weekly cycle, remediation | I → D/M in error log → T in final maintenance plan |

## 6. Practical-to-content crosswalk

| Lab family | Primary content nodes | QRS nodes | Downstream use |
|---|---|---|---|
| `LAB-01` calibration/density | `CHE-112`, `PHY` measurements | `QRS-101/104/109` | every quantitative practical |
| `LAB-02` solution/reaction | `CHE-124/125` | `QRS-101/112` | `CHE-133`, biochemistry standards |
| `LAB-03` calorimetry | `CHE-135`, `PHY-151` | `QRS-103/104` | energy accounting |
| `LAB-04` kinetics/equilibrium | `CHE-141/142`, `BIO-122` | `QRS-103/105/108` | enzyme/metabolism interpretation |
| `LAB-05` acid/base | `CHE-143`–`145` | `QRS-102/104/109` | protein charge, physiology |
| `LAB-06` membranes | `BIO-114/115`, `BCH-223` | `QRS-105/108` | renal/neural homeostasis |
| `LAB-07` microscopy | `BIO-113/117` | `QRS-104/109/112` | tissue/histology evidence |
| `LAB-08` enzyme | `BIO-122`, `BCH-214/215` | `QRS-103/105/108` | metabolic regulation |
| `LAB-09` molecular/genetic | `BIO-131/146` | `QRS-107/108/112` | biotech/immunity |
| `LAB-10` mechanics | `PHY-111`–`115` | `QRS-101/103/104` | musculoskeletal bridge |
| `LAB-11` physical system | `PHY-121`–`145` | `QRS-102/104/110` | organ transport/instrumentation |
| `LAB-12` separation/spectra | `ORG-231`–`236`, `BCH-216` | `QRS-109/111` | molecular evidence |
| `LAB-13` physiology | `MED-310/320` | `QRS-104/105/108`, privacy | integrated homeostasis |
| `LAB-14` inquiry | learner-selected | all `QRS` | capstone readiness |

## 7. Assessment minimum map

Every required topic must be sampled at least once independently and once after spacing. For content production, each topic-node package requires at minimum:

- 8 retrieval prompts: 3 direct, 2 discrimination, 2 representation translation, 1 misconception check;
- 4 worked examples with faded support;
- 6 independent problems: 2 familiar, 2 varied, 1 data/design, 1 transfer;
- 2 delayed variants that cannot be solved by remembering surface wording;
- 1 gate item family with at least 3 equivalent forms;
- 1 explanation rubric anchor at mastery level and 1 authentic non-example;
- practical linkage where material, with a safe non-physical alternative;
- 1 downstream case or explicit statement that the node is terminal within Premed.

The item bank should not be auto-generated into production without content review, answer verification, accessibility review, and form-difficulty monitoring.

## 8. Editorial production order

Build in dependency slices so early learners can begin studying before the whole program exists:

1. `QRS-101`–`104`, `CHE-110`, `BIO-110`, `INT-301`.
2. `CHE-120`, `BIO-120`, `PHY-110`, Labs 1/2/6/8/10.
3. `CHE-130/140`, `BIO-130/140`, `PHY-120/130`, `INT-302/303`.
4. `BIO-150`, `PHY-140/150`, `ORG-210/220`.
5. `BCH-210/220`, `ORG-230`, `BCH-230/240`, `INT-304`.
6. `MED-310/320/330`, `INT-305`.
7. Highest-priority learner pathway, then `INT-306` and `CAP-400`.

Each slice ships only after its gates, source ledger, progress events, and remediation branches work end to end. A visible graph with empty content is a planning artefact; it is not a teachable module.

## 9. Definition of curriculum-complete

The syllabus skeleton is curriculum-complete when every required module and pathway has outcomes, order, depth, exclusions, assessment, workload, and source alignment. An implemented course is complete only when every required topic satisfies the node contract, all gates and practical alternatives pass review, learner progress can be exported, and a pilot cohort has produced evidence that the prerequisite and remediation paths function.
