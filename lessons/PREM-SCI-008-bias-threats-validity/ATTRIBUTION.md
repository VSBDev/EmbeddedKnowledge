# Attribution

## Lesson identity and accountable principal

- Lesson: **PREM-SCI-008 — Bias and threats to validity: follow the missing evidence**
- Version and state: **0.1.0 / draft / pending-review**
- Accountable principal: **VSBDev** (`github:VSBDev`), confirmed as the active GitHub identity through `gh api user` on 2026-07-21
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**

VSBDev is accountable for the scientific, editorial, pedagogical, rights, and provenance record in this contribution. Agent provenance is disclosed and attested; it is not represented as independently verified identity or authorship proof.

## Blind science first-draft authorship

The accepted source dossier at `/tmp/fable-dossier-02-08.md` contains ten science-only fragments. Each fragment came from a separate isolated Claude CLI session whose recorded `modelUsage` includes `claude-fable-5`; outputs routed through Opus were excluded before this packaging run. Fable did **not** receive this repository, Premed, the graph outcome ID, this lesson-pack specification, or the editorial packaging prompt.

Each accepted Fable session is a separate actor in `lesson.json.authors`; the runs are not collapsed into a false single run. The dossier did not supply a Claude CLI version, so each schema actor records that version as not supplied rather than inventing one. The table preserves every accepted session ID, exact prompt SHA-256, and the complete model list reported by the dossier.

| Fragment | Claude session / run ID | Prompt SHA-256 | Models reported in dossier | Editorial disposition |
| ---: | --- | --- | --- | --- |
| 1 | `3f93d386-6e86-4f85-ad8a-f152d53fdfe7` | `8d374a78d6363797ca7bc52a9f6b3d06bfc84f85ce1c7c7c0d6132a332209bc1` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved the systematic-versus-random error distinction; narrowed claims about symmetry, averaging to zero, and measurement-only definitions. |
| 2 | `86d04a95-f888-49f8-88d6-1bd6a4531da1` | `deff99dc70fadd0d82ac46a088da29fc272f69ffcab8ccb45bfaee55ba4b23d2` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved selection through an inclusion rule; removed the implication that random assignment and random selection are interchangeable safeguards. |
| 3 | `d49367be-0624-4d61-83e7-3e554743c8b6` | `8cdc56482693027bb87b9998bc58c2f9ed4eb14838bc6a4b5131ccd6e5f6f28d` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved information bias, misclassification, and differential error; corrected the nondifferential-toward-the-null shortcut by teaching its material exceptions. |
| 4 | `df934b52-e3a9-4305-93fd-09c5e366a9ea` | `070e70583ee2996b24118186b75781a6b2ae13c3bc30984e766a2316b501dc70` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved the observer-knowledge mechanism; replaced a blanket “double blind” prescription with explicit assessor masking, standardization, and role-specific checks. |
| 5 | `6581f5f8-0b06-4c55-9fd1-2b6b1d37bb51` | `4200b31681e81775032f0ecb43f90e38ae91a310f6d40f531ad440cf3a73b277` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved recall bias as an information-bias mechanism in the evidence model; omitted a separate recall-bias teaching branch because it is not one of the six mapped outcome labels. |
| 6 | `2c8f7bd0-d5e3-4a97-89e2-6b239a0646c3` | `51c3dd6d61cf2583ee63eaa75e885edc57fb7ffb38dc704bed2b4130eeb8ed68` | `claude-fable-5` | Preserved the distinction between selective outcome reporting within a study and publication bias across whole studies. |
| 7 | `5de9833b-d40d-40f9-9b92-34d98c66e310` | `0f3df0eadeaa55468f82823fdc7b2ee67ab53b84e4f3045ca37722918fca78bd` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved result-dependent study visibility; corrected the claim that funnel plots, regression, or trim-and-fill definitively detect publication bias. |
| 8 | `551e05ea-3679-4502-a80f-4789fb954c3d` | `571a9a47509508c2da90b601c270e91fe5cf65df397c67d21273f3a6d4d8cc32` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Preserved survivorship as selection on passing a persistence or survival filter; omitted the historical aircraft narrative and created original scientific cases instead. |
| 9 | `bd5100cc-8f3c-42e2-afb2-afd00e414db5` | `ffa92c44f633e6e4f29817c668f87c0eb891bae444eab2dac7071fd736aed30b` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Not incorporated as a teaching claim: the healthy-user effect is primarily a confounding problem in the form presented and falls outside this lesson's six-label target. |
| 10 | `dcd6d154-f3e1-4982-b8c8-18bca27b35c5` | `662b1264e2486dce5cd15796f062e9c81ea11c3f9450134a53cf724bb7763036` | `claude-haiku-4-5-20251001`, `claude-fable-5` | Not incorporated: the algorithmic-fairness audit concerns a different meaning and scope of bias than threats to scientific validity. |

