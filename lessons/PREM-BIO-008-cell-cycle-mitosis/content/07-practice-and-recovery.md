# Practice: budget it, then predict what gets through

Three passes. The first is worked alongside you, the second gives you the framework and not the answer, and the third gives you neither.

## Pass one: why a crypt needs an amplifying compartment at all

Scene three showed that the crypt's stem cells are too few and too slow to supply its output directly. Now find out how much amplification is required to close the gap.

**What you are given.** About 7 active stem cells per crypt. A crypt-base division about once every 2.5 days. A crypt of about 700 cells replacing itself in about 4 days.

**Step 1. The stem compartment's output.** Seven cells dividing once every 2.5 days is {math}`7 / 2.5 = 2.8` divisions a day.

**Step 2. What each stem division contributes downstream.** The stem population stays the same size, so on average each stem division leaves one daughter behind as a stem cell and sends one daughter into the amplifying compartment. So about 2.8 cells a day enter that compartment.

**Step 3. What the crypt needs.** 700 cells over 4 days is 175 cells a day.

**Step 4. The multiplication required.** If a cell entering the amplifying compartment divides {math}`n` times before it stops, it yields {math}`2^n` cells. So

{math}`2.8 \times 2^n = 175`, giving {math}`2^n = 62.5`

**Step 5. Solve for n.** {math}`2^5 = 32` and {math}`2^6 = 64`, so {math}`n` is a little under 6. Six rounds of amplifying division would just about do it.

**Step 6. Sanity-check the result.** Mouse small-intestinal crypts are described in the literature as having transit-amplifying cells that undergo 4 to 5 divisions. Six is close to that without being equal to it, which is about as much agreement as you should expect between a crypt of 700 cells and a mouse crypt of a different size in a different organ.

**What the answer is worth.** Not much as a number, and a great deal as a structural claim. The arithmetic says that amplification is not an optional refinement of crypt design; without roughly six doublings downstream of the stem cells, a crypt with seven slow stem cells cannot produce 175 cells a day. Run the same calculation with the larger measured crypt of 2428 cells, which needs 607 cells a day, and {math}`2^n = 217`, so {math}`n` is nearly 8. The requirement scales with crypt size, and the conclusion that there must be a multiplier does not depend on which crypt you pick.

## Pass two: will the checkpoint catch it?

For each of the following, decide whether **any** checkpoint will hold the cell, and justify the decision by naming the physical state a detector would have to read. Two of the four are not about the spindle assembly checkpoint at all, and part of the exercise is noticing which. Use the test from scene six.

1. One sister kinetochore of one chromosome has no microtubules attached to it at all.
2. A single kinetochore is attached to microtubules from both spindle poles.
3. A previous division failed at cytokinesis, and the cell is binucleate with twice the normal DNA content as it enters the next cycle.
4. A cell in G1 carries a small number of unrepaired double-strand breaks.

**Answers.**

1. **Delayed.** An unattached kinetochore is precisely the state this checkpoint detects, and one is sufficient: the mitotic checkpoint complex assembles there and blocks APC/C-CDC20, so cohesin is not cleaved. This is the monotelic case.
2. **Not delayed.** This is merotely. There is no unattached kinetochore and tension across the sister kinetochores is present, so both conditions the checkpoint tests are satisfied. Anaphase proceeds, and the chromatid lags because it is pulled toward both poles at once.
3. **Held by nothing.** This is not a spindle-checkpoint question: the error is already in the past and what is being asked is whether anything catches it afterwards. Nothing does, because no checkpoint detects DNA content or nucleus count. Binucleate primary human cells produced by cleavage failure replicated their DNA and re-entered mitosis at close to normal frequency, and the finding was that normal mammalian somatic cells possess no tetraploidy checkpoint. This is the case with no detector.
4. **Possibly not held.** A cell in G1 has no anaphase to delay, so the spindle assembly checkpoint has no role here. The mechanism in play is the DNA damage checkpoint. The honest answer is that it may let the cell through: in human fibroblasts the G1/S checkpoint is slowly activated and permits entry into S phase with double-strand breaks still unrepaired. Do not answer that a few breaks are certainly caught.

