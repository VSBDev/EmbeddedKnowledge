# Portable Research Prompt — Premed Source Catalog

**Purpose:** run this same brief through several independent LLMs (ChatGPT/o-series, Gemini, Grok, Perplexity, DeepSeek, a local model…) so their outputs can be *diffed and adjudicated* against each other and against our own deep-research run.

**How to use:** copy everything between the `--- BEGIN PROMPT ---` / `--- END PROMPT ---` markers into a fresh chat with web/browsing enabled. Do not add context about our project — independence is the point. Save each result as `research/runs/<model>-<date>.md`. That directory is kept local and is not
published, because raw runs contain citations that have not been verified — see `README.md`.

**Why the rigid format:** comparability. Independent runs are only useful if we can mechanically line them up — same sections, same fields, same category labels. Freeform answers can't be adjudicated.

---

--- BEGIN PROMPT ---

You are building a **source catalog** for reverse-engineering a premedical syllabus. The question: **what is a student entering medical school expected to already know?**

This is a research and mapping task, not an opinion piece. Use web search. Prefer primary sources (official curricula, exam specifications, admissions pages, standardized test outlines) over blogs, forums, or test-prep marketing. Every source must have a working direct URL.

## Categories

Label every source with exactly one:

- **NORMATIVE** — what institutions *require or assume*: medical school prerequisites and entry requirements (US/AAMC, UK/UCAS A-level subject requirements, Spain access to Medicina via EBAU/PAU, and others you find), foundation/access-year curricula.
- **DESCRIPTIVE** — what standardized outlines and courses *actually cover*: the AAMC MCAT content outline with its full topic breakdown, UCAT/other admissions tests, published premed course syllabi.
- **SECONDARY** — final pre-university year science curricula worldwide: Spanish Bachillerato (2º, ciencias) Biology/Chemistry/Physics, UK A-levels with exam board specifications (AQA/OCR/Edexcel), IB Higher Level Biology/Chemistry/Physics, German Abitur, French Baccalauréat, US Advanced Placement (Biology, Chemistry, Physics), plus any other national system you consider significant.
- **MATERIAL** — open or free content that teaches this: OpenStax, LibreTexts, Khan Academy, MIT OpenCourseWare, and comparable open resources. Note the license where you can.

## Required output format

### Part 1 — Source catalog

A table per category, with these exact columns:

| Source name | What it is | Direct URL | What it authoritatively defines | Last updated / version | Stability |

- **What it authoritatively defines** — the precise scope of its authority (e.g. "the topics tested on the MCAT as of the 2015 exam revision", not "MCAT stuff"). If a source is authoritative for nothing and is merely informative, say so.
- **Stability** — `STABLE` (fixed spec, changes on a known cycle — note the cycle) or `VOLATILE` (drifts without notice, e.g. a university admissions page).

### Part 2 — Topic synthesis

A single consolidated table of foundational topics, where rows are topics and columns are the systems you researched (MCAT, A-level, IB HL, Bachillerato, AP, Abitur, Bac…). Each cell: `CORE` (explicitly required/central), `PRESENT` (covered but minor/optional), or `ABSENT`. Group rows under: Biology, Biochemistry, General Chemistry, Organic Chemistry, Physics, Mathematics/Statistics, Psychology/Sociology.

### Part 3 — Agreement and disagreement

1. **The consensus core** — topics marked CORE by nearly every system. State the count (e.g. "6 of 7 systems").
2. **The contested edges** — topics where systems genuinely diverge. For each: who requires it, who doesn't, and your best explanation of *why* the divergence exists (different medical education structure? different exam philosophy? six-year undergraduate medicine vs. four-year graduate entry?).
3. **The hidden assumptions** — knowledge medical schools assume but that no curriculum explicitly lists (study skills, scientific reasoning, statistics literacy, lab technique…). Flag these as assumptions with your evidence.

### Part 4 — Confidence and gaps

- Claims you are confident in, and claims you are not — explicitly separated.
- What you could NOT find or verify, and what you'd need to resolve it.
- Any place where sources actively contradicted each other on a matter of fact.

## Rules

- Cite a URL for every factual claim about what a curriculum contains.
- If you cannot verify something, write "UNVERIFIED" rather than inferring it. An honest gap is worth more to us than a plausible guess.
- Do not pad. No introductions, no encouragement, no summary of what you're about to do.
- Distinguish clearly between what a system *requires for admission* and what it merely *offers*.

--- END PROMPT ---

---

## Adjudication prompt (phase 2 — after collecting runs)

Once several runs are collected, use this to force the argument. Give the adjudicator all runs as attachments/paste.

--- BEGIN ADJUDICATION PROMPT ---

You are adjudicating between independent research reports that all answered the same question: *what is a student entering medical school expected to already know?* Each was produced by a different AI system working independently.

Your job is not to average them. It is to find where they **disagree** and determine who is right.

1. **Factual conflicts** — where reports state incompatible facts about what a curriculum contains or requires, resolve each by checking the cited sources directly. Name the winner and the evidence. If neither can be verified, mark UNRESOLVED.
2. **Coverage gaps** — sources or whole systems found by some reports and missed by others. A unique find is valuable; list what only one report caught.
3. **Fabrication check** — flag any source whose URL doesn't resolve, whose content doesn't match its description, or that appears invented. Be specific and merciless; a hallucinated curriculum citation is the single most damaging error possible here.
4. **The reconciled core** — the consensus topic list that survives adjudication, with a confidence level per topic and the number of independent reports supporting it.
5. **Genuinely open questions** — where the disagreement reflects real-world divergence rather than one report being wrong. These are the interesting ones: they are design decisions for the syllabus author, not errors.

Output in that order. Cite URLs throughout. Prefer "unresolved" over a confident guess.

--- END ADJUDICATION PROMPT ---
