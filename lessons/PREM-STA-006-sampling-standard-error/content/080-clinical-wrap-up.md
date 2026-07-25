# Clinical wrap-up: what precision is the audit buying?

**Teaching example, not medical advice.** The service, meeting, audit plan, and every figure below are invented for teaching. Nothing here reports an observation about real patients or supports a diagnostic, monitoring, or treatment decision.

A diabetes service is planning next year's audit. Two proposals use the same measurement and the same planning value for the sample standard deviation, 18 mg/dL, but they estimate different quantities. Before choosing a sample size, the meeting must state which standard error it wants to control.

## Proposal one: estimate one population mean

The registrar wants the estimated standard error of one annual mean to be no more than 2.00 mg/dL. This is a population-level precision target chosen for the audit; it is not an individual diagnostic threshold.

Using $s=18$ mg/dL as the planning estimate,

$$
n=\left(\frac{s}{\widehat{\mathrm{SE}}}\right)^2
 =\left(\frac{18}{2.00}\right)^2
 =81.
$$

An audit of 60 would have an estimated standard error of $18/\sqrt{60}=2.32$ mg/dL and would miss that stated target. An audit of 81 reaches 2.00 mg/dL exactly under the planning assumptions. The conclusion is deliberately narrow: 81 is the sample size required for the chosen precision of one mean, provided the observations are independent and the planning standard deviation is reasonable.

## Proposal two: estimate a difference between two annual means

The consultant wants to compare two independent annual samples and asks for the **difference** between their means to have an estimated standard error no more than 2.00 mg/dL. Each annual mean contributes uncertainty. If both years use the same sample size $n$ and the same planning standard deviation of 18 mg/dL,

$$
\widehat{\mathrm{SE}}_{\mathrm{difference}}
=\sqrt{\left(\frac{18}{\sqrt n}\right)^2+
       \left(\frac{18}{\sqrt n}\right)^2}
=18\sqrt{\frac{2}{n}}.
$$

Setting that quantity to 2.00 mg/dL gives

$$
n=2\left(\frac{18}{2.00}\right)^2=162
$$

patients per year. With only 60 independent patients per year, the estimated standard error of the difference is $\sqrt{2}\times2.324=3.29$ mg/dL.

The factor of two between 81 and 162 is not a penalty for asking a clinical question. It appears because proposal two estimates a difference built from two independent means, while proposal one estimates one mean.

## What this calculation does not establish

A target standard error is a precision requirement, not a complete change-detection design. Saying that the service cares about a 5 mg/dL change does not by itself decide the sample size needed to detect it. That design would also have to specify the comparison structure, type-I error rate, target power, sidedness, variance assumptions, and whether the same patients are measured twice. A paired design would require the within-person correlation and would not use the independent-samples formula above. Attrition and unequal sample sizes would also change the calculation.

The meeting may therefore say, "162 patients per year gives the difference an estimated standard error of 2.00 mg/dL under these assumptions." It may not say, "162 is enough to detect a 5 mg/dL change," because that claim requires the missing design choices.

## What a larger sample cannot repair

A larger sample buys precision and nothing else. If next year's audit reaches a different set of patients because a neighbouring practice closed or the clinic changed its appointment system, the two means describe different populations. More patients can estimate the wrong target very precisely.

The 18 mg/dL used above is the observed sample standard deviation and a planning estimate of the unknown population standard deviation. It is not a measured fact about every patient in the population. Any report about the observed patients' spread should label $s=18$ as the sample standard deviation; any report about the precision of a mean should label its estimated standard error.

And a population mean cannot reveal how many individuals cross a diagnostic threshold. Estimating that proportion is a different task with a different standard-error formula, deferred to a later lesson.

## Where the block goes next

You now have the quantity everything else is built from. The next lesson turns a standard error into a stated range of values compatible with the data and takes care over what such a range does and does not claim. The lesson after that asks how far an observed difference sits from zero, counted in standard errors. Those methods add inferential rules that a precision calculation alone does not supply.

:::{source-note}
:claims: claim-se-formula, claim-se-is-precision, claim-se-applies-to-other-statistics
:sources: source-altman-bland-se

This source supports the relation between standard deviation, sample size, and the standard error of a mean; the role of standard error as a measure of precision; and the extension of standard errors to contrasts such as a difference between two means. The independent-difference formula follows by adding the variances of two independent estimates. The service, targets, planning calculations, and all wording are original teaching material.
:::