## Pass three: no scaffolding

Attempt these before looking at anything.

**A.** A crypt cell is held at the spindle assembly checkpoint for 12 hours, then released, and divides normally. The crypt's amplifying cells run a cycle of about 25 hours. Express the arrest as a fraction of a normal cycle, and work out what a delay of that length across the whole proliferative compartment would do to the tissue's turnover time. Then say how the answer changes if the cell slips instead of being released.

**B.** A colleague proposes that because merotelic attachments escape the spindle assembly checkpoint, merotely must be the main cause of aneuploidy in human cells. State the strongest objection.

**C.** A paper reports a chromosome missegregation rate of 0.5 per cent. Explain what you must ask before you can compare that figure with any other, and why.

**D.** Explain why the spindle assembly checkpoint acts on APC/C rather than on separase, in one sentence that uses the word irreversible.

**Answers.**

**A.** Twelve hours against a 25-hour cycle is 0.48, a little under half a cycle, so the arrest makes that cell's cycle about 48 per cent longer, roughly 37 hours.

Now use scene three's relation in reverse. It gave {math}`T_c = f \times T_t`, so {math}`T_t = T_c / f`. Holding the proliferative fraction at 0.257, a cycle of 37 hours implies a turnover time of 37 divided by 0.257, about 144 hours, or six days. So a checkpoint delay of half a cycle applied across the compartment would stretch the lining's replacement from about four days to about six.

If the cell slips instead, the arithmetic above does not apply at all, and this is the part worth getting right. A cell that slips exits mitosis without dividing, so it produces no daughters. It is not a delayed division; it is a division that never happens, and it leaves behind a tetraploid cell that no checkpoint will stop. The cost to the tissue is worse than a delay, and it is not expressible as a longer cycle time.

Both halves are proportional reasoning about a model, not a measurement of a real tissue under stress.

**B.** That the escape and the aneuploidy are two different claims, and only the first is established. Measurements in human cells found that lagging chromosomes, the visible product of merotely, rarely went on to missegregate, and argued that syntelic attachments account for most missegregation. Which error dominates is disputed. Merotely is a clean demonstration that a wrong state can satisfy a working checkpoint, and that is a different and smaller claim than being the main cause of aneuploidy.

**C.** You must ask whether the rate is per chromosome or per division, because the two differ by the number of chromosomes in the cell, which is 46. A rate of 0.5 per cent per chromosome sits inside the 0.3-to-1.0 range reported for chromosomally unstable tumour lines. A rate of 0.5 per cent per division would be about twice as good as a chromosomally stable cell, which comes out near one per cent per division. So the same figure marks the cells as unstable in one unit and better than normal in the other, and confusing the two inverts the interpretation. You should also ask whether the measurement was made in cultured cells, since the published rates are, and no rate has been established for tissue in a person.

**D.** Because separase's cleavage of cohesin is irreversible, so the last point at which a division can still be held is the ubiquitination of securin by APC/C.

:::{callout}
:kind: recovery

## Recovery route

If the practice above did not go well, the fault is almost always in one of three places, and each has a specific route back.

**If pass one failed on the arithmetic:** the difficulty lies in proportional reasoning and not in the cell biology. Go back to scene three, re-derive {math}`T_c = f \times T_t` on paper, then redo pass one step by step without skipping the multiplication in step 4. If doubling and halving powers of two is the sticking point in step 5, that is the same arithmetic the quantitative strand of this course covers under powers and orders of magnitude.

**If pass two failed on individual cases:** you are probably carrying the model the misconception box rejects, that checkpoints exist to catch errors in general. Re-read scene six's discriminating test and write out, for each of the four kinds of attachment, which of the two conditions it satisfies. Getting the checkpoint's inputs explicit fixes most of these.

**If pass three felt unanswerable:** work back through scene four. Nearly all of pass three depends on knowing that cohesin cleavage is the irreversible step and that APC/C is the last controllable one. If that chain is not solid, the rest cannot be reasoned about.

**If the numbers feel arbitrary:** they should feel provisional, which is a different thing. Almost every quantity here is a measurement of one tissue, or one cell line, under stated conditions, and several are this lesson's own arithmetic built on top of those measurements. When a figure surprises you, the useful question is which of the two it is, and the note at the end of each scene tells you.
:::

