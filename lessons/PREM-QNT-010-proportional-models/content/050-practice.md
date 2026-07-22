# Test invariants before fitting

## 1. Direct model

An exact model gives $y=18$ when $x=6$ and is directly proportional. Find $k$ and predict $y$ at $x=10$.

**Feedback:** $k=y/x=3$, so $y=3x$ and the prediction is 30.

## 2. Inverse model

An exact inverse model gives $y=12$ at $x=5$. Predict $y$ at $x=15$.

**Feedback:** $k=xy=60$. Thus $y=60/15=4$; tripling input divides response by 3.

## 3. Scale a power law

If $y=kx^{3/2}$, by what factor does $y$ change when $x$ is multiplied by 4?

**Feedback:** The response factor is $4^{3/2}=8$.

## 4. Read a log-log slope

Base-10 log coordinates include $(0,1)$ and $(2,4)$. Find the power exponent.

**Feedback:** $p=(4-1)/(2-0)=1.5$. The intercept is 1, so $k=10$ in the declared units.

## Recovery route

- Model family unclear: calculate $y/x$, $xy$, and a scale-factor exponent before fitting.
- Constant changes across rows: distinguish exact data from rounded or noisy observations and inspect residuals.
- Exponent sign wrong: ask whether response rises or falls as positive input grows.
- Log-log intercept misread: convert $\log k$ back to $k$ using the same base.
- Prediction seems precise but lies outside the data range: label it extrapolation and state the assumption.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

All practice, feedback, and recovery guidance are original.
:::
