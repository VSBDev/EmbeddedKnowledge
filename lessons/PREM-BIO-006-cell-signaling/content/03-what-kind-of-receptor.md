# What kind of receptor is Frizzled?

Scene 2 named the receptor in a single clause and moved on: Frizzled, with LRP5/6 alongside it. That clause hid a question, because Frizzled is one shape of receptor out of several, and the shape is not incidental. Architecture decides what a receptor can do about each of the five jobs.

Frizzled's chain crosses the membrane seven times. Hold that and ask what some other arrangement would have bought.

## Read a receptor's shape as a prediction

What follows is a comparison, not a list to memorise. Each entry answers two questions from the architecture alone: what crosses the membrane when the ligand binds, and what has to happen for the signal to stop.

| Architecture | What gets across the membrane | How it is turned off |
| --- | --- | --- |
| Ligand-gated ion channel | Ions, through a pore in the receptor itself | Ligand leaves, pore shuts |
| Receptor tyrosine kinase | Phosphorylated docking sites on the receptor's own tail | Internalisation, then dephosphorylation and recycling |
| G-protein-coupled receptor | Activity of a separate protein on the inner face | Phosphorylation of the occupied receptor, then arrestin and endocytosis |
| Notch | A cut-off piece of the receptor, which travels to the nucleus | No account given in this lesson's sources |
| Intracellular or nuclear receptor | Nothing; the ligand crosses by itself | Outside this lesson's sources |

### Ligand-gated ion channels: the binding site is the switch

Here the ligand-binding site and the ion channel belong to one protein, so binding gates the channel directly and ions move. Nothing has to be built and no second protein has to be found. Charge is what crosses.

That directness has a measured consequence, in the one setting where this lesson found the two arrangements compared directly. In chemoreception, ionotropic and metabotropic signalling are described as differing in their temporal properties: the ionotropic route is usually faster, on a millisecond to sub-millisecond timescale, because ligand binding directly gates the ion channel, while a receptor that has to produce second messengers and activate secondary effectors carries a longer latency, from a few tens to several hundred milliseconds. The same downstream machinery then gives the slower route a longer duration, from a few seconds to several minutes.

Handle that figure carefully. It was established in chemosensory systems and compares two architectures there. It says nothing about receptor tyrosine kinases or intracellular receptors, and no source consulted places all of these architectures on one timescale. The table has no speed column for that reason.

### Receptor tyrosine kinases: the receptor becomes an assembly point

This family has more than fifty human members. Each has an extracellular ligand-binding region, one transmembrane segment, and an intracellular region carrying a tyrosine kinase domain.

Binding brings two receptors together, and that is the whole trick. Juxtaposing the intracellular kinase domains lets them phosphorylate one another, which does two things at once: it raises their kinase activity, and it creates phosphorylated sequences on the receptor's own tail that intracellular proteins with SH2 or PTB domains can dock onto. What the cell gains is a place to assemble, built out of the receptor.

Turning it off is not a clean story, and the untidiness is the useful part. Internalisation after ligand binding cuts both ways: receptors in endosomes are still active, and sometimes internalisation is what lets them meet their partners at all. Signalling is interrupted when the endosome turns acidic enough for the ligand to fall off, and the receptor is then dephosphorylated and recycled. So "the receptor was internalised" does not by itself mean the signal stopped.

### G-protein-coupled receptors: seven passes and a separate messenger

A GPCR has an extracellular amino terminus, an intracellular carboxy-terminal tail, and a core of seven transmembrane helices weaving in and out of the membrane to form three intracellular and three extracellular loops. Binding is registered by a protein on the inner face, and the receptor itself neither carries charge nor performs the chemistry.

Termination here is the best-worked of the five, and it is precisely aimed. Receptor kinases known as GRKs phosphorylate only the activated, ligand-occupied form of the receptor, mostly on the carboxy-terminal tail. Arrestin then binds, blocks the interaction with the G protein, and promotes removal of the receptor from the cell surface by endocytosis. The shut-off finds the receptors that are working and leaves the resting ones alone.

### Notch: activation by cutting

