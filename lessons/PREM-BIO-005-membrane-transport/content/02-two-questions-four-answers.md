# Two questions, four answers, and the cases that sit on the line

Textbooks give this topic four names. Learning the four names is the least useful thing you can do with them, because the names are the output of a test and the test is the part that transfers. So here is the test first.

## The test

Ask two things about any crossing.

**Does it need a protein?** Some solutes cross the bilayer itself. Others cannot, and for those a protein has to be in the membrane or nothing happens.

**Does it need free energy from somewhere other than the solute's own gradient?** A solute running downhill needs no outside help; the gradient is the energy. A solute going uphill has to be paid for out of something else.

Two yes-or-no questions give four combinations, and the four conventional categories are those four combinations.

| Route | Protein needed | Outside energy needed | Example met in this lesson |
| --- | --- | --- | --- |
| Simple diffusion | No | No | Oxygen and carbon dioxide crossing the bilayer |
| Facilitated diffusion | Yes | No | GLUT2 letting glucose out of the cell |
| Primary active transport | Yes | Yes, ATP split by the protein itself | The sodium-potassium pump |
| Secondary active transport | Yes | Yes, but spent from an ion gradient | SGLT1 bringing glucose in |

The bottom two rows are both called active because both move something uphill. They differ in where the money comes from, and that difference is the whole of the fourth scene.

Active transport is driven in three ways in cells generally. Coupled carriers tie the uphill movement of one solute to the downhill movement of another. ATP-driven pumps tie it to splitting ATP. Light-driven pumps, found mainly in bacteria, tie it to absorbed light. Only the first two appear in a human enterocyte.

Two more words, because they describe direction and say nothing about energy. A **uniporter** carries one solute and nothing else. A **symporter** carries two solutes the same way across the membrane. An **antiporter** carries two in opposite directions. SGLT1 is a symporter: sodium and glucose go in together.

## The route glucose actually takes

One sugar molecule crossing one absorptive cell, an **enterocyte**, meets two of those four categories. The two faces of that cell have names worth fixing now: the **apical** face is the one meeting the lumen, and in an absorptive cell it carries the brush border, so apical, luminal and brush-border all point at the same membrane. The **basolateral** face is the one meeting neighbouring cells and the tissue beneath.

:::{diagram} ../diagrams/transcellular-glucose-route.diagram.json
:alt: Glucose crosses one absorptive cell by two different mechanisms: a sodium-coupled carrier on the luminal face and an uncoupled carrier on the blood face, with the sodium pump restoring the gradient the first one spends.
:longdesc: The route one glucose molecule takes across a single absorptive intestinal cell, in six stages with seven labelled relationships. From the lumen, where sodium is high and glucose is falling, both solutes bind at the apical face to SGLT1, the sodium-glucose cotransporter of the brush border, which moves two sodium ions together with one glucose molecule. Glucose arrives from SGLT1 into the cytosol against its own concentration gradient, and there it can stand above the luminal concentration. From the cytosol glucose leaves downhill and uncoupled through GLUT2 in the basolateral membrane, which carries glucose alone, and reaches the blood side by facilitated diffusion with no energy spent. Separately from the cytosol, the sodium SGLT1 brought in passes to the sodium-potassium ATPase of the basolateral membrane, which exports three sodium ions and imports two potassium ions for every ATP split, delivering that sodium to the blood side. The seventh relationship closes the loop and is drawn as a dashed return: the pump keeps cytosolic sodium low, and that low cytosolic sodium is exactly what SGLT1 spends, so the pump drives the apical step without ever touching it. The picture's conclusion is that one sugar crosses the two membranes of one cell by two different categories of transport, secondary active on the luminal side and facilitated diffusion on the blood side, because the gradient it faces differs at each face, and that only one protein in the whole route splits ATP.
:::

Read the route in order. **SGLT1** sits in the brush-border membrane facing the lumen and carries one glucose molecule inward together with two sodium ions. It is a secondary active transporter, and the energy it uses is the inward sodium gradient. **GLUT2** sits in the basolateral membrane and lets glucose out towards the blood, alone and downhill, by facilitated diffusion. **The sodium-potassium pump**, also basolateral, exports three sodium ions and imports two potassium ions for every ATP molecule it splits, which keeps cytosolic sodium low.

Same sugar. Same cell. Two categories, because the gradient glucose faces on the way in is not the gradient it faces on the way out. That is the argument for carrying the test rather than the four names: the category is a property of the situation, not of the molecule.

## Four places the line is not where you would draw it

A taxonomy is only honest if it admits what sits on its boundaries. This one has four such cases, and every one of them is inside this lesson.

