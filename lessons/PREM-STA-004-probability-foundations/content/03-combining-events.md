# Two events, one table

One event at a time is arithmetic. Questions worth asking involve two: late dinner and a high reading, a positive test and a disease, a first draw and a second. Three rules cover almost everything you will meet at this level, and one of them is the rule the rest of the block leans on hardest.

Keep the study table in view.

| Group | Reading 140 mg/dL or above ($H$) | Reading below 140 ($H^{c}$) | People |
| --- | ---: | ---: | ---: |
| Late dinner ($L$) | 21 | 9 | 30 |
| Early dinner ($L^{c}$) | 12 | 18 | 30 |
| All sixty | 33 | 27 | 60 |

## Rule one: adding, without counting anyone twice

How many of the sixty either ate late or read high? Add 30 and 33 and you get 63, which is more people than the study enrolled. The twenty-one who did both were counted in each total, so they have to come out once.

:::{definition}
:id: definition-addition-rule

For any two events $A$ and $B$,

$$P(A \cup B) = P(A) + P(B) - P(A \cap B).$$

When $A$ and $B$ cannot both occur they are **mutually exclusive**, the overlap term is zero, and the rule shortens to $P(A) + P(B)$.
:::

For the table, $P(L \cup H) = 0.50 + 0.55 - 0.35 = 0.70$. Counting directly gives the same answer: 30 late diners plus the 12 early diners who read high is 42 people, and $42/60 = 0.70$.

Late and early dinner are mutually exclusive; nobody is in both groups. So $P(L \cup L^{c}) = 0.50 + 0.50 = 1$, which is the complement rule wearing a different hat.

## Rule two: restricting the question

The four fractions in the opening check were different because each used a different whole. Naming that operation gives the central idea of the lesson.

:::{definition}
:id: definition-conditional-probability

For events $A$ and $B$ with $P(B) > 0$, the **conditional probability** of $A$ given $B$ is

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}.$$

Read it as: among the outcomes where $B$ holds, what share also has $A$? Conditioning throws away every outcome outside $B$ and renormalises what is left.
:::

Two conditional probabilities live in the study table, and they are not the same number.

$$P(H \mid L) = \frac{0.35}{0.50} = 0.70, \qquad P(L \mid H) = \frac{0.35}{0.55} \approx 0.64.$$

The counts say it more plainly. $P(H \mid L)$ takes the 21 shared people over the 30 late diners. $P(L \mid H)$ takes the same 21 over the 33 high readers. Same numerator, different denominator, different question, different answer. Hold on to that; scene 4 is built entirely on what happens when someone forgets it.

Conditioning also respects the complement rule, provided you stay inside the same condition: $P(H^{c} \mid L) = 9/30 = 0.30$, and $0.70 + 0.30 = 1$.

:::{callout}
:kind: boundary

Two vocabulary collisions worth naming now.

The **conditional** probability here is a numerical operation on a stated group. It is a relative of, but not the same thing as, the **conditioning** of [From correlation to a causal claim](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007), where restricting or adjusting an analysis is a design decision with causal consequences. That lesson asks whether you should condition on a variable. This one only shows you what the arithmetic does once you have.

**Independent** below describes two events whose probabilities do not inform each other. The **independent variable** of [Variables and controls](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-003) is the factor a researcher deliberately changes. The shared word is an accident of English.
:::

## Rule three: multiplying, and the trap inside it

Rearranging the conditional definition gives the rule for "both happened".

:::{definition}
:id: definition-multiplication-rule

For any two events $A$ and $B$ with $P(B) > 0$,

$$P(A \cap B) = P(B) \times P(A \mid B).$$

Events $A$ and $B$ are **independent** exactly when $P(A \cap B) = P(A) \times P(B)$, which for $P(B) > 0$ is the same as saying $P(A \mid B) = P(A)$: learning that $B$ happened leaves the probability of $A$ where it was. Only for independent events may you multiply the plain probabilities.
:::

