# Research Diary — Premed Syllabus Sources

*Process log for the syllabus research. Everything recorded here feeds the future "write a great syllabus" skill: what we searched, what we found, what we judged useful or useless, and why.*

---

## 2026-07-19 — Session 1: Source-gathering sweep

### Goal
Gather every source that defines what a student entering medical school is expected to know:
1. University entry expectations (what med schools assume on day 1).
2. Premed courses/programs elsewhere (US premed reqs, MCAT outline, foundation years).
3. Existing learning material (open textbooks, courses, curricula).
4. Final-year secondary school science curricula worldwide (ES bachillerato/EBAU, UK A-levels, IB, DE Abitur, and equivalents).

### Method decision
Use a multi-agent deep-research harness: fan-out searches per category (each searching a different angle), fetch and read primary sources, adversarially verify claims, synthesize a cited source-catalog report. Rationale: one search angle won't find everything; entry expectations are scattered across admissions pages, national exam specs, and standardized-test outlines.

**Skill-lesson #1:** The very first step of writing a syllabus is not writing — it's building a *source catalog* with provenance. We categorize sources into: (a) normative (what institutions REQUIRE/EXPECT), (b) descriptive (what courses/tests actually COVER), (c) material (textbooks/content that teach it). A great syllabus triangulates all three.

### Log
- Created project research structure: `research/` with this diary.
- Launched deep-research run (`wf_686d6155-a26`). Harness shape: decompose into 5 search angles → 5 parallel search agents → URL-dedup + fetch top 15 sources → 3-vote adversarial verification per claim (2/3 refutes kills a claim) → synthesis with citations.

### The research prompt (verbatim — prompt design is itself skill input)

> Build a comprehensive, cited SOURCE CATALOG for defining a premedical syllabus — "what a student entering medical school is expected to know." This is source-gathering and mapping, not opinion. Cover four categories and clearly label each source by category:
> 1. **NORMATIVE** — what universities/med schools require or assume on day 1: US premed course requirements (AAMC), UK medicine entry requirements (A-level subject requirements, UCAS), Spanish access to Medicina (EBAU/PAU ciencias, nota de corte, required subjects), medical school prerequisite lists, foundation/access year curricula.
> 2. **DESCRIPTIVE** — what standardized outlines and courses actually cover: the full AAMC MCAT content outline (Biology, Biochemistry, General Chemistry, Organic Chemistry, Physics, Psychology/Sociology) with its topic breakdown; UCAT/BMAT where relevant; premed course syllabi.
> 3. **SECONDARY-SCHOOL** science curricula for the final pre-university year worldwide: Spanish Bachillerato (2º, ciencias de la salud) biology/chemistry/physics, UK A-levels with exam board specs (AQA/OCR/Edexcel), IB HL Biology/Chemistry/Physics, German Abitur, French Baccalauréat, US AP (Biology, Chemistry, Physics).
> 4. **MATERIAL** — open/free textbooks and courses: OpenStax, LibreTexts, Khan Academy MCAT/science, MIT OCW, and comparable open resources.
>
> For each source give: name, what it is, the category, a direct URL, and what it authoritatively defines. The deliverable is a well-organized catalog to reverse-engineer a canonical premed syllabus, plus a synthesis of where these sources AGREE and DISAGREE on required foundational knowledge (the agreement is the core syllabus; the disagreement is the interesting edges).

**Skill-lesson #2:** The prompt encodes the core method — *triangulate normative + descriptive + material sources, then treat agreement as the spine and disagreement as the edges*. This is reusable for any degree, not just medicine. The "agree/disagree" instruction is what turns a link dump into a syllabus argument.

**Skill-lesson #3:** Demanding provenance per source (name / what it is / category / URL / what it authoritatively defines) is non-negotiable. Later consensus juries verify claims against sources; a source without a stated scope of authority can't be used as ground truth.

### Multi-model replication (added same session)
Project decision: run the same brief through *other* LLMs independently, then argue between the results. Written up as `research/PORTABLE-RESEARCH-PROMPT.md` — a self-contained prompt (copy-paste into any browsing-enabled chat) plus a second **adjudication prompt** for the argument phase. Runs get saved to `research/runs/<model>-<date>.md`.

