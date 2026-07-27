# Practice: classify it, cost it, then predict it

Three passes. The first hands you the test, the second hands you the numbers and not the method, and the third hands you a situation and nothing else.

## Pass one, with the test named for you

:::{check}
:id: check-practice-classify-five
:kind: practice

Apply both questions to each crossing: does it need a protein, and does it need free energy from beyond the solute's own gradient? Then name the category.

1. Oxygen entering a cell from the blood.
2. Sodium leaving the cell on the sodium-potassium pump.
3. Glucose entering the cell through SGLT1 late in a meal, when the lumen has been stripped.
4. Water crossing the apical membrane through an aquaporin.
5. A colleague says "SGLT1 is a channel, because things flow through it." Say what is wrong.
:::

Oxygen is small and nonpolar, so it dissolves in the bilayer and crosses: no protein, no outside energy, simple diffusion. Sodium leaving on the pump needs a protein, and that protein splits ATP itself: primary active transport. Glucose through SGLT1 late in a meal needs a protein and is going uphill on borrowed energy: secondary active transport. Water through an aquaporin needs a protein and moves down its own osmotic gradient: facilitated diffusion.

The colleague has answered a mechanism question with a category word. A channel is a water-filled pore that lets suitable solutes through, sorting them largely by size and charge, and it does not bind and reshape around its cargo. SGLT1 binds sodium and glucose and changes shape to carry them, which makes it a carrier. The deeper error is thinking the channel-or-carrier answer settles the passive-or-active answer. It does not: all channels are passive, but carriers come in both kinds, and the sodium-potassium pump is itself a carrier.

## Pass two, with the numbers and not the method

:::{check}
:id: check-practice-recompute
:kind: practice

Take luminal sodium at 150 mM, an apical membrane potential of $-36$ mV, $RT = 2.577$ kJ/mol, and $F = 96\,485$ C/mol. In the third scene these inputs, with cytosolic sodium at 50 mM, gave a per-ion budget of $-6.305$ kJ/mol and a 2:1 ceiling of about 133.

Now suppose cytosolic sodium is 30 mM instead.

1. Recompute the per-ion budget.
2. Recompute the 2:1 ceiling.
3. By what factor did the ceiling change, and does the power law in the third scene predict that factor? Check it.
4. State one thing your new ceiling does not tell you about this cell.
:::

The concentration term becomes $2.577 \times \ln(30/150) = 2.577 \times (-1.609) = -4.15$ kJ/mol. The voltage term is unchanged at $-3.47$ kJ/mol, because nothing about the voltage moved. The per-ion budget is $-7.62$ kJ/mol, and the two-ion budget is $-15.24$ kJ/mol. Then $\ln(\text{ratio}) = 15.24/2.577 = 5.91$, so the ceiling is $e^{5.91} \approx 370$.

For the third part: the ceiling went from 133 to 370, a factor of 2.78. The sodium concentration ratio went from $150/50 = 3$ to $150/30 = 5$, a factor of $5/3 = 1.67$. The power law says the ceiling scales as that ratio raised to the coupling number, so the predicted factor is $1.67^{2} = 2.78$. It matches, which is the check worth doing: the algebra and the arithmetic were done independently and agree.

For the fourth: the new ceiling says nothing about rate, nothing about the glucose concentration the cell actually reaches, and nothing about whether this cell can hold cytosolic sodium at 30 mM in the first place. It is a limit, and limits are silent about everything except limits.

## Pass three, with nothing but the situation

:::{check}
:id: check-practice-pump-failure
:kind: practice

An experimental epithelial sheet is transporting glucose steadily from its luminal side to its blood side. The basolateral sodium-potassium pump is then inhibited completely and instantly. Nothing else is touched: the membranes are intact, SGLT1 and GLUT2 are present and undamaged, and ATP is still available in the cytosol.

1. Predict what happens to glucose uptake across the apical membrane over the following period, and describe the *shape* of the change in time rather than just its direction.
2. A colleague concludes from the result that SGLT1 must consume ATP. Say why the experiment cannot show that, and what would.
3. Predict what happens to cytosolic sodium and to the membrane potential, and say what each does to the ceiling you have been computing. Both terms of the budget are in play here.
4. Name one thing about this sheet that the treatment does not change at all.
:::

Glucose uptake declines, and it declines gradually. At the instant the pump stops, SGLT1 still has the full sodium gradient available and carries on at close to its previous rate. Sodium then accumulates in the cytosol, because it is still entering apically with glucose and nothing is removing it. As cytosolic sodium rises the gradient shrinks, the budget falls, and uptake tails off. The shape is a decline from an initially unchanged rate, and its slowness is the signature of a store being consumed.

The colleague's inference does not follow, because ATP was never removed in this experiment. ATP is still present and SGLT1 still stopped, which shows that SGLT1 depends on the pump's *product* and says nothing about whether SGLT1 handles ATP. Settling it needs the pump taken out of the question: supply a sodium gradient by some other means, with no ATP available, and see whether glucose still moves. The gradual shape of the decline is itself evidence against a direct ATP requirement, because losing a consumed molecule would stop the transporter sharply.

