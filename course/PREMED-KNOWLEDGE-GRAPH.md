# Premed Knowledge Graph

**Version:** 1.1 candidate · 20 July 2026
**Dataset:** [`site/data/premed-graph.json`](../site/data/premed-graph.json)
**Canonical builder:** [`scripts/build-premed-graph.mjs`](../scripts/build-premed-graph.mjs)
**Validator:** [`scripts/validate-premed-graph.mjs`](../scripts/validate-premed-graph.mjs)

> **Boundary.** This is educational preparation only. It is **not** a degree, academic credit, admission guarantee, medical qualification, or medical advice. Enumerating a medical curriculum does not confer clinical authority; nothing here should be used to make a decision about a real patient, including yourself.

The Premed knowledge graph is the machine-readable companion to [`PREMED-SYLLABUS.md`](PREMED-SYLLABUS.md). It turns the syllabus into navigable domains, fine-grained modules, observable topic outcomes, prerequisites, conceptual cross-links, route labels, workload estimates, and evidence tags.

It is deliberately more granular than the teaching syllabus. The syllabus's stable IDs (`CHE-110`, `BIO-120`, `MED-310`, and so on) identify assessable teaching modules; graph IDs such as `module-acids-bases` and `topic-acids-bases-buffers` identify concepts that can be visualized and tracked independently. Every graph module and topic carries `syllabusModuleIds` to connect the two layers.

## 1. What the graph contains

| Layer | Count | Purpose |
|---|---:|---|
| Domains | 10 | Broad visual and curricular regions |
| Modules | 46 | Coherent concept clusters, finer than syllabus modules |
| Topics | 388 | Observable learning outcomes and mastery units |
| All nodes | 444 | Domains + modules + topics |
| Hierarchy links | 434 | Domain → module and module → topic containment |
| Prerequisite links | 590 | Directed learning dependencies |
| Cross-links | 34 | High-value conceptual connections that do not impose order |
| All links | 1,058 | The complete interactive graph |

The sum of every topic estimate is **1,551 hours**. That number is an all-branches graph inventory, not a completion promise: it includes the welcome, every route-specific topic, broad biology, calculus, and the entire medicine bridge. A learner follows a selected subgraph. The syllabus defines the official workload and completion rules; the graph's `estimatedHours` is for planning, progress, and relative scope.

Coverage by requirement label:

| Requirement | Topics | Graph hours | Meaning |
|---|---:|---:|---|
| `portable-core` | 213 | 810.5 | Course welcome plus the high-confidence cross-system academic spine |
| `medicine-bridge` | 127 | 560 | Deliberate EmbeddedKnowledge bridge toward medical science; not a universal entrant minimum |
| `pathway` | 48 | 180.5 | Route-specific or broad-literacy content |

## 2. Data contract

The top-level object is stable at schema version `2.0.0`:

```json
{
  "schemaVersion": "2.0.0",
  "course": {},
  "schema": {},
  "pathways": [],
  "sources": [],
  "nodes": [],
  "links": [],
  "metrics": {}
}
```

The landing page can depend on the deliberately small common surface:

```json
{
  "nodes": [
    {
      "id": "topic-acids-bases-buffers",
      "title": "Buffers",
      "domain": "domain-general-chemistry",
      "summary": "Explain buffer action and calculate composition, pH, capacity, and response to added acid or base.",
      "level": "college-intro",
      "module": "module-acids-bases",
      "estimatedHours": 5,
      "pathway": ["portable-core", "us-mcat"]
    }
  ],
  "links": [
    {
      "source": "topic-acids-bases-weak-acid-base",
      "target": "topic-acids-bases-buffers",
      "type": "prerequisite"
    }
  ]
}
```

### Node kinds

- `domain` is a visual grouping. A domain contains modules but carries no mastery state of its own.
- `module` is a graph-scale concept cluster. It has a stable `PREM-##` code and one or more mappings to the syllabus.
- `topic` is the atomic mastery unit. Its `summary` and `outcome` are the same observable learning statement in UI-friendly and curriculum-friendly fields.

