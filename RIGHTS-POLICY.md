# EmbeddedKnowledge source and reuse policy

**Status:** mandatory contribution and review policy
**Scope:** lesson prose, assessments, diagrams, tables, datasets, images, media, source access, and agent-assisted research

This is a conservative project rule, not a legal opinion or a promise that a claim cannot occur. Copyright rules and exceptions vary by jurisdiction. When a proposed use depends on an exception, uncertain ownership, a platform contract, or private permission, obtain qualified legal advice before publication.

## 1. Evidence is not permission to copy

A reference supports an academic claim. It does not automatically license the source's wording, organization, examples, questions, tables, diagrams, photographs, or other expression.

Copyright generally distinguishes facts, ideas, methods, and systems from the particular expression used to explain or illustrate them. The project therefore defaults to **facts-only research followed by original expression**: contributors identify and verify the underlying claim, then create an independent instructional structure, explanation, example set, assessment, diagram, and wording. A citation remains required for academic traceability even when no protected expression is reused.

Do not “rewrite” a source sentence by sentence. Close paraphrase, copied sequence, distinctive analogy, mirrored worked example, lightly redrawn figure, translated passage, or modified question can still preserve protected expression. Do not copy instructor resources, solution manuals, test banks, or access-controlled materials.

Authoritative orientation: [U.S. Copyright Office—What Does Copyright Protect?](https://www.copyright.gov/help/faq/faq-protect.html) and [Circular 33](https://www.copyright.gov/circs/circ33.pdf). These sources explain the fact/expression distinction in the United States; they do not settle every jurisdiction or use.

## 2. Allowed reuse bases

Core lesson material may reuse third-party expression, media, or a protected dataset only under one of these recorded bases:

- CC BY 4.0, with complete attribution and change notice;
- CC0 1.0;
- verified public-domain status for the exact material and relevant jurisdiction; or
- written permission covering the exact use and allowing redistribution with the CC BY 4.0 corpus.

The founding-stage corpus does not adapt or redistribute CC BY-SA, any NonCommercial licence, any NoDerivatives licence, “free to view” material, material with no identified rights holder, or material relying only on fair use, fair dealing, quotation, classroom, or research exceptions. Some of those uses may be lawful in a particular setting, but excluding them keeps a globally reusable CC BY corpus and avoids making contributors or downstream users repeat a jurisdiction-specific analysis. Creative Commons describes the distinct BY, SA, NC, and ND conditions in its [official licence guide](https://creativecommons.org/share-your-work/cclicenses/).

Short necessary labels, standard notation, and unavoidable technical terminology do not justify copying surrounding prose. Trademark names and logos remain outside the content licence and may not imply endorsement.

## 3. Data and databases

Individual facts may be outside copyright, while a database's selection or arrangement can be copyrighted and EU law can separately protect substantial or repeated extraction. Do not scrape, reconstruct, or systematically copy a source database. Dataset use requires an explicit compatible licence, public-domain status, or written permission recorded in `references.json`, plus the exact dataset version and extraction scope. See the EU [Database Directive 96/9/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:31996L0009).

## 4. Agent access is a separate permission check

Before an agent opens or processes a substantive source, check the source's current terms, robots policy where applicable, access controls, and licence page. Record one of two states in `references.json`:

- `checked-no-agent-restriction-found`: the accountable contributor checked and found no source term that prohibits the planned agent access; this is a dated observation, not a warranty from the source owner;
- `human-only`: an agent restriction exists or permission is unclear. Contributor agents must not open, upload, summarize, or process that source. A human may verify the citation independently if lawful, or the source should be replaced.

Never bypass a paywall, login, technical control, rate limit, robots rule, or source-specific prohibition. Do not place source PDFs, textbook chapters, patient media, or copied passages into prompts, logs, fixtures, or the repository merely because the output will be paraphrased.

## 5. Machine-readable rights ledger

Every `references.json` record declares:

- how the source was used: factual reference, quotation, adaptation, media redistribution, or dataset extraction;
- the rights basis and concrete evidence for that basis;
- the exact source licence as displayed, even when the licence is incompatible and the source is used only for facts;
- current agent-access status, terms location, check date, and notes.

Every third-party asset in `lesson.json` declares its path, source, title, creator, allowed licence or permission basis, rights evidence, attribution, and modifications. Any source whose expression, media, or dataset is reused must also appear by stable source ID in `ATTRIBUTION.md`. A general bibliography, link, disclaimer, educational purpose, or “no infringement intended” notice is not a rights basis.

## 6. Contributor and review gates

The accountable contributor attests that original lesson material can be licensed under CC BY 4.0 and that every exception is disclosed. The accessibility-and-rights reviewer independently checks source terms, exact asset identity, licence compatibility, attribution, modifications, agent-access restrictions, privacy, and provenance against the frozen candidate commit.

Review must request changes when:

- prose closely tracks a source's wording or organization;
- an example, question, diagram, table, or media item appears source-derived without a compatible recorded basis;
- a rights record is missing, contradictory, stale, or cannot be verified;
- an agent processed a `human-only` source;
- database extraction is substantial, repeated, or unclear; or
- permission depends on a legal exception or jurisdiction-specific conclusion not approved by counsel.

## 7. Complaint and removal procedure

Before public launch, maintainers should publish a monitored private rights-contact address and identify the responsible operator. Until then, a claimant may open a minimal repository issue without posting personal or confidential evidence and request a private channel, or use the hosting provider's formal copyright process.

On a credible complaint, maintainers should promptly preserve the relevant commit and provenance, temporarily remove or quarantine the disputed material when appropriate, acknowledge the complaint, identify the exact work and use, review the rights record, consult counsel when needed, and document the resolution. GitHub publishes its [content-removal request](https://docs.github.com/en/site-policy/content-removal-policies/submitting-content-removal-requests) and [DMCA](https://docs.github.com/en/site-policy/content-removal-policies/dmca-takedown-policy) procedures.

Operational controls reduce risk; they do not create immunity. A maintainer should obtain jurisdiction-specific counsel before launch and consider an appropriate legal entity, contributor terms, and media liability coverage as the project grows.
