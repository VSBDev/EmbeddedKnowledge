# Clinical wrap-up: planning a clinic from a curve

**Teaching example, not medical advice.** The service, its meeting, the cohort summaries, the screening event, and every count below are invented for teaching. The underlying sixty readings are not included in this pack, so their summaries are stipulated inputs rather than reproducible observations. Nothing here describes real patients or should inform anyone's care. Published reference values are quoted only because the reasoning needs a real threshold to work against.

A diabetes service has to submit a plan for next quarter. It runs a monthly optimisation clinic for patients whose fasting glucose is at or above the diagnostic threshold, and it has to say in advance how many slots to hold. It also runs a community screening event at a local employer, and somebody has suggested using the same numbers for both. The service has this lesson's cohort in front of it: 60 adults with type 2 diabetes, mean fasting glucose 142 mg/dL, standard deviation 18 mg/dL.

Four questions come up, and every one of them is answered with something from this lesson.

## How many slots?

The threshold is the fasting plasma glucose value at or above which NIDDK gives a result of diabetes, 126 mg/dL, with a doctor usually using a second test to confirm.

Standardising it against the overall cohort gives (126 − 142) ÷ 18 = −0.89, and the conditional normal calculation gives 0.81 above the line. But the binomial step would require that same probability for every patient. The lesson has already stipulated different subgroup probabilities, 0.76 after an earlier dinner and 0.86 after a later one, so assigning every patient *p* = 0.81 contradicts the model's fixed-probability condition even though 0.81 is their equally weighted average.

The service therefore cannot justify the former single-binomial forecast of 48.6 with a standard deviation of 3.04, or its interval from 43 to 55, from the information in this pack. It needs a probability estimated for the population it will schedule and evidence that the probability is common across the proposed trials, or it must model justified strata separately and combine their planned counts. One measurement per person is still needed for independence. Until those inputs exist, 49 is only a stipulated descriptive count from the constructed cohort, not a calibrated capacity forecast.

## Was last quarter's high group unusual?

Six patients were at or above 165 mg/dL last quarter, and the meeting wants to know whether that is a signal.

The threshold standardises to (165 − 142) ÷ 18 = +1.28, which the conditional normal model puts about 0.10 of the distribution beyond. If sixty independent, exchangeable patients really shared *p* = 0.10, their count would have mean 60 × 0.10 = 6.0 and standard deviation $\sqrt{60 \times 0.10 \times 0.90} = 2.3$ patients.

The stipulated count is also 6, so the arithmetic is internally aligned with that conditional model. It does not establish that last quarter was ordinary, because the common-*p* premise has not been justified and the normal tail probability rests on unreproduced cohort inputs. A real audit would establish a population-matched probability and its model conditions before interpreting the count.

## Can the same model be used at the screening event?

No, and the reason has two layers worth separating.

The first layer is the reference distribution. The cohort's model was fitted to 60 adults who already have a diagnosis of type 2 diabetes, centred at 142 mg/dL. A workplace screening draws mostly people without that diagnosis, and the constructed screening data earlier in this lesson centred at 104.2 mg/dL. Carrying the cohort's mean and standard deviation across would misplace every z-score computed at the event, and a reading of 128 mg/dL would look reassuringly below average when it in fact sits 1.37 standard deviations above the centre of the group being screened.

The second layer is the one that survives even after refitting the parameters, and it is the point of this lesson. Fasting glucose in a general population is skewed to the right; the pooled international surveys say so and log-transformed their glucose values before fitting anything. A normal curve refitted to the screening population still has no way to lean. Applied to the constructed screening data, it expected about 23 readings below 69.4 mg/dL, under the 70 mg/dL glucose alert value the ADA and EASD statement gives for hypoglycaemia, where none were recorded; and it expected about 23 above 139.0 mg/dL where at least 48 sat at or above 140. Planning follow-up capacity on the second of those numbers would leave the event short by half.

The instruction the service should take away is a sequence: refit the parameters to the population you are actually looking at, assess shape with that population's observations using an appropriate plot or calibrated procedure, and use the model only where that evidence supports it.

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
