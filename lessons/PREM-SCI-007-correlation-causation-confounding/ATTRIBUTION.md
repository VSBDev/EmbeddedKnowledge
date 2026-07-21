# Attribution

## Lesson identity and accountability

- Lesson: **PREM-SCI-007 — From correlation to a causal claim**
- Version and state: **0.1.0 / draft / pending review**
- Accountable principal: **VSBDev** (`github:VSBDev`), verified through the authenticated GitHub CLI session on 21 July 2026
- Course-content license: **Creative Commons Attribution 4.0 International (CC BY 4.0)**

VSBDev is accountable for accepting the scientific baseline, verifying sources, directing the editorial packager, and offering the original lesson pack under CC BY 4.0. The agent actor records below disclose material assistance; they do not transfer accountability away from VSBDev.

## Blind Fable science authorship

The accepted science dossier contained thirteen fragments produced in thirteen isolated Claude CLI calls. Each call received only the science prompt reproduced in that dossier. The dossier states that no call received this repository, Premed, the graph outcome, or the editorial-packaging request. Each accepted call's machine-readable `modelUsage` contained `claude-fable-5` and also reported `claude-haiku-4-5-20251001`; all Opus-routed outputs were excluded before the dossier was supplied to this run. The Claude CLI version was not included in the dossier and is therefore recorded as not supplied rather than guessed.

The lesson manifest preserves each accepted run as a separate actor entry within the schema instead of combining thirteen runs into a false single agent identity.

| Fragment | Claude session / run ID | Exact science-prompt SHA-256 |
|---:|---|---|
| 1 | `4eb4feb3-28c9-48af-b282-13d6ff6036f0` | `sha256:013402adf05935ae979e63acba1848ac1e60714a8bbec1962c17409345d41a86` |
| 2 | `0639175f-0b48-4621-a998-e49656470a04` | `sha256:bf97349084f612d118a787d27d839987e050091892df6b06ddb05aacc139bf1e` |
| 3 | `ae0fbe16-1213-4cd0-8f4d-d8580345a6c5` | `sha256:6f650f5e548d395cdfa44a8b15513b8fc55d674ac452f63602e02fc62b314395` |
| 4 | `30aef95a-473b-4b6a-add2-1ef2bd16c077` | `sha256:00eda732125ec5448bf9560035e5cb5e78c68f1a66fb41f8847fc3106ef0ad54` |
| 5 | `bb1f3eae-b37b-4f88-9b2d-79e4dc9c52f6` | `sha256:50c85c832fb04b2aef87265734855cd164dc1e420ab96c511ae8b6a111fb5908` |
| 6 | `d793cd68-3705-4d18-9b39-133fc23a7bb9` | `sha256:6f52df27f35e442207a3665c37b04db7f2ca2e85103114f841a8b3ccc9ce734b` |
| 7 | `43aa1117-1ead-4b22-b7b6-69115e70e4f3` | `sha256:b975d4302af05081e80a33aa954a9e47a1afaf07fc946c8158296e15261cd0cd` |
| 8 | `ac46eb18-f44b-4130-86ae-5b22171f5c71` | `sha256:267c30e20f50bab1d4479b64705b6eb30cbfc7598d80a490db1d9e3b75fbb77f` |
| 9 | `d1e9013a-f972-43ae-9029-a598c3a4095e` | `sha256:d844640581d30505248301b1d41d67e6ed88e6c6f06a124ec20554640b2df66c` |
| 10 | `20769d6f-acc5-4460-bd76-c080f9daa722` | `sha256:ad5085440ae6a81448b3f06f699784ab9ef10f987a3deaa34c2916d0eef0503a` |
| 11 | `8115d4b0-45de-402a-90b4-f9ec2c07ce65` | `sha256:d70cba87a062cb6688f049fb856e6f32f4eecab1005f258296f0a0b751329364` |
| 12 | `12821e17-0234-4127-be95-24457c65a584` | `sha256:04d8cd6fcedb17a4df1cb28cc960276e401e14b336d60cd10bfb845accd5d588` |
| 13 | `d3898e27-15c2-4060-bd6b-81aee94b0c7f` | `sha256:80383752d5ed4d0e6ec0a8f6d5026136abd1841145ed4485583ad99cc5daca82` |

The baseline covered association and intervention contrasts; confounding, reverse direction, mediators, and colliders; randomized and natural experiments; instrumental-variable assumptions; mechanism evidence; negative controls; and triangulation. Editorial verification retained the accurate introductory substance and corrected or narrowed overstatements. In particular, the lesson states balance in expectation rather than identical realized groups, distinguishes an effect of assignment from actual receipt, qualifies confounder adjustment, keeps mediator and collider handling tied to the target effect, and does not imply that a natural experiment or instrument is valid merely because it is labelled as such. Formal instrumental-variable estimation and mediation decomposition were excluded from the learner scope rather than taught without their full assumptions.

## Editorial and pedagogical packaging assistance

Material source verification, evidence mapping, learning design, prose integration, original examples, assessment design, accessibility work, rights records, and Lesson Format v1 packaging used:

- System: **Codex**
- Provider: **OpenAI**
- Model: **gpt-5.6-sol**
- Version: **Codex CLI 0.144.6**
- Run ID: `1c340f61-8e78-4c1f-98a1-a6c424db92fc`
- Exact discloseable material-prompt digest: `sha256:3ba75d15bc057164820d75ce1755421cb557a3206bcb14e400a0a7aaf50820d2`

The Codex digest was supplied through `EK_PACKAGER_PROMPT_SHA256` and covers the exact discloseable editorial-packaging task prompt for this run. It does not claim to cover hidden OpenAI provider or system instructions. Codex is recorded as material editorial and pedagogical assistance, not as the blind science author.

## Original synthesis and source use

The opening, flashcard-app case, causal-role diagram, workshop and cell-culture practice, laboratory-station transfer, sensor-kit assessment, feedback, remediation, accessibility equivalents, instructional sequence, and all fictional data are original material created for this pack. The accepted Fable fragments supplied a science-only baseline; the packager independently verified consequential claims and constructed a new learner-facing explanation rather than preserving the dossier's wording or sequence.

Every source in `references.json` was used only as a factual reference. No source wording, distinctive example, question, table, figure, media, or dataset was copied, translated, adapted, or redistributed. Source licenses are recorded for transparency but are not relied on to reuse source expression.

## Source-access and rights attestation

Before substantive source access on 21 July 2026, the NCBI website/data policies and robots route were checked. The generic PMC article route was not used because that robots route disallows it for generic agents. The six articles were read through their public NCBI BioC REST endpoints, which were not disallowed, at a compliant low request rate; public PubMed metadata was used where available. No login, paywall, rate limit, or technical control was bypassed, and no source was marked `human-only`. Exact access notes, stable PubMed URLs, DOIs, PMCID identifiers, locators, displayed licenses, factual-use bases, and limitations are recorded in `references.json`.

No third-party image, diagram, audio, video, software, or dataset is included. The declarative diagram is original course content and is offered under the pack's CC BY 4.0 license.

## Candidate boundary

This is an author-stage draft with every claim marked `pending-review`. It contains no review or adjudication artifact and makes no claim of approval, publication, course coverage, learner effectiveness, clinical sufficiency, academic credit, admission eligibility, or merge readiness.

