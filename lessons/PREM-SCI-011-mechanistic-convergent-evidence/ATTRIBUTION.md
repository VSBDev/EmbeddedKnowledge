# Attribution

## Lesson identity and licence

- Lesson: **PREM-SCI-011 — From evidence lines to a calibrated claim**
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check returned `VSBDev` on 2026-07-21.

## Blind science authorship

A blind science-authoring stage supplied four accepted baseline fragments. Each fragment came from a separate isolated Claude CLI call that received only its science prompt. The blind calls did **not** receive this repository, EmbeddedKnowledge, Premed, the graph outcome, the lesson ID, the pack format, or the editorial-packaging prompt. The accepted dossier reported `claude-fable-5` in machine-readable `modelUsage` for every retained call; it also reported `claude-haiku-4-5-20251001`. All Opus-routed outputs were excluded before this packaging run. The Claude CLI version was not present in the accepted dossier and is recorded as not supplied rather than inferred.

The four accepted science-author records are preserved separately because four isolated sessions cannot honestly be collapsed into one agent identity:

| Fragment | Scientific contribution to the baseline | Claude session / run ID | Prompt SHA-256 | Disclosed model record |
| --- | --- | --- | --- | --- |
| 1 | Questions molecular experiments can address, including interaction, structure, composition, kinetics, and energetic or environmental response | `6257e56c-c2a9-4dbd-b390-955656f27cf7` | `sha256:95471aa2ca876f49fa864397e45cd34eaf165a99a440a6b4571362a6058b6859` | Claude CLI / Anthropic / `claude-fable-5`; CLI version not supplied; `modelUsage` also listed `claude-haiku-4-5-20251001` |
| 2 | Intervention, randomization, controls, causal comparison, and effect direction or size | `94c8e426-2cbb-438b-85d6-436370aa1329` | `sha256:3bffe185040c30107eed5cd607236a14ac600e1ed59c0399b10cc80b3bf1e367` | Claude CLI / Anthropic / `claude-fable-5`; CLI version not supplied; `modelUsage` also listed `claude-haiku-4-5-20251001` |
| 3 | Deliberate manipulation and controlled comparison as a route toward causal inference | `969c4dcc-f292-4b99-91e4-f86a91ce242e` | `sha256:b921030e0f996d184d633efbfe0412fabe61948342bdeecd4354b8b08d8e7a43` | Claude CLI / Anthropic / `claude-fable-5`; CLI version not supplied; `modelUsage` also listed `claude-haiku-4-5-20251001` |
| 4 | Quality- and independence-sensitive evidence weighting, transparent treatment of disagreement, provisional conclusions, and discriminating research | `33086b45-c274-4f62-b3b9-e02d10afc9db` | `sha256:34796267d2772f05abdccc7bb3fbc9c57874eefe2739f758c42bd8f8aa5fc2cf` | Claude CLI / Anthropic / `claude-fable-5`; CLI version not supplied; `modelUsage` also listed `claude-haiku-4-5-20251001` |

These runs are material blind science authorship, not citations or independent academic verification. Their fragments served as a scientific first draft and were checked against the sources in `references.json` before incorporation.

## Editorial and pedagogical packaging assistance

Material editorial, research-verification, pedagogical, assessment, accessibility, rights-ledger, and Lesson Format v1 packaging assistance used **Codex** by **OpenAI**, model **gpt-5.6-sol**, version **Codex CLI 0.144.6**, in unique run `f3c86893-e6c3-4283-9387-73f1584e6e82`.

The packager material-instructions digest is `sha256:b455458a8b61d4ba298d736bcac65aa87414822c39062b8b627c10c6bf434ffd`, supplied through `EK_PACKAGER_PROMPT_SHA256`. It identifies the exact discloseable packaging prompt supplied for this run. It does not claim to cover hidden provider, system, runtime, or tool instructions that cannot be exported.

Codex is not represented as the blind science author. It received the repository context, assigned outcome, accepted dossier, packaging requirements, and provenance instructions needed to verify, correct, teach, structure, and validate the material.

## Scientific corrections to the baseline

The intervention fragments were directionally useful but too categorical. The lesson corrects them in four material ways:

- random assignment tends to balance prognostic factors; it does not literally guarantee balance or remove every source of bias;
- manipulation supports a bounded effect of the assigned intervention only when assignment, follow-up, measurement, adherence, analysis, and other design conditions preserve the comparison;
- an intervention's effect does not by itself identify the molecular mechanism or eliminate off-target explanations;
- reliable conclusions are scoped to the studied units, intervention, outcome, timing, and conditions rather than presented as automatically reproducible or universal.

The conflict fragment's core advice is retained and made operational: compare question, reliability, relevance, expected bias, and dependence; disclose unresolved discrepancies; and choose a study for which competing explanations predict different results.

## Original synthesis and source use

The opening, four-window explanation, evidence table, causal-bridge procedure, calibrated-claim structure, Tide-1 worked example, misconception repairs, Glow-2, Shell-3, Harbor-7, Leaf-8, Frost-6, Wing-4, Wave-9, and Root-3 cases, all numerical values, assessment forms, feedback, recovery routes, and declarative diagram are original course material created for this pack. All named organisms, molecules, interventions, sites, studies, and data are explicitly fictional.

The four works in `references.json` were used only as factual and methodological authorities. No source wording, organization, example, question, table, figure, media, or dataset was copied, translated, adapted, or redistributed. The EFSA work's CC BY-ND status and IARC's restricted publication terms therefore do not supply or need to supply a reuse basis for lesson expression; every use is facts-only original expression.

The Fable dossier is disclosed as authorship provenance, not used as academic evidence. Material scientific claims resolve through `claims.json` only to independently checked authoritative sources.

## Source-access attestation

Before substantive direct access on 2026-07-21, current terms routes were checked for the source hosts used in the pack.

- For the two PMC works, the NCBI usage policy and robots route were checked. General crawling of PMC article pages is restricted, so verification used one public NCBI BioC API request per article, without bulk retrieval, login, paywall, rate-limit evasion, or access-control bypass.
- For FDA/ICH E9, FDA Website Policies and robots rules were checked before the public final-guidance PDF was processed.
- For the IARC Preamble, IARC Publications Terms and the Monographs robots route were checked before the public PDF was processed.
- A National Academies source considered during research was excluded after its current terms expressly prohibited the relevant generative-AI processing. It is not cited or used in this pack.

Every retained source is recorded `checked-no-agent-restriction-found` with its dated terms route. No `human-only` source was processed or retained.

## Assets and third-party material

No third-party image, diagram, audio, video, dataset, question bank, patient material, or other asset is included. `diagrams/evidence-integration.diagram.json` is an original, inert declarative relationship diagram created for this lesson and licensed with the course content under CC BY 4.0. It carries an equivalent long description and nearby table/prose route.

## Governance boundary

This authoring run creates no review or adjudication artifact and makes no claim of approval, publication, merge readiness, learner effectiveness, clinical sufficiency, or course credit. Formal academic and learning-design reviews must inspect a later frozen candidate in isolated runs, followed by a separate fresh finalizer under the repository's standard-lesson policy.
