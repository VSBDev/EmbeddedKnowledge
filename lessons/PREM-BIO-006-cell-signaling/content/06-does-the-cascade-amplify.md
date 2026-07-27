# Does the cascade amplify?

"Signalling works by amplification: one molecule outside triggers a cascade, and the cascade multiplies the signal enormously." That sentence appears in a great many summaries of cell signalling, and it is often stated as though it were a definition and therefore beyond checking.

It is worth checking, and the way to check it is to look up what the word means and then go and look at what has been measured.

The textbook usage is precise. A relay chain gets called a **signalling cascade** when it contains multiple amplification steps. Amplification is what earns the word, which means "does this pathway amplify?" is a question about a particular pathway with a particular answer, and not something settled by choosing a label for it.

So take two pathways and see what has been measured in each. A warning before the numbers: the two quantities are not the same kind of quantity, and the second half of this scene is about why that matters.

## A pathway that amplifies, step by step

Vision is the textbook case, and it is the clearer of the two because the multiplication can be followed one step at a time.

A single activated rhodopsin molecule catalyses the activation of hundreds of molecules of transducin, at a rate of about 1000 transducin molecules per second. Each activated transducin activates one molecule of cyclic GMP phosphodiesterase. Each of those phosphodiesterases hydrolyses about 4000 molecules of cyclic GMP per second. The chain ends with more than 100,000 cyclic GMP molecules hydrolysed for a single quantum of light absorbed.

Two of those steps multiply. One rhodopsin becomes hundreds of transducins, and one phosphodiesterase destroys thousands of cyclic GMP molecules. The transducin-to-phosphodiesterase step is one for one and multiplies nothing.

Notice what kind of number 100,000 is. It counts molecules consumed per single input event, and it accumulates because enzymes keep working: a catalytic tally, with units of molecules per absorbed photon. That is a cascade in the strict sense, and it explains how a rod cell can respond to one photon.

## The Wnt pathway, and a different kind of number

The best-characterised quantitative account of the canonical Wnt pathway comes from a model built on measurements in frog egg extracts. In it, moving from the unstimulated reference state to a standard stimulated state raises free beta-catenin by a factor of approximately 6, from 25 nanomolar to 153 nanomolar.

Six. And here is where a tempting comparison has to be refused.

:::{callout}
:kind: note
:id: callout-not-like-for-like

**Do not divide 100,000 by 6.** The two figures measure different things and the quotient means nothing.

The phototransduction figure is a **count of molecules destroyed per single input event**, produced by enzymes turning over for as long as they stay active. Its units are molecules per photon.

The Wnt figure is a **dimensionless ratio of two steady-state concentrations**, 153 nanomolar against 25 nanomolar. It compares one resting condition with another resting condition. Nothing is counted per event, and no time enters it.

So this lesson does not claim that phototransduction amplifies some number of orders of magnitude more than Wnt signalling. That statement would need both pathways measured the same way, and they have not been.

What the pair does support is narrower and still useful. The word *cascade* fixes neither the size of a gain nor even the kind of quantity a gain is reported in. One of these chains has identifiable steps where one molecule activates many, and a per-event tally to show for it. The other has a modest ratio between two resting levels and, as the audit below shows, its identifiable multiplying steps on the arm that destroys the output. Reading "cascade" and inferring "large multiplication of the response" is unsupported in the second case.

A comparison this lesson also cannot make: what the Wnt pathway's per-event catalytic tally is. No source consulted here reports one.
:::

## Auditing the Wnt steps

Where could multiplication happen, and where does the evidence actually place it?

**Reception multiplies nothing.** One Wnt protein occupies one Frizzled and LRP5/6 complex. There is no step here at which one bound signal generates many activated receptors.

**The step from receptor to destruction complex is not a catalysis, as far as these sources go.** Some complexes are recruited to the membrane, and the colonocyte work found the complex moving while keeping its composition and its hold on beta-catenin. Relocating an object is not obviously an act that produces many copies of anything, and no figure for a gain at this step is quoted here because none was found. The two further mechanisms scene 2 named, saturation of the complex and interruption of the tagging step, are likewise inhibitory rather than multiplying.

