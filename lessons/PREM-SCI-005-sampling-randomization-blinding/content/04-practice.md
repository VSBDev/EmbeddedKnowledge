# Practice: four questions, less and less help

Work these in order. The support drops at each one: the first supplies most of the audit, the second supplies the structure only, the third supplies nothing. Write your answer before reading the feedback under each.

First, the recheck you were left with a moment ago.

The physiotherapy trial concealed its allocation properly — the independent statistician released each assignment only after the participant was registered, so the enroller could not steer anyone. Participants and therapists were unblinded, which is unavoidable when two regimens look different, so performance bias is open: participants may work harder or seek other treatment knowing what they received. The outcome assessor was blinded, which closes detection bias for the range-of-motion measurement, and range-of-motion is a comparatively objective outcome besides. The error still open is performance bias. And no, unblinded participants do not make this a careless trial: the team blinded what could be blinded and left open only what the intervention itself makes impossible to hide.

## Practice 1 — completion

Three of the four questions are already answered for you. Fill in the fourth.

> A city health service tests whether a text-message reminder increases attendance at booked clinic appointments. Everyone with a booked appointment in a three-month window is included — no volunteering, no exclusions. A computer assigns each booking at random to receive the reminder or not. Attendance is recorded automatically by the check-in system, which has no information about group assignment.

- **Entry:** every booking in the window is in, so this describes attenders at this service in that period, and there is no self-selection at all. The answer's address is broad within that service and says nothing about other cities.
- **Assignment:** a computer chance mechanism, so the two groups are comparable in expectation.
- **Foreknowledge:** ▢ *your answer*
- **Awareness:** participants know whether a text arrived, so they are unblinded — but attendance is recorded by an automatic system with no knowledge of assignment, so the measurement cannot be nudged. Detection bias is closed by the outcome being objective and automatically captured.

**Feedback.** Concealment is not at risk here, and the reason is worth stating precisely rather than just concluding "fine." Apply the test in order: entry was committed wholesale — every booking in the window, fixed by the appointment system — before any assignment existed, so no assignment could be known while any entry decision was still open. There is no enrolment decision left for foreknowledge to corrupt. If instead a receptionist had chosen which bookings to enter into the study, and could see which arm was next while choosing, concealment would matter immediately.

Note the shape of that answer: not "concealment was adequate" but "here is the mechanism that would have to be corrupted, and it does not exist in this design." That is the level of specificity worth aiming for every time.

## Practice 2 — supported

Only the four headings this time. Audit the study under each, then state the strongest warranted conclusion and one boundary.

> A sports-science group tests whether a new warm-up routine reduces hamstring strain over one season. They email every registered club in the region; eleven clubs reply and agree to take part. Within each club, players come one at a time to a preseason screening at which a coordinator decides whether the player is fit to take part this season. The coordinator holds a shuffled deck of cards prepared for that club, half marked *new routine* and half *usual warm-up*. At each screening, the coordinator first draws and looks at the next card, then completes the fitness check and decides whether the player enters the study; entered players follow the warm-up on their card. Strains are diagnosed and recorded by the clubs' own physiotherapists, who run the warm-up sessions.

**Feedback.**

*Entry.* Eleven clubs that answered an email out of every registered club in the region. Clubs that reply to research invitations are plausibly the better-organized ones, so the result describes players at engaged clubs. This bounds applicability; it does not damage the internal comparison, because the assignment happens within each participating club and both arms come from the same eleven clubs.

*Assignment.* A shuffled deck is a genuine chance device, so this is not alternation or a birth-date rule. The method **does** use club membership: it runs a separate chance process within each club. That is stratified randomization, and it is valid because the prespecified characteristic defines the strata while chance still selects each player's assignment. It helps stop club-level differences from lining up with the arms.

*Foreknowledge.* Broken, and this is the fatal flaw — not because a deck of cards was used, but because of the order of two events. The coordinator draws and looks at the card *before* completing the fitness check, so the assignment is knowable while the entry decision is still open. That fails the concealment test outright: knowability came first, commitment second. A coordinator who suspects the new routine helps can see "usual warm-up" and then decide the injury-prone player is not really fit this season. Notice that the randomness of the deck is untouched by all this — this is the pinned-sequence failure in a new costume. Reversing the order, so the fitness decision is settled and recorded before any card is turned over, would have repaired it at no cost.

*Awareness.* Also broken. The physiotherapists who run the warm-up sessions diagnose the strains. Hamstring strain diagnosis involves clinical judgement, so a physiotherapist who believes in the new routine may set a marginally different threshold for recording a strain in each group. Detection bias is open, and unlike the participants' own awareness — which cannot be avoided, since players can see their warm-up — this one was entirely avoidable by having someone else do the diagnosing.

