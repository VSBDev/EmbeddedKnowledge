# Practice: decide, then defend the decision

Three tasks, with the scaffolding removed as you go. Work each one before reading the discussion under it. The discussion is written to diagnose a wrong route, so read it even when your answer was right.

## Task 1, with the steps supplied

A cell in a different tissue needs to hold a straight projection 4 µm long, and it will not be cross-linked into a bundle.

Work through it in this order. First, write down the persistence length of each of the three filament types. Second, compute the ratio of each persistence length to 4 µm. Third, apply the rule that a ratio comfortably above 1 means rod-like over that distance. Fourth, name any candidate that is not excluded, and say what other property you would check next.

**Discussion.** A single actin filament gives ratios from 3/4 to 17/4, so 0.75 to 4.25. That range straddles 1, which is the interesting answer: at the low end of the published range a single actin filament will not hold 4 µm straight, and at the high end it will. The correct response is that actin is marginal here and the answer depends on where in its range this filament sits, which is exactly why the microvillus case at 1 µm was safe and this one is not. An intermediate filament gives 0.05 to 0.25 and is excluded. A microtubule gives more than 250 and is comfortably sufficient.

If you answered "actin, because actin holds microvilli up", you transferred a conclusion instead of the method. The projection is four times longer, and that changes the arithmetic. The stated condition that it is not bundled is the reason the single-filament figure is the right one to use.

## Task 2, with less help

A mutation removes desmoplakin's ability to bind intermediate filaments but leaves the rest of the desmosome assembled and correctly positioned.

Predict what happens to each of the following, and give the anchor your prediction runs through: the seal against material moving between cells; adhesion between neighbouring cells; the length of the microvilli.

**Discussion.** The seal survives, because it runs from claudins and occludin through ZO proteins to actin, and no part of that route passes through desmoplakin. Adhesion survives, because it runs from E-cadherin and nectin through catenins to actin, again not through desmoplakin. Microvilli shorten, and that is the one that fails, because keratin anchored at the desmosome contributes to the terminal web in which the microvillar actin bundles are planted.

Two errors are worth naming. Predicting that everything degrades treats the complex as one machine and ignores which anchor carries which function. Predicting that only lateral, desmosome-adjacent things fail misses the apical consequence entirely, which is the genuinely surprising part of the real experiment.

## Task 3, unscaffolded

An investigator reports that in a mouse line with reduced crypt proliferation, cells on the villus move more slowly, and concludes that mitotic pressure from the crypt is the force that drives migration.

Evaluate the conclusion. State precisely what the observation supports, what it does not support, what alternative explanation survives it, and what single additional measurement would do most to distinguish them.

**Discussion.** The observation supports a coupling between proliferation rate and migration velocity, and it is real. It does not support the claim that mitotic pressure is the force, because no force was measured. At least two alternatives survive: that a common upstream regulator sets both rates, and that proliferation contributes alongside actomyosin-generated tension in the sheet. The direct traction and tension measurements in organoids found the transit amplifying zone under tension rather than compression, which is the opposite sign to the proposed pushing mechanism.

The measurement that would do most is a direct measurement of tension or traction in intact tissue with normal three-dimensional geometry. Answering "repeat it in more mice" mistakes precision for validity: repeating a correlational design more times yields a better-estimated correlation and no information about the force.

Anyone who wrote that the investigator is simply wrong has overcorrected. The coupling is well measured and probably matters. What is unwarranted is the leap from a coupling to a named mechanical cause.

## Accessibility and alternatives

Every number and relationship in this lesson is available in prose, and no task requires seeing a picture.

The junction diagram in scene 4 has a long description stating the same nodes, the same links and the same conclusion, and the argument in that scene is complete without it: the four attachments are named in apical-to-basal order in the text, each with the polymer it anchors. If the diagram does not render or is not visible to you, read the ordered list in the section headed "Down the side of the cell, in order", which carries the same content.

The comparison table in scene 2 and the two-column table in scene 6 are both restated as sentences in the surrounding paragraphs. The stiffness ratio is given as a named relation in words as well as symbols: divide the filament's persistence length by the length of the structure, and compare the answer with 1. Each calculation in scene 3 is written out in full as a division with its result, so no step depends on reading a symbolic form.

The arithmetic throughout uses division and comparison to 1. A calculator is fine and no mental arithmetic is required or timed. There is no drag interaction, no audio carrying unique information, and no colour-coded distinction anywhere in the pack.

Nothing in this lesson asks you for your own physiology, symptoms, medication or medical history, and no task requires observing your own body.

## Recovery route

If the arithmetic in scene 3 did not land, the problem is usually the ratio and not the biology. Return to PREM-QNT-003 on ratios and proportions, then re-run just Demand 1 and Demand 2 of the worked example, which differ only in the length you divide by.

If the three filament systems keep blurring together, stop trying to hold three names and hold two numbers instead: a persistence length of about 10 µm for actin and more than 1 mm for microtubules. Then attach the third by its opposite, since intermediate filaments are the floppy, motorless, unbreakable one. Names attached to a property are recoverable; names attached to other names are not.

If the junction hierarchy will not stay in order, learn the sealing fact first. Only the tight junction closes the space between cells, and it is the topmost of the three. The other two hold cells together without sealing. Once that is fixed, add the polymer: the desmosome is the odd one out, and it grips keratin.

If scene 6 felt unsatisfying because it did not resolve, that reaction is the right one to examine rather than to fix. PREM-SCI-007 on correlation, causation and confounding and PREM-SCI-011 on mechanistic and convergent evidence both bear directly on it. A question that two good studies answer differently is a question with a live disagreement in it, and reporting it as decided would be the error.

If a task went wrong, the fastest diagnosis is to ask which property you compared. Most wrong answers in this material come from comparing stiffness when the demand named deformation, or from comparing anything at all when the demand named direction.

:::{source-note}
:claims: claim-persistence-lengths, claim-if-extensibility, claim-if-apolar-no-motors, claim-tj-seals, claim-tj-components, claim-aj-actin, claim-desmosome-keratin, claim-dp-partial-phenotype, claim-dp-interpretation, claim-terminal-web, claim-proliferation-drives, claim-proliferation-limits, claim-tension-pulls
:sources: source-pegoraro-cytoskeleton-mechanics, source-vanbodegraven-if-mechanics, source-alizadeh-junctional-complex, source-green-desmosomes, source-sumigray-desmoplakin, source-brown-microvillar, source-parker-crypt-migration, source-perezgonzalez-crypt-tension

The practice tasks reuse the persistence lengths, extensional-strain figures and motor-protein absence from the two mechanics reviews; the tight junction's sealing role and its claudin, occludin and ZO composition, and the adherens junction's catenin route to actin, from the junctional complex review; desmoplakin's anchoring of keratin from the desmosome review; the desmoplakin deletion phenotype, its stated interpretation and the intact adherens and tight junction proteins from the 2012 deletion study; the terminal web from the 2010 microvillar study; and the proliferation coupling, its stated limits and the organoid tension measurement from the two crypt migration studies.

Task 1 applies the published actin persistence-length range to a 4 µm projection, and Task 3 applies the published limitations to a hypothetical report. Both scenarios are constructed for this lesson; no source presents either case, and the arithmetic in Task 1 is this lesson's own.
:::