**The genuinely catalytic step in this pathway sits in the branch that destroys the output.** CK1A and GSK3B are kinases, and an enzyme is by nature a multiplier: one enzyme molecule modifies many substrate molecules in succession. Those two enzymes phosphorylate beta-catenin so that it is tagged and destroyed. The catalytic power in the canonical Wnt pathway therefore belongs to the machinery that removes the response, and the signal works by getting in that machinery's way. A pathway can contain a strong multiplying step and still show a small change in output, when the multiplying step is on the arm being switched off.

**The transcriptional step is not audited here.** Free beta-catenin partnered with TCF and LEF switches on genes, and transcription followed by translation is often described as amplifying. This lesson found no figure it could stand behind for the gain of that step in this pathway, so it asserts none.

That last paragraph leaves the audit of this pathway incomplete, and the gap should be named rather than glossed. Of the five jobs this lesson set out to trace, reception, transduction, response and termination are traced through Wnt itself. **Amplification is the one traced through other pathways**, because the per-step figures exist for phototransduction and for the composite in scene 8 and do not exist, in the sources consulted, for Wnt. What can be said about Wnt is where its multiplying steps sit and what its output ratio is. What cannot be said is by how much any single Wnt step multiplies.

:::{misconception}
:id: misconception-cascade-means-amplification

**The faulty model.** Every signalling pathway is a cascade, and every cascade multiplies its input by a huge factor, so a signalling pathway's job is amplification.

**Why it fails.** The textbook this lesson cites says a relay chain with multiple amplification steps is *often referred to* as a signalling cascade. That is a convention and a common one, and the word is also used more loosely for any multi-step relay. This lesson holds to the narrower sense because it is the sense that makes the question answerable, and it flags that it is doing so rather than claiming the loose usage is wrong. Applying the word to every pathway and then reading the amplification back out of the word is circular. Phototransduction earns it, with two identifiable multiplying steps and a per-photon tally above 100,000 molecules. The canonical Wnt pathway does not obviously earn it: its identifiable catalytic steps sit on the destruction arm, and the measured change in its output is a roughly sixfold shift between two resting levels.

Be careful what that sixfold figure is. It is a ratio of two steady-state concentrations under two conditions. Calling it the pathway's gain would need the input change that produced it and the range over which the relationship holds, and this lesson has neither. So it is evidence that the output moves modestly, not a measured gain. The one-to-one stoichiometry at the receptor is a similarly bounded observation: it says one ligand engages one receptor complex, and it does not establish that an occupied receptor produces no multiplication downstream of it over time, which would need the rate and the duration measured.

The faulty model also misdescribes what such a pathway is for, though the argument has to be made more carefully than it first appears. A pathway reporting position needs its intermediate to stay graded across the range where boundaries are placed, because scene 4 showed the readout carves coarse zones out of a continuous signal. High gain does not by itself destroy that: whether a pathway saturates early depends on the shape of its dose-response curve, its dynamic range, any feedback or adaptation, and the scale of the input, and a high-gain pathway with a wide range or with adaptation can stay graded. The honest statement is narrower. A pathway that saturates within the range the cell has to read cannot place boundaries above the saturation point, and gain is one of the things that can bring saturation forward. Whether Wnt is arranged that way is not settled by the sixfold figure either.

**The corrective test.** For any pathway you meet, ask three questions. Does one activated molecule at this step produce many activated molecules at the next? Is this step on the arm that produces the response, or on the arm that removes it? And what kind of quantity is the number I have been handed, a per-event count or a ratio of two steady states? If you cannot answer the first with a figure from a source, you do not know that the pathway amplifies.
:::

## What the cell may actually be reading

A further result complicates the picture in a useful direction, and it is presented here as its authors present it, which is as a hypothesis with evidence behind it rather than a settled fact.

Across a range of genetic and pharmacological perturbations in a human colorectal cancer cell line, the absolute level of beta-catenin after Wnt stimulation moved around enormously, spanning roughly 30 to 1200 nanomolar depending on the modification. The *fold change* was far steadier, staying around six to nine. The authors' proposal is that the fold change in beta-catenin, rather than its final absolute level, is what the downstream transcriptional system reads, and they note this requires a cell to hold some record of its beta-catenin level before the signal and compare it with the level after.

