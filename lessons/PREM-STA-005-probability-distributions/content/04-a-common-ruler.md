# One ruler for measurements that share no units

Two readings from the study file: 100 mg/dL and 181 mg/dL. In the histogram they were the two end bars, one person each, both obviously extreme. Which of them is further from the middle of this cohort?

The instinct is 181, because 181 is the big number and the tail on that side of the picture was the fatter one. Measure it and the instinct is wrong.

## Standardising

Take a reading, subtract the mean, and divide by the standard deviation. What comes back is a **z-score**, also called a standard score: the reading's distance from the centre expressed in standard deviations.

:::{equation}
:label: equation-z-score

z = \frac{x - \mu}{\sigma}
:::

Run the two readings through it:

:::{equation}
:label: equation-two-readings

\begin{aligned}
z_{181} &= \frac{181 - 142}{18} = \frac{39}{18} = +2.17 \\[4pt]
z_{100} &= \frac{100 - 142}{18} = \frac{-42}{18} = -2.33
\end{aligned}
:::

The low reading is further out. It is 2.33 standard deviations below the cohort mean while the high reading is 2.17 above, and the display lesson noticed the same thing without a number: one person sat alone in the lowest bin with a gap above them, while the top of the range thinned out gradually. Standardising turns that visual impression into a quantity you can compare, sort, and put in a sentence.

The subtraction moves the centre to zero and the division makes one unit equal one standard deviation. A measurement processed this way follows the **standard normal distribution**, mean 0 and standard deviation 1, whenever the original measurement was normal. The three bands from the empirical rule become the same three numbers on every measurement ever standardised: inside ±1 holds 68.27 per cent, inside ±2 holds 95.45 per cent, and inside ±3 holds 99.73 per cent, leaving 2.275 per cent in each tail beyond ±2.

## The units cancel

Fasting glucose is reported in mg/dL in the United States and in mmol/L across most of the rest of the world. The two are the same measurement wearing different clothes: dividing a glucose figure in mg/dL by 18 gives mmol/L, which is why a joint ADA and EASD statement can write a threshold as "3.0 mmol/l (54 mg/dl)" and mean one number.

Convert the whole cohort and recompute. The mean becomes 142 ÷ 18 = 7.9 mmol/L, the standard deviation becomes 18 ÷ 18 = 1.0 mmol/L, and a reading of 160 mg/dL becomes 160 ÷ 18 = 8.9 mmol/L.

:::{equation}
:label: equation-unit-invariance

z_{160} = \frac{160 - 142}{18} = 1.00 \qquad\text{and}\qquad z_{8.9} = \frac{8.9 - 7.9}{1.0} = 1.00
:::

Identical, and not by luck. Dividing every value by the same constant divides the gap from the mean and the standard deviation by that constant too, so the ratio is untouched. A z-score is a pure number with no units attached, which is what lets it serve as a common ruler for quantities that could never be compared directly. The same arithmetic incidentally converts the diabetes diagnostic threshold: 126 ÷ 18 = 7.0 mmol/L exactly.

## The ruler needs a stated reference

Here is the trap, and it catches people who have the formula down cold.

Person A is in the study cohort with a fasting glucose of 160 mg/dL. Against that cohort's mean of 142 and standard deviation of 18, z = +1.00.

Person B is in the workplace screening you will meet in the next scene, where fasting glucose has a mean of 104.2 mg/dL and a standard deviation of 17.4 mg/dL. Person B's reading is 128 mg/dL, lower than person A's in absolute terms. Standardised against their own group:

:::{equation}
:label: equation-person-b

z_B = \frac{128 - 104.2}{17.4} = \frac{23.8}{17.4} = +1.37
:::

Person B sits further from the centre of their group than person A does from the centre of theirs, on a reading 32 mg/dL lower. Both statements are true and they are answers to different questions. "How unusual is this person here?" is what a z-score answers. "How high is this person's glucose?" is answered by 160 and 128, and no standardisation improves on that.

So a z-score is meaningless until the distribution it was measured against is named. Reporting one without the reference group is like reporting a temperature without saying which scale.

## What a z-score is not

A z-score is a distance. Turning it into a probability takes a second step, and that second step is where the model re-enters.

Saying "this reading has z = +2.17" requires only a mean and a standard deviation, and holds whatever shape the data have. Saying "only about 1.5 per cent of people are this high or higher" requires that the distribution actually be normal, because that percentage is read off the normal curve. When the shape assumption fails, the z-score survives intact and the percentage attached to it does not. The next scene is entirely about that gap.

:::{check}
:id: check-standardise-three
:kind: retrieval

Using the cohort mean of 142 mg/dL and standard deviation of 18 mg/dL, and without a calculator where you can manage it:

1. What is the z-score of the 126 mg/dL diabetes diagnostic threshold?
2. A reading has z = −1.00. What is the reading, in mg/dL?
3. Two people have z = +1.50, one on fasting glucose and one on a completely different measurement in a different study. What can you say about them, and what can you not?
:::

The threshold gives z = (126 − 142) ÷ 18 = −16 ÷ 18 = −0.89, so 126 mg/dL sits a little under nine tenths of a standard deviation below this cohort's centre. A z of −1.00 is one standard deviation below the mean, so 142 − 18 = 124 mg/dL. For the third: both sit one and a half standard deviations above the centre of their own reference distribution, and that is the entire content of the statement. You cannot say their measurements are similar, that they are comparably ill, or that the same share of people lies beyond each of them, since that last one depends on the shape of each distribution and neither has been checked here.

:::{source-note}
:claims: claim-z-score-definition, claim-normal-two-parameters, claim-empirical-rule-areas, claim-glucose-unit-conversion, claim-hypoglycaemia-alert-value
:sources: source-nist-normal-data, source-nist-normal-distribution, source-ihsg-hypoglycaemia-reporting

The first source supplies the standardising transformation z = (x − μ)/σ and the percentages of a normal population falling within one, two and three standard deviations. The second supplies the normal distribution's location and scale parameters and the standard normal distribution as the case with mean 0 and standard deviation 1. The third is a joint position statement of the American Diabetes Association and the European Association for the Study of Diabetes, used here for its glucose alert value and for its paired reporting of thresholds in both mmol/l and mg/dl, which fixes the conversion factor of 18 used above. The cohort, the two people, every z-score computed here, and all wording are original teaching material.
:::
