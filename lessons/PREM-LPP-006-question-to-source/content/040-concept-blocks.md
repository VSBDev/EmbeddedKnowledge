# Turn prose into concept blocks

After choosing an answer product, translate the need into ideas a source can represent. PubMed's introductory guidance begins with the key concepts, and its current interface can translate untagged terms through automatic term mapping. The purpose here is to plan concepts, not to build a comprehensive database strategy.

## Remove the narrative wrapping

Start with the diagnostic need:

> Does retrieval practice help university biology learners remember material after a delay?

Ask of each phrase: *Would changing this idea change which items count as relevant?* A useful first draft is:

```text
[university biology learners]
[retrieval practice]
[delayed recall]
```

The lesson uses two to four blocks as a manageable drafting heuristic. It is not a PubMed rule. Keep a comparison such as rereading only if the question truly requires that comparison; adding every detail can make the prototype too narrow.

## Generate variants without changing the idea

A **keyword** is an ordinary word or phrase used for retrieval. A **controlled vocabulary** supplies maintained subject terms; Medical Subject Headings (MeSH) is NLM's example for describing articles. Candidate variants belong inside one block only when they might express the same intended idea.

| Concept block | Candidate ordinary-language variants to test | What would require a new block? |
| --- | --- | --- |
| University biology learners | undergraduate biology students; college biology learners | A different population that changes eligibility |
| Retrieval practice | practice testing; retrieval-based learning | A different learning activity |
| Delayed recall | long-term retention; later recall | A different outcome, such as learner satisfaction |

These are author-created candidates, not certified synonyms. A database's vocabulary and the retrieved records must confirm or reject them.

## Treat the first query as a diagnostic prototype

PubMed may modify or add terms and shows its interpretation in **Search Details**. After a small result sample, revise one block at a time:

- too few plausible candidates: remove an unnecessary constraint or test another expression for the same concept;
- many off-target candidates: replace a vague expression with a more specific one;
- a concept is missing from the translation or titles: repair that block before changing the others.

A result count is not a mastery score and a translation is not a quality judgment. The prototype tells you how the system interpreted your plan. Formal documentation and comprehensive validation are deferred to `PREM-02.03`.

:::{source-note}
:claims: claim-key-concepts-first, claim-terms-and-vocabulary, claim-query-is-prototype
:sources: source-pubmed-user-guide, source-nlm-mesh-course

The current PubMed guide supports identifying key concepts, testing alternative terms, inspecting Search Details, and revising overly broad or narrow retrieval. NLM's MeSH course supports the controlled-vocabulary description and its limits.
:::