*Strongest conclusion and boundary.* Very little is warranted. Two independent routes could produce a difference in strain rates without the routine doing anything: foreknowledge could change who was compared, and aware physiotherapists' judgement could change what was recorded. The case does not prove either occurred, but the design cannot distinguish an effect of the warm-up from those alternatives. The boundary on even a repaired version would remain the eleven self-selecting clubs.

*Next step if you missed the concealment failure.* This is the most commonly missed of the four. Reread the pinned-sequence example from the opening explanation, then ask of every assignment procedure you meet: was this person's entry committed before their assignment could be known? Randomness of the device is not the question; the order of commitment and knowability is.

## Practice 3 — independent

No headings, no scaffold. Produce the full audit yourself, in your own structure, ending with the strongest warranted claim and one material boundary.

> A nutrition team asks whether a bitter-tasting mineral supplement reduces daytime fatigue. Adults who answer a social-media advertisement are screened, and those who qualify are randomized by a central web service that reveals the assignment only after the participant's screening record is submitted. The supplement and the placebo are prepared to look identical, but the supplement is noticeably bitter and the placebo is not. Fatigue is scored by participants on a daily questionnaire; the research nurse who reviews the questionnaires does not know the assignments.

**Feedback.**

Entry is a self-selected sample of people who both saw a social-media advertisement about fatigue and chose to respond — plausibly people who already feel tired, which bounds the result to that group and says nothing about the general adult population. Assignment is a genuine random mechanism. Concealment is properly done: the web service releases the assignment only after the screening record is submitted, so commitment comes first and knowability second.

State the effect of interest before judging awareness. The broad effect is assignment to the supplement package as designed versus assignment to this placebo package; taste and the expectations it creates are part of those packages. A narrower effect is the mineral's effect beyond taste, attention, and expectation. That narrower effect needs a comparator matched on those features.

The tablets look the same, but taste may reveal the assignment. Because the outcome is a self-scored fatigue questionnaire, the participant is the outcome assessor, and awareness could influence reporting. The blinded nurse cannot remove that pathway because the nurse reviews values the participant has already produced. This creates at least a material concern; the description does not establish whether reporting changed, by how much, or in which direction.

The strongest warranted claim has two parts. For the broad question, among self-selected respondents to a fatigue advertisement, assignment to the bitter supplement package rather than the non-bitter placebo package produced the reported difference, with sound allocation and concealment but a participant-reported outcome at risk of awareness-related measurement bias. For the narrower question, the trial does not isolate a mineral-specific effect beyond taste and expectation. An active placebo or other comparator matched on sensory cues would address that narrower question.

One last check: a placebo control is not the same thing as successful blinding. Investigators can compare the interventions' sensory similarity before the trial and document overt unblinding during it. End-of-trial questions about which group participants believed they were in are difficult to interpret because experienced outcomes or side effects can themselves inform the guess. If such questions are used, their results need that limitation; they are not a direct test that blinding succeeded or failed.

## Recovery route

If the practice above did not go well, the useful move is to work out *which* of the four questions you are losing, because they need different repairs.

- **If you could not say what the entry route affects**, the gap is the internal/external validity distinction. Reread the section on what entry does, then re-answer only this: does a narrow sample make a result wrong, or make it narrow?
- **If you accepted a random-but-visible sequence as adequate**, the gap is concealment, and it is the most common one. Reread the pinned-sequence example and the table that sets the two safeguards side by side.
- **If you treated "there was a placebo" or "it was double blind" as settling the awareness question**, the gap is that blinding is a fact about specific parties, not a label. Redo the physiotherapy recheck, naming each party separately.
- **If the four questions are individually clear but you cannot assemble a verdict**, reread the worked audit and copy its final two moves: state the strongest defensible claim, then one boundary on it.
- **If assignment itself is the shaky part** — if "comparable in expectation" or confounding is not solid — the ground for this lesson is in the earlier lessons on variables and controls and on choosing a study design. Going back there is the efficient move, not a detour.

None of this is a placement test, and none of it is graded.

:::{source-note}
:claims: claim-entry-bounds-applicability, claim-sampling-representativeness, claim-random-allocation-comparability, claim-concealment-definition, claim-concealment-blinding-distinct, claim-blinding-prevents, claim-blinding-fallback, claim-effect-of-interest-awareness
:sources: source-consort-2025-elaboration, source-blinding-overview, source-sampling-participants, source-metablind-2020

Each practice study applies the same sourced distinctions: which simple and stratified methods count as random assignment, what allocation concealment protects and when, which parties blinding covers, awareness as a possible rather than proven bias pathway, the need to define the effect of interest and comparator, and the effect of a self-selected sampling route on who a result describes. The clinic, sports-science, and nutrition studies are fictional teaching cases written for this lesson; none reports a real trial, and none supports any conclusion about text reminders, warm-up routines, or mineral supplements.
:::
