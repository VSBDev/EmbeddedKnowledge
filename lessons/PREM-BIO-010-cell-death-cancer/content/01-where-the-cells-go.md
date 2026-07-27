# Where a hundred and seventy-five cells a day go

Hold one crypt in mind. About 700 cells, sunk into the wall of your descending colon, its opening facing the lumen. It has been there for years and it still holds about 700 cells.

It has also replaced all of them, roughly every four days, for as long as you have had it.

Lesson 01 of this block (PREM-05.01) did that arithmetic and then left it standing. Seven hundred cells over four days is about 175 new cells a day from one crypt, as a steady-state estimate, and not a statement that every crypt cell lives exactly four days. And it drew the consequence that this lesson exists to explain: for the population to stay constant, cells must leave at the same average rate they are made.

So about 175 cells a day leave one crypt. Not fewer, on average, or the crypt would be shrinking. Not more, or it would be too. Where do they go, and what makes them go?

## The half of the loop nobody has explained yet

Every lesson in this block has followed the arrival side. Lesson 06 gave the Wnt gradient a cell reads to know how far up it is. Lesson 07 gave the integrins holding it to the basement membrane, the junctions holding it to its neighbours, and the climb itself at around 4 micrometres an hour. Lesson 08 gives the division at the base that supplies every cell making the journey.

Departure has been mentioned in nearly all of them and explained in none. Lesson 01 said worn cells are shed into the lumen. Lesson 04 said a phosphatidylserine molecule appearing on the outer surface of a dying cell is read by macrophages as an instruction to engulf it, and then handed the control of that removal to this lesson. Lesson 07 said cells are shed at the surface, used the word extruded once, and defined it nowhere.

Here is the loop those pieces belong to.

:::{diagram} ../diagrams/renewal-loop.diagram.json
:alt: A five-stage loop: division at the crypt base, climb and differentiate, work at the surface, apoptosis at the top, shed into the lumen, and back to division because the rate of loss sets the rate of replacement.
:longdesc: Five stages joined into a closed loop of five links. Division at the crypt base leads to climb and differentiate, with daughters pushed upward at around four micrometres per hour in the lower half of the crypt. Climb and differentiate leads to work at the surface, differentiation being finished by the crypt top. Work at the surface leads to apoptosis at the top after a few days of work. Apoptosis at the top leads to shed into the lumen, the cell being removed without releasing its contents into the tissue. The fifth link closes the loop from shed into the lumen back to division at the crypt base, because the rate of loss sets the rate that must be replaced. The loop is a balance and not only a sequence: cell number stays constant only while traffic is equal at every stage, and the loop gives four separate places a failure could sit, at production, at the climb, at the death step, and at removal.
:::

Read the closing link twice. It runs from loss back to production, which is the direction that makes the arrangement stable. A tissue that renews itself this fast is a tissue whose disposal has to work as reliably as its manufacture, and there is no version of the loop where only one half matters.

## What this lesson has to establish

Three questions, in order.

First, what actually removes a cell at the top? The answer is a programme the cell runs on itself, and running it tidily matters enormously to a sheet whose whole job is to stay sealed.

Second, what tells that cell to run the programme? Part of the answer is where the cell is. An epithelial cell that loses its grip on the matrix beneath it dies, and that turns out to be a rule the tissue depends on.

Third, and this is the one worth staying for: what happens when the climb stops ending? Not what happens to one cell. What happens to a tissue that keeps making cells at the base while removal at the top has stopped working. Colorectal cancer is the clinical form of that failure, and lesson 01 promised that this block would close where it opened, on the same structure, from the other side.

There is also a fourth possibility the loop does not show, and it is the one most accounts of this material get wrong. A cell can stop dividing permanently and stay in the tissue, alive, doing things. That is neither division nor death, it has consequences in both directions, and it gets a scene of its own.

:::{check}
:id: check-prerequisites
:kind: retrieval

Before going on, retrieve three things from earlier in the block. Answer each in a sentence, then compare.

