# Auditing a study in time order

Reading a method section is a skill, and like most skills it goes better with a route. Here is the full protocol of the breathing study, followed by a worked audit of it. Read the protocol first and form your own opinion before you read the audit.

> **The breathing study (fictional teaching case).** A poster in the 24-hour study room invites students to join "a six-minute pre-exam calm study." Sixty students sign up over two weeks. On the morning of the midterm, a research assistant meets each participant, checks them against the eligibility list, and then opens the next envelope in a stack of sixty sequentially numbered, opaque, sealed envelopes prepared in advance from a computer-generated random sequence. The envelope says either *breathing* or *quiet sitting*. The assistant then delivers the assigned six minutes and, twenty minutes later, asks the participant to rate their calm from 0 to 10 and writes the rating on the participant's sheet. The breathing group averages 2.1 points higher.

:::{worked-example}
:id: worked-example-breathing-audit

**The task.** Say what inference the 2.1-point difference supports, and name the material limits on it. This is not a calculation. What is being asked for is a judgement, and the judgement has to be justified feature by feature.

**What we are given.** A recruitment route (poster in one room, self-selected volunteers). An assignment mechanism (computer-generated random sequence). A concealment mechanism (sequentially numbered, opaque, sealed envelopes, opened after eligibility is checked). An outcome procedure (the same assistant delivers the intervention and collects the self-rating). A result (2.1 points on a 0–10 self-report scale).

**What we are not given.** How many people were approached and declined. Whether anyone dropped out. Whether the assistant had an opinion about breathing exercises. Note these; missing information is a finding, not a blank.

**The model to apply, and why it fits.** This is an experiment: the team assigns the condition. So the question "did the groups start comparable?" is answerable through the assignment machinery rather than through statistical adjustment, and the four questions in time order apply directly. Work them in order, because a later safeguard cannot repair an earlier one.

**Step 1 — Entry: who could end up in this study?**
Students who were in one 24-hour study room, saw a poster, and volunteered. This is a convenience sample of a self-selecting group. Two consequences, and they are different sizes.
*On applicability:* the estimate describes midnight study-room volunteers, not students generally. Anyone who never uses that room is outside the answer's address.
*On the internal comparison:* nothing. Every one of those sixty students was eligible for either condition, and the recruiting happened before any assignment. A narrow entry route makes the answer narrow; it does not make the two groups differ from each other.

**Step 2 — Assignment: what determined each person's group?**
A computer-generated random sequence. This is a chance-based, unpredictable procedure, not alternation or a date rule. The description does not say whether the sequence was simple, blocked, or stratified, and a complete report should; none of those legitimate variants lets the assistant choose a condition for a particular student. The two groups are therefore comparable in expectation. With sixty participants, that expectation is a weaker guarantee than it would be at six hundred: chance imbalance in a small trial is entirely possible, and the report should show what the groups actually looked like at baseline.

**Step 3 — Foreknowledge: was each entry committed before the assignment could be known?**
Yes, and this part is done well. The envelopes are sequentially numbered, opaque, sealed, and prepared in advance, and the assistant opens one only after checking the participant against the eligibility list. Commitment comes first and knowability second: the assistant has to enrol this student before learning what the student will get, so there is no way to steer a distressed-looking student toward the breathing arm. Allocation concealment is intact — and because the sequence exists in advance on file, the procedure is also auditable afterwards.

**Step 4 — Awareness: after assignment, who knew what?**
State the **effect of interest** before judging this step. If the question is the total effect of being assigned the guided-breathing package rather than quiet sitting, then the attention, meaning, and ordinary expectations created by those two experiences are part of what was assigned. If the narrower question is whether the breathing content has an effect beyond attention and expectation, this comparator cannot answer it.

The participant knows: you cannot do six minutes of guided breathing without noticing. Because the participant also supplies the calm rating, that awareness permits expectation to influence the measurement. The assistant knows too and collects the form after delivering the assigned activity; tone, phrasing, or prompting could differ. These are plausible bias pathways, not proof that anyone reported or collected a score differently. The design therefore creates concern about an awareness-sensitive self-report, with the size and direction of any resulting distortion unknown.

**An independent check.** Before accepting that reading, test it against the design in reverse: if the breathing content had no effect beyond attention or expectation, could this study still have produced a 2.1-point difference? Yes. That possibility means the comparison cannot identify a breathing-specific effect. Now try the opposite: could foreknowledge have steered distressed students between arms? The envelope procedure blocks that route. The check identifies which explanation the design rules out and which it leaves open; it does not turn a possible pathway into an observed bias.

That check needs one qualification. Expectation is an alternative to a **breathing-specific** explanation, but it is not external to the total assigned package. The randomized contrast still estimates what happened when these volunteers were assigned to the two described experiences. What it cannot do is separate the breathing content from attention, expectancy, and any awareness-related distortion in reporting.

**Interpreting the result.** The strongest warranted statement is narrow: among students who volunteered from that study room, assignment to the guided-breathing package rather than quiet sitting produced about a 2-point difference in reported calm, in a comparison whose groups were formed by chance and whose entry could not be steered. The estimate concerns the total assigned experiences and is exposed to possible differential self-report and collection because participants and the collector knew the assignment. It does not isolate a breathing-specific effect beyond attention and expectation, and the description does not establish whether the open pathways actually changed the scores.

**What would fix it.** Not a bigger sample — that reduces random error but does not close an awareness pathway. For a breathing-specific question, compare breathing with an attention-matched neutral guided task so the two assigned packages differ mainly in the content of interest. Use a collector who does not know the assignment, and, if a scientifically valid outcome less dependent on participant judgement exists, measure it alongside the self-report rather than pretending it measures the same construct. For the broader total-effect question, the randomized contrast remains relevant, but the self-report and collection limitations must stay attached to it.

**Explain it to yourself.** Of the four steps, step 4 decided the verdict and step 1 decided only the scope. Say out loud why volunteering from a study-room poster was *not* the fatal problem here.

Then keep two criticisms of that sample apart, because they are easy to bundle and they belong to different steps. That the sample was *self-selected* is a step-1 point, and it limits who the answer is about. That the sample was *small* is a step-2 point, and it weakens how much comfort you take from "comparable in expectation." Neither is the fatal problem, but they fail differently, and an answer that treats them as one thing is only half right.
:::

## The move to copy

Notice what the audit did not do. It did not score the study out of ten, and it did not stop at "there might be bias." For each of the four questions it named the mechanism the study actually used, the specific error that mechanism does or does not block, and the consequence for the conclusion. Then it stated the strongest defensible claim and the boundary on it.

Everything that follows asks you to make that same move on studies you have not seen before.

:::{source-note}
:claims: claim-entry-bounds-applicability, claim-random-allocation-comparability, claim-concealment-definition, claim-concealment-mechanisms, claim-blinding-prevents, claim-blinding-fallback, claim-concealment-blinding-distinct, claim-effect-of-interest-awareness
:sources: source-consort-2025-elaboration, source-blinding-overview, source-metablind-2020

The audit applies current trial reporting guidance and blinding evidence: concealment through sequentially numbered opaque sealed envelopes, the separation of concealment from blinding by timing, the need to specify the effect of interest and comparator, and awareness as a pathway whose operation and magnitude must be judged rather than assumed. Meta-epidemiological evidence is heterogeneous, so the case does not assign a numerical penalty for being open label. The breathing study, its numbers, and the audit are written for this lesson and describe no real trial or real result.
:::
