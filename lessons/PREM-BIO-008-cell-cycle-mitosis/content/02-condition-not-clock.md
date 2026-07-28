# A checkpoint is a condition, not a clock

The word checkpoint invites the wrong picture. A checkpoint on a road is a place. You arrive at it, you are inspected, you move on, and the checkpoint stays behind you. Applied to a cell, that picture suggests a fixed moment in a fixed schedule, and it gets the biology backwards.

The term was introduced for something quite different: a control that makes one event *depend* on another having finished. When checkpoints were first named, in 1989, they were described as a class of signalling pathway whose job is to keep the cycle's order honest, so that no step runs until the step it relies on has genuinely finished. Dependency is the whole content of the idea. A checkpoint is the answer to a question rather than a location in a timetable, and the next event does not start until the answer is yes.

:::{definition}
:id: definition-checkpoint

A **cell-cycle checkpoint** is a surveillance mechanism that makes a later step of the division cycle conditional on an earlier step having been completed correctly. It works by detecting a specific physical state, and by holding the transition while that state is unsatisfactory. A checkpoint has no clock in it, and it does not mark a fixed point in time; the same checkpoint can pass a cell in minutes or hold it for hours depending only on what it detects.
:::

Read the definition once more and notice what it does not say. It does not say the checkpoint stops the cycle permanently, and it does not say the detection is perfect. Both of those omissions matter, and scene six is built on them.

## Four phases, and what each is a phase *of*

A dividing cell alternates between a long period of preparation and a short period of physical division.

**Interphase** is the preparation, and it has three parts. In **G1** the cell grows and makes protein, and its DNA is still single-copy. In **S phase** the DNA is replicated, so every chromosome ends the phase as two identical copies held together. In **G2** the cell continues growing and readies the machinery of division. **M phase** is the division itself: mitosis sorts the copies into two sets, and cytokinesis cuts the cell in two.

PREM-BIO-002 of this block quoted a figure for a cultured human cell and promised that this lesson would explain it: a cycle of about 24 hours, of which mitosis and the division occupy about an hour, leaving roughly 95 per cent of the time in interphase. That is a textbook illustration rather than a measurement, and single-cell imaging of named human cell lines gives a sharper and less tidy picture. Following individual cells through the cycle with a replication reporter, S phase ran 7.6 to 10.1 hours and G2 ran 3.4 to 4.0 hours across three human lines, while mitosis took around half an hour. G1 was the variable one, ranging from 2.1 hours in a human embryonic stem line to 7.9 hours in retinal pigment epithelium.

Add those up before going on, because the sum is instructive. The fastest combination comes to about 13.6 hours and the slowest to about 22.5 hours, so every cycle measured in that study was shorter than the textbook 24 hours. Treat 24 hours as a round number for a cultured cell and not as a constant these lines obey.

That pattern is the useful result. The phase that varies most between cell types is the one before the commitment to replicate. The phases after it are comparatively fixed. Whatever a cell is deciding, it is doing most of the deciding in G1.

## The thing that actually drives the transitions

Phases do not advance themselves. Each transition is driven by a **cyclin-dependent kinase**, and the property that makes a CDK useful as a switch is that on its own it does nothing at all: unless it is tightly bound to a cyclin, it has no protein kinase activity. Cyclin concentrations rise and fall through the cycle, so the kinase activities rise and fall with them, and the cell's phase is in effect written in which cyclins are currently present.

That gives three independent ways to stop a transition. Remove the cyclin, and the kinase goes quiet. Leave the cyclin in place and add an inhibitor protein: a CDK inhibitor such as p21 rearranges the kinase's active site so that it cannot work even while bound to its cyclin. Or leave a blocking phosphate on the kinase itself. A CDK also carries inhibitory phosphate that has to be stripped off before it will fire, so preventing that removal keeps it quiet too. Checkpoints use all three, and the third one matters shortly.

Notice the division of labour. Cyclin-CDK pairs are the actuator that moves the cycle forward. Checkpoints are the surveillance that decides whether the actuator is allowed to fire. Confusing the two is the commonest way this material goes wrong in a learner's head.

## The G1 condition: is there any reason to divide?

