# EmbeddedKnowledge product concept

**Status:** working product contract · revised for a public, multi-audience project on 19 July 2026

EmbeddedKnowledge is an open, versioned library of university-grade knowledge maps and reviewed learning materials. It separates access to rigorous learning architecture from admission, tuition, geography, scheduling, and credential requirements without pretending that open study is equivalent to an accredited degree.

Premed is the first book: a pathway-aware scientific foundation for medical study. Its syllabus and graph define the learning territory. Its lesson commons began empty and grows only through reviewed contributions.

## Public audiences

EmbeddedKnowledge serves overlapping communities:

1. independent learners seeking substantial academic depth without enrolling for a credential;
2. prospective applicants strengthening foundations or auditing institution-specific prerequisites;
3. health-adjacent professionals filling gaps across chemistry, biology, physics, biochemistry, and human systems;
4. educators and institutions evaluating, adapting, or assigning open material;
5. subject experts, learning designers, accessibility reviewers, librarians, and rights reviewers improving the corpus;
6. open-source contributors and agents producing structured, inspectable work.

No single biography, country, study route, age group, institution, or agent environment defines the product.

## Product principles

- **Open maps, explicit boundaries.** Curricula, dependencies, outcomes, sources, and disagreements remain inspectable. Completion does not confer university credit, admission, clinical competence, or professional authorization.
- **A knowledge system, not a content pile.** Stable identifiers connect outcomes, prerequisites, lessons, assessments, evidence, review, and corrections.
- **Mastery is revisable.** Practice, dialogue, problems, investigation, delayed retrieval, and transfer provide evidence over time. Recovery and retakes are part of rigor.
- **Many routes remain visible.** Portable foundations and country-, examination-, or institution-specific requirements are not collapsed into a fictional global standard.
- **Accessibility is instructional integrity.** Equivalent nonvisual, non-audio, keyboard, language, and cognitive paths are designed into lessons and reviewed before publication.
- **Sources outrank confidence.** Human expertise and model output remain accountable to evidence, declared uncertainty, and correction.
- **Corpus state is never implied.** Every outcome is visibly empty, proposed, under review, adjudicated, or covered by a published lesson.

## The four public artifacts

1. **Syllabus:** the academic contract—audience, scope, outcomes, modules, practicals, assessment, schedules, quality rules, and boundaries.
2. **Knowledge graph:** stable atomic outcomes and the prerequisite, hierarchy, and cross-domain relationships among them.
3. **Lesson commons:** openly licensed explanations, activities, assessments, references, accessibility alternatives, and recovery guidance mapped to the graph.
4. **Review record:** structured independent reviews, dissent, conflicts, limitations, quorum, and final adjudication attached to each published lesson.

The syllabus and graph may be complete while the lesson commons remains incomplete. The interface must preserve that distinction everywhere.

## Learning experience

Each learning route draws from the same outcome graph while permitting multiple media and teaching approaches. A mature lesson can include:

- concise orientation and prerequisite checks;
- explanations across words, diagrams, equations, mechanisms, and models;
- worked examples and progressively independent practice;
- retrieval, spacing, interleaving, and misconception repair;
- practical, simulation, or dataset investigations with modality disclosed;
- Socratic dialogue and applied cases;
- mastery checks, answer logic, rubrics, feedback, and recovery paths;
- accessible alternatives and explicit source provenance.

Future tutors, feeds, audio, video, and adaptive interfaces are clients of this corpus. They do not become the source of truth.

## Agent-first contribution model

Agents are expected to help research, draft, map, test, review, and maintain lessons. The project therefore exposes concise agent context, JSON Schemas, graph data, stable identifiers, deterministic validation, and examples.

Pull requests are the only write path. Website and WebMCP tools are read-only discovery surfaces. During the founding stage, quorum uses isolated, attributable agent runs so one disclosed maintainer can build the initial corpus without inventing human consensus.

A standard lesson requires one academic and one learning-design review artifact from two unique runs across two providers, both targeting the same original candidate. A third fresh run considers both records, disposes every finding, writes the final version once, audits accessibility and rights, and adjudicates that final commit. Reviews may honestly request changes without forcing another cohort.

**Provenance is attested, not verified.** Run IDs, providers, models, versions, and instruction digests are self-reported strings supplied by the accountable operator. No platform check confirms that a declared run happened, that it used the declared provider or model, or that three artifacts came from three genuinely different systems. What the project guarantees is that these facts are *disclosed on the record and attested by a named operator* who can be held to them, and that the validators enforce internal consistency (distinct run IDs, distinct declared providers, role minimums, one frozen candidate commit). Treat the diversity requirement as an accountability and hygiene mechanism, not as cryptographic proof of independence.

## Open-source and licensing model

Original course content and curriculum data are licensed CC BY 4.0 unless marked otherwise. Third-party assets retain their own terms. Software is licensed separately under the MIT License.

The repository, pull requests, checks, review artifacts, adjudications, and correction history form the durable public record. A lightweight static site may be hosted through GitHub Pages while the corpus is read-only. Interactive or sensitive services require separate infrastructure.

## Sustainability

The knowledge commons remains open. Sustainable services may later include hosted tutoring, generated media, managed institutional deployments, or other conveniences, but the canonical curriculum, published lessons, and review history must remain independently reusable.

Community-contributed compute may support drafting and review, but no donated model changes publication state by itself. Accountable principals, declared evidence, portable checks, and adjudication remain the governance boundary.

## Development sequence

1. **Map:** complete syllabus, graph, searchable views, and honest coverage ledger.
2. **Protocol:** schemas, PR templates, review roles, quorum checks, adjudication, and agent discovery.
3. **Lesson commons:** viewer for empty, proposed, under-review, adjudicated, and published lesson states; one gold-standard reference lesson.
4. **Learning tools:** mastery records, retrieval, practice, dialogue, and accessible lesson delivery.
5. **Community operations:** contributor onboarding, reviewer development, corrections, releases, and transparent quality reporting.
6. **Additional books:** expand only after the Premed production and review loop is demonstrated in public.

The immediate release criterion is not the number of generated pages. It is whether a diverse group can inspect one outcome, propose a lesson, review it independently, adjudicate it, publish it, and see the corpus ledger update without relying on private context.