1. In lesson 06, what does a colonic crypt cell use to work out how far it is from the base, and which direction does that quantity run?
2. In lesson 07, what holds the base of a crypt cell to the matrix underneath the sheet?
3. If a crypt makes about 175 cells a day and holds about 700, what must be true of the rate at which cells leave?

**Answers.** First: Wnt signalling, which is highest at the crypt base and decreases progressively up the crypt axis, so a cell reads its height from how much Wnt signal it is receiving. Second: integrins, binding the laminins and fibronectin of the basement membrane, with integrin-linked kinase joining the integrin beta1 tail to actin inside the cell. Third: it must also be about 175 cells a day, averaged over time. Any sustained mismatch changes the number of cells in the crypt, in one direction or the other.

If the first two did not come back, the lesson is still followable and will simply be harder work. The recovery route in scene 7 says exactly which scenes of lessons 06 and 07 to reread and what to take from each.
:::

:::{callout}
:id: callout-borrowed-cycle-vocabulary
:kind: note

This lesson borrows one thing from the cell cycle and does not teach it: that the cycle contains points where a cell can be held back, and that a cell with damaged DNA can be arrested at one of those points long enough to repair its genome before continuing. That is the whole of the checkpoint account this lesson's argument requires.

Lesson 08 of this block (PREM-05.08) owns the cell cycle, mitosis, chromosome segregation and the checkpoints, and owns stem-cell renewal in the crypt. Everything this lesson says about checkpoints is the minimum its own argument needs, sourced here independently, and nothing in it should be read as a summary of that lesson. Where you want the machinery, that is where it lives.
:::

:::{callout}
:id: callout-lesson-boundary
:kind: boundary

The last third of this lesson is about cancer, and colorectal cancer specifically, because that is the disease this block's structure produces when its control fails. Everything here is a teaching example and not medical advice. The lesson states no diagnosis, no prognosis, no treatment, no screening recommendation and no personal risk, and the population figures it quotes describe studied groups and say nothing about any reader. Clinical oncology management is outside this course's scope by design and is not discussed.
:::

:::{source-note}
:claims: claim-crypt-population, claim-colon-renewal-interval, claim-crypt-homeostatic-balance, claim-crypt-integrin-attachment, claim-ps-eat-me-signal, claim-damage-checkpoint-minimum
:sources: source-vanderwath-crypt-model, source-nguyen-colonic-crypt, source-benoit-crypt-integrins, source-segawa-flippases, source-bieging-p53-suppression

A 2013 modelling study of the colonic crypt supplies the count of approximately 700 cells in a crypt of the human descending colon, arranged about 32 along its length and about 22 around its circumference, and the replacement of the human intestinal epithelium every 3 to 5 days. A 2025 review of the colonic crypt supplies the same 3-to-5-day renewal interval for the colon with enterocytes replaced every 4 to 5 days, the statement that mature differentiated cells continue moving upward until they undergo apoptosis and are replaced, and the statement that maintaining crypt homeostasis requires a balance of proliferation, differentiation, apoptosis and extrusion. A 2012 review of the human intestinal crypt supplies the integrin attachment to a basement membrane of laminins and fibronectin. A 2014 review of flippases and scramblases supplies the exposure of phosphatidylserine on an apoptotic cell as an eat-me signal for macrophages, which is the fact lesson 04 established and handed forward. A 2014 review of p53 supplies the minimum checkpoint statement borrowed above, that arrest in response to DNA-damage signals allows a cell to repair its genome before continuing through the cycle.

The figure of about 175 cells a day is lesson 01's steady-state estimate, restated here with its original caveat: it is a population rate for one crypt and not the lifetime of any individual cell. The renewal interval is a population figure, and the 2025 review notes that some cell types in the same tissue persist far longer than enterocytes, so no claim is made that every crypt cell is replaced on one schedule. The four-place reading of the loop in the diagram description is this lesson's own analysis and is not taken from any source.
:::