Early in G1 a cell still needs external permission. Growth-factor signalling drives phosphorylation of a protein called Rb, and phosphorylated Rb releases the transcription factor E2F, which switches on the genes needed for replication. Cyclin D with CDK4 or CDK6 begins that phosphorylation; cyclin E with CDK2 completes it. Notice that cyclin E is itself among the things E2F switches on, so once E2F is released it drives production of the very cyclin that completes its release. A loop that feeds itself no longer needs the original push, and past a certain point in this sequence the cell stops needing the external signal and will finish the cycle on its own. That point has been called the **restriction point**.

Now the crypt walks straight into this scene. PREM-BIO-006 of this block traced a Wnt signal from the mesenchyme at the crypt base to free beta-catenin in the nucleus, where it partners TCF and LEF and switches on a set of genes including c-MYC, LGR5 and **cyclin D1**. Cyclin D1 is the G1 cyclin above. The gradient that lesson six treated as positional information is, at its output end, an input to the G1 machinery of this lesson. A cell near the crypt base is receiving a standing instruction that keeps its G1 cyclin supplied, and a cell two thirds of the way up is not. That is why the Ki-67-positive cells sit in the bottom third of the tube.

Be careful with the restriction point, though, because it is tidier as a phrase than as a measurement. Estimates of when cells cross it and become independent of growth signal vary widely even within one cell type, and the question of whether a single such point exists in G1 at all has been raised in the literature. Treat it as a real transition whose location is fuzzy and disputed rather than as a line ruled across G1.

## The G1 and G2 condition: is the DNA intact?

A second question is asked at more than one place in the cycle, and it is about damage. Two related kinases do the sensing and they respond to different physical states: ATM is activated by double-strand breaks, while ATR is activated by single-stranded DNA. Each then activates a checkpoint kinase, CHK2 and CHK1 respectively, and those kinases suppress the CDC25 phosphatases whose job is to remove inhibitory phosphate from CDKs. Block CDC25 and the CDK stays switched off, so the transition does not happen.

There is a second, slower arm to the response in G1. ATM and CHK2 stabilise p53, and p53 induces p21, which binds and inhibits the CDK2 complexes that G1 exit depends on: cyclin E with CDK2, and cyclin A with CDK2 as well, a third G1-to-S cyclin partnership alongside D and E. Two routes, one fast and phosphorylation-based, one slower and transcription-based, converge on the same kinases.

Ask what is being sensed here and the answer is a physical structure: a broken end, a stretch of unpaired single strand. Nothing is counting time.

## Not dividing is also a state

A cell that is not in the cycle is not merely between cycles. **Quiescence**, often called G0, is a reversible non-dividing state that a cell can be brought back out of, and the evidence is that it is a separate biological state and not simply a long G1. It is also not one state: quiescence covers a heterogeneous collection of related but non-identical conditions, and distinguishing a G0 cell from a cell in early G1 is genuinely difficult in practice.

This connects to a definition PREM-BIO-001 was careful about. A stem cell was defined there by its *capacity* to self-renew and produce differentiated progeny, with the explicit note that capacity is not continuous activity. The crypt bears that out: its stem cells divide about once every two to three days, which means that at any given moment most of them are not dividing. Being a stem cell and being in mitosis are different facts about a cell.

:::{check}
:id: check-condition-not-clock
:kind: retrieval

Answer these from this scene before reading on.

1. A cell is held at the G2 to M transition. Name the physical state most likely being detected, and name the enzyme class whose activity is being withheld.
2. A drug blocks all CDC25 phosphatases. Of the two arms of the damage response described above, which one could still inhibit CDK2?
3. Why does calling a checkpoint "a point in the cycle" mislead?

**Answers.**

1. Damaged DNA, most specifically double-strand breaks detected by ATM or single-stranded DNA detected by ATR. The withheld activity is that of a cyclin-dependent kinase; the checkpoint kinases suppress CDC25, so the inhibitory phosphate is never removed from the CDK.
2. The p53 arm. ATM and CHK2 stabilise p53, p53 induces p21, and p21 inhibits cyclin E-CDK2 and cyclin A-CDK2 directly, without needing CDC25 to be involved.
3. Because a checkpoint is a condition rather than a place. The same checkpoint releases one cell immediately and holds another for hours, and what differs is the state being detected, not the time elapsed. Nothing in the mechanism measures duration.
:::

