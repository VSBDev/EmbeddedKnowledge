# "It was blinded, so it was concealed"

Concealment and blinding both involve hiding an assignment from someone. That shared surface is why they collapse into one idea in most people's heads, and the collapse is expensive: it lets a study that protected one thing get credit for protecting the other.

Commit to an answer before reading on.

:::{check}
:id: check-predict-two-studies
:kind: prediction

Two research teams each run a study of the same reading-comprehension tutorial.

**Team A** generates a random assignment sequence, prints it, and tapes it inside the cupboard behind the sign-up desk. The tutor who signs students up can see it. Afterwards, the tutor delivers the tutorial, and each student's comprehension test is scored from an anonymized transcript by a tester who is not told which group the student was in.

**Team B** holds the sequence with a central office that the sign-up tutor must phone for each student, and the office only releases the assignment after the student's name and eligibility are logged. But afterwards, the same tutor delivers the tutorial and personally scores each student's comprehension test, knowing who got what.

Predict: which team's result is more trustworthy, and — this is the part that matters — name the specific error each team left open. Write your answer down before continuing.
:::

## What the two teams actually did

Neither team is fine, and neither team is a disaster. Each protected exactly one moment and left the other open. One thing, first, that neither team could avoid: this is a tutorial, so the students know whether they attended it and the tutor knows whom they taught. Performance bias — differences in effort, encouragement, or extra help that follow from that knowledge — is open in both studies alike, and it will bound whatever either team concludes.

Team A's sequence is random, but it is visible while sign-up decisions are still open. The tutor can see that the next slot is a tutorial slot and act on that: enrol the eager student now, suggest the struggling one wait for next week's session. The scoring end is clean — an anonymized transcript, marked by a tester who does not know the groups. But the groups themselves were assembled by a person who could see the future, so they may differ before the tutorial ever begins. **Team A failed concealment and achieved blinded scoring.**

Team B's sign-up cannot be steered: the tutor has to log the student before the central office will say anything, so who-enters-which-group is protected. But the person who delivers the tutorial then scores the test, knowing which students received it. Any difference in how generously a borderline answer is marked now flows straight into the result. **Team B achieved concealment and left the scoring unblinded.**

So which is more trustworthy? On balance, Team B — but the reason matters more than the ranking. Both errors can distort the result, and neither team can claim a clean answer. What separates them is that Team A's error contaminates *which people are being compared*, while Team B's contaminates *how their tests were scored*. The second is partly recoverable: Team B kept the transcripts, so the tests could be re-marked by someone who does not know the assignments, and that would repair the scoring. Be precise about what the repaired study would then support: a comparison with fair entry and clean marking, still exposed to performance bias, because an unblinded tutor delivered the tutorial to students who knew they were getting it, and whatever that knowledge changed is already inside the transcripts where no re-marking can reach it. That bounded conclusion is still worth having. Nothing comparable exists for Team A: no later step can re-run an enrolment that was steered, so the comparison itself stays broken.

If you ranked them the other way, check whether you were rating how *careless* each team looks rather than how repairable the damage is. Those come apart, and the second is what determines what you can still learn from the study.

## The distinction, laid out

| | Allocation concealment | Blinding |
| --- | --- | --- |
| What is hidden | The upcoming assignment, until entry is committed | The assignment that has already been made |
| From whom | Whoever enrols or admits participants | Participants, providers, data collectors, outcome assessors, analysts |
| When it acts | Up to and including the moment of allocation | From the moment of allocation until the study ends |
| What it prevents | Steering of who enters which group | Behaviour and measurement differing by known assignment |
| Always possible? | Yes | No |

Read down the "when it acts" row and you have the discriminating test. Everything else in the table follows from it. If you are ever unsure which one a description is talking about, ask a single question: *had the assignment already happened?* If not, it is concealment. If so, it is blinding.

The last row is the one that catches people out. Concealment can always be done, so a study that failed it failed at something avoidable. Blinding sometimes genuinely cannot be done — you cannot hide from a student that they are sitting in a tutorial — so a study that could not blind participants is not automatically careless. The question to ask there is whether it blinded the parts it *could* blind, especially the people measuring the outcome.

## What the evidence says about the size of this

