# EmbeddedKnowledge collaboration model

Status: protocol v1 adopted; contribution intake remains closed while the public repository is populated and the reference workflow is proven. Branch protection is active on `main`.

## Agent-first, pull-request native

Most contributions are expected to be researched, drafted, checked, or reviewed with agents. The system therefore exposes precise machine-readable context, stable identifiers, JSON Schemas, deterministic checks, and example artifacts. Agents should not have to reverse-engineer a visual interface.

Pull requests are the only write path in v1. The website, `llms.txt`, JSON endpoints, and WebMCP tools are read-only discovery surfaces. A contribution may begin in any agent environment, but it enters governance only as a focused pull request with inspectable artifacts and a public decision record.

EmbeddedKnowledge is an independent Git repository with a dedicated public GitHub repository. The parent workspace repository that may contain it locally must never be published or added as a remote. Intake opens only after the approved source release is on a protected `main` branch, validation and review gates have been exercised end to end, and accountable reviewer ownership is active.

## Agent discovery surfaces

- `llms.txt` gives a concise project map and canonical URLs.
- `llms-full.txt` is generated from authoritative repository documents.
- `site/agent/contribution.json` identifies protocol status, entry points, schemas, and the write mechanism.
- `site/agent/quorum-policy.json` defines exact role and independence rules.
- `site/schemas/` contains lesson, review, and adjudication schemas.
- `AGENTS.md` gives repository-native operating instructions.
- WebMCP exposes seven read-only tools: project status, Premed progress, outcome lookup, uncovered-outcome listing, single and paginated lesson-state lookup, and the contribution contract when the browser supports the draft API in a secure context.

WebMCP cannot submit, approve, adjudicate, merge, or publish. It is progressive enhancement, not the governance substrate.

## Progress semantics

Premed lesson coverage is measured against the 404 atomic outcomes in the knowledge graph.

- `contributed`: a lesson pack has entered the public pull-request queue.
- `in review`: the contribution is open and has not completed its required quorum and adjudication.
- `published open`: the lesson passed validation, quorum, and adjudication; is publicly available; and carries the adopted open-content license.
- `covered outcome`: at least one published open lesson explicitly maps to the outcome.
- `coverage percentage`: unique covered outcome IDs divided by 404. A lesson may cover multiple outcomes.

The machine-readable ledger is [`site/data/premed-progress.json`](site/data/premed-progress.json). It starts at an explicit zero and includes the actual `coveredOutcomeIds` array so agents can determine uncovered work without guessing.

## Lesson pack v1

One lesson contribution is one directory of structured, reviewable artifacts:

```text
lessons/
  PREM-CHE-001-acid-base-models/
    lesson.json
    content/
      010-orientation.md
      020-concept.md
      030-worked-example.md
      040-retrieval-check.md
      050-misconception.md
      060-practice.md
      070-transfer.md
      080-synthesis.md
      090-references.md
    assessment.json
    references.json
    claims.json
    glossary.json
    diagrams/
    assets/
    ATTRIBUTION.md
    reviews/
      academic-01.json
      learning-design.json
      accessibility-rights.json
    adjudication.json
```

`EmbeddedKnowledge Lesson Format v1` uses constrained MyST-compatible Markdown: CommonMark/GFM plus a reviewed declarative extension set, with no raw HTML or JavaScript. `lesson.json` maps the work to stable graph outcomes and records format/version, identity, status, risk tier, prerequisites, duration, ordered semantic scenes, authorship, agent provenance, source confidence, license, files, and third-party assets.

The allowed metadata scene kinds are `orientation`, `diagnostic`, `concept`, `definition`, `derivation`, `worked-example`, `investigation`, `retrieval-check`, `misconception`, `practice`, `transfer`, `synthesis`, `assessment`, and `references`. These express pedagogical purpose; they are not presentation templates, and a lesson need not use every kind. The source files live under `content/`; `lesson.json.scenes` controls identity and order.

Lesson content must include observable objectives, prerequisites, explanations, worked reasoning, retrieval, misconception repair, varied practice, transfer, accessibility alternatives, and recovery guidance. Assessment artifacts include outcome mapping, answer logic, feedback, retry/remediation strategy, and rubrics where appropriate. Every scene declares whether it contains material claims. Claim-bearing scenes expose learner-visible source notes; `claims.json` connects those claims to complete records in `references.json`, and `glossary.json` stabilizes technical terms and symbols.

Math source is constrained TeX, with `\ce{...}` for chemical formulae and equations. Format v1 accepts schema-valid `*.diagram.json`, sanitized SVG, and structured molecule records as inspectable canonical inputs; Mermaid, DOT, and Vega-Lite remain possible generated adapters once their validation boundaries are implemented. The source must include alt text, long descriptions/tables/transcripts where needed, asset-level rights, and modification notices. Content is declarative data: no raw HTML/JS, executable notebook, remote embed, unsafe TeX/SVG, arbitrary file read, or networked build step is allowed from an untrusted lesson PR.

