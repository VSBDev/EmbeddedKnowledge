# The membrane was never the whole of the protection

Commit to an answer before reading on, because the answer you already hold is the thing worth examining.

:::{check}
:id: check-burst-lysosome-prediction
:kind: retrieval

A colonocyte contains lysosomes, each full of enzymes that break down the large molecules a cell is made of. Suppose one of them ruptured and emptied its entire contents into the cytosol.

Write down, in one sentence, what you expect to happen to that cell. Then write down what feature of the lysosome you think was preventing it.
:::

## The model most people arrive with

Stated fairly, it goes like this. A lysosome is a bag of digestive enzymes. Those enzymes would destroy the cell if they were loose in it, so the cell keeps them behind a membrane. The membrane is the safety device. Break the membrane and the cell digests itself.

Nothing in that is stupid, and part of it is true. Lysosomes really do contain enzymes that dismantle almost everything a cell is made of. They are where material taken in from outside ends up, and electron micrographs of normal cells show lysosomes with whole mitochondria inside them, being taken apart. The organelle really is where degradation happens.

The trouble is the second half: that the membrane is what stands between the cell and destruction.

## The observation the model cannot survive

Every one of those enzymes is an **acid hydrolase**. That is not a description of where they live; it is a description of what they require. They achieve their activity in an acid environment, with optima around pH 4.5 to 5.0, which is why the organelle is held there at all.

Now put an acid hydrolase into cytosol at pH 7.2. It is more than two pH units above the conditions it needs, and it does very little. A cell-biology account of this puts it as double protection: the membrane normally keeps the digestive enzymes out of the cytosol, and even if they leaked out, they could do little damage at the cytosolic pH of about 7.2.

Read that carefully and the causal arrow reverses. The acid is *half the containment*, and not merely a service the cell provides so that its enzymes can work in comfort. It is what makes those enzymes safe to own.

## The model that fits

:::{misconception}
:id: misconception-membrane-as-wall
:label: The membrane is the safety device

**The model to discard.** A lysosome is a bag; its membrane is a wall; the wall is what protects the cell; breaching the wall releases active enzymes into the cytosol.

**What it cannot explain.** Why the enzymes require an acid environment at all, and why an organelle would spend ATP continuously to hold a five-hundred-fold proton gradient when a wall would already have done the job. On the wall model, the pH inside the lysosome is an incidental detail. It is not.

**The model that replaces it.** A compartment is a maintained condition, and the chemistry it holds runs properly only inside that condition. The lysosomal membrane and the pump in it produce an acid interior, and that acidity is a major part of why the hydrolases work there and do little elsewhere.

It is not the whole story, and the lesson should not pretend otherwise. Many of these enzymes are made as inactive precursors and are cleaved on the way, some need particular cofactors, and the acid interior also drives the processing that produces the mature form. So containment and activation are tightly coupled rather than the same act, and the honest claim is that a compartment supplies several of the conditions activity depends on at once, of which pH is the one this scene can demonstrate arithmetically.

**Test the two models on one case.** Consider a lysosome whose membrane is intact and whose enzyme content is completely normal, but whose interior has been allowed to drift up towards pH 7. The wall model predicts nothing much: the wall is standing, the enzymes are inside, digestion should carry on. The condition model predicts that digestion inside that lysosome slows or stops, because the enzymes are no longer near their optimum, and it predicts this even though nothing has leaked and nothing is missing. The two models disagree sharply, and that is what makes this a test rather than a restatement.
:::

## A second case where the chemistry has to be kept close

The lysosome is one way of segregating chemistry. The **peroxisome** is another, and it makes the general point from the opposite direction: instead of holding a condition, it holds a reaction and its clean-up in the same small volume.

Peroxisomes break down fatty acids that are too long for the mitochondria to start on, in a chain of oxidation steps. Those steps, and other peroxisomal oxidases, generate hydrogen peroxide as a by-product. Hydrogen peroxide is a reactive molecule and a cell would rather not have it wandering about. The peroxisome's answer is to carry **catalase**, an enzyme that decomposes hydrogen peroxide, in the same compartment where the peroxide is being produced.

That arrangement is worth pausing on, and worth stating carefully. Nothing here is locked away absolutely. Hydrogen peroxide can cross membranes, and cells use it deliberately as a signal elsewhere, so the peroxisome is not a sealed box. What colocalising the oxidases with catalase buys is that the peroxide is destroyed close to where it is made, which limits how much accumulates and how far the rest of the cell is exposed. Segregation here is a matter of degree, and the useful lesson is that keeping a reaction and its remedy together is often cheaper than keeping a product away from everything.

Both organelles are answering the same design problem in different ways: chemistry the cell needs, and chemistry the cell cannot afford to have everywhere. That is what the first purchase actually buys.

## Recheck, in a case you have not seen

:::{check}
:id: check-recheck-conditions
:kind: retrieval

A cell contains a compartment holding an enzyme that works best at pH 5. The enzyme is made in the endoplasmic reticulum, which sits at about pH 7.2, and travels through the Golgi, which runs from about 6.7 down to about 6.0, before arriving.

1. During that journey the enzyme passes through the cell carrying its full digestive capacity. Why is the cargo it travels alongside not destroyed on the way?
2. Which of the two models from this scene does your answer use?
3. Name one thing your answer assumes that the numbers alone do not establish.
:::

The route runs from a near-neutral compartment through a mildly acid one, and only the destination is strongly acid. An enzyme with an optimum near pH 5 is below its best performance for the whole journey and reaches full activity only on arrival. The condition model gives that answer directly; the wall model has nothing to say about it, because on the wall model the enzyme is equally dangerous everywhere and its safety is purely a matter of which side of a membrane it is on.

The assumption worth naming is that each enzyme's activity falls away smoothly and substantially as pH rises above its optimum, and by enough to matter over a difference of one to two pH units. Optima differ between enzymes, and how steeply activity falls either side of an optimum is a property of the particular enzyme. The two published figures used here establish where the compartments sit and that the lysosomal environment is optimal for these enzymes. The inference that a hydrolase is substantially less effective at Golgi pH follows from that, and it is an inference, so it is labelled as one.

:::{source-note}
:claims: claim-acid-hydrolases-double-protection, claim-lysosome-degrades-material, claim-compartment-ph-landscape, claim-peroxisome-peroxide-and-catalase, claim-hydrolase-activity-off-optimum
:sources: source-alberts-tgn-lysosomes, source-feng-lysosome-hydrolases, source-banerjee-organelle-ph, source-schrader-peroxisome

A cell-biology textbook chapter on transport to lysosomes supplies the acid-hydrolase description, the lysosomal interior at about pH 5.0, and the double-protection statement that leaked hydrolases could do little damage at the cytosolic pH of about 7.2. It also supplies the observation that endocytosed material meets the lysosomal hydrolases after passing through endosomes, and that micrographs of normal cells show lysosomes containing mitochondria. A 2023 review gives the hydrolase optima as pH 4.5 to 5.0. The pH values for the endoplasmic reticulum and the Golgi are the ones tabulated in the previous scene, from a 2020 review of V-ATPase regulation, which also states that the acidic lysosomal environment is optimal for hydrolytic enzymes. A 2008 review of peroxisome biology supports the peroxisomal beta-oxidation of very-long-chain fatty acids and the co-localisation of hydrogen-peroxide-producing oxidases with catalase, which decomposes the peroxide, in the same organelle. The statement that a hydrolase is substantially less effective at Golgi pH than at lysosomal pH is this lesson's inference from the optima and the compartment pH values; no source cited here reports an activity-versus-pH curve for a named enzyme, and the prose says so where the inference is made.
:::