All nodes expose `id`, `kind`, `title`, `label`, `summary`, `domain`, `subject`, `estimatedHours`, and `pathway`. Modules and topics also expose:

| Field | Meaning |
|---|---|
| `code` | Human-readable stable code; topic codes extend their graph module code |
| `module` / `moduleId` | Parent module ID for topics; self ID for modules |
| `syllabusModuleIds` | Corresponding assessable module(s) in `PREMED-SYLLABUS.md` |
| `level` | `foundation`, `secondary`, `college-intro`, `first-semester`, or `bridge` |
| `requirement` | `portable-core`, `medicine-bridge`, `pathway`, `on-ramp`, or `enrichment` |
| `core` | Convenience boolean; true only for `portable-core` |
| `evidenceConfidence` | Confidence in curricular placement, not confidence that every institution requires it |
| `sourceTags` | Keys into the top-level source registry |
| `prerequisites` | Ordered-learning dependency IDs, mirrored as links |
| `crossLinks` | Related topic IDs, mirrored as symmetric semantic links |

### Link semantics

| Type | Direction | Interpretation |
|---|---|---|
| `contains` | Parent → child | Domain contains module, or module contains topic |
| `prerequisite` | Prerequisite → dependent | The source should normally be mastered before the target |
| `cross-link` | Canonicalized but conceptually undirected | The concepts illuminate one another; no study order is implied |

Prerequisite links form a directed acyclic graph. Cross-links may close loops and are intentionally excluded from topological ordering.

## 3. Identity and versioning rules

IDs are lowercase kebab-case and describe curricular meaning, not screen position. Once published, an ID must not be silently reused for another concept.

1. A wording improvement keeps the existing ID.
2. A concept split creates new child IDs and records the retired ID in a migration note.
3. A concept merge chooses one surviving ID only when the learning outcome is materially identical; otherwise it creates a new ID.
4. Renaming a domain or moving a topic between modules does not require changing the topic ID unless the ID itself becomes false.
5. Breaking structural or semantic changes increment `schemaVersion`; ordinary topic additions increment the curriculum version, not the JSON schema.
6. Mastery records should key on topic `id`, never array index, title, or visual coordinates.

The builder is canonical because it keeps compact declarations, derived hierarchy, aliases, totals, and links consistent. Do not hand-edit the generated JSON. Edit the builder, regenerate, and validate.

```bash
node scripts/build-premed-graph.mjs
node scripts/validate-premed-graph.mjs
```

## 4. Domain and syllabus mapping

The graph's 46 modules give the interface enough resolution to show meaningful dependencies. They map onto the syllabus's larger teaching blocks as follows.