The format targets a versioned JSON AST and sanitized semantic HTML/MathML, followed by Typst-first PDF with LuaLaTeX fallback and EPUB/DOCX/JATS adapters. Validation, deterministic v1 web compilation, and the browser reader are implemented; the non-web adapters remain planned and must not be presented as available.

Files under `examples/agent-protocol/` demonstrate governance artifacts, and `examples/lesson-pack/` is the Lesson Format v1 specimen. Neither is production. Example files never count toward lesson, review, adjudication, publication, outcome-coverage, or progress totals.

## Review quorum

During the founding stage, quorum counts isolated, disclosed agent review runs. One accountable maintainer may operate the runs so the initial corpus can be built before a broad reviewer community exists. This is explicit bootstrap governance, not a claim that the agents are independent people.

| Risk tier | Approving reviews | Role minimums | Fresh final adjudication |
| --- | ---: | --- | ---: |
| Minor correction | 2 | 1 academic; 1 accessibility/rights | 1 fresh run |
| Standard lesson | 3 | 1 academic; 1 learning-design; 1 accessibility/rights | 1 fresh run |
| High-impact lesson | 5 | 3 academic; 1 learning-design; 1 accessibility/rights | 1 fresh run |

Every counted review must approve the same candidate commit. A lesson-content change makes prior approvals stale. A standard set uses three unique review run IDs and three distinct providers. Review agents receive the frozen candidate and role prompt without inheriting the authoring conversation. The adjudicator receives the candidate plus complete review record in a fourth run whose ID appears nowhere in authoring or review provenance.

**Provenance is disclosed and attested, not verified.** Run IDs, providers, models, versions, and instruction digests are self-reported strings; nothing in the platform confirms that a declared run occurred or used the declared provider. The accountable operator attests to them on the public record, and the validators enforce only internal consistency: distinct run IDs, distinct declared providers, role minimums, and one frozen candidate commit. Do not describe the diversity rule as verified independence.

Each review records role, verdict, evidence checked, findings, limitations, conflicts, accountable principal, and material agent provenance. The final `adjudication.json` records the policy, exact reviews counted, quorum snapshot, rationale, dissent, conditions, and merge/revise/reject decision. It is committed with the lesson before merge.

## Enforcement

`npm run validate` checks schemas, graph mappings, declared files, candidate commits, role minimums, distinct run IDs, model-family diversity, blocking findings, and adjudication snapshots. Pull-request checks also match every portable artifact to an equivalent, non-dismissed GitHub submission by its disclosed operator. When GitHub prevents a PR author from formally approving their own PR, a structured **Comment** review is accepted as transport; the committed artifact and deterministic quorum check remain authoritative.

GitHub CODEOWNERS expresses ownership and requests review, but artifact validation remains the portable source of truth for the full multi-role quorum. This keeps the rule enforceable even when hosting plans, repository ownership, or platform features change.

## Roles and decisions

- Contributors and their agents propose lessons and corrections.
- Domain reviewers own academic judgments within declared expertise.
- Learning-design reviewers own instructional coherence and assessment alignment.
- Accessibility-and-rights reviewers own equitable access, provenance, and licensing checks.
- Adjudicators synthesize the eligible review record and make the final merge, revise, or reject determination.
- Maintainers enforce process, releases, and repository integrity; they do not silently substitute unilateral scientific judgment for quorum.

Review artifacts, dissent, conflicts, limitations, requested changes, and merge rationale remain attached to the contribution. Corrections use the same versioned route as new work.

## Licensing

Original course content and curriculum data are adopted under **Creative Commons Attribution 4.0 International (CC BY 4.0)** unless specifically marked otherwise. This permits sharing and adaptation, including commercial use, with attribution and indication of changes.

Software is licensed separately under the **MIT License**. Third-party assets retain their own notices. Contributor identity, personal data, and project marks are not automatically CC BY 4.0. [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md) defines the exact content scope and attribution form.

## Before intake opens

- [x] Complete the public-copy and workflow readiness review.
- [x] Create the dedicated public project repository.
- [x] Adopt the MIT software license separately from the CC BY 4.0 content license.
- [x] Publish the non-production Lesson Format v1 specimen and label it `countsTowardCoverage: false`.
- [x] Generate the public progress ledger from merged lesson metadata.
- [ ] Land the approved source release, remove the bootstrap administrator bypass, and verify the required `agent-protocol` check on `main`.
- [ ] Admit the first contributed lesson only through the production review and adjudication protocol.
- [ ] Activate CODEOWNERS with real users or teams.
- [ ] Verify the portable artifact quorum in a real draft pull request.
- [ ] Publish a monitored private rights-contact channel and identify the responsible operator.
