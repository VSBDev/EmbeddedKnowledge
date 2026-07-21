# "It was blinded, so it was concealed"

Concealment and blinding both involve hiding an assignment from someone. That shared surface is why they collapse into one idea in most people's heads, and the collapse is expensive: it lets a study that protected one thing get credit for protecting the other.

Commit to an answer before reading on.

:::{check}
:id: check-predict-two-studies
:kind: prediction

Two research teams each run a study of the same reading-comprehension tutorial.

**Team A** generates a random assignment sequence, prints it, and tapes it inside the cupboard behind the sign-up desk. The tutor who signs students up can see it. Afterwards, the tutor delivers the tutorial, and each student's comprehension test is scored from an anonymized transcript by a tester who is not told which group the student was in.

**Team B** holds the sequence with a central office that the sign-up tutor must phone for each student, and the office only releases the assignment after the student's name and eligibility are logged. But afterwards, the same tutor delivers the tutorial and personally scores each student's comprehension test, knowing who got what.

Predict the specific error each team left open. For each result, say what evidence you would need before deciding whether the open pathway actually distorted the estimate. Do not rank the teams unless you can state assumptions that make the ranking follow. Write your answer down before continuing.
:::

## What the two teams actually did

Neither team is fine, and neither team is a disaster. Each protected exactly one moment and left the other open. One thing, first, that neither team could avoid: this is a tutorial, so the students know whether they attended it and the tutor knows whom they taught. Performance bias — differences in effort, encouragement, or extra help that follow from that knowledge — is open in both studies alike, and it will bound whatever either team concludes.

Team A's sequence is random, but it is visible while sign-up decisions are still open. The tutor can see that the next slot is a tutorial slot and act on that: enrol the eager student now, suggest the struggling one wait for next week's session. The scoring end is clean — an anonymized transcript, marked by a tester who does not know the groups. But the groups themselves were assembled by a person who could see the future, so they may differ before the tutorial ever begins. **Team A failed concealment and achieved blinded scoring.**

Team B's sign-up cannot be steered: the tutor has to log the student before the central office will say anything, so who-enters-which-group is protected. But the person who delivers the tutorial then scores the test, knowing which students received it. A difference in how generously a borderline answer is marked could now flow into the result. **Team B achieved concealment and left the scoring unblinded.**

The current results cannot be ranked from these descriptions alone. Team A permits selection at enrolment; Team B permits differential scoring. The cases give no evidence about how often either opportunity was used or how large its consequence was. Baseline imbalances, enrolment logs, protocol deviations, or a comparison with an independently held enrolment record could inform Team A's risk. A blinded re-marking study could show whether Team B's original scores changed by assignment.

Repairability is a separate question from present validity. Team B kept transcripts, so a future blinded re-marking could repair the scoring stage and reveal whether scores change. That future possibility is not evidence that Team B's current estimate is less biased. Team A cannot recreate an enrolment decision after the fact, although records might still help judge how likely steering was. Both studies also leave participants and the tutor aware of assignment. If the effect of interest is assignment to the tutorial package as normally delivered, some ordinary changes in engagement belong to that package; unscripted extra help that differs by group would not. If the target is the tutorial content beyond attention and encouragement, the comparator and delivery must match those features.

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

One analysis, ROBES, covered 2,443 randomized trials from 228 meta-analyses in the Cochrane database. It compared the odds ratios from trials judged at high or unclear risk of bias with those from trials at low risk in the same meta-analysis. The reported **ratios of odds ratios (RORs)** were 0.91 for sequence generation, 0.92 for allocation concealment, and 0.87 for blinding; their 95% credible intervals were 0.86–0.98, 0.86–0.98, and 0.80–0.93, respectively. On the study's oriented odds-ratio scale, those values mean the compared odds ratios were 9%, 8%, and 13% lower. They do **not** mean that patient benefit was 9%, 8%, or 13% larger, and they are not absolute percentage-point differences. Converting an odds-ratio contrast into a risk ratio or risk difference would require the original effect and baseline risk.