:::{source-note}
:claims: claim-checkpoint-dependency-definition, claim-cell-cycle-phases, claim-measured-phase-durations, claim-cultured-cycle-24h, claim-cdk-requires-cyclin, claim-cki-inactivates-cdk, claim-restriction-point-growth-independence, claim-rb-e2f-mechanism, claim-restriction-point-disputed, claim-wnt-drives-cyclin-d1, claim-atm-atr-chk-cdc25, claim-p53-p21-arm, claim-quiescence-distinct-state, claim-stem-cell-division-rate, claim-ki67-proliferative-fraction
:sources: source-rhind-russell-signaling, source-cooper-cell-cycle, source-chao-uncoupled-phases, source-alberts-cell-cycle-control, source-wang-growth-factor-cell-cycle, source-brooks-restriction-point, source-nguyen-colonic-crypt, source-visconti-checkpoint-cancer, source-johnson-cook-quiescence, source-baker-crypt-dynamics, source-bravo-axelrod-crypt-model

The dependency formulation of a checkpoint, attributed in that source to Hartwell and Weinert's original 1989 statement, comes from a 2012 review of the signalling pathways that regulate cell division. The four-phase description and the illustrative 24-hour cultured-cell cycle with roughly an hour of mitosis come from a chapter on the eukaryotic cell cycle, the same source PREM-BIO-002 of this block used for that figure. The measured single-cell phase durations, S phase 7.6 to 10.1 hours, G2 3.4 to 4.0 hours, mitosis around half an hour, and G1 from 2.1 hours in H9 human embryonic stem cells to 7.9 hours in hTERT-RPE1, come from a 2019 single-cell imaging study using a PCNA replication reporter in hTERT-RPE1, U2OS and H9 cells. The requirement that a CDK be bound to a cyclin to have any kinase activity, the cyclic assembly that follows from oscillating cyclin levels, and the rearrangement of the CDK active site by an inhibitor protein come from a chapter on the components of the cell-cycle control system. Growth-factor-driven Rb phosphorylation, E2F release, the cyclin D-CDK4/6 then cyclin E-CDK2 sequence, and growth-factor independence after the restriction point come from a 2021 review of growth-factor-induced control of cycle progression. The caution that estimates of restriction-point crossing vary widely within a cell type, and that its universality in G1 has been questioned, comes from a 2023 commentary on locating the restriction point. That Wnt-driven beta-catenin with TCF and LEF switches on c-MYC, LGR5 and cyclin D1 is carried forward from PREM-BIO-006 of this block and is supported by the 2025 colonic-crypt review it used. ATM activation by double-strand breaks, ATR activation by single-stranded DNA, CHK2 and CHK1, the suppression of CDC25, and the p53 to p21 arm inhibiting cyclin E-CDK2 and cyclin A-CDK2 come from a 2016 review of cell-cycle checkpoints in cancer. That quiescence is reversible, that it is a separate biological state rather than a long G1, that it is heterogeneous, and that G0 cells cannot readily be distinguished from early G1 cells come from a 2023 review of quiescence as multiple reversible forms of arrest. The crypt-base division rate of about once every two to three days is from the 2014 human crypt-evolution study, and the location of Ki-67-positive cells in the bottom third of the crypt is from the 2013 whole-crypt Ki-67 counts.

Two things in this scene are joins made by this lesson rather than statements taken from a source. Connecting PREM-BIO-006's Wnt output to this lesson's G1 cyclin is this lesson's reading of the two together; the crypt review names cyclin D1 among the Wnt target genes and the cell-cycle sources describe cyclin D's role in G1, and no single source draws the line between them. The observation that most crypt stem cells are not in mitosis at any given moment follows from the two-to-three-day division rate and is arithmetic, not a measurement.

The phase-duration figures and the 24-hour cycle are cultured cells, not colonic crypt cells in a person. The next scene works out what the crypt's own figure has to be.
:::
