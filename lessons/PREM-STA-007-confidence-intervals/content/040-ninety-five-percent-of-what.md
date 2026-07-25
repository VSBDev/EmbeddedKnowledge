# Ninety-five per cent of what?

Here is the sentence almost everyone writes the first time, and a good many people go on writing for years.

> There is a 95% probability that the true difference lies between 0.7 and 17.3 mg/dL.

It is wrong. It is wrong in a specific way that is worth working through slowly, because the correct reading is only a small step away and the two get confused in published papers, in teaching, and in conversations about what a trial showed.

## Why it fails

Count the things in that sentence that could vary.

The true difference is one fixed number. Whatever it is, it was that before the study started and it is still that now. Nobody knows it. Not knowing a number does not make it random, in the same way that the number of red cells in a tube you have not counted yet is fixed and unknown.

The limits 0.7 and 17.3 are also two fixed numbers now. They came out of one particular sample of sixty people.

So the sentence puts a probability on a relationship between three fixed numbers. Either 0.7 to 17.3 contains the true difference or it does not. There is no 95% about it. The statement is either entirely true or entirely false, and which one it is depends on a fact nobody has access to.

The randomness was never in the parameter. It was in the sampling. Recruit sixty different people and you get a different estimate, a different standard error, and a different pair of limits. The interval is the thing that moves.

## Where the 95% actually lives

:::{misconception}
:id: misconception-probability-in-the-interval

**The wrong model:** the interval is fixed and the parameter is uncertain, so 95% is the chance the parameter fell inside.

**What is really going on:** the parameter is fixed and the interval is what varies from sample to sample. The 95% belongs to the procedure under its sampling and analysis assumptions. It is the long-run proportion of samples for which an interval built this way would capture the true value when those conditions hold.

**The correcting test:** ask whether the number you are putting a probability on could come out differently if the study were repeated. The true difference could not. The limits could.
:::

This reading has a name. Confidence intervals belong to the **frequentist** methods, and the international guidance for clinical trials defines that family as the methods interpreted through the frequency of certain outcomes across hypothetical repeated runs of the same experimental situation. The word *frequency* is the whole definition: you are counting how often something happens when a study is imagined again and again.

The handbook that supplies the arithmetic says the same thing in plainer language. A 95% confidence interval does not mean there is a 95% probability that the interval contains the true mean, and the level of confidence attaches to the method of calculating the interval.

## Twenty studies, one truth

Picture research teams repeatedly running the dinner-timing study, each on its own sixty people independently sampled from the same defined population. They use the same valid design and 95% t recipe, the equal-variance and approximate-normal model remains adequate, and recruitment and measurement introduce no systematic bias. They publish intervals that differ from sample to sample.

There is one true difference underneath all the repeats, and it never moves. Across a long sequence, about 95% of the intervals would contain it and about 5% would miss it. A particular batch of twenty need not contain exactly nineteen successes. An interval that misses would look no different from the others on the page, and nothing in a published interval tells you which kind you are holding.

That is the honest reading of your own interval: under the stated conditions, it came from a procedure with about 95% long-run coverage, and you cannot check whether this particular interval contains the parameter. The coverage statement concerns random sampling error. It does not guarantee that a biased sample represents a wider population or that a misspecified analysis reaches its nominal level.

## Saying it correctly without sounding like a textbook

You still have to write a results section. Three sentences that are defensible:

- "The difference was 9.0 mg/dL, 95% confidence interval 0.7 to 17.3." Report the numbers and let the reader interpret them.
- "Under the stated model, the data are compatible with true differences from about 0.7 to about 17.3 mg/dL." Compatibility is a statement about the data and the parameter values, and it survives scrutiny.
- "Under the stated model, values outside 0.7 to 17.3 are the ones this study argues against, at the 95% level." Turns the interval around and says what it rules out.

What none of them do is hand a probability to the true difference. Sentences of that shape are available, from Bayesian methods, and they cost an extra ingredient the frequentist recipe never asked for: a stated belief about the parameter before the data arrived. Supply one and you can talk about the probability of the parameter, because you have made it a quantity with a distribution. That is a different course, and this lesson's interval was not built that way.

:::{check}
:id: check-diagnose-the-sentence
:kind: retrieval

Four sentences describe the same interval. Two are defensible and two are not. Sort them, and for each bad one name the number that has been treated as random when it is fixed.

1. "There is a 95% chance the true difference is between 0.7 and 17.3 mg/dL."
2. "If independent samples from the same population were analysed repeatedly under this adequate model, about 95% of the intervals produced this way would contain the true difference."
3. "95% of adults with type 2 diabetes have a dinner-timing effect between 0.7 and 17.3 mg/dL."
4. "Under the stated model, the true difference is unknown and this study is compatible with values from 0.7 to 17.3 mg/dL."
:::

Sentences 2 and 4 are defensible. Sentence 2 states the long-run property of the procedure, which is what the level means. Sentence 4 makes a compatibility claim about values and never assigns a probability to the parameter.

Sentence 1 treats the true difference as random. It is fixed; the interval is the thing that varies across repeats.

Sentence 3 makes a different mistake, and it is a common one in clinical reading. It treats the interval as a range covering individual people. This interval describes a population average. Individual people vary far more widely, and no confidence interval for an average ever tells you where 95% of patients sit.

:::{source-note}
:claims: claim-confidence-level-long-run, claim-ich-e9-frequentist
:sources: source-nist-confidence-limits, source-nist-what-are-ci, source-ich-e9

The correction at the centre of this scene is the handbook's own. It states directly that a 95% confidence interval does not mean a 95% probability that the interval contains the true mean, and that the confidence coefficient is the proportion of samples of a given size expected to contain it under the procedure's conditions. The clinical-trials guidance supplies the name and the definition of frequentist methods, in terms of the frequency of outcomes across hypothetical repeated realisations of the same experimental situation. The repeated-study example and the four candidate sentences were written for this scene.
:::
