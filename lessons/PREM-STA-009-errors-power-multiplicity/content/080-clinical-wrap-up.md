# Clinical wrap-up: the journal club that has to decide something

**Teaching example, not medical advice.** The service, the meeting, the two papers, and every figure below are invented for teaching. Nothing here reports an observation about real patients or supports a diagnostic, monitoring, or treatment decision.

A diabetes service meets on a Thursday. Two papers on evening meal timing are on the table, and by the end of the hour the service has to say whether it will run its own study and how large it would have to be.

Whether a difference of 9 mg/dL should change what a service tells patients is a separate clinical question, and this lesson supplies no diagnostic category or clinical threshold as a substitute for that judgement. The meeting's statistical job today is to say what each paper estimated, what its interval excludes, and what its design was planned to detect.

## Paper one: forty patients, no difference

The first paper is the forty-person study from scene four. Its abstract concludes that dinner timing has no effect on fasting glucose.

Work it with the lesson's tools, in order.

**Standard error.** Twenty per group, within-group standard deviation 16 mg/dL, so $16\sqrt{2/20} = 5.06$ mg/dL.

**What it was planned to detect.** $2.80 \times 5.06 = 14.2$ mg/dL at 80% power. This is a design audit, not evidence about which true effects produced the completed data.

**Power against the effect actually in question.** If the true difference is the 9.0 mg/dL the larger study reported, this trial's power is 0.43. It would miss such an effect more often than it would find it.

**What its data still allow.** The 95% interval runs from $-5.9$ to $13.9$ mg/dL, which contains zero, contains 9.0, and contains 12.

The registrar's proposed minute reads: *paper one shows dinner timing does not affect fasting glucose.* The corrected minute reads: *paper one estimated a 4.0 mg/dL higher mean, with a 95% interval from 5.9 mg/dL lower to 13.9 mg/dL higher, and its null test did not reject zero.* The interval includes the 9.0 mg/dL target; the power calculation separately shows that the design was not planned to resolve that target reliably.

## Paper two: a subgroup that crossed

The second paper is a larger cohort with no overall association. Its discussion highlights women over 60, where late diners ran 11 mg/dL higher, $p = 0.03$. The methods section, four pages earlier, records that twenty subgroups were examined and that none was named in the protocol.

If twenty tests were independent, $1 - 0.95^{20} = 0.64$. These subgroup tests overlap, so their exact family-wise rate cannot be inferred without their joint dependence structure.

The count still matters: the highlighted $p=0.03$ was selected from twenty attempts, so it cannot be read as the false-alarm rate of a lone prespecified comparison.

The right minute is not that the finding is false. It is that the study cannot tell anyone whether it is true. A comparison chosen after the data were seen has no known selection-adjusted false-alarm rate. It becomes a hypothesis for a prespecified confirmatory study. If the claim is that the association differs by age or sex, that study also needs an appropriate interaction analysis rather than a contrast between one subgroup that crossed and others that did not.

## The decision: what would the service's own study need?

The service serves a population with a within-group standard deviation near 16 mg/dL and wants to be able to detect a true difference of 9.0 mg/dL. Three options are on the table.

**Option A, one prespecified outcome.** Fasting glucose, named in the protocol, $\alpha = 0.05$ two-sided, 80% power. The standard error has to be no larger than $9.0 / 2.80 = 3.21$ mg/dL, so $n = 2(16/3.21)^{2}$, giving 50 per group and **100 patients**. The other measurements are still collected and still reported, labelled as exploratory.

**Option B, five outcomes carrying equal weight.** Split the threshold: $0.05 / 5 = 0.01$ each. The critical value moves out to $2.576$ standard errors, so the detectable effect at 80% power becomes $(2.576 + 0.84) \times \text{SE} = 3.42 \times \text{SE}$. Holding the detectable effect at 9.0 mg/dL now requires $\text{SE} \le 9.0/3.42 = 2.63$ mg/dL, which needs $n = 2(16/2.63)^{2} = 74$ per group and **148 patients**.

**Option C, run the 60 patients the last study ran.** Power against 9.0 mg/dL: 0.59. A four-in-ten chance of spending a year to produce a paper that says nothing, and that somebody will later cite as showing dinner timing does not matter.

The meeting picks Option A, because 100 patients is reachable and 148 is not, and because the service has one question it actually cares about. The cost is written into the protocol: fasting glucose is the outcome, 9.0 mg/dL is the difference the study is designed to detect, and everything else in the dataset is exploratory and will be described that way in the paper.

## The three sentences the service takes away

**A threshold is a promise about one comparison.** It says how often a true null will be rejected, and it says it once. Run the comparison five times, or twenty, and the promise no longer covers the report as a whole. Count the comparisons before reading any single one.

**A quiet result is only as informative as the interval it produced.** Before accepting that clinically relevant effects have been excluded, ask whether the interval lies inside a meaningful margin named in advance. Use power to audit what the design was planned to resolve, not to rank the true values compatible with completed data.

**Both errors have a price, and the design fixes the exchange rate.** Guard harder against a false alarm and you concede more misses, unless you buy your way out with more patients. Nothing in the arithmetic decides which error is worse in a given clinical setting, and that decision has to be made by people who know what happens next to the patient.

## Where the block goes next

You can now say what a study could have found and what it risked by looking everywhere. What you cannot yet say is how large the effect is in a form a clinician can use, or whether 9 mg/dL is worth anyone's evening. The next lesson turns a difference into measures of association and risk, and asks how a test built on one would actually perform. The lesson after that fits a line through the data. The block then closes by asking the only question the arithmetic has never been able to answer, which is whether any of it matters to the person in the chair.

:::{check}
:id: check-wrap-up-decision
:kind: completion

The service is offered a fourth option. A neighbouring clinic will contribute 40 more patients, bringing the study to 100 in total, provided the protocol also tests four of their outcomes at equal weight alongside fasting glucose.

1. Under that offer, what threshold does each of the five outcomes take?
2. With 50 per group and $\alpha = 0.01$, what difference in fasting glucose could the study detect with 80% power?
3. Should the service accept? Give the reason in terms of the two errors.
:::

Five outcomes at equal weight take $0.05 / 5 = 0.01$ each. With 50 per group the standard error is 3.20 mg/dL, so the detectable effect becomes $3.42 \times 3.20 = 10.9$ mg/dL. The offer therefore converts a study that could detect 9.0 mg/dL into one that can only reliably detect 10.9, while adding forty patients. It buys protection against the first kind of error, which the service was not short of, by conceding ground on the second kind, which was the binding constraint all along. Declining, and offering the neighbouring clinic's outcomes a place in the exploratory section, keeps the study able to answer the question it was built for.

:::{source-note}
:claims: claim-large-p-does-not-show-absence, claim-beta-and-power, claim-sample-size-formula, claim-multiplicity-inflates-false-positives, claim-bonferroni-adjustment, claim-subgroups-are-exploratory
:sources: source-greenland-misinterpretations, source-nist-statistical-tests, source-nist-sample-sizes, source-chen-multiple-comparisons, source-tanniou-subgroups

These sources support the limits of what a result above the threshold licenses, power and its complement the Type II error rate, the sample-size relation built from the two normal quantiles with the standard deviation and the difference to be detected, the rise in the family-wise error rate with the number of comparisons and the Bonferroni adjustment that answers it, and the multiplicity, interaction-analysis, exploratory-status, and replication boundaries for subgroup findings. The service, the meeting, the two papers, the three options, and every figure computed here are original teaching material and describe no real clinic or study.
:::
