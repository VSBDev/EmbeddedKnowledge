# Clinical wrap-up: the route that stayed open

:::{callout}
:kind: boundary
:id: callout-teaching-boundary

Teaching example, not medical advice. No dose, composition, formulation, concentration, osmolarity, regimen, volume, duration, threshold, indication, contraindication, monitoring plan, or recommendation about any patient appears anywhere in this lesson, and none is implied. Nothing here describes how to prepare or give anything to anyone. The disease and the therapy are real and are discussed only as the setting for a mechanism, and the reasoning below is about membrane transport. This is a reasoning exercise about coupled transport, worked with the tools the lesson has already built.
:::

Cholera is the cleanest case in physiology for the argument this lesson has been making, because it removes one route across an epithelium and leaves another one standing, and the surviving route is the one this lesson has been describing.

## What the toxin does, and what it leaves alone

*Vibrio cholerae* is not invasive. It stays in the lumen and works through a secreted toxin. One subunit of that toxin, once inside the cell, transfers ADP-ribose onto a specific arginine residue of the stimulatory G protein's alpha subunit. That modification disables the G protein's own ability to switch itself off, locking it in its active, GTP-bound state. Adenylate cyclase is then stimulated without pause, cyclic AMP stays high, protein kinase A is activated, and it phosphorylates CFTR, a chloride channel in the apical membrane. Chloride secretion into the lumen rises, water follows it osmotically in large volumes, and that is the diarrhoea.

Read that chain again with the fifth scene in mind. Water was never pumped anywhere. Chloride went out, and water followed the solute, in exactly the direction the osmolality difference pointed. The disease is a solute-transport disorder whose symptom is water.

Now the part that matters. The toxin does not kill the cell it acts on; it alters a signalling pathway. Histologically the small-intestinal lining stays intact, and light and electron microscopy of it look normal. There is no destroyed epithelium, no stripped brush border, no missing transporters. Every protein in the second scene's diagram is still in place and still working. What has changed is a signalling molecule's concentration.

That is the whole basis of what follows. A patient losing litres of fluid has an epithelium that is, structurally, fine.

## Why an oral solution can work at all

The reason a drink helps is that raised cyclic AMP does not act on everything equally.

Cyclic AMP inhibits the electroneutral sodium-chloride absorptive route. It does not inhibit glucose-stimulated sodium absorption, which runs through a cyclic-AMP-independent transport process, and that transporter was later identified as SGLT1. So while the toxin is driving chloride and water outward through one apical protein, a second apical protein is still able to bring sodium inward, provided glucose is there to couple to. Without glucose present, intestinal sodium is not actively absorbed by that route, because the route is a cotransporter and a cotransporter needs both of its substrates.

Assemble that with the fifth scene and the therapy explains itself. Supply glucose and sodium together in the lumen. SGLT1 carries both inward, using the sodium electrochemical gradient the basolateral pump is still maintaining. Sodium and glucose leave the cell on the blood side. The solute has been moved across the epithelium, and water follows it, because water always follows solute. Absorption and secretion are then running at the same time through different proteins in the same membrane, and the patient's balance depends on which is larger.

That is why the therapy works orally. It needs no needle and no sterile intravenous fluid, because the absorbing machinery is intact and the route it uses was only ever missing a substrate to couple to.

## Costing it with this lesson's own tools

Raised cyclic AMP has an effect the third scene lets you follow. In murine small-intestinal crypt enteroids, enterocyte basolateral membrane potential averages about $-40$ mV, and a cyclic-AMP agonist depolarises those cells to about $-25$ mV. Depolarisation reduces the voltage term in the sodium budget, and the voltage term was the larger half.

Run the arithmetic as a sensitivity check, keeping the sodium concentrations at 150 mM outside and 50 mM inside.

