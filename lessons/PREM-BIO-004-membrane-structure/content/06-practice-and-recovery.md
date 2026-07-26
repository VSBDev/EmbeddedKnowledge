# Practice: predict the direction, then defend it

Three passes. The first hands you the relation, the second hands you less, and the third hands you a situation and nothing else.

## Pass one, with the reasoning named for you

:::{check}
:id: check-practice-composition-prediction
:kind: practice

Two related organisms live at different temperatures, one at about 5 °C and one at about 35 °C. Both hold their membranes at a working viscosity.

1. Which one would you expect to build more *cis* double bonds into its membrane lipids, and why?
2. Which one would you expect to build longer hydrocarbon chains, and why?
3. Name one thing you would have to measure to find out whether your prediction is right, and one reason it might fail.
:::

The cold organism needs more *cis* double bonds. Kinks obstruct packing, so a kinked membrane stays liquid at a lower temperature, and an organism at 5 °C is closer to freezing its membranes than one at 35 °C. The warm organism can afford longer chains: longer chains interact more strongly along their length and raise the transition temperature, which is a problem in the cold and not in the warmth. Both answers come out of the same two rows of the third scene's table.

To test it you would measure the fatty-acid composition of membrane lipid from each organism grown at its own temperature, and compare chain lengths and the proportion of unsaturated chains. It might fail because the general principle names several strategies, including branched chains and changes to the head groups, and an organism may reach the same viscosity by a route other than the two you predicted. A prediction about the *outcome* is safer than a prediction about the *mechanism*.

## Pass two, with the numbers and not the method

:::{check}
:id: check-practice-diffusion-ladder
:kind: practice

Take $D = 1\ \mathrm{\mu m^2\,s^{-1}}$ for a lipid in the plane of a membrane, and $\langle r^2 \rangle = 4Dt$.

1. A microvillus is about 1 µm long. How long does a lipid take to diffuse from its base to its tip?
2. The cell is about 20 µm across. How long to cross that?
3. Question 2 is twenty times the distance of question 1. By what factor is it longer in time, and why is that not twenty?
4. A lipid is delivered into the outer layer of the apical membrane. With no enzyme acting on it, roughly how long before it appears in the inner layer, and what would change that answer to seconds?
:::

For the microvillus, $t = r^2/(4D) = 1/4 = 0.25$ s. For the cell width, $t = 400/4 = 100$ s. That is four hundred times longer for twenty times the distance, because the relation puts time in proportion to the *square* of the distance, and $20^2 = 400$. A learner who answers twenty has used a proportional model where a square-law model belongs, which is the single most common way this arithmetic goes wrong.

For the fourth part, days. Spontaneous crossing between the layers has a half-time of several days, so on its own the lipid stays where it was put for a very long time by cellular standards. A scramblase switched on in that membrane would move phospholipids in both directions without ATP and randomise the distribution, collapsing the difference in seconds to minutes. Note that the enzyme changes the mechanism rather than accelerating the spontaneous one.

## Pass three, with nothing but the situation

:::{check}
:id: check-practice-fence-failure
:kind: practice

A cultured epithelial monolayer is treated so that its tight junctions come apart, leaving the cells alive, still attached to each other by other junctions, and with normal membranes.

1. Predict what happens over the next few minutes to a fluorescent lipid sitting in the *outer* layer of the apical membrane.
2. Predict what happens to a fluorescent lipid sitting in the *inner* layer of the same membrane.
3. A colleague concludes that the tight junction is therefore what puts each membrane protein on the correct face in the first place. Say what is wrong with that inference and what evidence would settle it.
4. State one thing about the apical membrane that this treatment would *not* change.
:::

The outer-layer label spreads to the basolateral surface. It was the fence that was holding it, and lateral diffusion crosses a cell in a couple of minutes once nothing is in the way. The inner-layer label does essentially nothing new: the fence never acted on the inner layer, so that label was already free to redistribute and had done so.

