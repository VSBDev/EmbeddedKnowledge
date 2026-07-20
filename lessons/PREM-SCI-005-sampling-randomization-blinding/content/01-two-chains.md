# What a study's number is actually about

A student research team runs a small trial. Before a midterm exam, some students do a six-minute guided breathing routine; others sit quietly for six minutes. Twenty minutes later, everyone rates how calm they feel on a scale from 0 to 10. The breathing group averages 2.1 points higher.

Suppose that number is arithmetically correct. You still cannot say what it means, because two separate things could have produced it.

The first is about **who is in the study**. The team recruited from a poster in the 24-hour study room, and the students who volunteered were the ones already sitting there at midnight before a midterm. Whatever the 2.1 describes, it describes people like that. It may or may not describe a commuter student who never enters that room.

The second is about **how the two groups were formed and what people knew**. If the calmer-looking volunteers ended up in the breathing group, or if students who knew they had been given "the real thing" rated themselves generously, then the 2.1 is partly a record of those processes rather than of breathing.

These two problems are genuinely different, and one does not fix the other. A study can answer a question very reliably about a narrow group of people. A study can also recruit an enormous, beautifully representative sample and still compare two groups that were never comparable. This lesson is about telling those two failures apart and saying, precisely, what each one does to the conclusion.

## Before you start: retrieve the design

You already know how to ask who created the comparison.

:::{check}
:id: check-retrieve-assignment
:kind: retrieval

Does the description above actually tell you who decided which students did the breathing routine and which sat quietly? Check before you answer. Then take each possibility in turn — the research team decided, or the students decided — and say what each one would change about the conclusion the team can draw.
:::

It does not tell you. The opening says only that some students did the routine and others sat quietly, which is a description of what happened and not of who chose it — and noticing that a method description is silent is itself part of the skill this lesson builds.

Both possibilities matter. If the research team assigns the condition, this is an experiment, and the team controls the one thing observational studies cannot control: how the groups came to differ. If the students chose for themselves, then everything that makes a student choose breathing — and that might also make them calmer — is tangled into the comparison. That tangling is confounding, and you met it two lessons ago.

Assume from here on that the team assigns the condition. That single decision is what makes the rest of this lesson possible, and it is also not enough on its own.

## Four questions, in the order they happen

Walk through a study in time. Four separate things happen, and each one can go wrong in its own way.

**First, people enter.** Someone sets eligibility rules, reaches some people and not others, and some of those agree to take part. Call this the entry question: *who could end up in this study at all?*

**Second, the groups are formed.** Each participant is put into one condition or the other. Call this the assignment question: *what determined which group each person went into?*

**Third — and this is the moment that most people skip — entry and assignment have an order, and the order can be wrong.** If the enroller knows that the next student to sign up will go into the breathing group, they can act on that knowledge while the decision to enter that student is still open. Call this the foreknowledge question: *was each participant's entry settled, irrevocably, before their assignment could be known?*

**Fourth, the study runs and outcomes are measured.** Now the assignment has already happened, and the question changes: it is no longer about who gets what, but about who *knows* what. Call this the awareness question: *after assignment, who knew which condition each person received?*

:::{diagram} ../diagrams/safeguard-timeline.diagram.json
:alt: A trial timeline with four moments — entry, assignment, the point of allocation, and follow-up — each paired with the safeguard that acts there.
:longdesc: The timeline runs from left to right through four moments. At "Who could enter", eligibility rules and recruitment decide which population the result will describe; the safeguard is a defensible sampling and eligibility route, and the failure is an estimate that describes a narrower group than claimed. At "How groups are formed", a chance mechanism assigns each participant; the safeguard is random allocation, and the failure is groups that differ systematically before the study starts. At "The point of allocation", each entry is either committed before its assignment can be known, or still open while the assignment is already visible; the safeguard is allocation concealment — commitment first, knowability second — and the failure is steering of who enters which group. At "While the study runs and outcomes are measured", participants, providers, and assessors either do or do not know the received assignment; the safeguard is blinding, and the failure is behaviour or measurement that differs by known assignment. Random allocation and concealment act before or at the point of allocation; blinding acts only after it.
:::

The order matters more than the names. Concealment is about the assignment that has not happened yet. Blinding is about the assignment that already has. That difference in timing is the whole distinction, and it is the single most useful thing in this lesson.

## What each safeguard actually does

### Entry: it sets the address of your answer, not its truth

The rules about who could enter run before anyone is assigned to anything. Because of that, they cannot make the two groups differ from each other — both groups are drawn from exactly the same pool. What they do instead is decide which population the finding is about.

So there are two different things you can ask about any conclusion: whether it is sound for the people who were actually studied, and whether it carries over to anyone else. Those two questions have names.

:::{definition}
:id: definition-validity-pair
:label: Internal and external validity