| Graph code | Graph module | Syllabus module(s) |
|---|---|---|
| `PREM-01` | Welcome to Premed | `WEL-000` |
| `PREM-02` | Scientific Inquiry | `QRS-100` |
| `PREM-03` | Quantitative Foundations | `QRS-100` |
| `PREM-04` | Statistics & Data | `QRS-100` |
| `PREM-05` | Calculus Extension | `PW-QNT` |
| `PREM-06` | Cell Biology | `BIO-110`, `BIO-120` |
| `PREM-07` | Molecular Genetics | `BIO-130`, `BIO-140`, `BCH-240` |
| `PREM-08` | Evolution | `BIO-150`, `PW-BIO` |
| `PREM-09` | Ecology & Plant Biology | `PW-BIO` |
| `PREM-10` | Biomolecules | `BIO-110`, `BCH-210`, `BCH-220` |
| `PREM-11` | Enzymes | `BIO-120`, `BCH-210` |
| `PREM-12` | Metabolism & Bioenergetics | `BIO-120`, `BCH-230`, `BCH-240` |
| `PREM-13` | Atomic Structure & Periodicity | `CHE-110` |
| `PREM-14` | Bonding & Molecular Structure | `CHE-120` |
| `PREM-15` | Stoichiometry & Reactions | `CHE-120` |
| `PREM-16` | States, Gases & Solutions | `CHE-130` |
| `PREM-17` | Thermodynamics, Kinetics & Equilibrium | `CHE-130`, `CHE-140` |
| `PREM-18` | Acids, Bases & Buffers | `CHE-140` |
| `PREM-19` | Redox & Electrochemistry | `CHE-140` |
| `PREM-20` | Organic Foundations | `ORG-210` |
| `PREM-21` | Organic Reactivity | `ORG-220` |
| `PREM-22` | Carbonyls & Biological Organic Chemistry | `ORG-220`, `BCH-220` |
| `PREM-23` | Separation & Structure Analysis | `ORG-230` |
| `PREM-24` | Laboratory Practice | `QRS-100`, `INT-300` |
| `PREM-25` | Mechanics | `PHY-110` |
| `PREM-26` | Fluids | `PHY-120` |
| `PREM-27` | Thermal Physics & Gases | `PHY-150` |
| `PREM-28` | Electricity & Magnetism | `PHY-140` |
| `PREM-29` | Waves & Sound | `PHY-130` |
| `PREM-30` | Optics | `PHY-130` |
| `PREM-31` | Atomic & Nuclear Physics | `PHY-150` |
| `PREM-32` | Anatomy, Homeostasis & Tissues | `MED-310` |
| `PREM-33` | Nervous System | `MED-310` |
| `PREM-34` | Endocrine System | `MED-310`, `MED-320` |
| `PREM-35` | Cardiovascular System | `MED-310` |
| `PREM-36` | Respiratory System | `MED-310` |
| `PREM-37` | Renal System | `MED-310` |
| `PREM-38` | Digestive System | `MED-320` |
| `PREM-39` | Musculoskeletal System | `MED-310`, `MED-320` |
| `PREM-40` | Reproduction & Development | `MED-320` |
| `PREM-41` | Immunity | `MED-330` |
| `PREM-42` | Microbiology | `BIO-150`, `MED-330` |
| `PREM-43` | Psychology | `PW-US`, `INT-300` |
| `PREM-44` | Sociology & Health | `PW-US`, `INT-300` |
| `PREM-45` | Critical Reading & Argument | `PW-US`, `QRS-100` |
| `PREM-46` | Integrative Capstones | `INT-300`, `CAP-400` |

This is a many-to-many mapping by design. For example, the graph's `module-molecular-genetics` spans heredity, molecular control, and biochemical information flow, which the teaching sequence revisits in `BIO-130`, `BIO-140`, and `BCH-240`.

### 4.1 Version 1.1 opening-sequence migration

The version 1.1 candidate retires `module-orientation`, `module-study-research-literacy`, `module-professional-behaviours`, and their 17 topic IDs. No production lesson or repository learner-mastery record used those IDs when they were retired. The focused `module-welcome` and `topic-welcome-course-journey` now precede `module-scientific-inquiry`; Scientific Inquiry is the first instructional module. Because `PREM-##` is a human-readable display sequence rather than the mastery key, retained modules receive new sequential codes while their stable `module-*` and `topic-*` IDs remain unchanged. Removing published graph identities is a breaking semantic change, so the graph schema version advances to `2.0.0` even though the JSON field structure is unchanged.

## 5. Pathways and honest scope

Pathway labels are filters, not admissions claims. A topic can belong to more than one pathway.

### 5.1 The route resolution rule

There is exactly one rule for deciding which topics a route contains:

> **A route's effective topic set is the union of the topics carrying that route tag and every `portable-core` topic.** `portable-core` resolves to exactly its own tagged set.

Two corollaries follow, and both are load-bearing:

