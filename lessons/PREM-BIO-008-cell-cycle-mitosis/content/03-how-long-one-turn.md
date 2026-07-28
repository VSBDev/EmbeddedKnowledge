# How long one turn of the cycle has to take

Nobody has followed a single human colonic crypt cell through a division and timed it. The measurement is hard to do in a living person, and the figures this block has quoted for a 24-hour cycle come from cells in a dish.

The crypt still tells you its cycle time, if you ask the question the right way round. Two facts about the tissue are enough, and you already have both.

## Setting it up

Write {math}`N` for the total number of cells in a crypt, {math}`N_p` for the number of them that are proliferating, {math}`T_t` for the time the tissue takes to replace itself, and {math}`T_c` for the average time one proliferating cell takes to get round the cycle once.

Two statements about a crypt in a healthy adult:

**The crypt is in steady state.** It is neither growing nor shrinking, so cells leave at the top at the same rate as they are produced at the bottom. Over a time {math}`T_t` the whole population is replaced, so the loss rate is {math}`N / T_t` cells per unit time.

**Divisions supply that loss.** Each proliferating cell completes one division every {math}`T_c`, and each division turns one cell into two, adding one cell to the crypt. So the production rate is {math}`N_p / T_c` cells per unit time.

In steady state those two rates are equal:

:::{equation}
:label: equation-steady-state

\frac{N_p}{T_c} = \frac{N}{T_t}
:::

:::{worked-example}
:id: worked-example-crypt-cycle-time

**Rearranging.** Multiply both sides by {math}`T_c` and by {math}`T_t / N`:

{math}`T_c = T_t \times N_p / N`

The ratio {math}`N_p / N` is the proliferative fraction, the share of crypt cells that are dividing. Call it {math}`f`. Then

{math}`T_c = f \times T_t`

Stop and look at what happened to {math}`N`. It cancelled. The average cycle time of the proliferative compartment does not depend on how big the crypt is at all. It depends only on what *fraction* of the crypt is dividing and how fast the tissue turns over.

That is a useful thing to have found, because the crypt's total cell count is exactly the number the literature disagrees about. Scene one gave two figures, about 700 cells for a modelled crypt of the descending colon and 2428 cells for directly counted human crypts. The disagreement no longer matters for this calculation.

**Putting numbers in.** The Ki-67 count gives 624 proliferating cells out of 2428, so

{math}`f = 624 / 2428 = 0.257`

Take the turnover time as four days, the working figure this block has used since lesson one. Four days is 96 hours, so

{math}`T_c = 0.257 \times 96\ \text{hours} = 24.7\ \text{hours}`

About 25 hours. Roughly one turn of the cycle per day.

**Checking the range.** The turnover figure is a band of three to five days, not a constant, so carry the band through. At three days, {math}`T_c = 0.257 \times 72 = 18.5` hours. At five days, {math}`T_c = 0.257 \times 120 = 31` hours. So the honest answer is that the proliferative compartment of a human colonic crypt turns over its cycle somewhere between about 19 and 31 hours, centred near a day.

**Checking against something independent.** PREM-BIO-002 of this block quoted about 24 hours for a cultured human cell and promised this lesson would explain the figure. Here is a figure of the same order, arrived at from a completely different direction: from a proliferative fraction and a tissue turnover rate in human tissue instead of from watching cells in a dish.

Be careful how much weight that agreement carries. The 24-hour figure is a textbook round number, and scene two showed that the phases actually measured in cultured human lines sum to between about 14 and 22 hours. So the honest statement is that two unrelated routes both put a dividing human cell's cycle on the order of a day. That is worth having. It is not a reason to trust the second significant figure, and 24.7 hours should be read as "about a day".
:::

## What the answer says about who is doing the dividing

Now put the derived figure next to the one measured rate this lesson has for a specific crypt cell. Clone-tracing puts a crypt-base stem cell's division at about once every two to three days, so 48 to 72 hours.

The compartment average is around 25 hours. The stem cells are two to three times slower than that. Both cannot be typical, so ask which cells the average is actually describing.

For the next step the crypt's absolute size does come back, because the question has changed: the cancellation above answered "how fast does the compartment cycle", and this one asks "how many divisions does each group contribute", which is a count. Take the counted crypt, since the proliferative figure came from it.

