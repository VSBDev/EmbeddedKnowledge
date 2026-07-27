# What two sodium ions can buy

Saying SGLT1 is "driven by the sodium gradient" is a description, not a quantity. A gradient has a size, the size sets a budget, and the budget limits how far uphill glucose can be pushed. This scene works that out from measured numbers, and the answer is smaller than most people expect.

## One new quantity first

The arithmetic below is bookkeeping in energy, so it needs one quantity you may not have met. **Free energy** is the part of a system's energy that is available to do work. What matters here is only its sign and its size per mole of stuff moved. A move with a negative free-energy change happens on its own and releases energy that something else can spend. A move with a positive change does not happen on its own and has to be paid for. Everything below is in kilojoules per mole, because a transporter deals in whole molecules and a mole is just a convenient count of them.

Two constants appear. $R$, the gas constant, converts a temperature into an energy per mole, which is what lets a concentration ratio be priced in kilojoules. $F$, the Faraday constant, is the electrical charge carried by one mole of single charges, which is what lets a voltage be priced the same way. Both are exact by definition.

## A charged solute has two gradients, not one

Glucose is uncharged, so for glucose only concentration matters. Sodium carries a charge, which makes it a two-term problem. It responds to its concentration difference and to the voltage across the membrane, and the two are added to give a net driving force called the **electrochemical gradient**.

The cell interior sits negative relative to the outside. The sodium-potassium pump contributes to that, though it is not the only cause: it removes a net positive charge on every cycle, three positive out against two positive in. A positive ion is therefore pulled inward by the voltage as well as pushed inward by the concentration difference. Both terms point the same way for sodium entering, and both have to be counted.

For one mole of an ion moving from outside to inside:

:::{equation}
:label: equation-electrochemical

\Delta G = RT \ln \frac{[\mathrm{Na^+}]_{\text{in}}}{[\mathrm{Na^+}]_{\text{out}}} + zF\Delta\psi
:::

In words: the first term is the gain or cost from the concentration difference, negative when the ion moves from the concentrated side to the dilute side. The second is the gain or cost from the voltage, negative when a positive ion moves towards the negative side. Here $z$ is the ion's charge and $\Delta\psi$ is the membrane potential, taken as inside minus outside. A negative total means the move happens on its own.

:::{worked-example}
:id: worked-example-sodium-budget

**Question.** Using measured values for a small-intestinal absorptive cell, how much free energy does one sodium ion release on entering, how much do two release together, and what is the largest glucose concentration ratio a 2:1 cotransporter could hold with that budget?

**Step 1. Collect the inputs.** Luminal sodium 150 mM, cytosolic sodium about 50 mM, apical membrane potential about $-36$ mV with the interior negative. Those three are measured values for this cell type and the source note records where each comes from. Constants: $R = 8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}$ and $F = 96\,485\ \mathrm{C\,mol^{-1}}$. Temperature is stipulated at 310 K, which is body temperature to the nearest kelvin and is this calculation's own choice rather than a measurement.

Get the quantity that recurs:

$RT = 8.314 \times 310 = 2577\ \mathrm{J\,mol^{-1}} = 2.577\ \mathrm{kJ\,mol^{-1}}$

**Step 2. The concentration term.** Sodium is three times more concentrated in the lumen than in the cytosol, so the ratio inside over outside is $50/150 = 1/3$, and $\ln(1/3) = -1.099$.

$RT \ln(1/3) = 2.577 \times (-1.099) = -2.832\ \mathrm{kJ\,mol^{-1}}$

**Step 3. The voltage term.** Sodium carries $z = +1$, and $-36$ mV is $-0.036$ V. The Faraday constant is per volt, so the millivolts have to be converted first.

$zF\Delta\psi = (+1)(96\,485)(-0.036) = -3473\ \mathrm{J\,mol^{-1}} = -3.473\ \mathrm{kJ\,mol^{-1}}$

**Step 4. Add them, and notice which is bigger.**

$\Delta G = -2.832 + (-3.473) = -6.305\ \mathrm{kJ\,mol^{-1}}$ per mole of sodium entering, or about $-6.3$.

The voltage term is the *larger* of the two, supplying about 55 per cent of the driving force. Anyone picturing "the sodium gradient" as purely a difference in concentration has discarded more than half the budget before starting. In this cell the membrane voltage is the bigger half, and that stays true across every value of cytosolic sodium reported for it.

**Step 5. Two ions, one sugar.** SGLT1 moves two sodium ions per glucose molecule, so the energy available to spend on one glucose is

$2 \times (-6.305) = -12.61\ \mathrm{kJ\,mol^{-1}}$