The colleague's inference confuses two mechanisms. The fence experiment shows the junction *retains* an outer-layer difference that already exists; it says nothing about how a protein reaches the apical face to begin with. Sorting during delivery and retention after arrival are separate processes, and the treatment described tests only the second. Settling it needs an experiment that follows newly made protein from synthesis to surface and asks where it is first inserted, with the junction intact and again with it disrupted.

The thing that would not change is the apical membrane's own lipid composition, at least at first. Its glycolipid enrichment and the liquid-ordered domains those lipids form are properties of what the membrane is made of, and a junction coming apart does not remove a glycolipid from a bilayer. Composition and confinement are two different mechanisms holding the same arrangement in place, which is why the cell uses both.

## Accessibility and alternatives

Every figure in this lesson carries a long description that states its content and the conclusion drawn from it, and no task depends on seeing either one. The membrane components figure is an inventory of parts, all of which are also named and defined in the prose of the first scene. The two-faces diagram is a set of labelled relationships, all of which are stated in the fifth scene's sentences.

Both figures use colour, and neither carries information by colour alone: every element the lesson refers to is labelled in text.

The two displayed relations in the second scene are each restated in words next to the symbols. The unit conversion is written out in full, and the square-root behaviour of diffusion distance is given as a sentence beside the equation, so the relation can be followed without reading the algebra. The tables are semantic text and read correctly in a screen reader in row order, and every direction they record is also given in the surrounding prose.

No task in this lesson requires personal physiology, health data, laboratory access, or physical practical work.

## Recovery route

If the practice went badly, the useful question is which of four things broke.

**A direction came out backwards.** Go back to the table in the third scene and re-read the mechanism column instead of the direction column. Every direction in this lesson follows from one of two mechanisms: how easily the chains pack, and how much thermal motion they have. A direction memorised without its mechanism will invert under a rephrased question.

**Cholesterol went one way when it should have gone both.** Reread the second half of the third scene. The test is whether you asked *relative to what starting state*. If your answer did not name a temperature or a starting fluidity, it was incomplete regardless of which direction you chose.

**The diffusion arithmetic gave a factor of twenty instead of four hundred.** Reread the fourth step of the worked example in the second scene, then redo pass two. [Proportional models (PREM-QNT-010)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-010) is where the difference between a proportional and a square-law relation was set out, and this is the same distinction in a new place.

**The fence and the sorting got mixed up.** Reread the investigation in the fifth scene, paying attention to what the experiment varied and what it left alone. The experiment moved a label into one layer or two and watched where it went. Nothing in it followed a newly made molecule from synthesis to surface, so nothing in it can answer a question about delivery.

If more than one of those applies, work through the second and third scenes again before the fourth and fifth. Scenes four and five are both built on the rate comparison, and they do not stand up on their own if that comparison is unclear.

:::{source-note}
:claims: claim-chain-and-unsaturation, claim-phase-transition, claim-homeoviscous-adaptation, claim-lateral-diffusion-rate, claim-flip-flop-rate, claim-flippase-scramblase, claim-tight-junction-fence, claim-brush-border-lipids, claim-microvillus-dimensions
:sources: source-alberts-lipid-bilayer, source-hoogerland-homeoviscous, source-segawa-flippases, source-hankins-flippases, source-vanmeer-tight-junction, source-alberts-membrane-proteins, source-danielsen-brush-border, source-brown-microvillar

Every quantity and direction used in these three passes is the one established earlier in the lesson and carries the same sources. The two organisms at 5 °C and 35 °C are a constructed prediction task built on the sourced general principle of homeoviscous adaptation, not a report of any measured species pair; the sourced material also names branched chains and head groups among the available strategies, which is why the third part of pass one asks how the prediction could fail. The disrupted monolayer in pass three is likewise constructed, and its expected outcomes follow from the outer-layer fence result and the lateral diffusion rate; no study cited here performed that treatment. The distinction between retention and sorting is drawn from the limits the fence experiment itself sets, and no source cited here reports a sorting mechanism.
:::