Both terms of the budget go the same way, and it is worth being explicit that there are two. Cytosolic sodium rises, so the sodium ratio falls, so the ceiling falls as the square of that ratio. The pump is also electrogenic, exporting three positive charges for every two it imports, so switching it off removes its contribution to the negative interior and the cell depolarises. That shrinks the voltage term, which in this cell was the larger half to begin with, and the ceiling raises that loss to the same power. An answer that names only the sodium accumulation has found the term the question points at and missed the bigger one. The point of the sheet, which is moving glucose from a dilute lumen to a concentrated interior, is what disappears.

What does not change is the *identity* of the proteins and their mechanisms. SGLT1 is still a 2:1 symporter and GLUT2 is still a facilitated-diffusion carrier. Neither has been altered. What changed is the gradient one of them was spending, which is a statement about the cell's condition and not about its parts. GLUT2, running downhill on whatever glucose is present, is also unaffected in mechanism, though it will have less glucose to carry once uptake has fallen.

## Accessibility and alternatives

The one diagram in this lesson carries an alternative text and a long description that name every stage, every relationship between stages, and the conclusion drawn from it, and no task here depends on seeing it. Every element of the route it shows is also stated in the sentences of the second scene, in the same order. The diagram uses no colour to carry meaning, and each stage is labelled in text.

The two displayed relations are each restated in words beside the symbols: the electrochemical-gradient relation is given as a sentence naming what each term contributes and what the sign of the total means, and the power-law relation is given as two sentences describing what happens to the ceiling when a coupled ion is added and when the sodium ratio is halved. Every arithmetic step in the third scene is written out in full on its own line, so the calculation can be followed without reading the algebra. The tables are semantic text and read correctly in row order in a screen reader, and every relationship they record also appears in the surrounding prose.

No task in this lesson requires personal physiology, health data, laboratory access, or physical practical work. Nothing here asks a reader to test anything on themselves or on anyone else.

## Recovery route

If the practice went badly, work out which of four things broke.

**A category came out wrong.** Go back to the two questions in the second scene and answer them one at a time, in writing, before naming anything. Most wrong categories come from naming first and justifying afterwards. Check in particular whether you answered a mechanism question, channel or carrier, when you were asked an energy question.

**Whether work was being done got assumed instead of checked.** Reread the fourth retrieval item in the second scene. A transporter's category does not move with conditions, but whether it is currently pushing anything uphill does, so treating a protein as concentrating something merely because it can is a guess. Ask which side is more concentrated before you claim work is being done.

**The arithmetic lost the voltage term.** Reread steps 3 and 4 of the worked example. In that cell the voltage supplies more than half the driving force, so dropping it is not a small error. If your budget came out near $-2.8$ kJ/mol per ion rather than near $-6.3$, this is what happened.

**The ceiling got treated as a rate, a measurement, or a threshold.** Reread the four limits after the worked example. This is the most consequential error available in this lesson, because it produces a confident answer to a question the calculation never addressed. Free energy gives direction and extent. Nothing in it gives speed. [Proportional models (PREM-QNT-010)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-010) is where the difference between a proportional relation and a power law was set out, and the exponent in this lesson is where that distinction starts paying.

If more than one applies, redo the second and third scenes before the fourth and fifth. Scenes four and five both stand on the budget argument, and neither holds up if the budget is unclear.

:::{source-note}
:claims: claim-transport-taxonomy, claim-facilitated-diffusion-spans-channels-carriers, claim-sglt1-stoichiometry, claim-sglt1-secondary-active, claim-glut2-location-and-mode, claim-sodium-pump-stoichiometry, claim-enterocyte-sodium-and-potential, claim-bilayer-permeability-order, claim-water-transport-passive, claim-ouabain-indirect-block, claim-codata-constants
:sources: source-alberts-transport-principles, source-alberts-active-transport, source-gyimesi-slc5, source-koepsell-intestinal-glucose, source-drozdowski-intestinal-sugar, source-contreras-sodium-pump, source-afshar-enterocyte-model, source-thorsen-enterocyte-model, source-reuss-water-transport, source-codata-gas-constant, source-codata-faraday

Every quantity and category used in these three passes was established earlier in the lesson and carries the same sources: the permeability of small nonpolar molecules, the channel and carrier mechanisms and the statement that all channels and many carriers are passive, the 2:1 stoichiometry of SGLT1 and its location and secondary-active mechanism, GLUT2's basolateral position and facilitated-diffusion mode, the pump's three-for-two cycle per ATP, the ouabain result, the passive nature of water movement, and the two exact constants. The enterocyte sodium concentrations and the apical membrane potential come from a 2021 computational study of enterocyte glucose uptake, with the luminal and cytosolic sodium figures corroborated independently by a 2014 enterocyte model.

The three practice scenarios are constructed teaching tasks and not reports of experiments. No source cited here measured a cell at 30 mM cytosolic sodium, and no source cited here inhibited a pump in an epithelial sheet and recorded the time course of glucose uptake. All arithmetic in pass two, the power-law check that the factor 2.78 equals $1.67^{2}$, and the whole of the reasoning in pass three, including the shape of the decline in time and the argument that a gradual fall is evidence against a direct ATP requirement, are this lesson's own. The vesicle experiment named in the second part of pass three is offered as the test that would settle the question and is not reported anywhere in this lesson as having been done.
:::
