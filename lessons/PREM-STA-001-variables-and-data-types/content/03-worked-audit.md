# Audit the file column by column

The study file holds one row per participant. Each row was built from that person's own nights, and the last column says how many nights went into it. Every value in it was invented for this lesson.

| Participant | Sex | Dinner time (h before sleep) | Fasting glucose (mg/dL) | Adherence | Nights recorded |
| --- | :---: | ---: | ---: | :---: | ---: |
| P07 | 1 | 2.6 | 132 | 3 | 9 |
| P12 | 2 | 4.1 | 118 | 4 | 11 |
| P23 | 1 | 1.4 | 141 | 2 | 14 |
| P31 | 1 | 3.3 | 126 | 4 | 12 |
| P44 | 2 | 0.9 | 155 | 1 | 7 |
| P58 | 1 | 2.2 | 129 | 3 | 10 |

Those are six of the sixty rows, shown so the audit has something concrete to work on.

:::{worked-example}
:id: worked-example-column-audit
:label: From six columns to the lines a results table can carry

**1. State the task.**

For every column, decide its level of measurement, then write the one line of a results table that the column can honestly support.

**2. Represent the givens.**

The protocol says how each value was produced. Sex was entered from the registration form as 1 or 2. Dinner time was worked out by subtracting the recorded end of the evening meal from the recorded time of falling asleep. Fasting glucose came from the participant's own meter before breakfast. Adherence was rated by the study nurse on the protocol's four-point scale. Nights recorded was counted.

The unknowns are not numerical. Each answer is a decision about what a column is.

**3. Choose a plan.**

Put five questions to every column, in this order:

1. Is the value a label for a group, or an amount?
2. If it is a label, do the groups rank?
3. If it is an amount, can any value inside a range occur, or only separated ones?
4. Is the gap between two values a fixed, knowable quantity?
5. Does zero mean none of the thing?

Question 4 decides whether a mean is available. Question 5 decides whether a ratio is.

**4. Execute the audit.**

| Column | Label or amount? | Ranked? | Gap fixed? | Zero real? | Level |
| --- | --- | --- | --- | --- | --- |
| Participant | label | no | not applicable | not applicable | nominal |
| Sex | label | no | not applicable | not applicable | nominal |
| Dinner time | amount, any value in range | ordered | yes, one hour is one hour | yes, meal ends at sleep onset | continuous, ratio |
| Fasting glucose | amount, any value in range | ordered | yes, one mg/dL is one mg/dL | yes, no glucose present | continuous, ratio |
| Adherence | label | yes | no | no | ordinal |
| Nights recorded | amount, whole values only | ordered | yes, one night is one night | yes, no usable nights | discrete, ratio |

Adherence is the only row where questions 1 and 2 both matter. Its values rank, which is why it outranks sex; its steps have no established size, which is why it stops short of dinner time.

**5. Check each decision by recoding.**

Rewrite each column in a different but equally faithful code and see which summaries move.

- Sex written as F and M rather than 1 and 2: counts and proportions are unchanged, and no mean exists in either version.
- Adherence written as 10, 20, 30, 40 rather than 1, 2, 3, 4: every participant keeps the same rank, the median rating is the same rating, and the mean changes. A summary that moves when nothing about the participants moves is reporting the code.
- Fasting glucose written in mmol/L rather than mg/dL: the mean converts by the same rule that converts a single reading, and the ranking of participants is untouched. That stability is what a genuine measurement scale buys you.

**6. Write the results lines.**

- Sex: 36 women and 24 men, a proportion of 0.6 women.
- Adherence: report the count in each of the four ratings, plus the median rating and the share rated *usually* or better.
- Dinner time: mean and standard deviation, in hours before sleep.
- Fasting glucose: mean and standard deviation, in mg/dL.
- Nights recorded: mean and range, in nights.
- Participant: no summary. The column exists to link rows, not to be described.

**7. Explain the decisive decision.**

Adherence and nights recorded both hold small whole numbers between 1 and 14. One gets a mean and the other does not.

Before reading on, say why in one sentence.

The reason is question 4 and nothing else. Nine nights and ten nights differ by one night, an amount anyone can state. A rating of 3 and a rating of 4 differ by whatever the gap between *usually* and *always* happens to be, and the protocol never measured it. Storage type, digit count, and range are all irrelevant to this decision.
:::

## How the rows relate to each other

Levels of measurement describe columns. One more property describes rows, and the file will not tell you unless you ask how it was collected.

Two sets of values are **paired** when each value in one set belongs with a particular value in the other, usually because both came from the same person. They are **independent** when the two sets come from separate people with no such matching.

Both structures live inside this one study.

- Take each participant's glucose after their latest dinner and their glucose after their earliest dinner. Every value in the first set has a partner in the second: the same person. That is paired.
- Take the fasting glucose of the 36 women and of the 24 men. Nobody appears twice, and no woman's row is matched with any particular man's row. That is independent.

The difference is not cosmetic. A paired comparison preserves which measurements belong together and can work on each person's own change. This often reduces variation from stable person-specific baselines, but subtraction guarantees cancellation only for a stable additive component. It does not remove time-varying differences, measurement error, interactions, or carryover. In this observational study, pairing also does not prove that dinner timing caused a glucose change. An independent comparison carries between-person variation into the result and has to account for it.

Which structure you have is settled by how the study collected its data, and no later analysis can change it. This block's tests and intervals will use that fact; today the job is to read the structure off the study description.

:::{check}
:id: check-structure-read
:kind: retrieval

The team also has each participant's fasting glucose from a clinic visit six months before the study began.

Comparing those earlier readings with the study readings: paired or independent? Name the feature of the data collection that decides it.
:::

### Feedback after your attempt

Paired. Each earlier reading and each study reading come from the same named participant, so the two sets match up person by person. The deciding feature is the shared identity of the source, not the fact that both sets are glucose readings in the same units.

:::{source-note}
:claims: claim-variable-type-taxonomy, claim-level-constrains-summary, claim-paired-versus-independent
:sources: source-ali-bhaskar, source-mishra-descriptive, source-sullivan-artino

The six rows, the protocol details, and the five audit questions were written for this lesson. What the methods sources supply is the underlying material: the variable families, the summaries each measurement level sustains, and the distinction between measurements taken on the same subjects and measurements from two separate samples. Paired and independent are the two simplest structures and not the only ones. Real files also hold measurements repeated at many time points and patients grouped within clinics or families, and those need methods well beyond this lesson.
:::
