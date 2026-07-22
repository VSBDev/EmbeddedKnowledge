# Fade the scaffold

Attempt each prompt before reading its feedback. Keep three headings on your page: **estimate**, **calculate**, **challenge**.

## 1. Complete the model

Calculate $(4.0\times10^6)(2.0\times10^{-3})$.

- Estimate: positive, with scale $10^{6-3}=10^3$.
- Calculate the coefficients and exponent.
- Challenge by dividing your product by the second factor.

**Feedback after an attempt:** The product is $8.0\times10^3$. If you obtained $8.0\times10^9$, you treated $-3$ as $+3$; expand $10^{-3}=1/1000$ and retry. The reverse division returns $4.0\times10^6$.

## 2. Use only a scale cue

Calculate

$$
\frac{9.6\times10^2}{3.0\times10^7}.
$$

The numerator is much smaller than the denominator, so your answer must be positive and less than 1.

**Feedback after an attempt:** $9.6/3.0=3.2$ and $2-7=-5$, giving $3.2\times10^{-5}$. If your answer exceeds 1, the sign of the exponent contradicts the scale cue. Multiply back by the denominator before moving on.

## 3. Select the rule

Calculate $5.4\times10^5+8.0\times10^3$.

**Feedback after an attempt:** Addition requires matching exponents:

$$
5.4\times10^5+0.080\times10^5=5.48\times10^5.
$$

The smaller term should nudge $5.4\times10^5$ upward, not change its order of magnitude. If you wrote $13.4\times10^8$, you used a multiplication rule on an addition problem.

## 4. Work independently

Calculate $(7.0\times10^{-4})(6.0\times10^9)$. Give a one-line estimate and one independent check.

**Feedback after an attempt:** The product is $42\times10^5=4.2\times10^6$. An estimate such as $(7\times10^{-4})(6\times10^9)\approx4\times10^6$ predicts the scale. Division by either factor checks the other.

## What your error tells you

- Correct coefficient, wrong exponent: revisit the exponent operation and compare with the estimate.
- Coefficient outside $1\leq|a|<10$: normalize without changing value.
- Wild scale after addition: match exponents before combining coefficients.
- Exact answer conflicts with a bound: inspect operation choice before polishing arithmetic.

:::{source-note}
:claims: claim-normalized-notation, claim-power-ten-arithmetic, claim-estimation-reasonableness, claim-independent-challenge
:sources: source-nist-sp811, source-nist-everyday-estimation

The practice applies NIST-supported notation and reasonableness checking. All prompts, values, answer logic, and remediation are original course material.
:::

