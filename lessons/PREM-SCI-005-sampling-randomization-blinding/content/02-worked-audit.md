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
A computer-generated random sequence. This is genuine randomization, not alternation or a date rule, so assignment did not depend on anything about the participant — including the things nobody measured, such as how much sleep each student had. The two groups are therefore comparable in expectation. With sixty participants, that expectation is a weaker guarantee than it would be at six hundred: chance imbalance in a small trial is entirely possible, and the report should show what the groups actually looked like at baseline.

**Step 3 — Foreknowledge: was each entry committed before the assignment could be known?**
Yes, and this part is done well. The envelopes are sequentially numbered, opaque, sealed, and prepared in advance, and the assistant opens one only after checking the participant against the eligibility list. Commitment comes first and knowability second: the assistant has to enrol this student before learning what the student will get, so there is no way to steer a distressed-looking student toward the breathing arm. Allocation concealment is intact — and because the sequence exists in advance on file, the procedure is also auditable afterwards.

**Step 4 — Awareness: after assignment, who knew what?**
This is where the study breaks, and it breaks twice over.
The participant knows: you cannot do six minutes of guided breathing without noticing. So performance bias is open — a student who believes they got the active treatment may report differently, or behave differently in the twenty minutes before rating.
The assistant knows too, and the same assistant both delivers the intervention and collects the outcome. So detection bias is open as well: the person who administered "the real thing" is the person recording how calm the participant says they feel, and a self-reported rating is precisely the kind of outcome that a hopeful assessor can nudge, through tone, phrasing, or prompting, without any intent to mislead.

**An independent check.** Before accepting that reading, test it against the design in reverse: if breathing had no genuine effect at all, could this study still have produced a 2.1-point difference? Yes — expectation plus unblinded self-report is a sufficient explanation on its own. That the flawed design can produce the observed result without the intervention is what tells you the result is not yet interpretable. Now try the opposite: could the study have produced a spurious result through concealment failure? No — the envelope procedure blocks that route. So the check does more than confirm that something is wrong; it identifies which single safeguard the whole conclusion is resting on, and therefore what would have to change.

**Interpreting the result.** The strongest warranted statement is narrow: among students who volunteered from that study room, those assigned to the breathing routine reported feeling calmer by about 2 points on a self-report scale, in a comparison whose groups were formed fairly and whose entry could not be steered, but in which neither participants nor the outcome collector were unaware of the assignment. The difference cannot be separated from expectation and unblinded self-rating. It is a reason to run a better study, not a finding about breathing.

**What would fix it.** Not a bigger sample — that sharpens a biased estimate rather than correcting it. The repairs are at step 4: have someone who does not know the assignment collect the outcome, and add an outcome that does not depend on the participant's judgement, such as resting heart rate. Participants still cannot be blinded, so a control activity that feels equally like an intervention — six minutes of a neutral guided task rather than sitting in silence — is what makes their expectations more comparable.

**Explain it to yourself.** Of the four steps, step 4 decided the verdict and step 1 decided only the scope. Say out loud why volunteering from a study-room poster was *not* the fatal problem here.

Then keep two criticisms of that sample apart, because they are easy to bundle and they belong to different steps. That the sample was *self-selected* is a step-1 point, and it limits who the answer is about. That the sample was *small* is a step-2 point, and it weakens how much comfort you take from "comparable in expectation." Neither is the fatal problem, but they fail differently, and an answer that treats them as one thing is only half right.
:::

## The move to copy

Notice what the audit did not do. It did not score the study out of ten, and it did not stop at "there might be bias." For each of the four moments it named the mechanism the study actually used, the specific error that mechanism does or does not block, and the consequence for the conclusion. Then it stated the strongest defensible claim and the boundary on it.

Everything that follows asks you to make that same move on studies you have not seen before.

:::{source-note}
:claims: claim-entry-bounds-applicability, claim-random-allocation-comparability, claim-concealment-definition, claim-concealment-mechanisms, claim-blinding-prevents, claim-blinding-fallback, claim-concealment-blinding-distinct
:sources: source-consort-2010-elaboration, source-blinding-overview

The audit applies the definitions and safeguard mechanisms from trial reporting standards and a review of blinding practice: concealment through sequentially numbered opaque sealed envelopes, the separation of concealment from blinding by timing, the biases each addresses, and blinded outcome assessment as the repair when participants cannot be blinded. The breathing study, its numbers, and the audit are written for this lesson and describe no real trial or real result.
:::
