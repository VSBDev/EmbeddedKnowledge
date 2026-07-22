# Attribution

## Lesson identity and accountability

- Lesson: **PREM-SCI-010 — Using scientific models without outrunning their limits**
- Accountable principal: **VSBDev** (`github:VSBDev`), verified through the authenticated GitHub CLI account on 2026-07-21
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Candidate state: version `0.1.1`, `draft`, source confidence `pending-review`

VSBDev is accountable for the blind science authorship runs and the editorial packaging run disclosed below. Provenance is disclosed and attested; it is not represented as independently verified by the repository.

## Blind science authorship

The accepted science dossier was `/tmp/fable-dossier-02-10.md`. It states that each accepted fragment came from an isolated Claude CLI call that received only its science prompt, that machine-readable `modelUsage` included `claude-fable-5`, and that Opus-routed outputs were excluded. It also reports `claude-haiku-4-5-20251001` in each accepted call's model usage. No accepted Fable run saw this repository, Premed, the graph outcome ID, or the editorial-packaging prompt.

The dossier did not supply a Claude CLI version. The separate actor records in `lesson.json` therefore say `not supplied in accepted dossier` rather than inventing one. Because the lesson validator requires unique author principal IDs, each blind run uses a project-local `agent-session:UUID` actor ID keyed exactly to its Claude session. Those IDs do not pretend to be separate people or GitHub accounts: VSBDev remains the disclosed operator and accountable principal for all ten.

| Fragment | Claude session / run ID | Science-prompt SHA-256 | Reported accepted model usage |
| ---: | --- | --- | --- |
| 1 | `0adeed36-b002-409f-b2fe-61b7ec2f056d` | `dc751280269d552fe5dd79edd90f3f1cd05ec16a9ab7ceb176e0cdb9510b334e` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 2 | `1f33f961-31c4-4319-ba18-2934eeafeec0` | `cadc0b7ca2f066449d62afb4baa2d48ba9e1f0867a354ca1e4c258544ef0972c` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 3 | `26ebef5e-a7c1-485f-9fa1-146b163d3f68` | `4ab71b3d2332de038767e03805d0c7a26888d039cb52528dd3cfdcc078a16108` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 4 | `0024106e-67a3-426b-9e0b-88f31d131631` | `3bc8eac662bbb3c897feb44117467d4ab77f3856ba641aced29f6aae1ba6b66f` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 5 | `80aae675-1eda-4772-8a46-ce848c3443de` | `a22f422792801b87ecd9dfb945930fc47a82634050648b63a307d4ff0116af4d` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 6 | `90555445-3e89-4847-ace8-84d6002bdc99` | `52d3f269e139cb30b8a0ade70e58b6b4ce76e6c991978f93e4008d7024f13a30` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 7 | `22f0b3cb-3d92-4973-8698-1bca45a1ea8f` | `ffa39569314564aba10944014ac6c1f7c8af272b3e98c42e8024719e411d5730` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 8 | `ef9fa40c-1460-415b-9189-e06976e7481c` | `da592117e2a4ac47418e6521dae40d1a092564e63f74f53b685645a1a79f8ee9` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 9 | `4a0863f1-8238-4129-856f-522ad72561ba` | `7c30cb714d3b2ab4154f14656e9e86b5f50583b3755fafd09c4260b7a8bad4ae` | `claude-haiku-4-5-20251001`; `claude-fable-5` |
| 10 | `53e94f46-3a47-4451-b8da-de9d5c6b2212` | `1cf9ede3b4d6d76988f3b7c63186da4a895e8cbb7f7acb19fa6fab2cbd84e31b` | `claude-haiku-4-5-20251001`; `claude-fable-5` |

The prompt digests above are reproduced exactly from the accepted dossier and are recorded in `lesson.json` with the required `sha256:` prefix. They identify the science-only prompt associated with each fragment; they do not cover hidden provider or system instructions.

## Editorial and pedagogical packaging

