# The same check, run on a population that fails it

The study cohort passed. Sixty adults already diagnosed with type 2 diabetes, all of them somewhere on the high side of the glucose range, produced a roughly symmetric spread that a normal curve described well.

Widen the frame to everybody, and the shape changes.

A large international pooling project, DETECT-2, assembled 43 surveys from 27 countries covering 135,383 participants who had undergone an oral glucose tolerance test, in order to test whether glucose distributions split cleanly into two humps at a diagnostic boundary. Their statistical methods open with a plain observation about the raw data: the distributions of both fasting plasma glucose and 2-hour plasma glucose are skewed to the right, and glucose values were log transformed before model fitting to reduce that skew. Right-skew is not an artefact of one survey. It is the ordinary shape of this measurement in a general population, and it is the first thing the analysts had to deal with.

That shape has a physiological reading, offered here as an explanation and not as a finding of the surveys. Fasting glucose is regulated towards a fairly narrow band and cannot fall far without the person being unwell, so the low side is walled in. Nothing walls in the high side to the same degree, and the further right you go the more of the people you find are the ones losing glucose control. A bounded floor and an open ceiling make a lopsided distribution, and the normal family has no parameter that can express one.

## A screening clinic, and a model that fails in both directions

Below is a constructed screening dataset for this lesson: 1000 adults at a workplace health check, fasting glucose in mg/dL, built to have the right-hand lean that the pooled surveys describe. The counts are the ones in the data table beneath the chart.

:::{chart} ../charts/screening-glucose-right-skew.chart.json
:::

Compute the two parameters from the binned values and the normal model is fully specified: mean 104.2 mg/dL, standard deviation 17.4 mg/dL. The median is about 101, sitting below the mean, which is what a right-hand tail does to the arithmetic. Now put the model's own bands against the counts, the way the previous scene did.

| Region | Normal model predicts | Screening actually recorded |
| --- | --- | --- |
| Below 69.4 mg/dL (mean − 2 sd) | about 23 of the 1000 | none; the lowest bin starts at 70 |
| Between 69.4 and 139.0 mg/dL | about 955 | at most 952 |
| Above 139.0 mg/dL (mean + 2 sd) | about 23 | at least 48 |

The middle row looks fine. That is the trap: a symmetric model forced onto a lopsided dataset has to find a left tail somewhere, and it pays for it out of the right. Both tails are wrong, they are wrong in opposite directions, and adding them together hides it. The check has to be run by side, or it will pass on a model that is failing at both ends.

Read the two failing rows as a clinic would.

The lower one predicts about two dozen readings below 69.4 mg/dL. The joint ADA and EASD position statement gives 3.9 mmol/l, which is 70 mg/dl, as a glucose alert value for hypoglycaemia in the reporting of clinical trials. So the model expects roughly 23 people in this screening to turn up at or under that alert value. None did, and the model's belief that they should came from nothing but the requirement that the curve be symmetric.

The upper one is the more consequential. The model puts about 23 people above 139 mg/dL; at least 48 were at or above 140, more than double. A service using the curve to plan follow-up capacity for the raised-glucose group would provision for about half the people it would actually see. The tail is where a screening programme does its work, and the tail is exactly where the symmetric model was weakest.

:::{misconception}
:id: misconception-empirical-rule-on-any-data

**The claim.** "This dataset has a mean and a standard deviation, so about 95 per cent of it lies within two standard deviations of the mean."

**Why it appeals.** The rule is stated in terms of a mean and a standard deviation, and every dataset has both. The sentence appears to need no further permission, and on the cohort in this lesson it happens to come out right.

**Why it fails.** The 68, 95 and 99.7 figures are areas under a normal curve. They travel with the curve, not with the arithmetic, and a mean and a standard deviation can be computed for any set of numbers whatever its shape. On the screening data above, the rule predicts 23 people below a value none of them reached, and predicts about half as many above the upper bound as were actually there. The arithmetic was faultless throughout; the distribution was the wrong one.

**The corrective test.** Ask what the rule was derived from before applying it, and then run the count by side. Predict a number for each tail separately, count each tail separately, and treat a one-sided miss as a shape failure rather than as noise. If the two tails disagree with the model in opposite directions, the data are skewed and no adjustment of the mean or the standard deviation will repair it.
:::

## Which failure you get is an empirical question

The display lesson made this point once already, with a different failure. It built a two-humped cohort whose mean of 142 mg/dL fell in the hollow between the humps and described almost nobody. That was a constructed warning about what a summary can hide.

The pooled surveys let you say something firmer about how glucose really behaves. DETECT-2 set out to find bimodality and reported that distributions of fasting and 2-hour plasma glucose did not, in general, produce bimodal structures useful for deriving a diabetes cut point, and that where a biologically meaningful two-hump structure did appear it seemed to be driven by participants with already-diagnosed diabetes. The two-humped picture is real enough as a possibility and it is not the usual finding; the usual finding is the right-hand lean.

So the two counter-cases are not competing. Skew is what glucose ordinarily does, two humps are what a mixed population can do, and neither is visible in a mean and a standard deviation. The habit that survives both is the same one: state the shape you are assuming, then go and look.

## What people do instead

This lesson does not teach the repairs, and you should know they exist so that a failed check reads as a fork in the road rather than a dead end. DETECT-2 took the first of these.

- Transform the measurement, most often by taking logarithms, and model the transformed values, which pulls in a long right tail.
- Choose a distribution family that permits skew instead of forcing symmetry.
- Abandon the curve and work directly with the observed percentiles, which assumes no shape at all and in exchange says nothing beyond the range of the data.

Each buys something and costs something. The decision belongs to the analysis, and it can only be made after the check has been run.

:::{source-note}
:claims: claim-fpg-right-skewed, claim-glucose-bimodality-not-general, claim-empirical-rule-areas, claim-hypoglycaemia-alert-value
:sources: source-detect2-glucose-distribution, source-nist-normal-data, source-ihsg-hypoglycaemia-reporting

The first source is the DETECT-2 pooled analysis, used for the scale of the pooling, for its statement that fasting and 2-hour plasma glucose distributions are skewed to the right, for its log transformation of glucose before model fitting, and for its finding that bimodal structures were not in general useful for deriving diabetes cut points and appeared to be driven by participants with known diabetes. The second supplies the normal population percentages the failed predictions are computed from. The third supplies the glucose alert value of 3.9 mmol/l, equal to 70 mg/dl. The 1000-person screening dataset is constructed for this lesson, is not an observation of real people, and every count and parameter reported from it was computed from the bins shown in the chart's data table.
:::
