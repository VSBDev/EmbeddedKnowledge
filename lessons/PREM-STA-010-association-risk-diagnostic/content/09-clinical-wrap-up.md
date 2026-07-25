# Clinical wrap-up: the outreach morning

A diabetes service has agreed to run a stand at a community health fair. Two decisions have to be made before the van is loaded, and this lesson supplies the arithmetic for both.

The first is operational. Should the fingerstick meter go, and what should the staff say to somebody whose meter beeps? The second is clinical. The service has trial evidence for its meal-timing programme, and the people at the fair will ask whether it is worth joining.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The service, the fair, the meter, the trial, and every number below are invented for reasoning practice. Nothing here supports advice about meal timing, screening, or testing, and no patient decision should follow from it.
:::

## 1. What the meter will do at the fair

For this toy comparison, stipulate that sensitivity remains 0.90 and specificity 0.85 at the fair. The population prevalence changes: in the clinic, 40 per cent of morning samples came back at or above the cut; at the fair, stipulate 4 per cent. Real sensitivity and specificity may also change between settings, so this isolates prevalence rather than asserting that test performance travels.

Per 10,000 people who stop at the table: 400 with a laboratory value at or above the cut and 9,600 below. The meter fires for 360 of the first group and 1,440 of the second, so 1,800 beeps in total.

$$\text{PPV} = \frac{360}{1{,}800} = 0.20, \qquad \text{NPV} = \frac{8{,}160}{8{,}200} = 0.995.$$

That settles the script. A beep is a reason to arrange a laboratory sample and nothing else, because four in five of them will not be confirmed. A quiet meter is genuinely reassuring in this setting. The staff may not say "the meter is 90 per cent accurate", because the 90 per cent answers a question nobody at the table is asking.

## 2. Whether the meter should go at all

The 1,440 false alarms are the cost of the morning, and they are not free. Each one is a person who goes home worried and returns for a venous sample. The service can weigh that against 360 people found. What the arithmetic cannot do is decide whether that trade is acceptable; that is a judgement about people, and it is what the block's final lesson is for.

Two levers are visible in the table. Under the fixed-performance assumption, testing a group with a higher prevalence raises the positive predictive value. Raising the meter's specificity shrinks the false-positive cell directly, because the 1,440 came from a 15 per cent error rate applied to 9,600 people.

## 3. What to say about the programme

The trial from scene 3 is the evidence: 500 per arm, twelve months, 130 outcomes on usual care and 80 in the programme.

- Absolute: the risk fell from 26.0 per cent to 16.0 per cent, a reduction of 10 per 100 over twelve months.
- Relative: a risk ratio of 0.615, so a 38.5 per cent relative reduction.
- In people: about 10 adults joining the programme instead of usual care for one additional person to avoid the outcome within a year.

All three describe one result. The third makes the absolute benefit concrete and informs the question "should I bother?", but it does not settle that decision. Outcome importance, harms, uncertainty, burden, cost, alternatives, and patient preferences also matter; a leaflet quoting only "cuts your risk by nearly 40 per cent" leaves even the absolute benefit out.

## 4. What the original study still cannot say

Someone will ask about the sixty-row cohort, because it is the study that started all this. It gives a risk difference of 30 per 100 and an odds ratio of 3.5, and both are real features of the data. Neither supports a sentence beginning "if you move your dinner earlier".

The cohort observed dinner times; nobody assigned them. So the sentence that survives is: "In a small study, 70 per cent of people who ate late had a morning reading at or above 140, against 40 per cent of those who ate earlier." The sentence that does not survive is: "Moving your dinner earlier would drop your chance of a high reading by 30 in 100." Getting from the first to the second needs the trial, and the trial tested a programme rather than a single behaviour.

## 5. Four sentences the fair staff may use

- "This meter is a first look. If it beeps, we will take a proper sample, and most beeps here will turn out fine."
- "If it stays quiet, that is a good sign in a group like this one."
- "The programme cut this outcome from about 26 in 100 to about 16 in 100 over a year in our trial, which is about one person helped for every ten who join."
- "The dinner-timing study found a pattern. It did not test whether changing your dinner time changes anything."

Four sentences, and each one names the group it is about before it names a number. That is the whole discipline of this lesson, applied twice: once to how big an effect is, and once to how a test behaves in the room it is actually used in.

The block has one step left. Every measure here has a size, and the closing lesson asks the question no formula answers: whether a difference of this size should change what a patient does.

:::{source-note}
:claims: claim-effect-measures-from-a-table, claim-report-both-absolute-and-relative, claim-nnt-is-reciprocal-of-risk-difference, claim-diagnostic-measures-are-conditionals, claim-predictive-values-depend-on-prevalence
:sources: source-odds-versus-risk, source-arr-rrr-nnt, source-nnt-25-years, source-consort-effect-sizes, source-screening-predictive-values

The methods papers support the effect measures, the reciprocal relation between a risk difference and a number needed to treat, and its dependence on the stated period. The reporting guideline supports stating both absolute and relative effect sizes. The screening review supports the definitions of the diagnostic measures and their dependence on prevalence. The service, the fair, the meter, the trial, the cohort, and every count in this case are invented, and no source is offered for any of them.
:::
