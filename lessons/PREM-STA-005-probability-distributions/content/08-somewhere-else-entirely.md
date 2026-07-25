# The same method, on a measurement that is not glucose

A method you can only run on the dataset it was taught with is a trick. This scene moves it: different measurement, different unit, different service, and a failure that shows up before any data are consulted.

:::{check}
:id: check-transfer-length-of-stay
:kind: diagnostic

An acute medical unit reports on last year's admissions. Mean length of stay 6.2 days, standard deviation 5.8 days, median 4 days, shortest possible stay 1 day. A manager preparing a capacity paper writes: "Applying the standard rule, 95 per cent of stays fall within two standard deviations of the mean."

Finish the manager's sentence with the actual numbers, then say what is wrong before any data are consulted, and name one thing about this measurement that made it predictable.
:::

Two standard deviations either side of 6.2 days gives 6.2 − 11.6 = −5.4 days and 6.2 + 11.6 = 17.8 days. The lower boundary is negative, but the impossible region actually begins below the stated minimum of 1 day, not below −5.4. Standardising that minimum gives $z = (1 - 6.2) / 5.8 \approx -0.897$. Writing $\Phi$ for the cumulative probability under a standard normal curve, a standard normal table or software gives $P(X < 1) = \Phi(-0.897) \approx 0.185$: about 18.5 per cent of this fitted curve lies on impossible stays. The familiar 2.275 per cent is only the smaller part below −5.4 days.

Two stated features diagnose different problems. The standard deviation is almost as large as the mean, so this particular symmetric curve crosses far through the floor at 1. Separately, the median of 4 days sits well below the mean of 6.2, which supports a right-tail interpretation because high stays can pull the mean above the middle observation. A lower bound and no stated upper bound do not by themselves force right skew; the mean-median relationship supplies the shape evidence here.

## What travelled, and what did not

The method transferred without alteration: name the parameters, state what the model predicts, compare against something that can contradict it, and split the comparison by side. The manager's error was not arithmetic and would not have been caught by more careful arithmetic.

What did not transfer is any of the glucose numbers. The mean of 142 mg/dL, the standard deviation of 18, the threshold probability of 0.81, and the empirical rule's predicted counts of 41, 57 and 60 all belong to one cohort of sixty people. Carrying a number across is the error; carrying the procedure across is the point.

Two further quantities worth trying the procedure on, where the same floor-and-no-ceiling structure applies: the interval between a referral and a first appointment, and the time from admission to a first dose of an antibiotic. In each case the measurement cannot fall below zero, has no natural upper limit, and will be summarised by somebody with a mean and a standard deviation. Ask what the model puts below zero before you ask anything else.

:::{source-note}
:claims: claim-empirical-rule-areas, claim-normal-two-parameters, claim-normality-is-checkable
:sources: source-nist-normal-data, source-nist-normal-distribution, source-nist-normal-probability-plot

The first source supplies the population percentages within one, two and three standard deviations. The second supplies the normal distribution and the standard normal case used to evaluate the probability below the actual one-day floor. The third supplies the treatment of approximate normality as something to be assessed rather than assumed. The medical unit, its figures, and the further examples are constructed for this lesson and describe no real service or patient.
:::
