# The pump it never touches

Here is a sentence that appears in a great many sets of notes, and it is wrong in a way worth taking apart carefully, because the correct version is the most useful idea in this lesson.

:::{misconception}
:id: misconception-secondary-uses-atp

**The claim.** "SGLT1 carries out active transport, so it uses ATP to drag glucose into the cell against its gradient."

**Why it is tempting.** The reasoning is not silly. Glucose ends up more concentrated inside than out, so work was done. Work needs energy. Cells pay for things with ATP. The chain seems tight, and the word *active* seems to name the ATP step.

**Where it fails.** SGLT1 does not split ATP. There is no ATP-hydrolysing step in its cycle. Everything it spends, it spends from the sodium electrochemical gradient, which is a store of energy the cell built earlier with a different protein in a different membrane. The category name for what SGLT1 does is *secondary* active transport, and the word secondary marks exactly this: ATP hydrolysis is coupled to glucose transport **indirectly**, through the gradient, and never directly.

**The correct chain.** The sodium-potassium pump, in the basolateral membrane, splits ATP and uses it to push three sodium ions out and pull two potassium ions in. That keeps cytosolic sodium low and helps hold the inside of the cell negative. Low cytosolic sodium plus a negative interior is the sodium electrochemical gradient. SGLT1, in the apical membrane, spends that gradient to bring glucose in. ATP paid for the gradient; the gradient paid for the glucose.

**The corrective test.** Ask which protein has the ATP site. If the protein moving your solute has one, the transport is primary. If the ATP site belongs to a different protein whose product is a gradient, the transport is secondary. There is exactly one ATP-splitting protein in the whole glucose route, and it never touches a glucose molecule.
:::

## Why the distinction is not pedantry

Two arrangements can look identical from outside and behave differently the moment you disturb them.

Interrupt ATP supply to a cell. A primary active transporter stops essentially at once, because the molecule it consumes has gone. A secondary active transporter carries on. Its fuel is a gradient, the gradient is already sitting there, and it goes on working until the gradient has run down. The stored sodium gradient is a battery, and pulling the charger does not empty a battery instantly.

That difference is not a thought experiment. Poison the sodium-potassium pump with ouabain, which inhibits it specifically, and glucose transport across the brush border stops. This looks at first like evidence that glucose transport needs the pump directly. It is evidence of something more interesting: the drug acts on a protein in the *other* membrane, one that has no contact with glucose at all, and the effect reaches SGLT1 only because the pump is what maintains the sodium gradient that SGLT1 depends on. An inhibitor of one protein switched off a second protein it never bound, through a gradient.

:::{check}
:id: check-misconception-discriminate
:kind: practice

A colleague proposes that SGLT1 has its own ATP site after all, and that ouabain somehow inhibits SGLT1 as well as the pump.

1. Their hypothesis and the one in this scene both predict that ouabain stops glucose uptake. Name one observation that would distinguish them.
2. Suppose someone loads membrane vesicles made from brush border alone, with no pump and no ATP present, and imposes a sodium gradient across them artificially. What does each hypothesis predict?
3. Why does the *timing* after adding ouabain carry information?
:::

For the first: the two hypotheses agree on the outcome and disagree on the route, so any observation that separates route from outcome will do. Testing whether ouabain binds SGLT1 at all is the most direct. Testing whether glucose uptake still runs when the sodium gradient is supplied by some means other than the pump is the most informative, because it removes the pump from the question entirely.

For the second: this lesson's account predicts that glucose is still taken up, because everything SGLT1 needs is the sodium gradient and the gradient has been supplied. The colleague's account predicts no uptake, because there is no ATP for the ATP site they have proposed. This is the cleanest available discrimination between the two, and it is worth being clear that it is offered here as reasoning about what *would* settle the question. No experiment of that kind is cited in this lesson.

For the third: an ATP site would fail as soon as ATP was gone. A gradient fails gradually, as it leaks away. So a sharp stop points at direct dependence and a slow decline points at a store being used up. The shape of the falling-off in time separates the two mechanisms even when the endpoint is the same.

## The thing to carry forward

A cell can build a gradient in one place and spend it in another. The sodium gradient is a general-purpose currency: an absorptive cell uses it for sugars and for amino acids, and each of those symporters spends the same store without any of them touching ATP. The pump is a single expense funding many purchases.

That has a consequence for the last scene of this lesson. Anything that disturbs the pump disturbs everything downstream of it at once. And anything that leaves the pump running leaves that whole set of coupled transporters still funded, however much else has gone wrong in the cell. Still funded is not the same as funded identically: the last scene meets a disturbance that leaves the pump alone and yet shrinks the budget, because a cell has more than one way of changing its membrane voltage.

:::{source-note}
:claims: claim-sglt1-secondary-active, claim-sodium-pump-stoichiometry, claim-sodium-pump-electrogenic, claim-ouabain-indirect-block, claim-symporters-build-gradients
:sources: source-drozdowski-intestinal-sugar, source-gyimesi-slc5, source-koepsell-intestinal-glucose, source-contreras-sodium-pump, source-alberts-active-transport

A 2006 review of intestinal sugar transport supplies the statement that the phenomenon was considered secondary active transport because the hydrolysis of ATP was indirectly coupled to glucose transport through the electrochemical gradient, and separately the observation that glucose transport was blocked by ouabain, which inhibits the sodium-potassium ATPase of the basolateral membrane, the protein responsible for maintaining the sodium gradient in enterocytes and for driving brush-border sodium-dependent transporters including SGLT1. A 2020 review of the SLC5 family supplies the description of these proteins as secondary active transporters that move substrates against their concentration gradients using energy from the inwardly directed sodium electrochemical gradient generated by the sodium-potassium ATPase. A 2020 review of intestinal glucose transporters supplies the statement that SGLT1's driving force is provided by the transmembrane sodium gradient and membrane potential generated by that pump. A 2024 review of the pump supplies the three-sodium-out, two-potassium-in, one-ATP cycle and the net removal of one positive charge per cycle. A cell-biology textbook chapter supplies the three ways cells drive active transport, the definition of a coupled carrier as one that ties uphill movement of one solute to downhill movement of another, and the statement that intestinal and kidney epithelial cells carry a variety of sodium-driven symport systems for sugars and amino acids.

The flat statement that SGLT1 contains no ATP-hydrolysing step is this lesson's reading of the sourced description "secondary active transport, as the hydrolysis of ATP was indirectly coupled", together with the sourced statement that the driving force is the sodium gradient and the membrane potential. No source cited here says in those words that SGLT1 lacks an ATP-binding site, and a reviewer should treat the negative form as this lesson's inference rather than as a quoted assertion. The argument about the *timing* of failure after ATP withdrawal or ouabain, the battery comparison, and the vesicle experiment in the second practice item are all this lesson's own reasoning; no source cited here reports the time course of the ouabain effect, and no source cited here performed the vesicle experiment, which is why the text says so where it appears.
:::