There are about 7 stem cells among about 624 proliferating cells, which is a little over one per cent of the compartment. Seven cells dividing once every 2.5 days contribute about 2.8 divisions a day. The crypt needs 2428 divided by 4, or about 607 divisions a day. Subtract, and the remaining 617 proliferating cells have to supply 604 divisions a day between them, which is 0.98 divisions per cell per day, or a cycle of about 25 hours each.

The stem cells barely moved the average, because there are so few of them. So the figure of about 25 hours is essentially the cycle time of the transit-amplifying cells, and the conclusion is that the amplifying compartment cycles roughly two to three times faster than the stem cells that feed it.

That is worth holding, because it inverts a natural assumption. The stem cell is not the busiest cell in the crypt. It is the slowest dividing cell in the dividing part of the crypt, and the speed lives in its daughters.

## The assumptions, stated plainly

This calculation is a model and it will mislead you if you forget which parts were assumed.

1. **Steady state.** If a crypt is regenerating after injury, production exceeds loss and the equation does not hold.
2. **Ki-67 positive means currently cycling.** Ki-67 marks proliferating cells, and treating each positive cell as one working through a cycle of length {math}`T_c` is an approximation rather than an identity.
3. **Every division adds one cell to the tissue's output.** If cells die inside the crypt instead of being shed from the surface, more divisions are needed than this calculation asks for. Cell death is lesson 10's subject in this block, and this calculation assumes there is none.
4. **The two input numbers come from different studies.** The proliferative fraction is from Ki-67 counts on human biopsies of unstated colonic region; the turnover band is from separate work. Combining them assumes they describe comparable tissue.
5. **One average stands for a whole compartment.** {math}`T_c` came out as a single number, and the compartment plainly contains cells cycling at different rates, as the stem-cell comparison above shows.

Assumption 3 is the one that bites hardest, and naming it is the honest way to hand the thread forward.

:::{source-note}
:claims: claim-epithelial-renewal, claim-ki67-proliferative-fraction, claim-crypt-count-disagreement, claim-crypt-geometry, claim-cultured-cycle-24h, claim-stem-cell-division-rate, claim-human-colonic-stem-cell-number, claim-cycle-time-derivation, claim-crypt-cycle-estimate, claim-amplification-rounds
:sources: source-bravo-axelrod-crypt-model, source-nguyen-colonic-crypt, source-vanderwath-crypt-model, source-cooper-cell-cycle, source-baker-crypt-dynamics, source-nicholson-somatic-mutations, source-chao-uncoupled-phases, source-sumigray-crypt-compartments

The 624 proliferating cells out of 2428 total, counted by Ki-67 staining across 49 whole human colonic crypts, and the authors' own account of why crypt cell counts vary, come from the 2013 whole-crypt counting study. The three-to-five-day renewal band is this block's carried-forward figure, supported by the 2025 colonic-crypt review. The roughly 700-cell modelled crypt of the descending colon is from the crypt model PREM-BIO-001 used. The 24-hour cultured-cell cycle is the figure PREM-BIO-002 quoted from a chapter on the eukaryotic cell cycle. The crypt-base division rate of about once every two to three days is from the 2014 human crypt-evolution study, and the count of 5 to 10 active stem cells with a mean of 7 is from the 2018 human somatic-mutation study.

Everything else in this scene is this lesson's own algebra and arithmetic, and no source states any of it. The steady-state relation, the cancellation of {math}`N`, the result {math}`T_c = f \times T_t`, the figure of about 25 hours, the 19-to-31-hour band, the subtraction that separates the stem contribution from the amplifying contribution, and the conclusion that the amplifying compartment cycles two to three times faster than the stem cells are all derived here from the sourced inputs above. The agreement with the cultured-cell figure of about 24 hours is a consistency check between two independent estimates and not a measurement of a crypt cell.

The derivation in this scene, the cycle-time estimate it produces, and the amplification argument that follows are this lesson's own reasoning from the sourced inputs rather than results taken from any of them. They are recorded as claims because a learner is asked to accept and use them, and each one carries its own scope and uncertainty: an average over the compartment in steady state, not a measurement of any cell.
:::
