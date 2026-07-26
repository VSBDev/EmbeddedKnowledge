# Name the condition, then predict the failure

Everything in this lesson reduces to one habit. Given a job a cell has to do, do not ask which organelle does it. Ask what *condition* the job needs, and then ask which compartment holds that condition. The organelle name is the last thing you work out, not the first.

Three passes below, with less help each time. Work each one before reading the response under it.

## Pass one, with the reasoning laid out

A colonocyte takes in a fragment of bacterial protein from the lumen and needs it broken down to amino acids it can reuse.

Worked in full, so the shape is visible:

- **The job.** Cutting peptide bonds, thoroughly, on material of unpredictable composition.
- **The condition it needs.** The enzymes that do this work are acid hydrolases, at their optimum around pH 4.5 to 5.0. So the job needs a small volume held at that pH, separated from a cytosol at 7.2 where those enzymes would achieve very little.
- **The compartment that holds it.** The lysosome, which the cell maintains near pH 5 by pumping protons inward with a V-ATPase.
- **Remove the condition and what fails.** Stop the pump and the interior drifts up towards 7.2. The membrane is intact, the enzymes are all present, and the digestion stops anyway. That last sentence is the one to carry forward.

## Pass two, with the first step given

An oxidation reaction the cell needs to run on a very-long-chain fatty acid produces hydrogen peroxide as a by-product. Hydrogen peroxide is reactive and the cell would rather it did not circulate.

The condition here is not a pH. It is proximity: the requirement is that the peroxide is destroyed close enough to where it is made that it never travels.

You finish it. Which compartment holds that condition, what does it contain that meets the requirement, and how is this a different solution from the lysosome's?

:::{check}
:id: check-practice-peroxisome
:kind: retrieval

Answer the three parts above in writing before reading on. The third part is the one that matters.
:::

The peroxisome. It carries catalase, which decomposes hydrogen peroxide, in the same compartment as the oxidases producing it, so production and disposal are a few tens of nanometres apart. The solution differs from the lysosome's in what is being segregated. A lysosome segregates a *capability*: the enzymes are kept where their conditions are, and are largely harmless outside. A peroxisome segregates a *transient product*: the peroxide is never meant to leave, and the compartment exists so that a reactive intermediate can be at a working concentration in one small volume and nowhere else.

## Pass three, on your own

:::{check}
:id: check-practice-independent
:kind: retrieval

Three situations. For each, name the condition the job requires, name the compartment or route involved, and say what you would predict if the named element failed. One of the three has no compartment in the answer, and identifying which is part of the task.

1. A pump protein has to end up in the apical membrane of a colonocyte and nowhere else. The gene is normal, the protein folds normally, and the trans-Golgi network packages it. Vesicle delivery to the apical face fails.
2. An enzyme has to reach the lysosome. Every step of manufacture is normal, but the mannose 6-phosphate tag is never added in the Golgi.
3. An enzyme does its work in the cytosol at pH 7.2 and is needed nowhere else.

Then, across all three: which are failures of *manufacture* and which are failures of *delivery*?
:::

**One.** The condition is a location: this protein works only on the face that meets the lumen, so the requirement is delivery to a specific face rather than to "the surface". Break vesicle delivery to that face and the protein exists, folded and functional, sitting in the wrong place. Predict a cell that is alive, that is making everything it should, and that cannot do the apical job. Hold this one; the last scene is a real version of it.

**Two.** The condition is an address that a receptor can read. With no mannose 6-phosphate group there is nothing for the mannose 6-phosphate receptors to recognise at the sorting step, so the enzyme is not diverted, stays in the default outward flow of the secretory route, and leaves the cell. The lysosome is undamaged and the enzyme is not defective. It is simply somewhere else, and the digestive capacity of the lysosome falls because of an addressing failure rather than a manufacturing one.

**Three.** This is the one without a compartment. About thirty per cent of newly made proteins are diverted into the endoplasmic reticulum route; being diverted is the special case, and a protein with no signal sequence stays in the cytosol because nothing removes it. The right answer is that no compartment is needed and none is used. A learner who has started sorting everything into organelles will invent one here, and inventing one is the error the item is looking for.

Across the three: the first two are delivery failures, and neither involves a defective product. The third has no failure in it. Nothing here is a failure of manufacture, which is deliberate, because the manufacture story is the one most learners already have and the delivery story is the one this lesson is adding.

## Where to go if a pass went wrong

Each failure has a specific route back, and none of them is "read the lesson again".

If pass one went wrong at the condition rather than at the name, reread the second scene, and particularly the arithmetic. The number five hundred is what makes the difference between a container and a maintained condition concrete.

If pass two produced an answer about the peroxisome keeping something locked away from the cell, reread the second half of the third scene. The distinction between segregating a capability and segregating a transient product is the whole of that pass.

If pass three's third item produced an organelle, that is the most useful mistake in the lesson and it means the framing has overshot. Return to the last part of the first scene: bacteria run almost everything in one volume, so a compartment is never the default answer to anything.

If the two kinds of failure ran together, work the diagram in the fourth scene backwards from each destination and say at which step each fault would first become visible.

## Accessibility and alternatives

Nothing in this lesson requires seeing a picture. The route diagram in the fourth scene carries a long description that states every node, every step, the pH of each compartment, and the three destinations, in the order the argument uses them, and the surrounding prose walks the same route in sentences. The pH landscape in the second scene is a table of text, and the two quantities that matter, cytosol 7.2 and lysosome about 5, appear in the prose as well as in the table.

All arithmetic is written out in words and symbols together: the ratio is a subtraction of two pH values followed by one power of ten, and the equation and its plain reading sit next to each other. No prompt, answer, or piece of feedback depends on colour, position, animation, hover, or timing, and no task asks you to drag anything. Every check can be answered in writing and reread as often as you like.

:::{source-note}
:claims: claim-acid-hydrolases-double-protection, claim-lysosome-proton-gradient, claim-peroxisome-peroxide-and-catalase, claim-mannose-6-phosphate-address, claim-cotranslational-er-targeting, claim-colonocyte-polarity, claim-compartment-ph-landscape
:sources: source-alberts-tgn-lysosomes, source-feng-lysosome-hydrolases, source-banerjee-organelle-ph, source-schrader-peroxisome, source-sun-signal-sequences, source-nguyen-colonic-crypt, source-schneeberger-mvid

Every fact used in these three passes was established earlier and carries the sources it carried there: the acid-hydrolase optima and the double-protection statement, the lysosomal pH and its ATP-driven proton pump, the compartment pH landscape, the co-localisation of peroxisomal oxidases with catalase and the peroxisomal beta-oxidation of very-long-chain fatty acids, the mannose 6-phosphate tag and its receptors, the figure of about thirty per cent of new proteins entering the endoplasmic reticulum route, and the polarity of the colonocyte. The three practice situations, the interventions described in them, and the predicted outcomes are constructed for this lesson. In particular, the fate of an untagged lysosomal enzyme and the consequences of a failed apical delivery are predictions from the sourced mechanisms and not results reported by any source cited here.
:::
