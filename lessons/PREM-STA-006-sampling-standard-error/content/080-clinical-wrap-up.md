# Clinical wrap-up: how many patients does the audit need?

**Teaching example, not medical advice.** The service, the meeting, the audit plan, and every figure below are invented for teaching. Nothing here reports an observation about real patients or supports a diagnostic, monitoring, or treatment decision. The published reference values are quoted only so the audit has real cut-points to be measured against.

A diabetes service is planning next year's work. Two proposals are on the table and both come down to the same question: how many patients?

## The clinical yardstick

The service needs something to measure its precision against, and it does not come from the data. The US National Institute of Diabetes and Digestive and Kidney Diseases publishes reference values for the fasting plasma glucose test: 99 mg/dL or below is normal, 100 to 125 mg/dL indicates prediabetes, and 126 mg/dL or above indicates diabetes, with a doctor usually running a second test before confirming a diagnosis. Fasting there means nothing to eat or drink beforehand except sips of water.

The prediabetes band runs from 100 to 125, so it spans 25 mg/dL. That width is the yardstick for everything below. An estimate whose uncertainty is small next to 25 mg/dL can support a statement about which band a group sits in; an estimate whose uncertainty is comparable to 25 cannot.

## Proposal one: describe the clinic population

The registrar wants to report the mean fasting glucose of patients attending the clinic, so the service can see where its population sits against those bands. She proposes an audit of 60 patients, matching the dinner-timing study, and expects the same figures: a mean near 142 mg/dL and a standard deviation near 18.

Work the numbers before the meeting decides.

The standard error of a mean of 60 is $18 \div \sqrt{60} = 2.32$ mg/dL. So a 60-patient audit reports its mean give or take about 2.3, and about 95 repeats in 100 would land within 4.6 mg/dL of the truth. Against a diagnostic band 25 mg/dL wide, an uncertainty of 4.6 mg/dL is comfortable. The audit can say confidently that this clinic population sits well above 126 mg/dL, deep in the range the reference values call diabetes, which is unsurprising in a clinic where everyone already has the diagnosis and is exactly the sort of statement the audit is for.

Sixty patients is enough for proposal one. Recruiting three hundred would tighten the estimate to about 1.0 mg/dL and would not change a single sentence in the report.

## Proposal two: detect a change after the leaflet

The consultant wants something harder. The service is issuing advice on evening meal timing and wants next year's audit to show whether the clinic's mean fasting glucose has shifted. He proposes to compare next year's mean against this year's 142, and he would treat a change of about 5 mg/dL as worth acting on.

Run the same arithmetic and the answer is different.

Each audit's mean carries its own uncertainty of 2.32 mg/dL. Comparing two of them puts two uncertainties in the same sentence, so the difference between two 60-patient audits swings by appreciably more than either one does. Even with no change at all in the clinic, a difference of 5 mg/dL between two years is entirely ordinary. Proposal two, at 60 patients a year, cannot distinguish a real 5 mg/dL shift from the ordinary movement of two estimates.

The formula says what would fix it. To pull each audit's standard error down to 1.16 mg/dL, half of 2.32, each year needs $4 \times 60 = 240$ patients. To reach 1.00 mg/dL, each year needs $(18 / 1.00)^{2} = 324$. The service delivers roughly 900 appointments a year, so 240 is demanding and reachable and 324 is close to the ceiling, and both are a different scale of work from the 60 the registrar proposed.

**Same clinic, same measurement, same standard deviation, two sample sizes that differ by a factor of four.** The question decided it. Describing where a population sits against a wide diagnostic band tolerates a loose estimate. Detecting a small change between two years does not, because the thing being detected is smaller than the uncertainty of the tools measuring it.

## What the meeting should not conclude

Three boundaries, and none of them is arithmetic.

A larger sample buys precision and nothing else. If next year's audit reaches a different set of patients, because a neighbouring practice closed or the clinic changed its appointment system, the two means describe two different populations and 324 patients will estimate the wrong thing very precisely. Sampling error is one problem and reaching the wrong people is another, and only the first shrinks with $\sqrt{n}$.

The 18 mg/dL is a fact about the patients, so it stays at 18 whatever the audit does. Any sentence in the final report about how much individual patients vary must quote 18, and any sentence about how well the average is known must quote the standard error. A report that puts 2.32 where 18 belongs will tell its readers that the clinic's patients are all within a few mg/dL of each other, which is false and which the clinic's own staff will know is false the moment they read it.

And whether a 5 mg/dL shift in a clinic mean matters to a patient is a clinical judgement, not a statistical one. This lesson can say how firmly a number has been measured. The block returns to what it is worth in its final lesson.

## Where the block goes next

You now have the quantity everything else is built from. The next lesson turns a standard error into a stated range of values compatible with the data and takes some care over what such a range does and does not claim. The lesson after that asks how far an observed difference sits from zero, counted in standard errors, and what a small answer entitles anyone to say. The dinner-timing study's difference of 9.0 mg/dL and its standard error of 4.13 are waiting.

:::{source-note}
:claims: claim-fpg-thresholds, claim-se-formula, claim-se-is-precision, claim-central-limit-theorem
:sources: source-niddk-diabetes-tests, source-altman-bland-se, source-nist-normal-clt, source-kwak-kim-clt

These sources support the fasting plasma glucose reference values and confirmation practice quoted above, the relation between the standard error, the standard deviation, and the square root of the sample size used in both proposals, the standard error's role as a measure of how precisely a mean has been estimated, and the approximate normality of a sample mean that lets a 95% figure be attached to a two-standard-error band. The service, the meeting, the two proposals, the appointment volume, and every audit figure are original teaching material and describe no real clinic.
:::
