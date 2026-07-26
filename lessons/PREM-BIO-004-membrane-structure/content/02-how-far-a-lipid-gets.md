# How far one phospholipid gets in a second

*Fluid* is a word that gets attached to membrane diagrams and then does no work. This scene turns it into two numbers and a ratio, because the ratio is where the biology is.

Take one phospholipid in the apical membrane of an absorptive crypt cell. It can do two kinds of moving. It can slide sideways past its neighbours, staying in the layer it is in. Or it can turn over and cross to the other layer, head first through the water-avoiding interior. Both are described as diffusion and the two happen at wildly different rates.

## Sideways

A lipid in a bilayer swaps places with a neighbour about $10^{7}$ times a second. That gives a lateral diffusion coefficient of roughly $10^{-8}\ \mathrm{cm^2/s}$.

Convert that into units a cell is measured in. One centimetre is $10^{4}$ micrometres, so one square centimetre is $10^{8}$ square micrometres, and

:::{equation}
:label: equation-diffusion-coefficient

D \approx 10^{-8}\ \mathrm{cm^2\,s^{-1}} \times 10^{8}\ \mathrm{\mu m^2\,cm^{-2}} = 1\ \mathrm{\mu m^2\,s^{-1}}
:::

For a molecule wandering in a plane, the mean square distance travelled grows in proportion to time:

:::{equation}
:label: equation-mean-square-displacement

\langle r^2 \rangle = 4Dt
:::

In words, and this is the reading path if the algebra is not doing anything for you: the *square* of the typical distance grows in step with the time, so the distance itself grows in step with the square root of the time. Going four times as far takes sixteen times as long.

:::{worked-example}
:id: worked-example-lipid-crossing-a-cell

**Question.** A colonic absorptive cell is of order 20 µm across. Taking $D = 1\ \mathrm{\mu m^2\,s^{-1}}$, roughly how long does one phospholipid take to diffuse that far in the plane of the membrane?

**Step 1. Check the relation on a case you already have.** At $t = 1$ s, $\langle r^2 \rangle = 4 \times 1 \times 1 = 4\ \mathrm{\mu m^2}$, so $r = 2$ µm. That is the published figure: an average lipid diffuses about the length of a large bacterium in about a second. The relation reproduces a number nobody fitted it to, which is the cheapest check available and worth doing before trusting it.

**Step 2. Rearrange for time.** From $\langle r^2 \rangle = 4Dt$, $t = r^2 / (4D)$.

**Step 3. Substitute.** $t = (20\ \mathrm{\mu m})^2 / (4 \times 1\ \mathrm{\mu m^2\,s^{-1}}) = 400 / 4 = 100$ s.

**Answer.** About a hundred seconds, which is between one and two minutes.

**Step 4. Notice the scaling before you leave.** Ten times the distance of step 1 cost a hundred times the time. That is the same square-root relation read from the other end: distance grows as the square root of time, so time grows as the square of the distance. It is why diffusion is an excellent way to move a molecule across a cell and a hopeless way to move one across a tissue.

**Step 5. Correct the idealisation.** The coefficient above comes from a bilayer of pure lipid. In the plasma membrane of a living cell, lipid tracers diffuse about four times more slowly, around 0.5 to 4 µm²/s against 5 to 15 µm²/s in model membranes, because a living membrane is crowded in ways a model bilayer is not. Redo step 3 at $D = 0.5\ \mathrm{\mu m^2\,s^{-1}}$ and you get 200 s. The answer is a couple of minutes either way, and quoting it to three figures would be inventing precision.
:::

## Across

Now the other move. A phospholipid crossing from one layer to the other has to drag its water-attracting head through the water-avoiding interior, and that is expensive in exactly the way the first scene described. In synthetic bilayers a given lipid makes that crossing less than once a month. In real plasma membranes, an established difference between the two layers takes several days to run down on its own, without enzymes to help it along.

## The ratio is the point

Put the two rates side by side, in the same units.

| Movement | How often, per lipid | Time to move once |
| --- | --- | --- |
| Swapping places with a neighbour, in the plane | about $10^{7}$ per second | about $10^{-7}$ s |
| Turning over to the other layer, in a synthetic bilayer | less than about $4\times10^{-7}$ per second | more than a month |

:::{check}
:id: check-orders-of-magnitude-fluidity
:kind: retrieval

[Powers, roots, and scale (PREM-QNT-005)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-005) taught you to compare quantities by subtracting their exponents.

Divide the sideways rate by the across rate. How many orders of magnitude separate them? Then say, in one sentence, what that number licenses you to call the membrane.
:::

Dividing $10^{7}$ by about $4\times10^{-7}$ gives roughly $2.5\times10^{13}$, so the two rates are separated by about thirteen orders of magnitude. Movement within a layer and movement between layers are not two settings of one dial; they are different physical events with almost nothing in common but the word *diffusion*.

Thirteen orders of magnitude is what licenses the phrase **two-dimensional fluid**. A membrane is genuinely liquid in its own plane, so its components mix, rearrange, and find each other freely there. In the third dimension it is effectively solid.

Proteins follow the same rule, which is the strongest evidence that the rule is about the structure and not about lipids. A membrane protein rotates about an axis running across the membrane and many diffuse laterally, and none of them flips over. The classic demonstration fused a mouse cell to a human cell: at first each set of surface proteins stayed on its own half of the joined cell, and within about half an hour the two sets had mixed across the whole surface. Sideways, freely; over, never. A protein inserted the right way round stays that way round for its whole working life, and the fourth scene turns that into an entire layer of biological organisation.

One more thing the ratio buys, and it goes back to scene one. A sheet whose components slide past each other is a sheet that can bend, bud, fuse, close a puncture, and open around a protein being inserted, all without breaking anything. Fluidity is not a decorative property. It is the mechanism behind self-sealing.

:::{source-note}
:claims: claim-lateral-diffusion-rate, claim-cell-membrane-diffusion-slower, claim-flip-flop-rate, claim-two-dimensional-fluid, claim-membrane-protein-mobility, claim-enterocyte-context
:sources: source-alberts-lipid-bilayer, source-bernardino-plasma-membrane, source-segawa-flippases, source-alberts-membrane-proteins, source-nguyen-colonic-crypt

A cell-biology textbook chapter supplies the exchange rate of about $10^{7}$ per second with a neighbour, the lateral diffusion coefficient of about $10^{-8}\ \mathrm{cm^2/s}$, the resulting figure of about 2 µm per second, the description of the bilayer as a two-dimensional fluid, and the statement that in synthetic bilayers a phospholipid crosses between layers less than once a month. A second chapter of the same textbook supplies the protein behaviour: membrane proteins rotate about an axis across the bilayer and many diffuse laterally while none flip-flops across it, and in the fused mouse and human cell the two sets of surface proteins, at first confined to their own halves, mixed over the entire cell surface within about half an hour. A review of plasma-membrane organisation supplies the measured slowdown in living cells, at 0.5 to 4 µm²/s against 5 to 15 µm²/s in model membranes. A review of plasma-membrane lipid transporters supplies the half-time of several days for an established asymmetry to run down without enzymatic help. A review of colonic crypt biology supplies the absorptive-cell context.

The unit conversion, the rearrangement of the mean-square-displacement relation, the 20 µm crossing time, the recomputation at the slower coefficient, and the subtraction of exponents are this lesson's own arithmetic. The relation $\langle r^2 \rangle = 4Dt$ is the standard two-dimensional random-walk result and is used here as a model with a stated idealisation: it assumes free diffusion in a uniform plane, which the fifth scene shows the real apical membrane is not.
:::