The empirical record is not uniform. MetaBLIND later examined 142 meta-analyses containing 1,153 trials and found no evidence of an average effect-estimate difference by participant, provider, or outcome-assessor blinding. For participant-reported outcomes, the ROR for lack of participant blinding was 0.91 with a wide 95% credible interval of 0.61–1.34; for subjective observer-reported outcomes, the ROR for lack of observer blinding was 1.01 (0.86–1.18). Those intervals include no average difference and materially different effects in either direction. CONSORT 2025 therefore retains blinding as a mechanism-based safeguard while noting inconsistent empirical findings.

Within-trial comparisons can show a different signal. Reviews of trials that had the same outcome scored by both aware and blinded assessors reported average exaggerations around a quarter to a third for some assessor-dependent outcomes. Those figures are summarized by a later review rather than independently recalculated here, apply to particular outcome types, and do not override MetaBLIND's conflicting across-trial result.

Read those numbers carefully, because it is easy to over-read them.

- They are **averages over collections of trials**, not predictions about any one study. A single unconcealed or unblinded trial might be affected in either direction or not detectably affected.
- The ROBES analysis found greater between-trial variability with absent blinding for subjective outcomes, while MetaBLIND found the heterogeneity evidence inconclusive. The disagreement is part of the evidence, not noise to hide.
- These are associations between reported design features and effect estimates. Residual confounding, misclassification, incomplete reporting, outcome type, and the comparison method can all change the result. No ROR here is a correction factor for an individual trial.

The practical upshot is to trace mechanisms, not subtract a percentage. When a report does not tell you whether allocation was concealed or who was blinded, the risk cannot be judged from that report. Silence is not proof that a safeguard failed, and it is not reassurance that the safeguard held.

:::{misconception}
:id: misconception-concealment-is-blinding

**The incorrect model.** "Concealment and blinding are two words for keeping the assignment secret. A trial that describes itself as blinded has therefore covered both, and a trial that used sealed envelopes was blinded."

**Why it is plausible.** Both safeguards hide the same fact from someone, both are described with the language of secrecy, and reports often mention only one of them.

**What it cannot explain.** It cannot explain Team A and Team B. On this model the two teams made the same kind of mistake, so their errors should be interchangeable — yet Team A's failure could change *who was compared* and Team B's could change *what was recorded*, and fixing one would not touch the other. It also cannot explain why concealment is always achievable while blinding sometimes is not. If they were the same protection, they would fail under the same conditions.

**The better model.** They are two safeguards separated by a single instant: the moment of allocation. Before it, the risk is that a foreseeable assignment lets someone steer who enters which group; concealment removes the foresight. After it, the risk is that a known assignment changes behaviour or measurement; blinding removes the knowledge. A study needs both, and having one tells you nothing about the other.

**Recheck yourself.** A trial reports: "Participants were assigned using a computer-generated sequence held by an independent statistician who released each assignment only after the participant was registered. Because the two physiotherapy regimens look completely different, participants and therapists were aware of the assignment; range-of-motion was measured by an assessor who was not told which regimen the participant had received." Name what was concealed, who was blinded, who was not, and the one error still open. Then say whether the unblinded participants make this a careless trial. The answers open the practice that follows.
:::

:::{source-note}
:claims: claim-concealment-blinding-distinct, claim-concealment-definition, claim-blinding-definition-scope, claim-blinding-prevents, claim-blinding-fallback, claim-meta-epidemiological-magnitude, claim-assessor-blinding-magnitude, claim-effect-of-interest-awareness
:sources: source-consort-2025-elaboration, source-blinding-overview, source-robes-meta-epidemiology, source-metablind-2020

The separation of concealment from blinding by timing, the pathways each limits, the parties who can be blinded, and the need to define the effect of interest come from current trial reporting guidance and a review of blinding practice. ROBES supplies the ROR values from 2,443 trials in 228 meta-analyses; MetaBLIND supplies the conflicting estimates from 1,153 trials in 142 meta-analyses. The outcome-assessor figures are reported by the blinding review, which summarizes separate within-trial analyses rather than original data of its own. Together these sources show heterogeneous average evidence and do not support correcting any individual study by a fixed percentage. The two teaching teams and the physiotherapy report are fictional.
:::