| Membrane potential | Voltage term | Budget for 2 sodium | 2:1 ceiling |
| --- | --- | --- | --- |
| $-36$ mV | $-3.47$ kJ/mol | $-12.6$ kJ/mol | about 133 |
| $-25$ mV | $-2.41$ kJ/mol | $-10.5$ kJ/mol | about 58 |
| $0$ mV | $0$ | $-5.7$ kJ/mol | about 9 |

Two things follow, and only the second is worth much.

The ceiling falls, by rather more than the voltage change alone would suggest, because the exponent is 2. Between $-36$ and $-25$ mV it drops by a factor of about 2.3.

And it does not matter. Even with the voltage term deleted altogether, which is a more extreme change than anything reported, the coupled route can still hold glucose about ninefold above the lumen. The concentrating power available is far more than the therapy needs, because the job is to absorb solute from a lumen that has plenty, not to scavenge the last trace of it. A mechanism can lose most of its thermodynamic margin and still be entirely adequate for the work in front of it.

Be clear about what that table is. It is this lesson's arithmetic applied to a stated change, and it stacks two approximations: the apical potential comes from rabbit ileum, the depolarisation from mouse crypt enteroids treated with a drug that raises cyclic AMP and not from cholera toxin, and one figure is an apical measurement while the other is basolateral. It is not a calculation of what cholera does to a human enterocyte, and it is not offered as one. What survives those approximations is the direction of the change and the fact that the conclusion holds across the whole range, which is all the argument needs. Published work reports the glucose-coupled route as still functional during cholera, so if anything the arithmetic here is pessimistic.

## What the therapy does not do

Precision matters more here than enthusiasm.

An oral rehydration solution replaces what is being lost. It does not stop the secretion, it does not neutralise the toxin, and it does not clear the infection. Standard glucose-based solutions of the kind first developed do not substantially reduce stool volume or shorten the illness; they were built to replace water and electrolytes lost in stool, and that is what they do. The patient still has cholera. What has changed is that the losses are now being matched by intake, so the balance across the gut can be net positive while the illness runs its course.

Nor is it right to say that salt water alone is not absorbed. The defensible statement is narrower and more interesting: raised cyclic AMP shuts down the electroneutral sodium-chloride route while leaving the glucose-coupled route alone, so a solution containing sodium without a substrate for cotransport is working against a route that has been switched off, while a solution containing both is working through one that has not.

## What was actually gained

The historical claim needs the same discipline. Cholera case-fatality figures of 40 to 60 per cent or higher persisted long after 1831, and rarely fell below 30 per cent in the era before modern rehydration. With modern rehydration methods the figure is under 1 per cent. That improvement belongs to rehydration as a whole, intravenous therapy included, and it would be wrong to hand all of it to the oral route.

The distinctive contribution of the oral route is not a bigger number. It is that the same result became reachable without intravenous access, sterile fluids, or trained staff, which is what allows it to be delivered where the disease actually occurs. That claim rests on the mechanism in this scene: it works because the epithelium is undamaged and one transporter, energised by a gradient a pump is still maintaining, was never switched off.

Which brings the argument back round to where it started. The previous lesson established that a membrane is a barrier with an organised composition. This one has shown what it takes to move something across it deliberately, and that the decisive question about any such crossing is not which protein is involved but which gradient is being spent, and by whom.

:::{source-note}
:claims: claim-cholera-toxin-mechanism, claim-cholera-epithelium-intact, claim-camp-independent-glucose-sodium, claim-ors-replaces-losses, claim-cholera-case-fatality, claim-enterocyte-sodium-and-potential, claim-camp-depolarises-enterocyte, claim-sglt1-stoichiometry, claim-sglt1-secondary-active, claim-water-transport-passive, claim-codata-constants
:sources: source-white-cholera-toxin, source-cook-tropical-cholera, source-binder-ort, source-buccigrossi-ors-glucose, source-nalin-rehydration-history, source-suh-ort, source-afshar-enterocyte-model, source-thorsen-enterocyte-model, source-liu-enteroid-potential, source-gyimesi-slc5, source-koepsell-intestinal-glucose, source-drozdowski-intestinal-sugar, source-reuss-water-transport, source-codata-gas-constant, source-codata-faraday

