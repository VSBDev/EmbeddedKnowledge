# Attribution

## Lesson identity

- Lesson: **PREM-SCI-009 — A trustworthy evidence trail: replication, reproducibility, and transparency**
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Candidate state: version `0.1.0`, draft, source confidence pending review

## Blind science baseline

The accepted scientific first draft came from `/tmp/fable-dossier-02-09.md`. The dossier contains ten fragments generated in isolated Claude CLI calls that received science-only context. They did **not** receive this repository, Premed materials, the graph outcome ID, or the editorial-packaging prompt. Outputs routed through Opus were excluded before this pack was built.

Each accepted fragment's machine-readable `modelUsage` contains `claude-fable-5` and also `claude-haiku-4-5-20251001`. The records below therefore preserve each run separately and do not claim that Fable was the only model involved. Lesson schema validation requires a unique accountable principal per `authors` entry, so `lesson.json` contains the one accountable principal with the material packaging run; the ten blind science sessions remain separately and fully disclosed here rather than being collapsed into one false actor run or represented as invented principals.

| Fragment | Claude CLI session ID | Prompt SHA-256 | Machine-readable modelUsage reported in dossier |
| ---: | --- | --- | --- |
| 1 | `bed057d9-61c9-4add-a8c1-0cb72c2b734e` | `168a07e49eb7a11ba082cc20d87bc502f337c0f980d580c8ff43aa4fb3a4c849` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 2 | `ca41b569-8674-4dd6-94d1-bb0dc5bab66d` | `5ec2b85c96bcf3f1ba4fd1e92090ecaa70e58b4391aed61de25f8e07f0f691fc` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 3 | `ac6bece5-7d81-4486-a8e9-492c92f0bdc6` | `a6e9754214e387b847e6e5fa0a8779c467f32c267a8ea6c53069bbeb2165794d` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 4 | `86453c50-1607-4eb5-bcd6-3dbfb21cd36b` | `01f699e3f0a868ab654b16b3544633bd01b612ab1c4696ce8c23430b9097a387` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 5 | `b0b9068d-fef2-4279-8dc0-a3e52f1e2018` | `fbcfd363eeea8379c17bb031dcc97ebba0e711076906d629ce9a800eae5b6955` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 6 | `7662e5f9-554e-4bea-9ab6-0c69c998bfce` | `5054a7632f06708a4c12c7d8856fafdf73805ae58db8f34e7891fc0da9bd0e54` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 7 | `62d1dbab-bab0-4c58-8d22-4ab734627dce` | `ec9696ba74123f22b167fb4f6da3fb8d39386d34608f8f65a980ceeb7c2b4e4e` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 8 | `fc24a2b2-01c1-4db5-9277-195b970e2e2e` | `bf84bf17084575f9b6f426f491606412ca78fc761aa7c166db0bc31fc99c3dc7` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 9 | `b66f4404-ca7c-402f-bc8d-2b45789ffcc1` | `5f478276482aad710ebb249bd610e1418f4f1d062a8837f322e1ba0c3f6e6bee` | `claude-fable-5`; `claude-haiku-4-5-20251001` |
| 10 | `cc1b1638-7c80-4843-a965-80d21e205f2a` | `337d7a04da9147f7c17ca68ea471191411e152449ac18e408bb0745fc8bbd1de` | `claude-fable-5`; `claude-haiku-4-5-20251001` |

The ten prompt digests above are the dossier-supplied hashes of the isolated science-fragment prompts; they do not cover hidden provider or system instructions. They are preserved in this required attribution artifact because the schema's single-principal author record cannot encode ten runs without creating duplicate or invented principals.

## Material editorial and pedagogical assistance

VSBDev is accountable for the contribution. Material editorial and pedagogical assistance used **Codex** by **OpenAI**, model **gpt-5.6-sol**, version **Codex CLI 0.144.6**, in packaging run `12858cbe-5233-4bc4-ae6c-25e3879f5a5e`.

