# Now go and count

The model made three predictions in the previous scene and the data have been sitting there the whole time. Checking is not an optional refinement at the end of the analysis. It is the step that decides whether anything downstream is worth reading.

:::{worked-example}
:id: worked-example-check-the-normal-model

**The task.** The normal model with mean 142 mg/dL and standard deviation 18 mg/dL predicts about 41, about 57 and about 60 of the sixty cohort readings inside its three bands. Count the readings that are actually there and decide whether to keep the model.

**Step 0. Fix the counting rule before counting.** The bands are 124 to 160, 106 to 178, and 88 to 196 mg/dL. A reading landing exactly on a boundary is counted as inside. This matters exactly once here: one person recorded 160 mg/dL, sitting on the upper edge of the first band. State the rule in advance so the result is not a choice made after seeing which way it goes.

**Step 1. The one-standard-deviation band, 124 to 160 mg/dL.** Thirty-nine of the sixty readings fall in it, a share of 39 ÷ 60 = 0.650. The model predicted 0.6827, which is 40.96 people. The count is two people light.

**Step 2. The two-standard-deviation band, 106 to 178 mg/dL.** Fifty-eight readings fall in it, a share of 58 ÷ 60 = 0.967. The model predicted 0.9545, which is 57.27 people. The count is one person heavy.

**Step 3. The three-standard-deviation band, 88 to 196 mg/dL.** All sixty readings fall in it. The model predicted 59.84. The lowest reading in the cohort is 100 mg/dL and the highest is 181 mg/dL, so nothing comes close to either boundary.

**Step 4. Split the misses by side.** A model can get a total right and still be the wrong shape, so check the tails separately. Ten readings sit below 124 and eleven sit above 160; the model puts 0.1587 of its area in each of those tails, which is 9.52 people either way. One reading sits below 106 and one sits above 178, against a prediction of 1.37 in each tail. The misses are small and they are balanced.

**Step 5. Check the symmetry claim directly.** A normal curve is symmetric, so its mean and median coincide. The cohort's mean is 142.0 mg/dL and its median is also 142.0 mg/dL. A conventional skewness figure for the sixty readings comes to −0.01, which is as close to no lean as sixty numbers are likely to get. That is worth pausing on, because the histogram looked mildly lopsided: walking out from the tallest bar, every bin on the right held one or two more people than its mirror image on the left. What the raw values say is that the effect is too small to survive the arithmetic, and the single most extreme reading is on the low side, 42 mg/dL below the mean against 39 above. The display lesson left that question open on purpose; this is where it closes.

**The verdict.** Predicted 41, 57 and 60; observed 39, 58 and 60, with the misses balanced across the two tails and no detectable lean. The normal model with these two parameters describes this cohort well enough to use, and the rest of this block will use it.
:::

## What just happened, and what did not

Notice the shape of that argument. The model was not accepted because bell curves are common or because glucose is a biological measurement. It was accepted because it made numerical predictions that were then compared against counts, and the comparison could have come out badly.

Notice also what a run of counts cannot establish. Sixty readings put roughly one person in each two-standard-deviation tail, so any statement about how the curve behaves beyond 178 mg/dL rests on a single observation. Tails are where the data are thinnest and where the model is doing the most work unsupervised, which is exactly the wrong combination. Keep the model for the middle; distrust it at the edges until something else supports it there.

There is a more sensitive way to run this check than counting three bands. Plot the sorted readings against the values a normal distribution would have produced at the same positions. If the data are approximately normal the points fall along a straight line, and departures from that line are departures from normality: a curve at one end says the tail is too heavy or too light, an S-shape says the whole distribution is lopsided. Drawing one is a task for the software, and reading one is the same reasoning as Step 4 done at every point at once instead of at two.

:::{misconception}
:id: misconception-bell-shape-by-inspection

**The claim.** "The histogram looked like a bell, so the data are normal."

**Why it appeals.** Bell-shaped is how a normal distribution is described, and the cohort histogram does have one hump with sides that fall away. Eyeballing feels like checking.

**Why it fails.** Single-humped and roughly symmetric is a large family of distributions, and the normal is one member of it. Distributions exist with the same hump and much heavier tails, which look nearly identical in the middle and behave very differently at the extremes, and the extremes are usually why the model was wanted. The direction of the error also runs the wrong way: the eye is drawn to the tall bars, which is where almost any curve fits, and away from the thin bars, which is where the fit is decided. Bin width makes this worse, since the display lesson showed that redrawing the same sixty values at a different bin width changes what the picture looks like without changing a single reading.

**The corrective test.** Make the model state a number before you look. It predicted 40.96, 57.27 and 59.84 people, and separately 9.52 in each one-sided tail. Then count. If the counts and the predictions disagree by more than a person or two per band, or if they disagree in one direction only, the shape is wrong and the fix is a different model rather than a firmer opinion.
:::

:::{check}
:id: check-what-a-passing-check-licenses
:kind: retrieval

The check above came out well. Say which of these the result licenses, and which it does not.

1. Using the model to estimate what share of this population sits between 130 and 150 mg/dL.
2. Using the model to estimate what share sits above 250 mg/dL.
3. Concluding that fasting glucose is normally distributed in adults with type 2 diabetes generally.
4. Concluding that this cohort's mean and median agree.
:::

The first is licensed: it is a question about the crowded middle, where fifty-eight of the sixty readings sit and the fit was tested. The second is not: 250 mg/dL is six standard deviations out, the cohort's highest reading is 181, and the model would return a probability supported by no observation whatsoever. The third is not: sixty people from one study support a claim about this cohort, and the population the model is meant to describe is a separate question that sampling and generalisation lessons handle. The fourth needs no model at all, since both were computed from the readings; a check confirming it is only evidence that the symmetry assumption is not obviously violated.

:::{source-note}
:claims: claim-empirical-rule-areas, claim-normality-is-checkable
:sources: source-nist-normal-data, source-nist-normal-probability-plot

The first source supplies the population percentages falling within one, two and three standard deviations that the predicted counts are computed from. The second supplies the normal probability plot as a graphical technique for assessing whether a data set is approximately normally distributed, and the fact that departures from its straight line indicate departures from normality. The sixty readings, every count and share reported here, and all wording are original teaching material.
:::
