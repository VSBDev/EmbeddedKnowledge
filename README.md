# EmbeddedKnowledge

EmbeddedKnowledge opens university-grade knowledge without pretending to confer a degree, admission status, clinical competence, or professional authorization. The first course, **Premed**, is a mastery-based foundation in the sciences and reasoning that medicine builds on.

Canonical domain: **<https://embeddedknowledge.io/>** — live, served by GitHub Pages over HTTPS, with `www` redirecting to the apex. The published artifacts are served with their real content types, so `llms.txt` arrives as `text/plain` and the graph, manifest, and schemas as `application/json` rather than as HTML. A local deployment remains available for development.

## Open the project

The landing page has no build step or third-party runtime dependencies. From this directory, run:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173/site/>. A local server is recommended because browsers do not allow `file://` pages to fetch the complete graph JSON; direct file opening still shows a smaller built-in preview.

## Premed deliverables

- [University-grade syllabus](course/PREMED-SYLLABUS.md) — 1,440-hour common core and medicine bridge, plus a 120–240-hour selected pathway. Three of the five pathways (US/MCAT, biology-depth, quantitative-depth) are graph-instrumented; the UK and Spain routes are documented but not yet instrumented, so they cannot currently satisfy completion or receive lesson contributions.
- [Curriculum implementation map](course/PREMED-CURRICULUM-MAP.md) — sequencing, dependency, outcome, practical, assessment, and production crosswalks.
- [Knowledge graph guide](course/PREMED-KNOWLEDGE-GRAPH.md) — schema, evidence semantics, route cautions, identity rules, and product guidance.
- [Machine-readable graph](site/data/premed-graph.json) — 10 domains, 46 graph modules, 388 atomic topic outcomes, and 1,058 relationships.
- [Public site](site/index.html) — project landing page plus separate Premed overview, searchable syllabus, no-scroll graph, and lesson-state viewer.
- [Lesson index](site/data/premed-lessons.json) and [open-PR index](site/data/premed-open-prs.json) — all 388 outcomes, merged lesson mappings, and GitHub-provenanced proposal quorum states.
- [Lesson-production ledger](site/data/premed-progress.json) — separately reports current contributed, in-review, published-open, and outcome-coverage totals.
- [Lesson Format v1 contract](FORMAT.md) and [authoring guide](lessons/README.md) — canonical scene Markdown, structured artifacts, math/chemistry/visual sources, accessibility, security, and export targets.
- [Learning-Content Standard v1](CONTENT-STANDARD.md) — evidence-based contract for explanations, examples, representations, retrieval, practice, feedback, misconception repair, transfer, and agent self-audit.
- [Collaboration model](COLLABORATION.md) — agent-first PR workflow, lesson-pack contract, exact review quorum, adjudication, governance, and adopted CC BY 4.0 content licensing.
- [Agent instructions](AGENTS.md) and [`llms.txt`](llms.txt) — repository-native and inference-time project maps.
- [Role-isolated Agent Skills](.agents/skills/) — authoring, specialized review procedures, and fresh finalization/adjudication, published through the [skills manifest](site/agent/skills.json).
- [Machine contribution contract](site/agent/contribution.json) — stable entry points, public schemas, protocol status, and read-only WebMCP surface.

The graph's 1,551-hour total counts every optional branch. It is an inventory, not the workload a learner is expected to complete. The syllabus is authoritative for completion rules.

The curriculum's completeness is not the lesson corpus's completeness. The public site reads current contributed, in-review, published, and covered-outcome values from the generated production ledger rather than freezing a percentage in prose.

## Agent-first contribution interface

Pull requests are the only write path. During the founding stage, a standard lesson uses one academic and one learning-design review of the original candidate across two providers, followed by one fresh finalizer. The finalizer disposes every finding, makes the single final edit, audits accessibility and rights, and owns the decision. One disclosed maintainer may operate the runs, but run IDs, provenance, instruction digests, and both content commits remain auditable.

Authors first prove the learner-facing opening, explanation, and worked use in a human-first prototype. The two formal reviewers run once in parallel against the original candidate; a third fresh run writes the final version from their evidence, with no cohort loop. Draft lesson PRs use a candidate-valid check, while the full protected merge-readiness check begins only when the PR is marked ready.

The public site exposes `/llms.txt`, `/llms-full.txt`, `/content-standard.txt`, `/agent/skills.json`, raw and downloadable Agent Skills, JSON Schemas, the Premed graph, lesson and open-PR indexes, the generated progress ledger, and seven read-only WebMCP tools. `llms.txt` discovers the contract; the selected role skill applies it. WebMCP is progressive enhancement for compatible browsers in a secure context; it never writes, votes, adjudicates, or merges.

Run the complete deterministic contract with:

```bash
npm ci
npm run validate
```

## Lesson Format v1