The supplied packaging-prompt digest is `sha256:4583365568c411a791f03975cf2a63963f5674529987b92d1f05d6c2322b9bc9`, obtained from `EK_PACKAGER_PROMPT_SHA256`. It identifies the exact discloseable material packaging prompt supplied to this run and excludes hidden provider and system instructions.

The packager verified consequential claims, corrected overstatements, designed the four-question explanatory model, created the fictional worked example and transfer cases, built retrieval and fading support, authored the assessment and feedback, mapped claims and sources, created the declarative diagram, and prepared the typed pack. This record describes packaging assistance, not the blind science calls as having performed repository-aware lesson design.

## Scientific editorial decisions

The accepted dossier's useful scientific substance was preserved where supported: same-data computational reproducibility, new-data replication, preregistration and Registered Reports, responsible openness, sensitivity analysis, multiverse analysis, and calibrated interpretation of replication results.

The pack makes three material corrections or exclusions:

- It declares a local terminology convention because reproducibility and replication labels vary by field.
- It replaces claims that a successful replication proves reliability or that safeguards remove false positives with directional, bounded confidence language.
- It excludes the dossier's database-system replication passage because it is unrelated to the assigned scientific-inquiry outcome.

The specification-curve fragment was not developed into a separate learner concept because an accessible, permitted authoritative source was not needed once multiverse and general sensitivity analysis covered the bounded outcome. No unsupported detail from that fragment was retained.

## Original synthesis and source use

The lesson's prose, four-question model, seedling and algal cases, numbers, tables, diagram, retrieval prompts, misconception repairs, transfer task, assessment, rubrics, feedback, accessibility routes, and recovery sequence are original course material. The sources in `references.json` were used only to verify factual and methodological claims. No source wording, expressive organization, example, question, figure, media, or dataset was copied, translated, adapted, or redistributed.

The PLOS consensus source was checked against its May 7, 2026 correction. That notice changes acknowledgments introduced during proofing, not the cited methodological content.

## Source-access attestation

Before substantive access on 2026-07-21, the applicable public terms routes were checked for PLOS, Center for Open Science/OSF, FDA, NIH, and SAGE. Each included source is recorded as `checked-no-agent-restriction-found`; no login, paywall, rate-limit evasion, bulk collection, or technical access-control bypass was used.

Two candidate routes were deliberately excluded:

- National Academies substantive content was not processed for the lesson after its current terms disclosed restrictions relevant to automated and AI use.
- Springer Nature's specification-curve article was not used after its AI guidance did not provide a suitable basis for this workflow.

These excluded routes do not appear in `references.json` and support no lesson claim.

## Third-party assets

No third-party image, diagram, audio, video, dataset, or other asset is included. `diagrams/four-safeguard-questions.diagram.json` is an original declarative representation authored for this pack. All numeric study results are explicitly labeled fictional teaching material.

## Post-review finalization

VSBDev (`github:VSBDev`) is accountable for the single post-review revision and adjudication. Material finalizer assistance used run `codex-finalizer-PREM-SCI-009-6039609A-483F-4729-B36E-2E36D2A7B67A` under discloseable-instructions digest `sha256:be27f517ba2c2c955ecd76d527a026c546086f575737698a6409d9faf522efd3`. Runtime system, provider, model, and version are recorded as `RUNTIME-STAMPED` in `adjudication.json` for operator substitution from the runtime banner.

The finalizer independently revised the original fictional quantitative cases, their answer logic, the researcher-flexibility claim mapping, source classification, and pacing estimate in response to the two preserved reviews. These changes reuse no third-party expression, media, or dataset.

## Governance boundary

The original candidate made no claim of approval, publication, merge readiness, independent verification, clinical sufficiency, or course credit. The preserved reviews and final adjudication are separate governance records. A `merge` adjudication value is an evidence-based recommendation, not a claim that GitHub merged or published the lesson.