Each Fable `instructionsDigest` in `lesson.json` is the corresponding value above with the required `sha256:` prefix. These digests cover the exact science prompts represented in the accepted dossier; they do not claim to cover hidden provider or system instructions.

## Material editorial and pedagogical assistance

Material editorial packaging, source verification, claim correction, instructional design, original case construction, assessment design, diagram authorship, rights records, and Lesson Format v1 construction used:

- System: **Codex**
- Provider: **OpenAI**
- Model: **gpt-5.6-sol**
- Version: **Codex CLI 0.144.6**
- Run ID: `3b0167bb-3d11-4e3e-898c-9e058ca5d0e2`
- Material-instructions digest: `sha256:b1eb45f8d518d881e1a0e2d72be9f57f3c2af5e4b36b83f8d441956c9f6c155c`

The Codex digest was supplied through `EK_PACKAGER_PROMPT_SHA256`. It covers the exact discloseable editorial-packaging prompt for this run and excludes hidden provider and system instructions. Codex is recorded as material editorial and pedagogical assistance, not as the blind science author.

## Original synthesis and source use

The lesson's evidence-pipeline structure, seedling calculation, machine and attrition cases, computational acoustic transfer, retry cases, prompts, feedback, rubrics, assessment items, glossary wording, and `diagrams/evidence-pipeline.diagram.json` are original course material created for this pack. The accepted Fable fragments were treated as a scientific first-draft dossier rather than copied into the learner prose.

Every source in `references.json` was used only to verify facts and methodological distinctions. No source wording, organization, example, question, table, figure, dataset, or media was copied, translated, adapted, or redistributed. Source licences are recorded for transparency; none is used as a basis to reuse protected expression.

## Third-party assets and licence exceptions

No third-party image, diagram, audio, video, dataset, or other media asset is included. The declarative evidence-pipeline diagram and its text equivalent are original and are included with the lesson under CC BY 4.0. There are no pack-local content-licence exceptions.

## Source-access attestation

Before substantive source access on 2026-07-21, the accountable packaging run checked the public PMC robots route and the NCBI website and data-usage policy route. PMC permits public article and API paths, no agent-specific ingestion restriction was found for those routes, and no login, paywall, rate limit, or technical access control was bypassed. Each source record contains the access date, exact terms route, use, displayed licence when available, locator, and facts-only rights basis.

## Governance state

The original candidate remains a draft. One academic and one learning-design advisory review of candidate commit `9df98b58e534225725314047d88538235159bd88` are committed under `reviews/`; a distinct fresh finalizer made the bounded post-review revision and recorded its finding dispositions, accessibility-and-rights audit, and decision in `adjudication.json`. Every claim remains `pending-review`, source confidence remains `pending-review`, and the maintainer retains the separate publication transition. Nothing in this attribution claims publication, coverage, completed merge readiness, clinical sufficiency, university credit, or professional authorization.