A 2022 review of cholera toxin's manipulation of cell signalling supplies the transfer of ADP-ribose onto a named arginine of the stimulatory G protein alpha subunit, the inhibition of that protein's intrinsic GTPase activity and its locking in the active GTP-bound state, the prolonged cyclic AMP production through persistent stimulation of adenylate cyclase, the activation of protein kinase A and its phosphorylation of CFTR promoting chloride secretion into the lumen, the osmotic movement of large volumes of water into the lumen as the origin of the diarrhoea, and the statement that the toxin does not kill the intoxicated cell but alters a cyclic-AMP-dependent signalling pathway. A 2009 tropical-medicine reference supplies the non-invasiveness of the organism and its action through an enterotoxin, and the histological finding that the small-intestinal mucosa is intact with normal light and electron microscopical appearances. A 2014 review of oral rehydration therapy supplies the statement that cholera enterotoxin, through cyclic AMP, did not inhibit glucose-stimulated sodium and therefore fluid absorption, that glucose stimulates sodium absorption by a cyclic-AMP-independent transport process despite cyclic AMP stimulating active chloride secretion, and that the transporter concerned was subsequently identified as SGLT1. A 2020 study of oral rehydration solutions supplies SGLT1's stoichiometric transport of two sodium ions with one glucose molecule, its location on the apical membrane of intestinal epithelial cells, and the statement that without glucose intestinal sodium is not actively absorbed. A 2010 review of oral rehydration therapy supplies the statement that the standard solution does not substantially decrease either stool volume or the duration of diarrhoea and has been used to replace water and electrolytes lost in stools. A 2022 history of rehydration therapy supplies the cholera case-fatality rates of 40 to 60 per cent or higher persisting long after 1831, the statement that rates rarely fell below 30 per cent before modern therapy, the modern figure of less than 1 per cent attributed to modern rehydration methodology generally, and the description of the therapy as achieving a net positive gut balance in which intake exceeds output. A 2021 computational study of enterocyte glucose uptake supplies the luminal and cytosolic sodium concentrations and the apical membrane potential, and a 2014 enterocyte model supplies the luminal and cytosolic sodium figures independently. A 2012 study of murine small-intestinal crypt enteroids supplies the basolateral membrane potential averaging about $-40$ mV and its depolarisation to about $-25$ mV on exposure to a cyclic-AMP agonist. A 2020 review of the SLC5 family and a 2020 review of intestinal glucose transporters supply SGLT1's secondary-active mechanism and the sodium gradient and membrane potential as its driving force. A 2006 review of intestinal sugar transport supplies the indirect coupling of ATP hydrolysis to glucose transport. A 2002 overview of water transport supplies the passive nature of water movement and effective osmolality as its driving force. The two CODATA pages supply the exact constants.

The sensitivity table and every figure in it are this lesson's own arithmetic, computed from the constants and the stated sodium concentrations at the three stated potentials. Its limitations are set out in the scene: the apical potential and the depolarisation come from different species, different membranes, and different preparations, and a cyclic-AMP agonist is not cholera toxin, so the table is an illustration of how the lesson's own relation responds to a stated change and is not a measurement of cholera's effect on any cell. No source cited here computes an accumulation ceiling or reports one falling during infection. The claim that the case-fatality improvement belongs to rehydration generally rather than to the oral route specifically is the sourced attribution stated plainly, and the argument that the oral route's distinctive contribution is its independence from intravenous access and trained staff is this lesson's own reading of the mechanism rather than a sourced quantitative claim. This lesson deliberately does not quote the widely repeated estimate of lives saved by oral rehydration, because the trail behind that figure ends at a source this project cannot access and verify, and an unverifiable number is not improved by being famous.
:::
