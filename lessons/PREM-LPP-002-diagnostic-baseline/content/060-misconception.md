# Confidence is not the knowledge state

:::{misconception}
:id: misconception-confidence-equals-security

**Commit to a prediction.** Learner Quartz is highly confident but repeatedly applies the wrong relation and cannot explain why it should fit. Learner Reed reports low confidence but independently answers accurately, explains the relation, and adapts it across a bounded representation change. If confidence were the knowledge state, which learner would be called secure?

**The tempting model.** “Feeling certain means the knowledge is secure; feeling uncertain means it is fragile.” This is plausible because confidence is immediate and easy to record.

**What the model cannot explain.** It would classify Quartz as secure despite an inaccurate, unexplained pattern, while downgrading Reed despite accurate independent reasoning and adaptation. The model therefore reverses the observed performance evidence in both cases.

**Replacement model.** Classify the knowledge state from access, accuracy, reasoning, and bounded adaptation. Record confidence separately and compare it with performance. Quartz has fragile or possibly unfamiliar model use, depending on what further explanation probes reveal, plus a high-confidence-error flag. Reed has provisionally secure performance plus a low-confidence calibration flag.

**Same-case comparison.** The confidence-only model predicts that Quartz should advance and Reed should restudy from the beginning. The evidence model predicts targeted misconception repair for Quartz and delayed verification rather than redundant initial instruction for Reed. Only the evidence model preserves what each learner actually demonstrated.

**Recheck.** A learner gives two accurate familiar responses with a good explanation, fails the bounded application, and reports medium confidence. Classify the node. The defensible answer is **fragile**, because failed adaptation limits the evidence; medium confidence neither repairs nor causes that gap.
:::

Confidence calibration (`term-confidence-calibration`) matters because a learner needs to know when to seek another check. It remains a companion to performance, not a substitute for it.

:::{source-note}
:claims: claim-three-state-model, claim-confidence-calibration
:sources: source-premed-syllabus, source-content-standard, source-premed-graph

The syllabus explicitly compares confidence with performance and routes high-confidence errors to remediation. The operational contrast and fictional learners are original; causal explanations for why an individual feels confident remain outside this lesson.
:::