Design decisions and why:
- **Rigid output format** (fixed tables, fixed columns, fixed category labels). Independent runs are only adjudicable if they line up mechanically. Freeform answers can only be compared by vibes.
- **No project context in the prompt.** Independence is the value; telling each model what we're building would correlate their answers and destroy the signal.
- **`CORE`/`PRESENT`/`ABSENT` per topic per system** — forces a diffable matrix instead of prose, so the consensus core falls out by counting rather than by judgment.
- **Stability field per source** (`STABLE` with its update cycle vs. `VOLATILE`) — directly answers the refresh-policy question flagged earlier; volatile sources need re-checking, and that's ideal donated-compute work.
- **"UNVERIFIED" mandated over inference**, and a dedicated fabrication check in the adjudicator. A hallucinated curriculum citation is the worst possible failure mode here — it poisons the syllabus at its root.
- **Adjudicator explicitly told not to average.** Averaging independent reports destroys exactly the information we ran them for. It must resolve conflicts by checking sources, and separate "one report is wrong" from "the world genuinely diverges here."

**Skill-lesson #4:** Multi-model research needs a *contract* (fixed schema) agreed before the runs, not after. Retrofitting comparability onto heterogeneous outputs is far more expensive than specifying it up front. The skill should ship the schema alongside the prompt.

**Skill-lesson #5:** Disagreement has two distinct causes and they must never be conflated: (a) one researcher erred → resolve by source, (b) the world genuinely differs → this is a *design decision* for the syllabus author, and it belongs in the syllabus as a documented choice. The adjudication prompt separates these explicitly (sections 1 and 5).

**Skill-lesson #6:** This is the independent-review architecture, applied one level earlier—to research rather than lesson review. Same shape: multiple independent workers, adversarial adjudication, and sources as final ground truth. The architecture generalizes to agent-assisted curriculum research without granting model runs governance authority.

### Run 1 complete — results

`wf_686d6155-a26` finished in ~11.5 min: 108 agents, 626 tool calls, 2.1M subagent tokens, 0 errors. 5 angles → 26 sources fetched → 126 claims extracted → 25 verified → **25 confirmed, 0 refuted, 0 unverified**. Written up as `research/SOURCE-CATALOG.md`, copied to `runs/claude-deepresearch-2026-07-19.md` as a peer entry for adjudication.

**Skill-lesson #7 — verification budget silently drops coverage.** The harness verified only 25 of 126 claims and the synthesis then reported the unverified categories as *gaps* ("no surviving claim documented OpenStax/LibreTexts/Khan Academy…", "A-level/IB/AP/Abitur/Bac remain ungathered"). This was **false**: those sources had been fetched and their claims extracted, they just never reached the verification panel. Recovering them from `journal.jsonl` (mapping `agentId`→`label` via the task output's `workflowProgress`) roughly doubled the catalog's content. → *The skill must (a) always reconcile the synthesis against the raw extraction log before declaring a gap, and (b) distinguish "unverified" from "absent" in the output. A confident "we didn't find it" is more dangerous than an honest "not checked".* Encoded in the catalog as the ✅/⬜ confidence key.

**Skill-lesson #8 — verification also strips nuance, so keep the caveats.** The 3-vote panel didn't just confirm claims, it *corrected* them: MCAT percentages are approximate not fixed; MSAR rows ≠ schools (CHEM inflated by counting Gen Chem I/II + Orgo I/II + Biochem); BIOL *Recommended* is actually the largest cell, so "biology is most required" would have been wrong. These corrections are the highest-value output of verification and are easy to lose when summarizing. → *The skill should require verifiers to emit corrections, not just verdicts, and carry them into the deliverable.*

**Skill-lesson #9 — the deliverable needs a stability field per source, and it pays off immediately.** Two live dependencies surfaced only because the prompt asked: some OpenStax titles carry terms that may be incompatible with the adopted CC BY 4.0 lesson corpus, and Khan Academy's MCAT collection was announced as retained only "until 2026" and currently serves a bot challenge. Both are reuse and continuity risks invisible in a plain topic catalog.