Lessons are authored as ordered semantic scenes in constrained MyST-compatible Markdown: a CommonMark/GFM base, 14 declared scene kinds, and a small declarative colon-directive whitelist. Raw HTML, JavaScript, executable notebooks, remote embeds, and code execution from untrusted lesson pull requests are forbidden.

A production pack combines `lesson.json`, scene files under `content/`, `assessment.json`, `references.json`, `claims.json`, `glossary.json`, `ATTRIBUTION.md`, local assets, reviews, and a final adjudication. Lesson Schema v3 requires each scene to declare whether it contains material claims. Claim-bearing scenes show learner-visible source notes, and validation connects every note through `claims.json` to complete `references.json` records; published lessons may contain only reviewed claims. Constrained TeX remains the math source, with `\ce{...}` for formulae and reactions. Format v1 accepts bounded `*.diagram.json` as the canonical process/network source and sanitized SVG for scientific illustration; Mermaid, DOT, and Vega-Lite may become generated adapters after their validation boundaries exist. Essential visuals require alt text and, where needed, a long description or equivalent table/transcript.

The canonical format targets a versioned JSON AST, sanitized semantic HTML/MathML, Typst-first PDF with LuaLaTeX fallback, and EPUB/DOCX/JATS adapters. Validation, deterministic web compilation, and the browser reader are implemented; the non-web exporters are **not yet available**. Full MyST is not the contract—the deliberately constrained v1 subset is. See the [format contract](FORMAT.md), [authoring guide](lessons/README.md), and mandatory [source and reuse policy](RIGHTS-POLICY.md).

The specimen under `examples/lesson-pack/` demonstrates the format but is not a contributed lesson, has no governance status, and never counts toward Premed coverage. Only validated lesson packs proposed under `lessons/`, independently reviewed, separately adjudicated, merged, publicly available, and openly licensed can become `published open`.

## Rebuild and validate the graph

Edit `scripts/build-premed-graph.mjs`, not the generated JSON, then run:

```bash
node scripts/build-premed-graph.mjs
node scripts/validate-premed-graph.mjs
```

The validator checks IDs, endpoints, tags, prerequisite declarations, workload totals, and prerequisite acyclicity.

## Browser checks

The Playwright suite checks complete-graph loading, syllabus and graph interactions, the lesson reader, console errors, mobile navigation, and horizontal overflow:

```bash
npm ci
npx playwright install --with-deps chromium
npm test
```

## Container deployment

The production container serves the landing page and course documents from an unprivileged, read-only Nginx runtime. It binds only to loopback by default:

```bash
docker compose up -d --build
curl --fail http://127.0.0.1:8082/healthz
```

The container defaults to port 8082 to avoid colliding with a service dashboard on 8080. Another loopback port can be selected without changing the image:

```bash
EMBEDDEDKNOWLEDGE_PORT=8090 docker compose up -d --build
EMBEDDEDKNOWLEDGE_BIND=0.0.0.0 docker compose up -d --build   # only if you intend LAN exposure
```

Stop it with `docker compose down`. The service binds to loopback by default and is intentionally not published on the LAN. If remote access is needed, put it behind a private overlay network or an authenticating reverse proxy rather than opening the port.

The container is the only place the `Content-Security-Policy` and other security headers exist, so a policy change is invisible to the static-server test run. Verify it against the real image:

```bash
npm run test:container
```

## Research trail

The curriculum rationale, primary-source catalog, method log, and the dated [learning-content evidence synthesis](research/CONTENT-AUTHORING-EVIDENCE-2026-07-19.md) live in [`research/`](research/). Raw model runs and the adjudications between them are kept locally rather than published, because they contain citations that were never verified; see [`research/README.md`](research/README.md). Source systems, educational evidence, and admission rules change; the project requires dated audits rather than claiming a universal or permanent optimum.

## Licensing

Two licences apply, deliberately:

- **Software** — the build scripts, validators, site JavaScript and CSS, tests, container
  configuration, and JSON Schemas are licensed **MIT**. See [`LICENSE`](LICENSE).
- **Course content and curriculum data** — the syllabus, curriculum map, knowledge-graph
  guide, generated graph and ledger data, lesson packs, research notes, and site prose are
  licensed **CC BY 4.0** unless a file or third-party asset states otherwise. See
  [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).

Third-party sources keep their own terms. Some referenced open textbooks are CC BY-**NC**-SA,
which is not compatible with this corpus — reuse them as citations, not as substrate. Every
lesson records its sources and reuse rights in `references.json` and `ATTRIBUTION.md`.

Nothing here confers university credit, admission, clinical competence, or professional
authorization.

## Project status

Contribution intake is **not open**. The repository is public and the protocol, schemas, and
lesson format are stable enough to build against, but no production lesson has been pushed.
The reviewed lesson corpus is at 0%. Branch protection is active on `main`; see
[`.github/BRANCH-PROTECTION.md`](.github/BRANCH-PROTECTION.md) for what is and is not
enforced, including the fact that merge authority currently rests on sole write access rather
than on a rule.
