# Clinical wrap-up: the drug found the crypt without being aimed at it

A patient being treated for a cancer somewhere else in the body develops mouth soreness, nausea and diarrhoea. The tumour is not in the gut. Nothing was administered into the gut. Gut toxicity of this kind is called chemotherapeutics-induced intestinal mucositis, and reported figures for how many patients get it run from 40 up to 100 per cent. That range is too wide to be a useful number, because it aggregates across different drugs, doses and populations; read it as saying the problem is common rather than as an estimate. Its recorded manifestations run from inflammation and ulceration through pain, nausea and diarrhoea to sepsis and organ failure.

Why the gut? The published reason is short: the gastrointestinal tract is particularly vulnerable to off-target effects of antineoplastic drugs because intestinal epithelial cells proliferate rapidly. This lesson can now say what "rapidly" buys, in numbers, and can say which part of the cell cycle each drug family is aimed at.

## What the drugs are aimed at

Two families, two targets, both inside this lesson.

One family interferes with DNA synthesis. Fluorouracil, methotrexate, irinotecan and doxorubicin are all reported to injure the gut, and the review this lesson cites groups them as interfering with DNA synthesis. Do not read that as one mechanism, or as S-phase specificity.

The four differ in how they act, and doxorubicin is the clearest example: besides interfering with DNA synthesis it poisons topoisomerase II, intercalates into DNA and generates oxidative damage, and it can injure cells that are not dividing at all. So the grouping is a statement about where these drugs cause harm, not a claim that each one acts only on a cell in S phase.

The other family interferes with the spindle. Antimicrotubule drugs, including vinblastine, vincristine, colchicine and paclitaxel, inhibit microtubule dynamics. Paclitaxel is often described as working by holding the spindle checkpoint unsatisfied, and at the exposures reached clinically that account does not generalise: it is a mechanism reported in cell culture rather than an established description of what the drug does in a patient. The consequence is a failure to align the chromosomes at the metaphase plate, and that failure activates the spindle assembly checkpoint. Scene four's machinery is the target: the drug works by making sure the checkpoint's condition is never satisfied.

A drug whose action *depends* on a cell being in S phase or M phase reaches only cells that are in it, and that dependence is what makes a fast-cycling tissue vulnerable. The dependence is a matter of degree rather than a rule: several of these drugs have additional mechanisms that do not require a cycling cell, which is why the argument below is about why the crypt is hit hardest and not about why other tissues are spared. So the question of which tissues suffer becomes a question about what fraction of each tissue's cells are in those phases at any moment.

## Working out the exposure

Take the crypt figures this lesson has assembled.

About 25.7 per cent of crypt cells are proliferating. Their average cycle is about 25 hours. Single-cell measurements in human lines put S phase at 7.6 to 10.1 hours, which is 30 to 40 per cent of a 25-hour cycle, and mitosis at around half an hour, which is about 2 per cent of it.

One assumption is doing work here and should be visible. Those phase durations were measured in cells whose whole cycle ran shorter than 25 hours, so using them as fractions of a 25-hour cycle assumes the extra time sits in G1. Scene two gives some licence for that, since G1 was the phase that varied most, but it is an assumption and not a measurement.

So at any instant the share of all crypt cells sitting in S phase is between {math}`0.257 \times 0.30` and {math}`0.257 \times 0.40`, which is 8 to 10 per cent. And the share in mitosis is roughly {math}`0.257 \times 0.02`, near half a per cent.

That second figure can be checked against a real measurement, which is a good reason to compute it. Pathologists count mitotic figures in crypts. Whole-crypt microdissection of human colonic crypts found a mean of 5.6 mitoses per crypt in controls, and mitotic figures have been described as making up under 0.5 per cent of the cells in a normal crypt. Against a 2428-cell crypt, 5.6 mitoses is 0.23 per cent; against a 700-cell crypt it is 0.8 per cent. The prediction of about half a per cent sits between those two. Do not oversell that. A bracket from 0.23 to 0.8 would have accommodated almost any prediction in the same range, so what the comparison establishes is that the chain of reasoning has not gone wrong by an order of magnitude. It does not confirm the value.

Now the comparison that answers the clinical question. Roughly a tenth of the cells lining the colon are replicating DNA right now, and the same cells will be back in S phase within about a day. A tissue that is not renewing has almost none. A drug that damages DNA synthesis or the spindle is therefore not indiscriminate; it is precisely discriminating, and the crypt is one of the tissues it discriminates in favour of hitting. The gut toxicity is not a side effect in the sense of being unrelated to the mechanism. It is the mechanism, landing on the tissue in the body that runs that mechanism hardest.

## Why arresting a cell is not the same as removing it

One more piece of the lesson does clinical work, and it is scene six's.

An antimicrotubule drug arrests cells by holding the spindle assembly checkpoint on. Scene six established what happens to a cell held that way: cyclin B decays anyway, and after nine to fifteen hours the cell slips out of mitosis without dividing, becoming tetraploid. That is exactly what limits these drugs. Mitotic slippage lets an arrested cell exit mitosis instead of dying in it, and the efficacy of antimicrotubule treatment would be improved substantially if cells reliably died during the arrest rather than surviving past it. How much slippage happens, and what becomes of the cells that slip, varies substantially between cell lines.

