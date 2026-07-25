# Clinical wrap-up: what a registrar may say on Tuesday

A diabetes registrar has the dinner-timing result in front of her and a clinic list starting in ten minutes. One patient is going to ask whether eating earlier would help. The whole question is which sentences the sixty rows will carry.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The study, the cohort, and every number below are invented for reasoning practice. Nothing here supports advice about meal timing, and no patient decision should follow from it.
:::

## 1. Say what the result is, as a probability

The table gives two conditional probabilities with the group named first, which is the only safe order.

$$P(H \mid L) = \frac{21}{30} = 0.70, \qquad P(H \mid L^{c}) = \frac{12}{30} = 0.40.$$

Among the late diners, 70 per cent read at or above 140 mg/dL on the recorded morning. Among the early diners, 40 per cent did. Both sentences name their room of people before their share.

## 2. Say what chance alone would have put there

If dinner timing and morning reading carried no information about each other, they would be independent, and the joint probability would be the plain product: $P(L) \times P(H) = 0.50 \times 0.55 = 0.275$. Across sixty people that is 16.5 in the late-and-high cell. The table holds 21.

That gap is the entire empirical content of the headline. It is also small enough to be worth worrying about: sixty people is not many, and lesson 06 exists because a repeat of this study would land its own cell somewhere else. What this lesson establishes is only that 16.5 is the right thing to compare 21 against, and why.

## 3. Refuse the inverted question

The patient's likely question runs the other way. "My reading was high this morning. Does that mean I ate too late?" That asks for $P(L \mid H)$, and it has its own denominator:

$$P(L \mid H) = \frac{21}{33} \approx 0.64.$$

Different question, different number, and neither one is 0.70 dressed differently. In this invented cohort the two conditionals happen to sit close together because roughly half the participants ate late. Change that mix, as the two screening clinics in scene 4 did, and they separate violently. The registrar cannot hand the patient the 0.70 and call it an answer.

## 4. Count how many chances the study gave itself

The study recorded more than one outcome: fasting glucose, adherence, nights completed, and others. Suppose, for the arithmetic only, that five outcome comparisons were examined, that none of them reflects a real difference, and that each independently had a 0.05 probability of crossing whatever threshold the report used. Then the probability that none crosses is $0.95^{5} \approx 0.774$, and by the complement rule

$$P(\text{at least one crosses}) = 1 - 0.774 = 0.226.$$

About a 23 per cent probability that something in the report looks interesting when nothing is. That is not an accusation against this study; it is a reason to know how many comparisons were run before reading any single one as news. Lesson 09 turns this into a working method.

## 5. Keep the $p$ pointing the right way

The report will carry $p = 0.029$. From scene 4, its conditioning event is the hypothesis and the model, not the data. So the registrar may think: if dinner timing made no difference and the model held, a difference at least this large would arise about 3 times in 100 studies run this way. She may not think: there is a 3 per cent probability that dinner timing makes no difference. Lesson 08 does the rest of this work.

## 6. What she actually says

Reading the table with the rules from this lesson, three sentences survive and one does not.

- Survives: "In this small study, 70 per cent of the late-dinner group had a morning reading at or above 140, against 40 per cent of the early-dinner group."
- Survives: "If dinner timing made no difference at all, you would expect about 16 or 17 people in that group instead of the 21 recorded."
- Survives: "A high reading on any one morning does not tell us your dinner time; that is a different question with a different answer."
- Does not survive: "Eating earlier will lower your morning glucose by 9 mg/dL."

The fourth sentence needs a causal claim, an effect estimate, and a judgement about whether the effect matters to a person. Those belong to the correlation lesson already behind you and to lessons 11 and 12 ahead. What probability supplied here is narrower and comes first: a defensible account of what chance alone would have produced, and the discipline to keep track of which question each number answers.

Lesson 05 takes the next step. Instead of counting sixty rows, it asks which idealised shape describes fasting glucose across a population, and where that shape stops fitting.

:::{source-note}
:claims: claim-probability-as-long-run-frequency, claim-complement-and-addition, claim-conditional-probability-definition, claim-independence-product-rule, claim-conditional-asymmetry-screening, claim-p-value-conditional-direction
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-law-of-large-numbers, source-eom-conditional-probability, source-eom-independence, source-screening-predictive-values, source-p-value-misinterpretations

The reference works support the long-run reading of a probability, the complement rule, the definition of conditional probability, and independence as the product condition. The screening review supports the separation between a measure conditioned on a person's true state and one conditioned on an observed result. The guide to misinterpretations supports the statement that a $p$ value assumes the tested hypothesis rather than giving its probability. Every clinical detail, count, and figure in this case is invented and no source is offered for any of them.
:::
