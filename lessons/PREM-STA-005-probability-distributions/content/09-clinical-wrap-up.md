# Clinical wrap-up: planning a clinic from a curve

**Teaching example, not medical advice.** The service, its meeting, the sixty patients, the screening event, and every count below are invented for teaching and are internally consistent by construction. Nothing here is an observation about real patients and nothing here should inform anyone's care. Published reference values are quoted only because the reasoning needs a real threshold to work against.

A diabetes service has to submit a plan for next quarter. It runs a monthly optimisation clinic for patients whose fasting glucose is at or above the diagnostic threshold, and it has to say in advance how many slots to hold. It also runs a community screening event at a local employer, and somebody has suggested using the same numbers for both. The service has this lesson's cohort in front of it: 60 adults with type 2 diabetes, mean fasting glucose 142 mg/dL, standard deviation 18 mg/dL.

Four questions come up, and every one of them is answered with something from this lesson.

## How many slots?

The threshold is the fasting plasma glucose value at or above which NIDDK gives a result of diabetes, 126 mg/dL, with a doctor usually using a second test to confirm.

Standardise it against the cohort: (126 − 142) ÷ 18 = −0.89. Under the fitted normal model that leaves 0.81 of the distribution at or above the line, so each patient has about an 81 per cent chance of being over it on the morning they are measured. Count over sixty patients with a binomial: the expected number is 60 × 0.81 = 48.6, with a standard deviation of √(60 × 0.81 × 0.19) = 3.04 patients. Working the probability formula across the counts, 43 through 55 together hold 0.967 of the probability.

So the plan should say about 49 patients, and it should say that a quarter landing anywhere between roughly 43 and 55 is what this model expects with nothing whatever having changed. That second sentence is the one that earns its place in the paper. A service that plans for exactly 49 and then treats 44 as an improvement and 54 as a deterioration will spend the year explaining variation that the arithmetic predicted in advance.

## Was last quarter's high group unusual?

Six patients were at or above 165 mg/dL last quarter, and the meeting wants to know whether that is a signal.

The threshold standardises to (165 − 142) ÷ 18 = +1.28, which the normal model puts about 0.10 of the distribution beyond. Sixty patients with *p* = 0.10 gives an expected count of 60 × 0.10 = 6.0, with a standard deviation of √(60 × 0.10 × 0.90) = 2.3 patients.

Observed 6, expected 6.0. The count is sitting exactly where the model puts it, and a quarter with 4 or 9 would also be unremarkable. There is nothing here to investigate, which is a genuine finding and the one clinical audit most often fails to report.

## Can the same model be used at the screening event?

No, and the reason has two layers worth separating.

The first layer is the reference distribution. The cohort's model was fitted to 60 adults who already have a diagnosis of type 2 diabetes, centred at 142 mg/dL. A workplace screening draws mostly people without that diagnosis, and the constructed screening data earlier in this lesson centred at 104.2 mg/dL. Carrying the cohort's mean and standard deviation across would misplace every z-score computed at the event, and a reading of 128 mg/dL would look reassuringly below average when it in fact sits 1.37 standard deviations above the centre of the group being screened.

The second layer is the one that survives even after refitting the parameters, and it is the point of this lesson. Fasting glucose in a general population is skewed to the right; the pooled international surveys say so and log-transformed their glucose values before fitting anything. A normal curve refitted to the screening population still has no way to lean. Applied to the constructed screening data, it expected about 23 readings below 69.4 mg/dL, under the 70 mg/dL glucose alert value the ADA and EASD statement gives for hypoglycaemia, where none were recorded; and it expected about 23 above 139.0 mg/dL where at least 48 sat at or above 140. Planning follow-up capacity on the second of those numbers would leave the event short by half.

The instruction the service should take away is a sequence: refit the parameters to the population you are actually looking at, then check the shape against that population's own data, then use the model only for the region where the check passed.

## And the person at 100 mg/dL?

One reading in the cohort is 100 mg/dL, which standardises to (100 − 142) ÷ 18 = −2.33, further from the centre than the highest reading at +2.17. The display lesson flagged that person as the closest thing this cohort has to an outlier and said the first move is to look at the record: was the sample taken fasting, is the meter the one the notes say, did the value transcribe correctly.

A z-score does not change that advice; it sharpens it. The number says how far the reading is from the middle of its group, and it says nothing about why. Distance is a reason to look, and looking is at the record before it is at the patient.

## What this lesson has not given the service

The plan above rests on a mean of 142 and a standard deviation of 18 treated as if they were the truth about the population. They are estimates from sixty people, and a different sixty would have produced different ones. Nothing in this lesson says by how much.

That is the next question in the block, and it is the one that turns a description into an inference. The lesson after this takes the normal curve you have just fitted and applies it to a different quantity: not one patient's glucose, but the mean of a whole sample, which turns out to have a distribution of its own and a much narrower one.

:::{source-note}
:claims: claim-fpg-thresholds, claim-binomial-mean-sd, claim-binomial-conditions, claim-z-score-definition, claim-fpg-right-skewed, claim-hypoglycaemia-alert-value
:sources: source-niddk-diabetes-tests, source-nist-binomial, source-eom-binomial, source-nist-normal-data, source-nist-normal-distribution, source-detect2-glucose-distribution, source-ihsg-hypoglycaemia-reporting

These sources supply the fasting plasma glucose diagnostic value of 126 mg/dL or above and the usual practice of confirming with a second test; the binomial's conditions, mean np and standard deviation of the square root of np(1 − p); the standardising transformation, the standard normal distribution it maps onto, and the normal population percentages behind each probability quoted; the finding that fasting plasma glucose distributions are skewed to the right and were log transformed before model fitting; and the glucose alert value of 3.9 mmol/l, equal to 70 mg/dl. The service, its meeting, the sixty patients, the screening event, and every count and plan above are original teaching material and are not observations of any real service or patient.
:::