The distinction is not merely tidy; the safeguards leave measurable traces in the published record. Researchers have gone back over large collections of completed trials and compared results according to how well each trial was protected.

One such analysis covered 2,443 randomized trials drawn from 228 meta-analyses in the Cochrane database. Within a given comparison, the trials judged at high or unclear risk of bias made the treatment look better than the well-protected trials examining the same question did. "Better" here means the size of the reported benefit: on average the poorly protected trials overstated it by roughly 9% where the random sequence generation was inadequate or unclear, roughly 8% where allocation concealment was, and roughly 13% where blinding was. So if the well-protected trials found a benefit, the poorly protected ones tended to report a benefit about a tenth larger again.

The distortion recorded for outcome assessment specifically is larger — reviews of trials that had the same outcome scored both by assessors who knew the assignment and by assessors who did not report the knowing assessors overstating the effect by around a quarter to a third. Those particular figures are quoted here from a review summarizing other people's analyses rather than from a study that measured it directly, so treat them as an indication of scale rather than a measurement.

Read those numbers carefully, because it is easy to over-read them.

- They are **averages over collections of trials**, not predictions about any one study. A single unconcealed trial might be exaggerated much more than 8%, not at all, or in the opposite direction.
- The direction is unpredictable in the individual case. The same analysis found that when blinding was absent and the outcome was a subjective one, results became *more variable* between trials, not just uniformly inflated. Unprotected studies are not reliably wrong by a known amount; they are unreliable, which is worse, because it cannot be corrected for.
- They describe the association between a *reported* risk-of-bias judgement and a result. Poorly protected trials often differ in other ways too, so these figures are best read as evidence that these safeguards matter, not as a conversion factor.

The practical upshot is the same either way. When a report does not tell you whether allocation was concealed or who was blinded, that silence is itself informative, and the direction it points is not reassuring.

:::{misconception}
:id: misconception-concealment-is-blinding

**The incorrect model.** "Concealment and blinding are two words for keeping the assignment secret. A trial that describes itself as blinded has therefore covered both, and a trial that used sealed envelopes was blinded."

**Why it is plausible.** Both safeguards hide the same fact from someone, both are described with the language of secrecy, and reports often mention only one of them.

**What it cannot explain.** It cannot explain Team A and Team B. On this model the two teams made the same kind of mistake, so their errors should be interchangeable — yet Team A's failure changed *who was compared* and Team B's changed *what was recorded*, and fixing one would not have touched the other. It also cannot explain why concealment is always achievable while blinding sometimes is not. If they were the same protection, they would fail under the same conditions.

**The better model.** They are two safeguards separated by a single instant: the moment of allocation. Before it, the risk is that a foreseeable assignment lets someone steer who enters which group; concealment removes the foresight. After it, the risk is that a known assignment changes behaviour or measurement; blinding removes the knowledge. A study needs both, and having one tells you nothing about the other.

**Recheck yourself.** A trial reports: "Participants were assigned using a computer-generated sequence held by an independent statistician who released each assignment only after the participant was registered. Because the two physiotherapy regimens look completely different, participants and therapists were aware of the assignment; range-of-motion was measured by an assessor who was not told which regimen the participant had received." Name what was concealed, who was blinded, who was not, and the one error still open. Then say whether the unblinded participants make this a careless trial. The answers open the practice that follows.
:::

:::{source-note}
:claims: claim-concealment-blinding-distinct, claim-concealment-definition, claim-blinding-definition-scope, claim-blinding-prevents, claim-blinding-fallback, claim-meta-epidemiological-magnitude, claim-assessor-blinding-magnitude
:sources: source-consort-2010-elaboration, source-blinding-overview, source-robes-meta-epidemiology

The separation of concealment from blinding by timing, the biases each prevents, and the parties who can be blinded come from trial reporting standards and a review of blinding practice. The trial-collection figures come from a meta-epidemiological study of 2,443 randomized trials in 228 Cochrane meta-analyses, published in 2018 and based on reviews sampled in 2011; the outcome-assessor figures are reported by the blinding review, which summarizes separate meta-analyses rather than original data of its own. All of these are average associations across collections of health trials, so they support the claim that these safeguards matter and do not support correcting any individual study by a fixed percentage. The two teaching teams and the physiotherapy report are fictional.
:::