So the same finite hold that is a source of proliferative error in a healthy crypt is a source of treatment failure in a tumour. One property of one mechanism, read twice.

:::{callout}
:kind: boundary

**Teaching example, not medical advice.** This scene is written to show how the cell cycle explains a pattern of clinical observation. It is not guidance for any real situation. No dose, schedule, regimen, drug choice or management step is stated or implied anywhere in this lesson, and nothing here supports diagnosing, treating or advising anyone. Drug names appear only to identify which part of the cycle a mechanism acts on. Decisions about cancer treatment and about managing its effects belong to the qualified clinicians responsible for a specific patient.
:::

## Where the block goes from here

This lesson has taken the crypt's renewal apart. A tissue making 175 cells a day per crypt runs its divisions through a set of conditions, each of which detects one physical state and holds one transition. Those conditions are what make the throughput survivable. They are also finite, specific, and satisfiable by some configurations that are wrong, which is why a tissue dividing this much accumulates cells whose chromosome content differs from their parent's.

Two lessons follow, and each takes one half of what has been left open.

Lesson 09 of this block turns to meiosis, and the crypt becomes a contrast rather than an example: the cells in this tube never do it. Reading the two divisions against each other is the point, and the machinery in this lesson, cohesin, kinetochores, the segregation problem itself, is what the comparison is made of.

Lesson 10 of this block takes the cells this lesson has just produced and asks what becomes of them. A daughter with a micronucleus, a tetraploid cell that failed cytokinesis, a cell that slipped out of mitosis. What removes such a cell, what stops it permanently, and what happens in a crypt when neither occurs, is that lesson's subject, and colorectal cancer is where it ends. Lesson 06 handed it a broken gradient reader. This lesson hands it a supply of wrong daughters, and a rate.

:::{source-note}
:claims: claim-mucositis-incidence-and-manifestations, claim-gi-vulnerability-proliferation, claim-dna-synthesis-drugs, claim-antimicrotubule-sac-arrest, claim-slippage-limits-antimitotics, claim-ki67-proliferative-fraction, claim-measured-phase-durations, claim-mitotic-index-per-crypt, claim-crypt-geometry, claim-epithelial-renewal, claim-mitotic-slippage, claim-slippage-duration, claim-clinical-cycling-fractions
:sources: source-dahlgren-mucositis, source-balachandran-kipreos-slippage, source-bravo-axelrod-crypt-model, source-chao-uncoupled-phases, source-boman-fields-crypt-axis, source-vanderwath-crypt-model, source-nguyen-colonic-crypt, source-brito-rieder-slippage

The incidence figure that 40 to 100 per cent of patients given chemotherapeutics experience gut toxicity, the list of manifestations, the statement that the gastrointestinal tract is particularly vulnerable because intestinal epithelial cells proliferate rapidly, and the identification of fluorouracil, methotrexate, irinotecan and doxorubicin as drugs acting on gut tissue by interrupting DNA synthesis, all come from a 2021 review of chemotherapeutics-induced intestinal mucositis. That antimicrotubule drugs inhibit microtubule dynamics, causing a failure to align chromosomes at the metaphase plate and activating the spindle assembly checkpoint, that vinblastine, vincristine, colchicine and paclitaxel are among them, that mitotic slippage is cells arrested by the checkpoint exiting mitosis without dividing and becoming tetraploid, that efficacy would be improved if cells died during arrest rather than after slippage, and that slippage and its outcomes vary substantially between cell lines, all come from a 2017 review of mitotic slippage as a weakness of mitosis-inhibitor therapy. The proliferative fraction of 624 in 2428 cells is from the 2013 whole-crypt Ki-67 counts. The measured phase durations, S phase 7.6 to 10.1 hours and mitosis around half an hour, are from the 2019 single-cell imaging study in named human lines. The mean of 5.6 mitoses per control human colonic crypt by whole-crypt microdissection, and the description of mitotic figures as under 0.5 per cent of cells per crypt, come from a 2013 paper on division along the human colonic crypt axis, which reports the 5.6 figure from an earlier microdissection series. The roughly 700-cell crypt and the three-to-five-day renewal band are this block's carried-forward figures. The nine-to-fifteen-hour slippage window is from the 2006 human RPE1 study, converted from minutes in scene six.

The exposure calculation in this scene is this lesson's own arithmetic and no source states it. Multiplying the proliferative fraction by the share of the cycle spent in S phase or in mitosis assumes that proliferating cells are distributed across the cycle in proportion to each phase's duration, which is the standard assumption for a population in steady state and is an approximation. It also combines a proliferative fraction measured by Ki-67 in human colonic biopsies with phase durations measured in three cultured human lines, none of them colonic. The agreement between the predicted mitotic share of about half a per cent and the measured 5.6 mitoses per crypt is a consistency check across independent measurements, and the two crypt-size figures give 0.23 and 0.8 per cent, so the check confirms an order of magnitude and not a value. The reading of one property twice, as error in a crypt and as treatment failure in a tumour, is this lesson's framing rather than a claim from either clinical source.

The fractions of crypt cells in S phase and in mitosis are this lesson's arithmetic from the derived cycle time and the measured phase durations, and the agreement with the measured mitotic count is a consistency check rather than an independent confirmation. The claim is marked health-sensitive and carries no implication for any person.
:::