**Step 6. Turn the budget into a concentration ratio.** Glucose is uncharged, so pushing it uphill costs a concentration term only, $RT \ln(\text{ratio})$, and that cost is positive because the move is uphill. The furthest glucose can be pushed is the ratio at which the cost of going one step further would exactly use up everything the two sodium ions release. So set the positive cost equal to the magnitude of the negative budget:

$RT \ln(\text{ratio}) = 12.61\ \mathrm{kJ\,mol^{-1}}$

$\ln(\text{ratio}) = 12.61 / 2.577 = 4.89$

$\text{ratio} = e^{4.89} \approx 133$

**Answer.** Of order a hundredfold. With these inputs a 2:1 cotransporter could hold cytosolic glucose about 130 times the luminal concentration, and no further.

**Step 7. Check it against a number nobody fitted to it.** A published enterocyte model puts cytosolic glucose near 12 mM under standard conditions. A 130-fold ceiling would let a cell hold 12 mM inside while the lumen was down at $12/130 \approx 0.09$ mM. Luminal glucose during absorption is far above that, so the ceiling is not what limits the cell in ordinary conditions and the mechanism has room to spare. The ceiling here is this lesson's arithmetic and the 12 mM is someone else's model, so the two were arrived at independently, which is what makes the comparison worth making.

**Step 8. Report the precision honestly.** Cytosolic sodium is the weakest input. The experimental figures that study compares against span about 45 to 65 mM, and its own model settles higher, at 63 to 73 mM. Redo step 2 across that whole span and the ceiling runs from about 165 at the low end to about 63 at the high end. Every one of those is of order a hundred, so that is the answer: **of order a hundredfold**. Quoting 133 as though the third digit meant something would be inventing precision the inputs cannot carry, and the 50 mM used above sits at the optimistic end of what has been reported.
:::

## What this number is, and four things it is not

The ceiling is worth having and easy to overread.

It is **an equilibrium limit**. It marks the ratio at which net transport through the coupled carrier would fall to zero, forward and back in balance. A working absorptive cell never gets near it, because glucose is removed continuously through GLUT2 and consumed, which holds the cell far from equilibrium the whole time it is working.

It is **not a measured cytosolic concentration**. Nothing in the arithmetic says the cell reaches 130-fold, and step 7 suggests it does not come close.

It says **nothing whatever about rate**. Free energy fixes which way a process runs and how far it can go. How fast it runs depends on how many copies of the transporter sit in the membrane and how quickly each one cycles, and neither quantity appears anywhere above. A larger budget does not mean faster transport. That is the easiest false step available here, and it is worth naming before you can take it.

It is **not a threshold**. Nothing switches at 130. Approaching the ceiling slows net transport smoothly towards zero.

## Why the stoichiometry is the interesting part

Unpack step 6 algebraically and something appears that connects back to [Proportional models (PREM-QNT-010)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-010).

The budget is the per-ion figure multiplied by the number of ions coupled. Call that number $n$. Budget and $n$ stand in direct proportion, $y = kx$ with the per-ion energy as the constant. Feed that through step 6 and the ceiling becomes

:::{equation}
:label: equation-ceiling-power-law

\text{ceiling} = \left( k \cdot \frac{[\mathrm{Na^+}]_{\text{out}}}{[\mathrm{Na^+}]_{\text{in}}} \right)^{n}, \qquad k = e^{-zF\Delta\psi / RT}

:::

Note where $n$ sits. It is outside the bracket, so it raises the voltage factor $k$ as well as the concentration ratio, and it must: carrying two sodium ions collects the voltage twice over, not once. With the numbers above, $k = e^{3473/2577} = 3.85$, and the sodium ratio is 3, so the bracket is $3.85 \times 3 = 11.5$.

For a fixed stoichiometry this is a power law in the sodium concentration ratio, $y = Kx^{p}$ with the exponent equal to the coupling number. Two consequences follow, and both are checkable against the arithmetic above.

**Each extra coupled ion raises the whole bracket to a higher power.** At $n = 1$ the ceiling is $11.5$. At $n = 2$ it is $11.5^{2} = 133$. This is an exact identity and not a coincidence of rounding: the ceiling at any $n$ is the ceiling at $n = 1$ raised to the power $n$. The second sodium ion did not add to the ceiling. It squared it.

**A sodium gradient that slips costs more than it looks.** Halve the sodium ratio from 3 to 1.5 and the ceiling falls from about 133 to about 33, a factor of four rather than two, because the exponent is 2. A cell that lets cytosolic sodium creep up loses concentrating power as the square.