**Internal validity** is the degree to which a study's own comparison supports the conclusion drawn about the people who were in it. **External validity**, also called applicability or generalizability, is the degree to which that conclusion carries over to people, settings, and conditions outside the study.
:::

One more piece of vocabulary, because you will meet it constantly in study reports: the groups being compared in a trial are usually called its **arms**. A trial comparing a new routine against sitting quietly has two arms.

Now the point about entry can be put in one line. Entry rules are settled before anybody is allocated, so whatever they do, they do it to both arms at once, which is why they leave internal validity untouched and land entirely on external validity. Trial reporting standards make exactly this split, and it has a practical consequence worth holding onto: a trial with restrictive eligibility rules is not thereby a bad trial. It is a trial whose answer has a narrower address.

Entry can still go wrong, and when it does it is about representativeness rather than comparability. If the group you can actually reach is not the group you meant to study — a convenience sample of whoever is available, or a sample where the people who decline are systematically different from the people who agree — then the estimate describes a group you did not intend to describe. Suppose a survey of how much students walk each day is run by stopping people at the campus bus interchange during the morning peak. The people who walk the whole way to campus are, by construction, the least likely to be standing there. Whatever average that survey produces, no amount of careful work later in the study repairs the fact that it was collected from the wrong people.

Sampling has a small vocabulary of its own, and two pieces of it earn their keep here. The list or route through which a study can actually reach people — a resident register, a clinic's appointment list, the one study room a poster hangs in — is its **sampling frame**. When a team draws from that frame by a chance mechanism, so that every person on it has a known chance of being chosen, the draw is a **probability sample**; the everyday name for the simplest version is *random selection*. When people instead end up in the study because they were easy to reach or chose to volunteer, the sample is a convenience or self-selected one, and there is no longer a reason to expect it to resemble the frame it came from — which is exactly what went wrong at the bus interchange.

Notice that the word *random* has now turned up doing a job at this first moment, and it will turn up again at the second doing a different one. **Random selection** decides *who enters the study* from the sampling frame; what it buys is a stronger claim that the answer describes the frame's population — external validity. **Random allocation**, coming next, decides *which arm* each already-entered participant joins; what it buys is a fair comparison between the arms — internal validity. A study can have either without the other. A team could randomly select students from the campus register and still let each one pick their own condition, or — as the breathing team did — take a convenience sample and then randomize the allocation. The two random steps act at different moments, repair different weaknesses, and neither can do the other's job.

### Assignment: it makes groups comparable in expectation

**Random allocation** means each participant's condition is decided by an unpredictable chance mechanism rather than by anything about the participant — not by how anxious they look, not by which day they arrived, not by who is enrolling them.

That is the whole engine, and it is worth being exact about why it works. Because the mechanism ignores every characteristic a participant has, it ignores the ones nobody measured and the ones nobody has thought of. So the groups come out comparable *in expectation* on measured and unmeasured factors alike. This is what randomization gives you that no amount of careful matching gives you: protection against confounders you never listed.

"Comparable in expectation" is a technical phrase, and it is weaker than it sounds. It does not mean "we expect these two groups to match." It means: imagine every way the chance mechanism could have come out, running this same study over and over. Averaged across all those versions, the groups match. Any one version — including the one that actually happened — can still be lopsided.

Two things follow, and novices usually get the first and miss the second.

- Comparable in expectation is not the same as comparable in fact. Any single study can still come out imbalanced by chance, which is why a trial report should show what the groups actually looked like before the intervention started. Randomization justifies the comparison on average; it does not certify this particular allocation.
- Schemes that look arbitrary are not thereby random. Assigning by alternation, by date of birth, or by hospital record number produces a sequence anyone can predict, and studies using them generally give biased results. Reporting standards ask authors not to call these methods random at all.

### Foreknowledge: concealment protects a sequence that has not been used yet

Here is the failure that surprises people. Suppose the team generates a genuinely random sequence, prints it, and pins it above the sign-up desk. The sequence is still random. It is no longer concealed.

Now the student running sign-ups can see that the next slot is a breathing slot. If they believe the routine works and a visibly distressed student is standing in front of them, they may enrol that student now. If the next slot is quiet-sitting, they may find a reason to ask them to come back tomorrow. Nobody has to be dishonest for this to happen; a few kindly judgement calls are enough. The groups now differ before the study has started, and they differ for exactly the reason the researchers cared about.

:::{definition}
:id: definition-allocation-concealment
:label: Allocation concealment

**Allocation concealment** is any arrangement that ensures a participant's entry into the study is irrevocably committed before their upcoming assignment can be known by anyone in a position to act on it. The test is the order of two events: commitment first, knowability second. If an assignment can be seen while the entry decision it belongs to is still open, concealment has failed; once entry is settled, learning the assignment can no longer change who got in. Its whole purpose is to make sure nobody can steer who ends up in which group.
:::

