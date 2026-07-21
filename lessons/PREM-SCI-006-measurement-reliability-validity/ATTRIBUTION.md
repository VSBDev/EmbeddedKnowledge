# Attribution and provenance

## Pack identity and licence

This is the draft Lesson Format v1 pack for **PREM-SCI-006, “When can you trust a measurement?”**, version 0.1.0. It maps to `topic-scientific-inquiry-measurement-validity`, declares `topic-scientific-inquiry-variables-controls` as its prerequisite outcome, and has nominal learning time of 180 minutes.

VSBDev (`github:VSBDev`) is the accountable principal. Except for the factual sources listed below, the lesson prose, instructional sequence, fictional cases and data, assessment items, feedback, remediation, glossary wording, and declarative diagram were newly synthesized for EmbeddedKnowledge and are offered under **CC BY 4.0**. There are no third-party assets, embedded media, datasets, quotations, or licence exceptions in this pack.

## Blind scientific first-draft assistance

The accepted scientific starting material came from `/tmp/fable-dossier-02-06.md`. The dossier records ten isolated Claude CLI calls. Each accepted call received only its displayed science prompt, had machine-readable `modelUsage` containing `claude-fable-5` (the dossier also reports `claude-haiku-4-5-20251001`), and received no repository, EmbeddedKnowledge, Premed, graph-outcome, or lesson-packaging context. The dossier states that every Opus-routed output was excluded.

The accepted fragments were used as a baseline scientific first draft, not as a packaged lesson. Their scientific substance was checked against the authoritative sources below and corrected or bounded where needed. In particular, the pack treats repeatability and reproducibility as condition-specific precision rather than proof of accuracy; limits averaging to suitable centered, sufficiently independent varying components; does not treat calibration, reliability, or reproducibility as a certificate of accuracy or construct validity; and frames validity as evidence for a proposed interpretation and use. The correlation-attenuation fragment is not taught because its necessary assumptions lie outside this lesson's scope. Nothing in the lesson implies that Fable saw this repository or authored its editorial, pedagogical, assessment, or schema packaging.

The Claude CLI version was not recorded in the accepted dossier. All Fable provenance below is disclosed exactly at the granularity available there:

| Fragment | Accepted Claude session ID | Prompt SHA-256 |
| --- | --- | --- |
| 1 | `0015f26e-82bd-47b4-aa02-99cd53856a4c` | `sha256:2728a6f2c1a20808616c142c07f5027f179e418981ce61673c12cace604adb43` |
| 2 | `a5a29626-11ba-4a4c-8d9f-d59cd3d161fd` | `sha256:41650c034874a4f9cf387e13e14a581bac7bf3165f3f6e934e9f23132812c0de` |
| 3 | `d8f7ba40-ccbb-4b87-944d-6640e2b0c420` | `sha256:446e1b6efc9dc6fbcc58938bcdc93d9ece28bd1c7b1bfa2539b6150a0c36fd31` |
| 4 | `611a4122-36ce-4693-ad2e-b38d0c0fa3ed` | `sha256:578f178f8da9586818de8d859caf0eb12c09669a1dd5a5fb4245e212151e866a` |
| 5 | `65d6feab-7cbe-4b92-98bb-580ba2df2154` | `sha256:e07ce898511958f43fa2e25e39dbef4277eaf4c9ac588385590f5ad43e2ab7d8` |
| 6 | `f012fcab-790c-413e-9185-4d943ffae93d` | `sha256:4fd336d2fea7583a51e40d2221acec73a200cc2debf43bf7f476d0ba6f4164a2` |
| 7 | `793b2986-f940-454b-8a83-4754969cada8` | `sha256:e397a1a445bf61dc8ed4c6f0bb6306dbbecc1702b04f7f5da161a765846a7848` |
| 8 | `b2d5eaa7-837a-44e0-af46-f37c129556fe` | `sha256:ea8744b34c0b1fd82e7ab1731a8a080b85ad705cc2c5b398d54d191c25f705d8` |
| 9 | `8a7bdb60-ddc6-400a-9ffc-26926e4a31b8` | `sha256:3694c86ac50dd74409b300b324a10565e17c162106b17926b9c47f9aaf19cd67` |
| 10 | `d85ddecf-4edb-4731-bbd9-4b8246d90440` | `sha256:116bdca5ee4db33566de70efde84a46682f9500c4404a6643d3e8d57f996f4c8` |

## Editorial and pedagogical packaging assistance

OpenAI Codex supplied material editorial, evidence-verification, learning-design, assessment, accessibility, rights-recording, and typed-packaging assistance. This was a separate role from the blind scientific first-draft calls:

- System: Codex
- Provider: OpenAI
- Model: `gpt-5.6-sol`
- Version: `Codex CLI 0.144.6`
- Run ID: `d43c6e44-053c-431d-8062-ca1fb27ab0f6`
- Material-instructions digest: `sha256:5f566516f715f267803a74f6363d4914ca3a023a87eeb54e791b73bbfc0bf44a`

The digest is the SHA-256 of the exact discloseable UTF-8 editorial-packaging task prompt supplied to this run through `EK_PACKAGER_PROMPT_SHA256`; it does not claim to digest hidden provider, platform, system, or skill instructions. Provenance records are self-reported and attested by the accountable principal; repository validation checks internal consistency, not independent identity verification.

## Sources and reuse basis

The complete machine-readable source and agent-access record is in `references.json`; claim-level and scene-level evidence mappings are in `claims.json` and the learner-visible source notes. The sources were used only as factual references. No source prose, examples, figures, tables, test content, or organization was copied or adapted.

- Lee and Lee, NISTIR 7959, DOI `10.6028/NIST.IR.7959`: requirements and function of an operational definition.
- Joint Committee for Guides in Metrology, VIM, DOI `10.59161/JCGM200-2012`: measurement error, precision, repeatability, reproducibility, calibration, traceability, accuracy, and their boundaries.
- Taylor and Kuyatt, NIST Technical Note 1297: repeated observations, random and systematic effects, correction, and limitations of averaging.
- AERA, APA, and NCME, *Standards for Educational and Psychological Testing* (2014): validity arguments, reliability/precision conditions, construct evidence, and population and setting boundaries.

The `measurement-audit` diagram is original declarative data authored for this pack. Its visible labels, ordered structure, and long description communicate the same four-question audit; it contains no active content or external asset.