:::{callout}
:kind: accessibility

## Accessibility and alternatives

You do not need to see the picture in scene six to do any of this. Its long description states the same thing in words: every box, every arrow, which way each arrow points, and what the whole thing adds up to. The contrast it draws is also spelled out in full sentences in scene six's prose, so the diagram is a summary of the argument and never the only place the argument is made.

Nothing here depends on colour, on hovering, on dragging, or on where something sits on a page.

Every calculation is arithmetic on numbers given to you in the text, and you can do it in your head, on paper, or with any calculator. The two displayed equations are written out in words alongside the symbols, so if the notation is unhelpful you can work from the sentences instead. No step turns on a subscript that is not also named in words.

And nothing in this lesson asks you about your own health or your family's. The clinical material in scene eight is a worked example about how a mechanism explains a pattern, and it is not about you.
:::

:::{source-note}
:claims: claim-human-colonic-stem-cell-number, claim-stem-cell-division-rate, claim-crypt-geometry, claim-epithelial-renewal, claim-ki67-proliferative-fraction, claim-human-chromosome-number, claim-transit-amplifying-divisions, claim-single-unattached-kinetochore, claim-merotely-escapes-checkpoint, claim-no-tetraploidy-checkpoint, claim-checkpoints-not-foolproof, claim-merotely-syntely-dispute, claim-missegregation-rates, claim-slippage-duration, claim-cohesin-separase-securin-apcc
:sources: source-nicholson-somatic-mutations, source-baker-crypt-dynamics, source-vanderwath-crypt-model, source-nguyen-colonic-crypt, source-bravo-axelrod-crypt-model, source-bryant-cytogenetics, source-sumigray-crypt-compartments, source-rieder-single-kinetochore, source-gregan-merotelic, source-uetake-sluder-tetraploidy, source-deckbar-checkpoint-limits, source-thompson-compton-lagging, source-thompson-compton-missegregation, source-brito-rieder-slippage, source-brooker-cohesins

The stem-cell count of 5 to 10 with a mean of 7 is from the 2018 human somatic-mutation study, the crypt-base division rate of about once every two to three days from the 2014 human crypt-evolution study, the roughly 700-cell crypt from the descending-colon crypt model, the three-to-five-day renewal band from this block's carried-forward figure supported by the 2025 crypt review, and the 2428 cells with 624 Ki-67 positive from the 2013 whole-crypt Ki-67 counts. The chromosome count of 46 used in pass three C comes from a 2020 educational case in cytogenetics. The comparison figure of 4 to 5 transit-amplifying divisions comes from a 2018 review of intestinal crypt compartmentalisation; that figure is for mouse small intestine, it appears there as an introductory citing statement rather than as that paper's own measurement, and both limitations are stated in the prose above. The checkpoint facts used in the answers are the same ones sourced in scenes four, five and six: the sufficiency of one unattached kinetochore, merotely's escape from the checkpoint and the reason for it, the absence of a tetraploidy checkpoint in normal mammalian somatic cells with the over-94-per-cent replication figure in binucleate primary human fibroblasts, the slow and leaky G1/S checkpoint in human fibroblasts, the dispute over whether merotely or syntely accounts for most missegregation, the per-chromosome missegregation rates and their per-division conversion, the arrest durations before slippage in human RPE1 cells, and the cohesin, separase, securin and APC/C chain.

Every calculation in pass one and pass three is this lesson's own arithmetic from those sourced inputs, and no source states any of the results. The figure of about six rounds of amplifying division for a 700-cell crypt, and nearly eight for a 2428-cell crypt, are derived estimates that depend on four assumptions stated in the pass: that the stem population is constant in size, that each stem division sends exactly one daughter into the amplifying compartment, that amplification is a clean series of doublings with no losses, and that the crypt is in steady state. Real crypts satisfy none of these exactly, which is why the pass argues for the necessity of a multiplier rather than for a particular number of rounds. The 12-hour arrest in pass three A is a round figure chosen inside the sourced 546-to-875-minute range for illustration.
:::