1. **`sourceTags` never determine route membership.** They record which evidence families justify a topic's placement. A topic can carry `AAMC-MCAT` because the MCAT outline covers that material while its `pathway` array omits `us-mcat` because it already arrives through `portable-core` — 101 of the 388 topics are in exactly that position, including all of `PREM-13` Atomic Structure & Periodicity. Filtering on source tags instead of the rule above would hide general chemistry from an MCAT learner. Conversely, the ten `PREM-03` Quantitative Foundations topics sit in `us-mcat` under the `AAMC-MATH` source rather than `AAMC-MCAT`; a missing `AAMC-MCAT` tag is not an exclusion. One topic — `topic-organic-reactivity-multistep-synthesis` — inherits its module's `AAMC-MCAT` tag but is deliberately excluded from `us-mcat`, because extended synthesis is outside the MCAT; the rule above resolves this correctly and source tags must not override it.
2. The builder publishes the rule and its results so no consumer has to re-derive them: `schema.routeResolutionRule`, `pathways[].includesPortableCore`, and `metrics.routeTopicCounts` (with `tagged`, `effective`, and `estimatedHours` per route).

### 5.2 Route table

| Graph pathway | Syllabus route | Scope rule |
|---|---|---|
| `portable-core` | Common core | Adjudicated high-confidence academic spine; not a claim that every school legally requires every item |
| `medicine-bridge` | `MED-310`–`MED-330`, `INT-300` | EmbeddedKnowledge design choice for readiness; anatomy and full organ integration are not universal entrant requirements |
| `us-mcat` | `PW-US` | AAMC MCAT content and reasoning alignment; individual medical schools retain their own prerequisites |
| `uk-direct-entry` | `PW-UK` (**tag only — route not instrumented**) | A-level and Access orientation; UK subject rules remain institution-specific |
| `spain-bach-pau` | `PW-ES` (**tag only — route not instrumented**) | Bachillerato science coverage and PAU orientation; weightings remain annual and university-specific |
| `continental-science` | `PW-ES` (**tag only — route not instrumented**) | French/German and related secondary-science extensions; no claim that all entrants took every science |
| `access-foundation` | `ONR-000`, `PW-UK` | Novice entry, scientific inquiry, laboratory literacy, and numeracy |
| `broad-biology` | `PW-BIO` | Evolution, ecology, and plant science retained for biological literacy |
| `advanced-quantitative` | `PW-QNT` | Calculus and mathematical extensions explicitly outside the MCAT minimum |

> **Instrumentation limitation (curriculum version 1.1).** The syllabus defines five routes; only `PW-US`, `PW-BIO` and `PW-QNT` are instrumented here. **`PW-UK` and `PW-ES` are documented routes that are NOT yet instrumented in the v1 graph.** No graph module maps to them, and their route-defining outcomes — UCAT familiarization, the QAA Access baseline, the Spanish admission audit, and the open-response studio — are not among the 388 atomic outcomes. Consequently they cannot yet satisfy the syllabus section 6.2 pathway-completion requirement, and contributors cannot yet author lessons against them. The `uk-direct-entry` and `spain-bach-pau` **pathway tags below are content filters** marking A-level/Access-shaped and Bachillerato-shaped material inside other modules; they are not implementations of `PW-UK` or `PW-ES`. Instrumenting both routes is planned for a later curriculum version.

Important adjudicated boundaries are represented directly:

- MCAT-aligned evolution is present, but ecology, ecosystems, plant biology, and photosynthesis are **not** tagged as MCAT content.
- Photosynthesis is the **only** topic of `PREM-09` Ecology & Plant Biology carrying `spain-bach-pau` and the `RD243` source, because [RD 243/2022](https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521) specifies autotrophic anabolism while Spain's six second-year Biology blocks contain no ecology block and no broad plant unit (see `research/ADJUDICATION-2026-07-19.md` section 1.8). The module's other six topics carry only `broad-biology` and `uk-direct-entry` with `AQA-BIO`/`AP-BIO` evidence.
- Human physiology is a medicine-facing bridge and MCAT-aligned survey, not mislabeled as universal upper-level physiology or a universal entrant prerequisite.
- MCAT metabolism includes glycolysis, gluconeogenesis, pentose phosphate, the citric acid cycle, fatty-acid oxidation, ketone bodies, and oxidative phosphorylation. Nitrogen-disposal principles appear as biochemistry, but the graph does not claim the urea cycle is an explicit MCAT leaf topic.
- Statistics and experimental reasoning are core. Calculus is a separate optional path and is explicitly excluded from the MCAT mathematical floor.
- Organic functional groups and biological reactivity are portable core; extended mechanisms, synthesis, and spectroscopy carry pathway or medicine-bridge scope where appropriate.

