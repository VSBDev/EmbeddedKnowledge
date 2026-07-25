# Scoring a meter against a laboratory

The dinner-timing study measured fasting glucose in a laboratory from a venous sample. That is slow and it needs a phlebotomist. Suppose the service wants to know whether a cheap fingerstick meter could flag the same high readings in the corridor, in twenty seconds.

Answering that means comparing the meter with something already trusted.

:::{definition}
:id: definition-reference-standard

**Reference standard.** The procedure treated as giving the correct answer while a new test is being judged. It is the best available comparison for the study at hand, not a guarantee of truth. Here it is the laboratory venous fasting glucose, and the target condition is a laboratory value of 140 mg/dL or above.
:::

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The meter does not exist, its performance figures are stipulated, and the two populations below are invented so the counts are whole numbers. Nothing here describes a real device, a real threshold, or a real clinic.
:::

Every person tested falls into one of four boxes: the meter fired or it did not, and the laboratory value was at or above the cut or it was not. Four boxes, so a two-by-two table.

## The table, cell by cell

Stipulate two performance figures for the meter, both fixed properties of how the device behaves.

- Among people whose laboratory value is at or above the cut, the meter fires 90 per cent of the time.
- Among people whose laboratory value is below the cut, the meter stays quiet 85 per cent of the time.

Run it through a diabetes clinic where 40 per cent of the morning samples come back at or above the cut. Take 10,000 people so nothing has to be rounded.

Build the table from the outside in. The 40 per cent gives the column totals: 4,000 at or above, 6,000 below. Then 90 per cent of 4,000 is 3,600, leaving 400. Then 85 per cent of 6,000 is 5,100, leaving 900. Add across for the row totals.

| | Laboratory at or above 140 | Laboratory below 140 | All |
| --- | ---: | ---: | ---: |
| Meter fires | 3,600 | 900 | 4,500 |
| Meter quiet | 400 | 5,100 | 5,500 |
| All | 4,000 | 6,000 | 10,000 |

Four cells with names worth learning, because the names carry the reasoning. The 3,600 are true positives and the 5,100 are true negatives. The 900 are false positives, people alarmed for nothing. The 400 are false negatives, people sent away with a high value nobody caught.

## Reading down the columns

The first two measures divide by the column totals, which are groups defined by the laboratory.

:::{definition}
:id: definition-sensitivity-specificity

**Sensitivity.** Among people who have the target condition, the share the test picks up. It is P(test fires given condition present).

$$\text{sensitivity} = \frac{3{,}600}{4{,}000} = 0.90.$$

**Specificity.** Among people who do not have the target condition, the share the test correctly leaves alone. It is P(test quiet given condition absent).

$$\text{specificity} = \frac{5{,}100}{6{,}000} = 0.85.$$
:::

Both came back as the numbers that were stipulated, which is the point of building the table that way. Sensitivity and specificity are conditioned on the person's true state. They describe the device.

## Reading across the rows

The next two measures divide by the row totals, which are groups defined by what the meter did.

:::{definition}
:id: definition-predictive-values

**Positive predictive value.** Among people whose test fired, the share who have the condition. It is P(condition present given test fires).

$$\text{PPV} = \frac{3{,}600}{4{,}500} = 0.80.$$

**Negative predictive value.** Among people whose test stayed quiet, the share who do not have the condition. It is P(condition absent given test quiet).

$$\text{NPV} = \frac{5{,}100}{5{,}500} = 0.927.$$
:::

Predictive values are conditioned on the result. They describe the person holding it.

:::{worked-example}
:id: worked-example-clinic-table

**Task.** A patient in this clinic hears the meter beep. What can be said to them, and what cannot?

**Step 1. Find the room they are standing in.** They are one of the 4,500 people whose meter fired. That is the denominator; the 4,000 with a high laboratory value is a different room.

**Step 2. Count who is in it.** 3,600 of those 4,500 have a laboratory value at or above the cut, and 900 do not.

**Step 3. Divide.** 3,600 / 4,500 = 0.80.

**Step 4. Say both halves.** Four in five people with a beep here will have a high laboratory value. One in five will not, so a confirmatory laboratory sample is still the next step.

**Step 5. Refuse the wrong sentence.** "The meter picks up 90 per cent of high readings, so your beep is 90 per cent likely to be right" divides by the 4,000 people with a high value when the patient's question needs the 4,500 whose meter fired. In this clinic that swap moves 0.90 to 0.80, which looks harmless. Scene 5 moves it much further.

**Answer.** In this population a beep carries an 80 per cent probability of a high laboratory value, and a quiet meter carries a 92.7 per cent probability of a value below the cut. Neither number is the sensitivity or the specificity.
:::

## One table, four fractions, four denominators

Everything above is the same 10,000 people cut four ways. Write the denominators down together and the structure stops being a list to memorise.

| Measure | Numerator | Denominator | The group is defined by |
| --- | --- | --- | --- |
| Sensitivity | 3,600 | 4,000 | the laboratory |
| Specificity | 5,100 | 6,000 | the laboratory |
| Positive predictive value | 3,600 | 4,500 | the meter |
| Negative predictive value | 5,100 | 5,500 | the meter |

Sensitivity and positive predictive value share a numerator, and so do specificity and negative predictive value. Each pair differs only in what it divides by. That is exactly the structure [Probability foundations](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-004) established for P(A given B) and P(B given A), now wearing clinical clothes.

:::{check}
:id: check-four-denominators
:kind: retrieval

Answer from the table above without rereading.

1. Which two measures would be unchanged if the clinic saw twice as many people with a high laboratory value and the same number with a low one?
2. A test has a sensitivity of 0.99. Does that tell you a fired test is almost certainly correct?
3. Which cell counts people who were alarmed for nothing?
:::

Sensitivity and specificity would be unchanged, because each is computed inside a single laboratory-defined column and changing how many people fall in the columns does not touch what happens within them. A sensitivity of 0.99 says nothing on its own about a fired test, since it divides by the wrong group for that question. The 900 false positives were alarmed for nothing.

:::{source-note}
:claims: claim-diagnostic-measures-are-conditionals, claim-predictive-values-depend-on-prevalence
:sources: source-screening-predictive-values

The screening review supports the definitions of sensitivity, specificity, positive predictive value, and negative predictive value, and the statement that the first pair is conditioned on a person's true state while the second pair is conditioned on the test result. The meter, its stipulated performance, the clinic, and every count are invented.
:::