Real transporters differ in exactly this parameter. SGLT1 couples two sodium ions to each glucose; SGLT2, its relative in the kidney, couples one. The general principle behind the difference is established: coupling stoichiometry sets how far a substrate can be moved against its own gradient, and coupling to several ions is how a transporter generates a large gradient. What the difference is worth in numbers depends on the cell, because a kidney cell's sodium gradient and membrane voltage are its own. The comparison above is the arithmetic for one enterocyte, run twice.

:::{check}
:id: check-practice-recompute-ceiling
:kind: practice

Work these with the numbers already on this page.

1. A cell is treated so that its membrane potential goes to zero while its sodium concentrations stay put. What is the new budget per sodium ion, and what happens to the 2:1 ceiling?
2. Someone reads step 5 and concludes that SGLT1 moves glucose about twice as fast as a 1:1 transporter would. Say what is wrong with that.
:::

For the first: with the voltage gone only the concentration term survives, so the budget per ion is $-2.832$ kJ/mol and the two-ion budget is $-5.66$ kJ/mol. Then $\ln(\text{ratio}) = 5.66/2.577 = 2.20$ and the ceiling is about 9. Removing 55 per cent of the budget took the ceiling from roughly 130 to roughly 9, a factor of about fifteen. A budget that enters through an exponent does not pass its losses on in proportion.

For the second: the conclusion swaps a thermodynamic quantity for a kinetic one. Step 5 doubled the *energy available*, which changes how far uphill glucose can be driven and says nothing about how many molecules cross per second. Rate would need the number of transporters and their turnover, and neither was used. As it happens the doubled budget squares the ceiling instead of doubling it, so even read as a statement about extent the factor of two is wrong.

:::{source-note}
:claims: claim-electrochemical-gradient-two-terms, claim-sodium-pump-electrogenic, claim-enterocyte-sodium-and-potential, claim-sglt1-stoichiometry, claim-sglt2-stoichiometry, claim-stoichiometry-sets-gradient, claim-codata-constants, claim-enterocyte-cytosolic-glucose
:sources: source-alberts-transport-principles, source-contreras-sodium-pump, source-afshar-enterocyte-model, source-gyimesi-slc5, source-fitzgerald-stoichiometry, source-codata-gas-constant, source-codata-faraday, source-thorsen-enterocyte-model, source-koepsell-intestinal-glucose

A cell-biology textbook chapter supplies the statement that a concentration gradient and an electrical gradient combine into a net driving force, the electrochemical gradient, for each charged solute. A 2024 review of the sodium-potassium ATPase supplies the removal of a net positive charge on each pump cycle and its contribution to a negative membrane potential. A 2021 computational study of enterocyte glucose uptake supplies the luminal sodium of 150 mM, the experimental intracellular sodium range of about 45 to 65 mM, the higher intracellular sodium of 63 to 73 mM that its own model settles at, and the apical membrane potential of about $-36$ mV with a stated uncertainty of 0.5 mV. That study attributes the sodium range and the potential to microelectrode measurements on rabbit ileum published in 1976 and 1971 respectively; this lesson has not read those primary papers and cites both figures as that study reports them, which is why the arithmetic above is carried across the whole reported span rather than at one value. This lesson does not use that study's basolateral membrane potential. A 2020 review of the SLC5 family supplies the 2:1 stoichiometry of SGLT1 and the 1:1 stoichiometry of SGLT2. A 2017 methods paper supplies the general principle that coupling stoichiometry dictates the extent to which a substrate can be moved against its concentration gradient and that coupling to several ions lets a transporter generate a large substrate gradient. The CODATA pages for the molar gas constant and the Faraday constant supply their values and the fact that both are exact. A 2014 enterocyte model supplies the cytosolic glucose figure near 12 mM used at step 7. A 2020 review of intestinal glucose transporters supplies the statement that SGLT1's driving force comes from the transmembrane sodium gradient together with the membrane potential, which is why this calculation carries two terms.

Every arithmetic step here is this lesson's own: the value of $RT$ at 310 K, both terms of the sodium budget, the doubling for 2:1 coupling, the conversion of the budget into a concentration ratio, the ceiling of about 133, the recomputation across the reported sodium range, the comparison with the cytosolic glucose figure, the algebraic rearrangement into a power law and the value of $k$, the ceiling of 11.5 at $n = 1$, the factor of four from halving the sodium ratio, and both answers in the practice check. The temperature of 310 K is stipulated by this lesson. No source cited here computes a numerical accumulation ceiling for an enterocyte, and no source cited here states the four limits set out under "what this number is not"; those are this lesson's own reasoning about what a free-energy calculation can and cannot support, and a reviewer should read them as such. Published comparisons of SGLT1 against SGLT2 concentrating ability are quoted for renal transporters with renal parameters, so they are described qualitatively here rather than reproduced as a figure, because they would not reconcile with the enterocyte inputs used above.
:::