## 6. Source and evidence model

`sourceTags` answer, “Which evidence families justify this topic's placement or provide an aligned learning resource?” They do not mean that every source contains the exact wording of the topic, and a learning-resource tag is not normative authority.

The registry separates:

- `primary-normative` and `primary-normative-directory`: requirements, legal curricula, or institution-level directories;
- `primary-descriptive`: test content and assessed competency outlines;
- `primary-competency`: broad readiness competencies;
- `primary-secondary`: upper-secondary specifications;
- `learning-resource`: teachable materials, whose licensing must be checked per title and edition;
- `local-analysis`: the dated adjudication that reconciles conflicting reports.

`evidenceConfidence` concerns curricular placement:

- `high`: directly in the adjudicated portable core;
- `medium-high`: strongly medicine-facing or repeatedly supported, but not globally universal;
- `medium`: pathway placement or breadth choice whose exact depth varies.

It must never be rendered as “probability this fact is true” or “percentage of medical schools requiring this topic.” Requirements change, and US, UK, Spanish, French, German, IB, and AP structures are not interchangeable.

## 7. Recommended use in the product

### Learner view

1. Begin with a diagnostic and select one route.
2. Resolve the route's topic set with the rule in section 5.1 — route tag **union** `portable-core` — and hide only what falls outside that set unless the learner asks to explore. Never filter by `sourceTags`.
3. Topologically sort unmet prerequisite links, then rank available nodes by the learner's study plan and spaced-review needs.
4. Roll topic mastery up to modules and domains for display only; never let an average conceal an unmastered safety-critical or prerequisite topic.
5. Render `cross-link` edges on demand to prevent a 1,058-edge hairball.
6. Show `requirement`, `evidenceConfidence`, and `sourceTags` in detail views rather than implying that all visible content is compulsory.

### Suggested graph states

- `locked`: an essential prerequisite is not yet demonstrated;
- `available`: prerequisites are met and no evidence exists yet;
- `acquiring`, `practising`, `mastered`, `retained`, `transfer`: use the mastery language in the syllabus;
- `review-due`: previously demonstrated but scheduled for retrieval;
- `route-hidden`: outside the learner's selected route, still searchable;
- `needs-correction`: source or content issue flagged for review.

The static graph contains curriculum facts only. Learner state, confidence, last-touched time, review schedule, attempts, and accommodations belong in a separate per-user record keyed by topic ID.

## 8. Integrity guarantees and current validation

The validator checks:

- valid JSON and required node fields;
- unique node and link IDs;
- valid source tags and pathway IDs;
- valid endpoints for all 1,058 links;
- exact agreement between topic `prerequisites` arrays and prerequisite links;
- topic-only prerequisite endpoints;
- absence of prerequisite self-links and cycles;
- consistency of topic, module, and course workload totals.

Current result:

```text
Premed graph valid: 444 nodes, 1058 links, 388 topics, 1551 estimated hours.
```

The validator intentionally does not forbid cycles made only of `cross-link` edges, because those encode reciprocal conceptual relationships rather than study order.

## 9. Maintainer checklist

Before publishing a graph revision:

1. Confirm the change is within the syllabus promise and label medicine-bridge or pathway scope honestly.
2. Attach at least the adjudication and the strongest applicable primary source tag.
3. Add prerequisites only when earlier mastery materially reduces conceptual load; do not encode mere teaching preference as dependency.
4. Use cross-links sparingly for relationships worth surfacing in an interactive explanation or transfer task.
5. Check source URLs and curriculum volatility, especially annual MSAR, UK institution rules, and Spanish university weightings.
6. Regenerate the JSON and run the validator.
7. Review the affected route subgraph visually and verify that the landing page still degrades cleanly without coordinates.
8. Add an ID migration note when retiring or splitting published topics so mastery history remains interpretable.