**Facilitated diffusion covers channels and carriers both.** It is tempting to think channels are one category and carriers another. They are not. A channel forms a water-filled pore and lets suitable solutes through, sorting them mostly by size and charge; a carrier binds its solute and changes shape to move it. All channel proteins and many carrier proteins move solutes only downhill, and that whole set is called passive transport or facilitated diffusion. Channel against carrier is a question about mechanism. Passive against active is a question about energy. The two questions cut across each other.

**The sodium-potassium pump is a carrier.** It binds its ions and changes shape, exactly like a carrier does, and it splits ATP while doing so. Anyone who has quietly filed "carrier" under "passive" has to unfile it here.

**SGLT1 moves glucose uphill and splits no ATP.** It is active by any reasonable meaning of the word, because glucose ends up more concentrated than it started, and yet the protein has no ATP to split. If you defined active transport as *uses ATP*, SGLT1 falls off your table. The fourth scene is entirely about this.

**GLUT2 is not always basolateral.** It sits in the basolateral membrane at low luminal glucose, and at high luminal glucose it is reported in the brush-border membrane as well. So the tidy picture of one transporter per face describes a common condition and not a rule, and the diagram above is drawn for the low-luminal-glucose case.

:::{check}
:id: check-retrieval-classify-three
:kind: retrieval

Without looking back at the table, apply the two-part test to each of these and name the category.

1. Carbon dioxide leaving a cell into the blood.
2. Potassium entering the cell on the sodium-potassium pump.
3. Glucose leaving the cell through GLUT2 when cytosolic glucose is higher than blood glucose.
4. Glucose entering the cell through SGLT1 when luminal glucose is *higher* than cytosolic glucose.
:::

Carbon dioxide is a small nonpolar molecule: no protein, no outside energy, simple diffusion. Potassium on the pump needs a protein and needs ATP split by that protein: primary active transport. Glucose out through GLUT2 needs a protein and is running downhill: facilitated diffusion.

The fourth is worth a pause. It is still **secondary active transport**, because that is the mechanism SGLT1 has and the category names the mechanism. The coupling is obligatory: two sodium ions come in with every glucose molecule whether or not the glucose needed the help, so the sodium gradient is being spent either way. What changes with conditions is not the category but whether the mechanism is doing any uphill work. Early in a meal, with the lumen concentrated, glucose is running downhill and the coupling is buying nothing it could not have had for free. Later, when the lumen has been stripped, the same protein is driving glucose uphill and the coupling is the only reason it can.

So the useful discipline is narrower than it first looks. The category belongs to the protein and does not move. The *question of whether work is being done* belongs to the conditions, and that is the thing to check before claiming a transporter is concentrating anything. Assuming a transporter must be working uphill because it is capable of it is the commonest error in this material, and the arithmetic two scenes ahead is where it costs the most.

:::{source-note}
:claims: claim-transport-taxonomy, claim-facilitated-diffusion-spans-channels-carriers, claim-sglt1-stoichiometry, claim-sglt1-secondary-active, claim-glut2-location-and-mode, claim-sodium-pump-stoichiometry, claim-symporters-build-gradients
:sources: source-alberts-transport-principles, source-alberts-active-transport, source-gyimesi-slc5, source-koepsell-intestinal-glucose, source-drozdowski-intestinal-sugar, source-contreras-sodium-pump

A cell-biology textbook chapter on the principles of membrane transport supplies the channel and carrier mechanisms, the statement that channels sort solutes mainly by size and charge while carriers bind their solute and change shape, and the statement that all channel proteins and many carrier proteins allow solutes to cross only downhill in a process called passive transport or facilitated diffusion. A second chapter of the same textbook supplies the three ways cells drive active transport, the definitions of uniporter, symporter and antiporter, the sodium-potassium pump's export of three sodium ions and import of two potassium ions per ATP hydrolysed, and the statement that apical sodium-linked symporters build substantial concentration gradients. A 2020 review of the SLC5 family supplies the 2 sodium to 1 glucose stoichiometry of SGLT1, and the statement that these secondary active transporters move substrates against their concentration gradients using energy from the inwardly directed sodium electrochemical gradient generated by the sodium-potassium ATPase. A 2020 review of small-intestinal glucose transporters supplies SGLT1's location in the brush-border membrane, its description as a secondary active transporter carrying one glucose with two sodium ions on the inward sodium gradient, and GLUT2's location in the basolateral membrane at low luminal glucose and in the brush border as well at high luminal glucose. A 2006 review of intestinal sugar transport supplies GLUT2's carriage of sugars across the basolateral membrane by facilitative diffusion. A 2024 review of the sodium-potassium ATPase supplies the same three-for-two stoichiometry per ATP independently.

The two-part test, the four-cell table built from it, and the argument that a category belongs to a crossing rather than to a molecule are this lesson's own instructional structure rather than any source's. The four boundary cases are drawn from the sourced statements above and assembled here. The fourth retrieval item and its answer are this lesson's own reasoning from the definitions, and no source cited here discusses the direction SGLT1 runs early in a meal.
:::