Material editorial and pedagogical assistance used **Codex** by **OpenAI**, model **gpt-5.6-sol**, version **Codex CLI 0.144.6**, in isolated packaging run `914048de-b3fb-41bd-85e2-26d71839e6d0`.

The packaging prompt digest is `sha256:d64648b745004f8ff43eccbe715e769c0fb99da3fd8f3e61c0dfde0d959809cc`, supplied through `EK_PACKAGER_PROMPT_SHA256`. It covers the exact discloseable material editorial-packaging prompt supplied to this run and excludes hidden provider and system instructions. This run is disclosed as editorial and pedagogical packaging, source verification, original lesson construction, and schema assembly—not as the blind science author.

## Scientific disposition of the accepted fragments

The dossier served as a baseline scientific first draft, not as evidence. Consequential claims were checked against the authoritative sources in `references.json`.

- Retained and independently expressed: selective model representation; input, variable, and run-specific parameter roles; starting and boundary conditions as model constraints; calibration in the parameter-estimation sense; interpolation and extrapolation risk; context transfer; uncertainty versus variability; non-unique fits; sensitivity analysis; and the ideal-gas relation and qualitative failure domain.
- Narrowed for learner fit: advanced partial-differential-equation taxonomy, high-dimensional convex-hull detail, machine-learning domain-shift subtypes, named global-sensitivity methods, and the history of equifinality were not needed to meet this atomic outcome.
- Corrected or excluded: the dossier's probability-frequency definition is a valid specialized sense of calibration but is not the general scientific-model calibration taught here; the lesson uses EPA's parameter-estimation sense. The dossier's numerical claim that air at atmospheric conditions deviates by under 1% was not retained because the lesson does not need a gas-specific error threshold. No universal ideal-gas cutoff is asserted.

## Original synthesis and source use

The opening, four-question audit, flow diagram, ideal-gas vessel example, model-comparison functions, feeder and sensor cases, chamber transfer, assessment variants, feedback, remediation routes, and instructional sequence are original course material created for this pack. Source expression and dossier wording were not copied, translated, lightly rewritten, or used as an organizational template.

The three records in `references.json` were used only for factual verification. No quotation, adapted expression, source example, figure, table, media, or dataset is included.

## Source-access and rights preflight

Before substantive direct access on 2026-07-21, the accountable packager checked the relevant public terms and robots routes:

- EPA: the EPA disclaimer plus the current and snapshot robots routes; the public report path was not disallowed and no agent-specific restriction was found.
- NASA Glenn: the NASA disclaimer plus `www1.grc.nasa.gov/robots.txt`; all public paths were allowed.
- NASA Technical Reports Server: the NASA disclaimer plus `ntrs.nasa.gov/robots.txt`; all public paths were allowed.

No login, paywall, access control, rate limit, or technical restriction was bypassed. Exact use, rights basis, rights evidence, terms URL, access date, and limitations are recorded per source in `references.json`.

An OpenStax textbook route was considered but excluded after access screening found that its current `robots.txt` disallows GPTBot on `/books/`. It is not a lesson source, supplied no reused expression, and does not appear in the claim or reference ledgers.

## Assets and modifications

No third-party image, diagram, audio, video, dataset, patient material, or other asset is included. `diagrams/model-use-cycle.diagram.json` is original declarative course content authored for this lesson and licensed with the pack under CC BY 4.0.

This remains the `0.1.1` draft. Two frozen-candidate advisory reviews and the fresh finalizer's single post-review revision and adjudication are recorded inside the pack. The revision identifies $R$ as the universal physical constant in the ideal-gas worked example, states that the prediction adjusts no model parameter, and aligns this attribution record with lesson version `0.1.1`. The pack retains its explicit distinction between an unweighted point-sensor mean and a chamber-volume average and requires representative, volume-aware evidence before corroborating the latter. Finalizer provenance, indexed finding dispositions, audit evidence, limitations, and decision conditions are disclosed in `adjudication.json`. A merge decision is not publication, and no claim is made that the lesson is published, clinically sufficient, or evidence of learner mastery.
