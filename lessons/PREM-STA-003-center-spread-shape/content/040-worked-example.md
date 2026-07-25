# One standard deviation, computed by hand

Software returns a standard deviation in a keystroke, and the number stays opaque until you have built one yourself. Do it once on a set small enough to hold in view.

Participant 14 in the dinner-timing study recorded fasting glucose on five separate mornings: 118, 134, 142, 156, 160 mg/dL. This is one person's night-to-night variation, not a comparison between people.

:::{worked-example}
:id: worked-example-standard-deviation

**Step 1. Find the mean, because every deviation is measured from it.**

$118 + 134 + 142 + 156 + 160 = 710$, and $710/5 = 142$ mg/dL.

**Step 2. Subtract the mean from each reading.**

| Reading (mg/dL) | Deviation from 142 | Squared deviation |
| --- | --- | --- |
| 118 | -24 | 576 |
| 134 | -8 | 64 |
| 142 | 0 | 0 |
| 156 | 14 | 196 |
| 160 | 18 | 324 |
| **Total** | **0** | **1160** |

The deviations sum to zero, which is the first check worth running. If they do not, the mean is wrong or an arithmetic slip has crept in. This is also the concrete reason the deviations get squared: their raw average is zero for every data set ever collected, so it measures nothing.

**Step 3. Divide the squared total by $n-1$ to get the variance.**

There are five readings, so divide by four.

$$s^2 = \frac{1160}{4} = 290 \text{ mg}^2/\text{dL}^2.$$

**Step 4. Take the square root to return to mg/dL.**

$$s = \sqrt{290} = 17.0 \text{ mg/dL}.$$

**Step 5. Check the answer against something you already know.**

Two checks. First, $17^2 = 289$, so the square root of 290 has to be a shade above 17; the answer is in the right place. Second, the standard deviation should be comparable to a typical deviation in the table, and the deviations were 24, 8, 0, 14 and 18. A typical distance of 17 mg/dL sits sensibly among them, larger than the middle ones because squaring gives the two biggest deviations extra weight.

**Step 6. Say what it means in the units of the problem.**

On a typical morning, participant 14's fasting glucose lands about 17 mg/dL away from their own five-day average of 142. Their range over those mornings is $160 - 118 = 42$ mg/dL, and their median happens to equal their mean at 142. That agreement does not establish symmetry or rule out a lean; the ordered spacings or a plot must be inspected before making a shape claim.

**Self-explanation before you leave the example:** Why would averaging the unsquared deviations always give zero, and how does squaring them change the problem into a usable spread calculation? Explain the decision in your own words before checking the next scene.
:::

## What that single number is worth knowing next to

The cohort of sixty adults had a standard deviation of 18 mg/dL, measured across people. Participant 14's standard deviation of 17 mg/dL was measured across mornings within one person. Those two numbers are close, and that is a result with teeth: if one person varies almost as much from morning to morning as the whole cohort varies from person to person, then a single morning reading is a shaky description of the person who gave it.

That observation cannot be settled here. It is the reason later lessons ask how much a summary would move if the study were repeated. What this scene establishes is narrower and firm: a standard deviation is a distance in the data's own units, built from every value, and you can compute one and check it.

:::{source-note}
:claims: claim-variance-sd-units
:sources: source-nist-scale

The source supports the sample variance as the summed squared deviations divided by $n-1$ and the standard deviation as its square root, expressed in the original data units while the variance is in squared units. Participant 14, the readings, and every step of the check are original teaching material.
:::