**Skill-lesson #10 — fetch-blocking is a systematic bias, not a nuisance.** medschools.ac.uk, Kaplan (403) and Khan Academy (bot challenge) resisted automated fetch. Sector bodies and commercial prep sites block bots; government/BOE/exam-board PDFs don't. So automated research systematically *over-weights* legal texts and *under-weights* institutional aggregators. The skill needs a declared fallback (search-index verification, Wayback) and must log which sources were read indirectly.

### Substantive findings that change the product

**The MCAT content outline is the spine.** Public, hierarchical (foundational concepts → content categories → reasoning skills), with explicit disciplinary weightings *and* stated depth ("introductory college level", biochem "first-semester"). Nothing else found comes close. Bonus: AAMC itself maps the outline to open textbooks and Khan Academy, i.e. a pre-built bridge from taxonomy to free material.

**The disagreements are structural, not scientific.** Every system agrees on bio + gen chem + orgo + physics + biochem + intro psych/soc. They disagree only on *how the requirement is expressed*: US school-by-school (drifting to competencies), UK per-institution (Chemistry A-level **not** universal), Spain legally requires none of the three sciences and steers by EBAU weightings. → The knowledge target is stable; the structure is ours to design. Big de-risking.

**The anti-exam thesis is independently validated by the canonical benchmark.** Every MCAT science section allocates only ~35% to Knowledge of Scientific Concepts vs. 45% reasoning/problem-solving, 10% research design, 10% statistical reasoning. The US premed gold standard is already ~65% reasoning. → Statistics and research methods are *core content*, not extras, and a syllabus built purely from topic lists would miss most of what's actually assessed.

**Spain is deeper than expected in three places** — university-depth metabolism (glycolysis→oxidative phosphorylation with energy-yield calculations), named modern genetic engineering (PCR, restriction enzymes, cloning, CRISPR-Cas9), and a full mandatory immunology block. In the US/UK that is often first-year-university or medical-school material. The resulting reference curriculum deliberately retains that depth in areas closest to medicine.

**Practical/lab work is the open problem.** UK A-levels require ≥12 assessed practicals with a separately-reported endorsement; AP mandates 25% lab time; US schools require lab components. The MCAT outline has none of it, and it's the hardest thing for an online platform to replicate. Flagged as an unresolved design question.

**Prior art worth studying: UK foundation/gateway years.** They exist precisely to teach premedical science to students who lack it — the closest real-world analogue to what we're building.

### Adjudication complete — 19 July 2026

Three runs were adjudicated against their primary sources in `research/ADJUDICATION-2026-07-19.md`. The earlier headline above was too broad: the reports agree on a useful **union of preparation**, but no evidence shows that every entrant is required to bring the whole bio + chemistry + physics + biochemistry + psychology/sociology bundle. Subject selection and school-specific admission rules matter.

The portable core that survived is cell/molecular biology, biomolecules and metabolism, general chemistry, biologically relevant organic chemistry, foundational physics, algebra/units/graphs, experimental design, and data/statistical reasoning. Human physiology, psychology/sociology, ecology/plants, advanced organic mechanisms, and calculus are pathway-dependent modules rather than universal entry requirements.

The fabrication audit found five material problems in the Gemini run: a dead AQA Biology URL, two incorrect French curriculum identifiers, a generic Spanish ministry homepage presented as a weighting table, and a generic Harvard course locator presented as an LS1a syllabus. Codex was strongest overall but incorrectly marked MCAT ecology and plant biology/photosynthesis as present. Gemini was right on those two narrow MCAT cells.

### Pending
- [x] Deep-research run → `research/SOURCE-CATALOG.md`.
- [ ] Fill known gaps: IB HL subject briefs; AQA/OCR/Edexcel *Chemistry and Physics* (only Biology fetched per board); Abitur binding year + subject PDFs; per-school US prerequisite table from the MSAR PDF.
- [x] Run the portable prompt through 2–3 external models, then adjudicate → `research/ADJUDICATION-2026-07-19.md`.
- [ ] Decide the OpenStax NC-license question before building content on it.
- [ ] Archive Khan Academy MCAT structure while it's up.
- [ ] Draft syllabus v1 from the consensus core, with the six contested edges as explicit documented decisions.
- [ ] Open design question: what replaces the lab requirement?
