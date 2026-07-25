# The same method, on a measurement that is not glucose

A method you can only run on the dataset it was taught with is a trick. This scene moves it: different measurement, different unit, different service, and a failure that shows up before any data are consulted.

:::{check}
:id: check-transfer-length-of-stay
:kind: diagnostic

An acute medical unit reports on last year's admissions. Mean length of stay 6.2 days, standard deviation 5.8 days, median 4 days, shortest possible stay 1 day. A manager preparing a capacity paper writes: "Applying the standard rule, 95 per cent of stays fall within two standard deviations of the mean."

Finish the manager's sentence with the actual numbers, then say what is wrong before any data are consulted, and name one thing about this measurement that made it predictable.
:::

Two standard deviations either side of 6.2 days gives 6.2 − 11.6 = −5.4 days and 6.2 + 11.6 = 17.8 days. The lower bound is negative. No patient has ever been discharged five days before admission, so the model is placing 2.275 per cent of its probability on outcomes that cannot occur, and the check needed no data at all: the model's own arithmetic contradicts the measurement's floor.

Two features of the measurement predicted it. The standard deviation is almost as large as the mean, which for a quantity with a hard floor at 1 forces a symmetric curve straight through the floor. And the median of 4 days sits well below the mean of 6.2, the arithmetic signature of a long right tail, since a handful of very long stays pull an average up and leave a median where it is. Length of stay, like fasting glucose, is bounded below and open above, and the same lean follows.

## What travelled, and what did not

The method transferred without alteration: name the parameters, state what the model predicts, compare against something that can contradict it, and split the comparison by side. The manager's error was not arithmetic and would not have been caught by more careful arithmetic.

What did not transfer is any of the glucose numbers. The mean of 142 mg/dL, the standard deviation of 18, the threshold probability of 0.81, and the empirical rule's predicted counts of 41, 57 and 60 all belong to one cohort of sixty people. Carrying a number across is the error; carrying the procedure across is the point.

Two further quantities worth trying the procedure on, where the same floor-and-no-ceiling structure applies: the interval between a referral and a first appointment, and the time from admission to a first dose of an antibiotic. In each case the measurement cannot fall below zero, has no natural upper limit, and will be summarised by somebody with a mean and a standard deviation. Ask what the model puts below zero before you ask anything else.

:::{source-note}
:claims: claim-empirical-rule-areas, claim-normality-is-checkable
:sources: source-nist-normal-data, source-nist-normal-probability-plot

The first source supplies the population percentages within one, two and three standard deviations, from which the 2.275 per cent below the lower boundary is computed. The second supplies the treatment of approximate normality as something to be assessed rather than assumed. The medical unit, its figures, and the further examples are constructed for this lesson and describe no real service or patient.
:::
