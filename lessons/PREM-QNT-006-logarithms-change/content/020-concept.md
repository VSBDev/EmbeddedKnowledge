# A logarithm names an exponent

For $b>0$, $b\ne1$, and $x>0$,

$$\log_b x=y\quad\text{if and only if}\quad b^y=x.$$

The base restrictions make the exponential function one-to-one over the reals; the positive argument restriction reflects that $b^y$ is positive.

:::{definition}
:id: definition-common-natural-log

$\log x$ commonly denotes base 10 in this lesson, while $\ln x$ denotes base $e$. Both answer an exponent question; the chosen base sets the exponential scale.
:::

Examples: $\log_{10}1000=3$, $\log_2(1/8)=-3$, and $\ln e^4=4$.

## Laws from exponent structure

For positive $M,N$,

$$
\log_b(MN)=\log_bM+\log_bN,
$$

$$
\log_b(M/N)=\log_bM-\log_bN,
$$

$$
\log_b(M^p)=p\log_bM.
$$

These are exponent laws in inverse form. Change of base follows by solving $b^y=x$ with natural logs:

$$\log_bx=\frac{\ln x}{\ln b}.$$

## Exponential change

For a positive modeled quantity with $Q_0>0$, a discrete model $Q(t)=Q_0a^t$ has growth when $a>1$ and decay when the factor $a$ lies strictly between zero and one. A continuous form $Q(t)=Q_0e^{kt}$ has growth for $k>0$ and decay for $k<0$. They are equivalent when $a=e^k$ for the same time unit.

To picture the symbols in an illustrative biomedical setting, the modeled quantity can represent a cell-population signal that rises by a fixed factor or a plasma-concentration signal that falls by a fixed factor. These are teaching interpretations of the equations, not claims that a particular culture, drug, or patient follows an exact exponential model.

Logarithms require a positive dimensionless argument. In applied equations, form a ratio such as $Q/Q_0$ before taking a log.

:::{source-note}
:claims: claim-log-inverse, claim-log-laws, claim-log-ratio, claim-exponential-parameterizations
:sources: source-nist-dlmf-log, source-nist-si-log

NIST DLMF supplies authoritative exponential and logarithm relations; NIST SI guidance uses logarithms of like-quantity ratios. The elementary derivations and discrete/continuous comparison are original.
:::