Take that seriously and two earlier statements need qualifying, which is why scene 2 flagged them.

Scene 2 described the cell as reading the concentration here and now, with the reading live and no reference to any earlier value. Under the fold-change reading that is incomplete: the cell would need a short-term memory of its own recent beta-catenin level. Notice that this does not restore the odometer scene 1 ruled out. A record of what beta-catenin was doing a while ago is not a record of how far the cell has travelled, and it would not tell a cell its position on its own. The two kinds of memory are different, and the fold-change hypothesis needs only the smaller one.

The positional story shifts too. A cell reading a ratio is not reading an absolute concentration, and an absolute concentration was what the gradient was supposed to be supplying. If the readout compares against a recent baseline, then what a cell learns as it climbs is less "the Wnt here is *X*" and more "the Wnt here is a certain factor below where I was". Which of those the crypt uses is not settled by anything in this lesson, and the honest position is to hold both.

:::{check}
:id: check-amplification-audit

1. A pathway is described in a review as a "kinase cascade". What have you learned about its gain from that phrase alone?

2. In the canonical Wnt pathway, which enzymes act catalytically, and does their catalysis increase or decrease the response?

3. Someone divides the phototransduction figure of 100,000 by the Wnt figure of 6 and concludes that vision amplifies about seventeen thousand times more strongly. What is wrong with the calculation?

4. Why would very high gain be a poor design for a pathway whose job is to report position?

**Answers.** (1) Nothing quantitative. The phrase asserts that multiple amplifying steps are present; it supplies no figure, and a chain can contain a multiplying step and still show a small change in output. (2) CK1A and GSK3B, the two kinases of the destruction complex. Their catalysis decreases the response, because what they do to beta-catenin is mark it for destruction. (3) The two numbers are different kinds of quantity, so their quotient has no meaning. The 100,000 counts molecules hydrolysed per absorbed photon, a per-event catalytic tally with units. The 6 is a dimensionless ratio between two steady-state concentrations. Comparing the pathways numerically would require measuring both the same way, which no source here has done. (4) Because high gain saturates. Scene 4 showed that a coarse-zone readout has to carve its zones out of a continuously graded intermediate, so the intermediate must keep responding across the input range. A pathway that goes fully on at a low input concentration returns the same value at every position above that concentration, leaving nowhere to place a boundary.
:::

:::{source-note}
:claims: claim-cascade-definition, claim-phototransduction-gain, claim-wnt-sixfold-response, claim-fold-change-readout, claim-wnt-receptor-complex, claim-destruction-complex-role, claim-complex-relocates, claim-inhibition-mechanism-unsettled
:sources: source-alberts-cell-communication, source-alberts-gprotein-signaling, source-lee-wnt-quantitative, source-goentoro-fold-change, source-nguyen-colonic-crypt, source-parker-apc-recruitment, source-mukherjee-destruction-complex

The definition of a signalling cascade as a relay chain containing multiple amplification steps: a textbook chapter on cell communication. The phototransduction figures, including the tally of more than 100,000 cyclic GMP molecules per absorbed quantum: a second chapter of the same textbook. The sixfold rise in free beta-catenin from 25 to 153 nanomolar, from a fitted model of a frog egg extract system rather than a human crypt cell: a 2003 study. The fold-change result and its authors' proposal, offered by them as evidence for a hypothesis: a 2009 study in a human colorectal cancer line. The receptor complex and the destruction complex's action: a 2025 review of the colonic crypt. The complex moving while retaining its composition: a 2020 study in human colon epithelial cells. The saturation and blocked-ubiquitination mechanisms and the controversial state of that question: a 2018 review.

Three things here are the lesson's own reasoning rather than quoted findings: the step-by-step audit, the argument that the two gain figures are incommensurable, and the argument that a positional pathway needs an unsaturated intermediate. That CK1A and GSK3B act catalytically, and that their catalysis therefore reduces the response, is an inference from their identity as kinases together with their sourced role in marking beta-catenin for destruction.
:::