The general form works on the table: $P(L \cap H) = P(L) \times P(H \mid L) = 0.50 \times 0.70 = 0.35$, which is the 21 people out of 60.

Multiplying the plain probabilities instead gives $0.50 \times 0.55 = 0.275$. That is what the cell would hold if dinner group and reading told you nothing about each other, and in people it is $0.275 \times 60 = 16.5$. The table holds 21. The gap between 16.5 and 21 is precisely the study's finding restated in the language of this lesson, and it is why $L$ and $H$ are dependent events here.

That comparison is also the first honest answer to the question scene 1 opened with. Chance alone, with no relationship between dinner timing and glucose, points at about 16 or 17 people in that cell. The study found 21. Whether a gap that size is more than the ordinary wobble of a sixty-person sample is the question lessons 06 and 08 exist to settle.

## Working the table end to end

:::{worked-example}
:id: worked-example-two-draws

**The task.** Two of the sixty participants are drawn at random for a follow-up interview, without drawing the same person twice. What is the probability that both ate late?

**Route one: count the pairs.** Every unordered pair of distinct participants is equally likely. The number of pairs available from 60 people is $\frac{60 \times 59}{2} = 1770$. The number of pairs drawn entirely from the 30 late diners is $\frac{30 \times 29}{2} = 435$. So

$$P(\text{both late}) = \frac{435}{1770} = \frac{29}{118} \approx 0.246.$$

**Route two: chain the draws.** The first draw is late with probability $30/60 = 0.500$. Given that it was, only 29 late diners remain among 59 people, so the second draw is late with probability $29/59 = 0.492$. The multiplication rule chains them:

$$P(\text{both late}) = 0.500 \times 0.492 = 0.246.$$

**The decision the routes expose.** Route two used the conditional form, and it had to. The draws are dependent: removing one late diner changes what is left in the bowl. Multiplying the plain probabilities would give $0.500 \times 0.500 = 0.250$, which is wrong, though only by 0.004 because 60 is large enough that one removal barely moves the pool.

**Where the same error stops being harmless.** Ask instead for the probability that two people drawn from the 30 late diners both read below 140. The correct chain is $\frac{9}{30} \times \frac{8}{29} = 0.300 \times 0.276 = 0.083$. The independence shortcut gives $0.300 \times 0.300 = 0.090$, overstating the answer by about nine per cent. Shrink the pool further and the error grows. The rule to carry forward is that independence is a property you check, never a convenience you assume.

**Explain the key decision to yourself.** Why did drawing without replacement require the conditional form of the multiplication rule instead of the plain product?
:::

:::{check}
:id: check-three-rules
:kind: retrieval

Close the lesson and answer from memory. Use the table only for counts.

1. State the addition rule and say what the subtracted term is for.
2. Write the definition of $P(A \mid B)$ and state the condition it needs.
3. What is $P(H \mid L^{c})$, the probability of a high reading among early diners?
4. A colleague computes the probability that two randomly drawn participants both read high as $0.55 \times 0.55$. Name the assumption and say whether the table supports it.

Answers follow the source note; work all four first.
:::

:::{source-note}
:claims: claim-complement-and-addition, claim-conditional-probability-definition, claim-independence-product-rule
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-conditional-probability, source-eom-independence

The reference works support the axioms behind the complement and addition rules, the definition of conditional probability for a conditioning event of positive probability, and independence as the product condition equivalent to the conditional probability equalling the unconditional one. The sixty-person table is invented and no source speaks to it.
:::

Answers. (1) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; the subtraction removes the double count of outcomes in both events. (2) $P(A \mid B) = P(A \cap B) / P(B)$, needing $P(B) > 0$. (3) $12/30 = 0.40$. (4) The colleague assumed independence between the two draws. The table cannot support it, because the draws are without replacement and therefore dependent; the correct chain is $\frac{33}{60} \times \frac{32}{59} = 0.550 \times 0.542 = 0.298$, against the shortcut's 0.303.