Notch receptors are single-pass proteins, and their ligands are also membrane proteins, sitting on neighbouring cells. So this receptor is triggered on cell-to-cell contact, which already makes it a different instrument from anything reading a concentration in the fluid.

Activation is a sequence of cuts. Ligand binding lets an ADAM protease cleave the receptor about twelve residues outside the transmembrane domain; removing the extracellular part then allows an intramembrane cut by gamma-secretase, which releases the intracellular domain. That domain carries a nuclear localisation sequence, so it travels to the nucleus and regulates transcription with a DNA-binding partner. What crosses the membrane is a piece of the receptor.

This lesson's sources give no account of how Notch signalling is switched off, so none is offered here. Scene 5 returns to Notch for what it contributes in the crypt.

### Intracellular and nuclear receptors: no transduction problem to solve

Nuclear receptors are a superfamily of intracellular transcription factors activated by lipophilic ligands, and they differ from the others in a way that removes a job instead of performing it. They do not sit in the plasma membrane, and their ligands cross it unaided, so there is no binding event on the outside to convert into one on the inside. What sets them apart is that they mediate transcription without intermediate signalling cascades. They bind their target genes directly.

That is a statement about the number of steps, and it must not be converted into a statement about speed. A chain with fewer links is not thereby a faster chain, since transcription and translation take time that none of this lesson's sources measures.

## Where Frizzled sits, and why it is argued about

Frizzled receptors share an architecture: an extracellular cysteine-rich domain, a hydrophilic linker, a seven-transmembrane domain, and an intracellular carboxy-terminal region. They are placed in class F of the G-protein-coupled receptors, and the formal grounds are on the record. The IUPHAR database grouped them separately as the class FZD within the GPCR superfamily on three counts: the presence of seven-transmembrane segments, evidence for coupling between Frizzleds and G proteins, and substantial structural differences from classes A, B and C.

So the classification is real and documented. It is also disputed, and a learner should meet it that way.

:::{callout}
:kind: note
:id: callout-frizzled-contested

**A live disagreement, left open.**

The case for membership is structural and formal. Frizzleds have the seven-pass core. They keep conserved cysteines in extracellular loops 1 and 2, and they keep the charged residues at the ends of intracellular loop 3 that are known to be needed for receptor-to-G-protein coupling. The IUPHAR review calls the basic observation supporting their nature as GPCRs compelling.

The case against strict membership is drawn from the same molecule. Class FZD receptors lack the DRY motif at the end of the third transmembrane domain, a feature known to matter for G protein coupling and specificity. A 2025 review states that the exact contributions of the seven-transmembrane domain to signal transduction are contentious, and that because Frizzleds show limited direct G-protein coupling there is debate over whether they should be classified strictly as GPCRs or as part of a broader receptor family with hybrid functions.

And the disagreement is itself contested. A 2021 structural study argues that receptor topology varies enormously across the classes that do couple G proteins, so Frizzleds and Smoothened adopting different conformations while activating the same G proteins is less controversial than it first appears. The IUPHAR review, for its part, says the coupling remains to be fully explored.

This lesson does not settle it, and nothing in this lesson needs it settled. Scene 2 traced the chain from an occupied Frizzled to the destruction complex without calling on a heterotrimeric G protein at any step, so every statement made there stands under either reading. What the argument teaches is a habit: a seven-pass architecture is strong evidence about which family a receptor belongs to and weak evidence about the mechanism it runs.
:::

Frizzled also has a termination route of its own, at the receptor instead of downstream. The ubiquitin ligases ZNRF3 and RNF43 attach ubiquitin to Frizzled receptors and send them for lysosomal degradation, working as negative feedback that terminates Wnt signalling. That sits alongside scene 2's account without replacing it. Scene 2 described the inside, where the destruction complex is already running and needs nothing new; this operates on how many receptors are available to be occupied at all. A pathway can be regulated at more than one place.

## Back to the five jobs

The **signal** each class can accept is fixed by where the binding site is: on the outside for four of them, and anywhere for a nuclear receptor, whose ligand has to be able to cross a membrane by itself. The **receptor** decides whether transduction is a flow of ions, a set of docking sites, the activity of a separate protein, or a fragment sent to the nucleus. **Transduction** is the job that vanishes entirely for intracellular receptors. The **response** can be immediate at the membrane or can require the nucleus. And **termination** is where the classes diverge most: shut the pore, dephosphorylate and recycle, phosphorylate and remove the occupied receptor, or degrade the receptor outright.

