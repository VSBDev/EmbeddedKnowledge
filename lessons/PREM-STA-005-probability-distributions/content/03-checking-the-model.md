# Now go and count

The model made three predictions in the previous scene and the data have been sitting there the whole time. Checking is not an optional refinement at the end of the analysis. It is the step that decides whether anything downstream is worth reading.

:::{worked-example}
:id: worked-example-check-the-normal-model

**The task.** The normal model with mean 142 mg/dL and standard deviation 18 mg/dL predicts about 41, about 57 and about 60 of the sixty cohort readings inside its three bands. Compare those predictions with the constructed summary counts, then decide what that comparison does and does not establish.

**Data boundary.** The underlying sixty readings are not included in this pack. The observed counts, median, skewness and extrema below are stipulated teaching inputs carried from the earlier block, not quantities a reader can independently recompute here. They can demonstrate the reasoning of a coarse check, but they cannot serve as reproducible evidence that this cohort passed one.

**Step 0. Fix the counting rule before counting.** The bands are 124 to 160, 106 to 178, and 88 to 196 mg/dL. A reading landing exactly on a boundary is counted as inside. This matters exactly once here: one person recorded 160 mg/dL, sitting on the upper edge of the first band. State the rule in advance so the result is not a choice made after seeing which way it goes.

**Step 1. The one-standard-deviation band, 124 to 160 mg/dL.** Thirty-nine of the sixty readings fall in it, a share of 39 ÷ 60 = 0.650. The model predicted 0.6827, which is 40.96 people. The count is two people light.

**Step 2. The two-standard-deviation band, 106 to 178 mg/dL.** Fifty-eight readings fall in it, a share of 58 ÷ 60 = 0.967. The model predicted 0.9545, which is 57.27 people. The count is one person heavy.

**Step 3. The three-standard-deviation band, 88 to 196 mg/dL.** All sixty readings fall in it. The model predicted 59.84. The lowest reading in the cohort is 100 mg/dL and the highest is 181 mg/dL, so nothing comes close to either boundary.

**Step 4. Split the misses by side.** A model can get a total right and still be the wrong shape, so check the tails separately. Ten readings sit below 124 and eleven sit above 160; the model puts 0.1587 of its area in each of those tails, which is 9.52 people either way. One reading sits below 106 and one sits above 178, against a prediction of 1.37 in each tail. The misses are small and they are balanced.

**Step 5. Check the symmetry claim directly.** A normal curve is symmetric, so its mean and median coincide. The cohort's mean is 142.0 mg/dL and its median is also 142.0 mg/dL. A conventional skewness figure for the sixty readings comes to −0.01, which is as close to no lean as sixty numbers are likely to get. That is worth pausing on, because the histogram looked mildly lopsided: walking out from the tallest bar, every bin on the right held one or two more people than its mirror image on the left. What the raw values say is that the effect is too small to survive the arithmetic, and the single most extreme reading is on the low side, 42 mg/dL below the mean against 39 above. The display lesson left that question open on purpose; this is where it closes.

**The provisional reading.** Predicted 41, 57 and 60; stipulated counts 39, 58 and 60, with the misses balanced across the two tails and the stipulated summaries showing little lean. Those figures show no large, obvious directional conflict with the normal model. They do not prove fit: ordinary sampling variation can move band counts by several people, the mean and standard deviation were estimated from the same sample, and the source observations are unavailable here. The rest of this lesson therefore uses the model conditionally as a teaching input. A reproducible binary fit decision would require the observations and a properly interpreted normal probability plot or another calibrated procedure.

**Self-explanation.** Why is the decision to treat these counts as an informal diagnostic, rather than as a pass/fail threshold, more important than whether the first band missed its prediction by two people?
:::

## What just happened, and what did not

Notice the shape of that argument. The model was not favoured because bell curves are common or because glucose is a biological measurement. It made numerical predictions that were compared against counts, and the comparison could have exposed a large or directional mismatch. In this pack it remains a provisional illustration, not a calibrated acceptance.

Notice also what a run of counts cannot establish. Sixty readings put roughly one person in each two-standard-deviation tail, so any statement about how the curve behaves beyond 178 mg/dL rests on a single observation. Tails are where the data are thinnest and where the model is doing the most work unsupervised, which is exactly the wrong combination. Keep the model for the middle; distrust it at the edges until something else supports it there.

There is a more sensitive way to run this check than counting three bands. Plot the sorted readings against the values a normal distribution would have produced at the same positions. If the data are approximately normal the points fall along a straight line, and departures from that line are departures from normality: a curve at one end says the tail is too heavy or too light, an S-shape says the whole distribution is lopsided. Drawing one is a task for the software, and reading one is the same reasoning as Step 4 done at every point at once instead of at two.

:::{misconception}
:id: misconception-bell-shape-by-inspection

**The claim.** "The histogram looked like a bell, so the data are normal."

**Why it appeals.** Bell-shaped is how a normal distribution is described, and the cohort histogram does have one hump with sides that fall away. Eyeballing feels like checking.

**Why it fails.** Single-humped and roughly symmetric is a large family of distributions, and the normal is one member of it. Distributions exist with the same hump and much heavier tails, which look nearly identical in the middle and behave very differently at the extremes, and the extremes are usually why the model was wanted. The direction of the error also runs the wrong way: the eye is drawn to the tall bars, which is where almost any curve fits, and away from the thin bars, which is where the fit is decided. Bin width makes this worse, since the display lesson showed that redrawing the same sixty values at a different bin width changes what the picture looks like without changing a single reading.

**The corrective test.** Make the model state a number before you look. It predicted 40.96, 57.27 and 59.84 people, and separately 9.52 in each one-sided tail. Then count. Large, persistent directional discrepancies can reveal where the model is implausible, but differences of one, two or even several people are routine sampling variation in a sample of sixty. Band counts have no universal pass/fail cutoff, especially when the same data supplied the fitted mean and standard deviation. Use them as a coarse diagnostic, then inspect the observations with a normal probability plot or use a calibrated goodness-of-fit procedure before making a binary decision.
:::

:::{check}
:id: check-what-a-passing-check-licenses
:kind: retrieval

The informal comparison above showed no large directional mismatch. Say which of these it supports, and which it does not.

1. Using the model to estimate what share of this population sits between 130 and 150 mg/dL.
2. Using the model to estimate what share sits above 250 mg/dL.
3. Concluding that fasting glucose is normally distributed in adults with type 2 diabetes generally.
4. Concluding that this cohort's mean and median agree.
:::

The first is conditionally supported as a teaching calculation about the crowded middle, where the stipulated summaries place fifty-eight of the sixty readings; a real analysis would still inspect the observations. The second is not: 250 mg/dL is six standard deviations out, the stipulated highest reading is 181, and the model would return a probability supported by no observation whatsoever. The third is not: sixty people from one study cannot establish a general population shape, and this pack does not provide the observations needed even for a reproducible cohort-level check. The fourth needs no model at all; if the observations were available, the mean and median would be computed directly from them.

:::{source-note}
:claims: claim-empirical-rule-areas, claim-normality-is-checkable
:sources: source-nist-normal-data, source-nist-normal-probability-plot

The first source supplies the population percentages falling within one, two and three standard deviations that the predicted counts are computed from. The second supplies the normal probability plot as a graphical technique for assessing whether a data set is approximately normally distributed, and the fact that departures from its straight line indicate departures from normality. The stipulated cohort summaries, every prediction computed from them, and all wording are original teaching material. The underlying sixty readings are not included in this pack.
:::
