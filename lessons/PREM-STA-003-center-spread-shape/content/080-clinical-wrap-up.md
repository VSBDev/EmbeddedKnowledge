# Clinical wrap-up: write the study's results table

Every clinical paper opens with a table describing who was studied and what was measured, and every cell in it is a choice made by someone who had to decide which summary told the truth. That table is the job now.

**Illustrative teaching example, not medical advice.** The dinner-timing study, its sixty adults, and every number below are invented so the arithmetic can be checked. Nothing here describes real patients or should guide anyone's care.

## The four columns and the decision each one forces

The study recorded four things about sixty adults with type 2 diabetes. Some biomedical papers report a mean with a standard deviation and others report a median with quartiles or with the minimum and maximum, so a reader has to be able to interpret both, and an author has to be able to justify the one they chose.

| Column | What it is | What the shape does | What the table should print |
| --- | --- | --- | --- |
| Fasting glucose, mg/dL | Continuous, measured after at least eight hours without food or drink other than water | Close to symmetric, mean and median both 142 | Mean 142 (SD 18) |
| Adherence rating, 1 to 4 | Ordinal levels in a fixed order | The step from 1 to 2 is not guaranteed to equal the step from 3 to 4 | Median 3, with the count at each level |
| Nights recorded per person | Discrete count, 5 to 14 | A few participants who stayed in the study far longer than the rest would drag a mean upward; the median is built from ranks and would not move | Median 9 (quartiles 7 to 11) |
| Hours from dinner to sleep | Continuous, but recruited as two groups | Two separated clusters, with nobody in the middle | By group: early 4.4 hours, late 1.6 hours |

Three of the four rows refuse the mean, and each refuses it for a different reason. The adherence rating refuses because averaging ordered labels assumes an even spacing the scale never promised. The night count refuses because its shape leans and its mean would report a value the middle participant does not have. The dinner interval refuses because a single centre would sit in the gap between two groups the study deliberately created. Only the glucose column, whose histogram was inspected as close to symmetric and whose mean and median both equal 142, hands the mean an honest job.

## Reading the outcome the study was built to test

The comparison the study exists for is between the two dinner-timing groups.

| Group | Adults | Mean fasting glucose | Standard deviation within the group |
| --- | --- | --- | --- |
| Early dinner | 30 | 137.5 mg/dL | 17.6 mg/dL |
| Late dinner | 30 | 146.5 mg/dL | 17.6 mg/dL |

The two group means average to $(137.5 + 146.5)/2 = 142$ mg/dL, which is the cohort figure from the first scene, and their difference is $146.5 - 137.5 = 9.0$ mg/dL in the prespecified direction of this invented exercise.

The exact observations in the centre scene give a sample standard deviation of 17.569 mg/dL in each group, reported as 17.6, and 18.001 mg/dL in the pooled cohort, reported as 18.0. The pooled value is slightly larger because it includes both the within-group variation and the separation of the group means. The within-group figure describes how much adults differ from others in the same invented group.

That makes it the right yardstick for the difference. Nine mg/dL means nothing on its own; it means something once it is set against how much people vary anyway.

$$\frac{9.0 \text{ mg/dL}}{17.569 \text{ mg/dL}} = 0.512.$$

The difference between the groups is about 0.51 of a within-group standard deviation. Dividing by the standard deviation cancels the units, which is the point: 0.51 can be compared with a standardized difference from a study that measured something else entirely, and 9.0 mg/dL cannot. This works only because the standard deviation is in the same unit as the difference, which is why the variance, sitting in mg²/dL², could never have done the job.

## What this table settles and what it does not

The table now states honestly what a typical adult in this study looked like and how much these adults differed. Three questions remain open, and none of them is answerable with the tools in this lesson.

- Would a repeat of this study produce 9.0 mg/dL again, or something else? That depends on how much a group mean moves from sample to sample, which is a different quantity from the spread among people.
- What range of true differences is compatible with the 9.0 that was observed?
- Does a difference of about 0.51 standard deviations, or 9 mg/dL, matter to a person living with type 2 diabetes? That is a clinical judgement, and no amount of arithmetic will produce it.

The first two are what the next lessons in this module take up. The third is the question the module ends on, and it stays a clinical one.

:::{source-note}
:claims: claim-mean-not-resistant, claim-symmetry-coincidence, claim-variance-sd-units, claim-median-iqr-reporting, claim-fasting-definition
:sources: source-nist-location, source-nist-histogram-skewed, source-nist-scale, source-wan-median-to-mean, source-medlineplus-blood-glucose

The sources support the rank-based median resisting extreme values that distort the mean, an introductory symmetric unimodal case in which the centre summaries coincide, the standard deviation as the square root of the variance carrying the original data units, the practice of reporting a median with quartiles or with minimum and maximum instead of a mean and standard deviation in some medical trial reports, and the fasting condition required by a fasting blood glucose test. The study, its exact observations, its four columns, its group figures, and the completed table are original teaching material.
:::