Steering people into the group you prefer, at the point of entry, is a form of **selection bias** — the general name for a distortion produced by how people came to be in the groups being compared rather than by anything done to them afterwards. Concealment exists to shut that route.

Concealment is implemented mechanically, not by good intentions. Standard mechanisms include holding the sequence with a central service or pharmacy that the enroller must contact for each participant, supplying interventions in sequentially numbered identical containers, or using sequentially numbered opaque sealed envelopes opened only after the participant's details have been recorded. The common feature is that the enroller has to commit to the participant before the assignment becomes knowable.

One practical consequence is worth remembering: concealment can always be arranged. Unlike blinding, it depends only on how the researchers organize their own procedure, and nothing about a subject matter can make it impossible.

There is a third situation, though, and it is the one that trips people up in real method sections: sometimes there is no advance sequence at all. Suppose an assistant enrols a patient, records their details, and only then flips a coin at the bedside to assign them. At the instant the coin lands, the assistant knows the assignment — but that is not foreknowledge. The patient's entry was already committed before the result existed, so the knowledge arrives too late to steer anything. Apply the test in order and the procedure passes: commitment first, knowability second, so concealment holds.

What a bedside coin lacks is something different: a record. An assignment generated on the spot by the same person doing the enrolling exists nowhere except in that moment, so the study's paper trail can never show afterwards that each toss was made once and honoured. That is a weakness of *auditability*, not of concealment, and keeping the two apart matters because the repairs differ. A concealment failure is fixed by changing when the assignment becomes knowable; a missing record is fixed by writing the sequence down in advance and lodging it with someone independent. A pre-generated sequence held by a central service does both at once, which is why it is the standard.

### Awareness: blinding protects what happens after assignment

Once a participant is allocated, the assignment sequence no longer needs protecting — it has done its job. What needs protecting now is the rest of the study.

**Blinding** is the practice of keeping people who take part in the study from learning which condition a given participant ended up with, for as long as the study is still running. It starts where concealment stops — the instant of allocation — and it is not one switch but several, because it applies separately to each party who could act on the knowledge: the participant, whoever delivers the intervention, whoever collects the data, whoever assesses or adjudicates the outcome, and whoever analyzes the results. Any of those can be blinded while the others are not.

Knowing the assignment lets two distinct kinds of error in.

- **Performance bias.** People behave differently when they know what they got. A student who knows they received "the real technique" may also go to bed earlier, or try harder on the exam, or stay in the study when a control participant would have dropped out. The groups then differ in more than the intervention.
- **Detection bias.** Measurement and judgement differ when the assessor knows the assignment. This bites hardest on outcomes that require a rating, an interpretation, or a judgement call — and a self-reported calm score is exactly that kind of outcome.

The party at the end of that list is the least obvious and worth a sentence of its own. Analysis involves choices — which participants to include when some records are incomplete, where to draw a cut-off, which comparison to report first — and a statistician who knows which column is the treatment can make each of those small choices in the direction they hope for, again without any intent to deceive. Handing over the data with the groups labelled only A and B removes that pressure, and it costs nothing.

Unlike concealment, blinding is sometimes impossible. A student doing six minutes of guided breathing knows they are doing it. When participants cannot be blinded, the usual repair is to blind the steps that can be blinded — most importantly the people collecting and assessing the outcome — and to prefer outcomes that do not depend on the assessor's judgement.

One last warning about vocabulary. Labels such as "double blind" sound precise and are not: when researchers checked what trials calling themselves double blind had actually blinded, they found many different combinations, and a substantial share had not blinded participants, providers, or data collectors at all. Say who was blinded, party by party. Do not accept a label as an answer.

:::{source-note}
:claims: claim-entry-bounds-applicability, claim-sampling-representativeness, claim-probability-sampling, claim-random-allocation-comparability, claim-concealment-definition, claim-concealment-mechanisms, claim-blinding-definition-scope, claim-blinding-prevents, claim-blinding-fallback, claim-concealment-blinding-distinct
:sources: source-consort-2010-elaboration, source-blinding-overview, source-sampling-participants

Trial reporting standards supply the definitions of random sequence generation, allocation concealment, and blinding used here, including the point that eligibility criteria bound external rather than internal validity and that "double blind" is reported inconsistently. A review of blinding practice supplies the range of parties who can be blinded and the fallback when participants cannot be. A methods paper on sampling supplies the sampling frame, probability sampling, representativeness, and non-response points; the contrast between random selection and random allocation is drawn across these sources. They describe health research in particular; the reasoning transfers to other fields, but the empirical checks behind it were done on clinical trials. The breathing study is a fictional teaching case and carries no evidence about breathing exercises.
:::