:::{check}
:id: check-receptor-architecture

Answer these from the section above, without scrolling back.

1. A receptor's ligand is a small lipid-soluble molecule that crosses membranes unaided. Which of the five jobs does that receptor not have to perform, and why?

2. Someone tells you that because nuclear receptors bind their target genes directly, they must give the fastest responses of any receptor class. What is wrong with the argument?

3. Frizzled crosses the membrane seven times. What does that establish, and what does it fail to establish?

4. Two shut-off mechanisms in this scene act on the receptor itself. Name them and say how they differ in what happens to the receptor afterwards.

**Answers.** (1) Transduction. Its ligand crosses the membrane on its own, so there is no extracellular binding event that has to be converted into an intracellular one. (2) It confuses a count of steps with a rate. Fewer intermediate stages is a structural fact; how long the response takes depends on how long each stage takes, and transcription and translation are not instantaneous. No source in this lesson measures the timescale of any of these classes except the ionotropic and metabotropic comparison in chemoreception. (3) It establishes the architecture, and it is one of the grounds on which Frizzled is formally placed in class F of the GPCRs. It does not establish that the receptor works through a heterotrimeric G protein: Frizzleds lack the DRY motif, show limited direct G-protein coupling, and whether they should be classified strictly as GPCRs is under debate. (4) GRK phosphorylation of an occupied GPCR followed by arrestin binding and endocytosis, which removes the receptor from the surface and can be followed by recycling; and ubiquitination of Frizzled by ZNRF3 or RNF43, which sends the receptor to the lysosome to be destroyed.
:::

:::{source-note}
:claims: claim-receptor-class-architectures, claim-rtk-dimerisation-docking, claim-rtk-internalisation-ambiguous, claim-gpcr-desensitisation, claim-nuclear-receptor-no-intermediate, claim-notch-contact-and-cleavage, claim-ionotropic-metabotropic-timing, claim-frizzled-class-f-architecture, claim-frizzled-gpcr-membership-contested, claim-frizzled-termination-by-ubiquitination, claim-wnt-receptor-complex
:sources: source-heldin-signals-receptors, source-silbering-chemoreception-timing, source-martinez-marin-frizzled, source-dijksterhuis-iuphar-frizzled, source-turku-class-f, source-nguyen-colonic-crypt

The architectural families and their defining structure, the dimerisation and docking-site account of receptor tyrosine kinases, the two-directional effect of internalisation with dephosphorylation and recycling, the heptahelical GPCR core, the GRK and arrestin route to desensitisation and endocytosis, the contact-dependent activation of Notch by sequential proteolytic cleavage, and the statement that nuclear receptors mediate transcription without intermediate signalling cascades: a 2016 review of signals and receptors. The millisecond to sub-millisecond ionotropic timescale against a latency of tens to hundreds of milliseconds for the metabotropic route, with its longer duration of seconds to minutes, established in chemosensory systems: a 2010 review of chemoreception. The Frizzled architecture with its cysteine-rich domain and seven-transmembrane domain, the description of the domain's contributions as contentious, the limited direct G-protein coupling with the resulting debate about strict GPCR classification, and the ZNRF3 and RNF43 route to lysosomal degradation: a 2025 review of Frizzled receptors. The IUPHAR grouping of class FZD within the GPCR superfamily with the three grounds for it, the retained cysteines and intracellular loop 3 residues, the absent DRY motif, and the description of the supporting observation as compelling: a 2014 IUPHAR review. The argument that differing conformations across G-protein-coupling classes make the disagreement smaller than it appears: a 2021 structural study. The identity of the Wnt receptor complex: a 2025 review of the colonic crypt.

The comparison table, the reading of each architecture as a prediction about the five jobs, and the observation that the two Frizzled shut-off routes act at different places are this lesson's own organisation of the sourced material. No source consulted places all of these receptor classes on a single timescale, and none is asserted.
:::
