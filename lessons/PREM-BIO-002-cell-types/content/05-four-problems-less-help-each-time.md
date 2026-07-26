# Four problems, and less help each time

Work each one before opening its feedback. The first hands you the relations, the second hands you a rule to apply, the third and fourth hand you nothing.

## First pass: the relations are supplied

You need two things from scene 2. For a sphere of radius $r$, surface area per unit volume is $A/V = 3/r$. For a molecule wandering by diffusion with coefficient $D$, the time to cover a distance $x$ is $t = x^{2}/2D$. Take $D = 7.7$ µm² per second throughout.

:::{check}
:id: check-coccus-arithmetic
:kind: practice

A spherical bacterium is 1 µm across. A colonic lining cell is modelled as a sphere 20 µm across.

1. What is $A/V$ for each, in reciprocal micrometres?
2. By what factor do they differ?
3. How long does a protein take to cross each cell by diffusion?
4. By what factor do those two times differ, and why is that factor not the same as the one in question 2?
:::

### Feedback after your attempt

The spherical bacterium has $r = 0.5$ µm, so $A/V = 3/0.5 = 6$ µm⁻¹. The lining cell has $r = 10$ µm, so $A/V = 3/10 = 0.3$ µm⁻¹. They differ by a factor of 20.

Crossing times: $t = 1^{2}/(2 \times 7.7) \approx 0.065$ s for the bacterium and $t = 20^{2}/(2 \times 7.7) \approx 26$ s for the lining cell. Those differ by a factor of 400.

Question 4 is the one worth getting right. Both cells differ by a factor of 20 in size, but the two consequences scale differently: surface per unit volume goes as $1/r$, so it changes by 20, while diffusion time goes as $x^{2}$, so it changes by $20^{2} = 400$. Growing a cell hurts its mixing far more than it hurts its supply. If you got 400 for both, or 20 for both, go back to the two relations and read the exponents.

## Second pass: a rule to apply

Every claim below is true of some cells. Sort each into one of three boxes: **follows from the criterion**, **tendency with exceptions**, or **not licensed by the criterion at all**. Give one line of reason each.

:::{check}
:id: check-sort-the-claims
:kind: practice

1. A ribosome can begin translating a transcript that is still being made.
2. The cell is less than 10 µm across.
3. The cell's design came first in evolutionary history.
4. Transcripts are modified and checked before any ribosome reads them.
5. The cell divides in under an hour.
6. The cell has no internal compartments of any kind.
7. The cell is less sophisticated than the other type.
:::

### Feedback after your attempt

**Follows from the criterion:** items 1 and 4. Both are statements about where transcription and translation sit relative to each other, which is decided entirely by whether a membrane separates the DNA from the ribosomes. Item 1 describes prokaryotic cells and item 4 eukaryotic ones.

**Tendency with exceptions:** items 2 and 5. Prokaryotic cells are usually small and usually fast, and you have already met a bacterium 2 cm long, with a slow one arriving in the next scene.

**Not licensed at all:** items 3, 6 and 7. Item 3 asks about evolutionary history, which is settled by sequence comparison, not by architecture, and eukaryotes emerge from within the Archaea rather than after prokaryotes as a whole. Item 6 is simply false: bacteria build carboxysomes, magnetosomes and other organelles. Item 7 is not a biological claim; it is a ranking with no measurement behind it.

Item 6 is the one people misfile. It feels like it should follow, because the criterion is about a compartment. It does not follow, because the criterion is about one compartment, around one thing.

## Third pass: no support

:::{check}
:id: check-engineer-a-large-bacterium
:kind: practice

Someone proposes engineering a bacterium to be 20 µm across while leaving its internal organisation unchanged: one nucleoid, ribosomes loose in the cytoplasm, no internal compartments.

Using only quantities this lesson has established, name the two problems this creates and say how large each one is. Then say whether either is fatal, and give the evidence for your answer.
:::

### Feedback after your attempt

Both problems are the ones from the first pass, and both get worse together.

Surface per unit volume falls from about 6 µm⁻¹ at 1 µm across to about 0.3 µm⁻¹ at 20 µm across, a factor of 20. Everything the cell takes in or throws out crosses its surface, and each unit of interior now has a twentieth of the membrane serving it.

Diffusion time across the cell rises from about 0.065 s to about 26 s, a factor of 400. With one nucleoid and no internal organisation, a protein made at one end takes half a minute to reach the other, and a signal that needs a response has to wait that long before anything can happen.

Neither is fatal, and the evidence is that a 2 cm bacterium exists. What that organism does not do is keep the internal organisation unchanged, which is the condition the proposal insists on. It carries chromosomes inside membrane-bound compartments and has enormous numbers of genome copies, so a transcript never has to travel the full length of the cell. Take the compartments away and the arithmetic above is what remains. The general form of the answer is the useful one: size is survivable, and what it costs is a demand for internal organisation that scales with it.

## Fourth pass: explain it to somebody

:::{check}
:id: check-explain-to-a-friend
:kind: practice

A friend studying for the same exam says: "So the difference is that prokaryotes are simpler, and everything else follows from that."

Write three sentences that repair the claim without using the words *simple*, *primitive*, *advanced*, or *higher*. Your first sentence must state what the actual criterion is.
:::

### Feedback after your attempt

Compare yours with this. "The difference is whether a membrane envelope encloses the cell's DNA; eukaryotic cells have one and prokaryotic cells do not. That envelope decides where transcription and translation happen, so a eukaryotic cell can process and check a transcript before any ribosome reads it, while a bacterial ribosome can start on a transcript that is still being made. Everything else you have heard about the two types, including size and division rate, is a tendency with real exceptions, and none of it ranks one type above the other."

Your version does not need to match that. It needs to open with the criterion, name at least one consequence that genuinely follows from it, and mark the rest as tendency. If your first sentence was about size, division rate, or organelles in general, the repair has not taken hold yet.

## Where to go next

- All four passes right: continue to the culture-room problem in the next scene.
- Trouble in the first pass: the fault is almost always the exponent. Write both relations on one line, $A/V = 3/r$ and $t = x^{2}/2D$, and say aloud which one squares.
- Trouble in the second pass: run the sorting rule in writing, in order. Ask "does this depend on where the DNA sits?" before anything else, and only then ask whether the claim is a tendency.
- Trouble in the third or fourth pass: those need the first two working, so go back instead of forward.

## Recovery route

If the algebra in scene 2 was the sticking point and not the biology, the shortest repair is [Units and dimensional analysis (PREM-QNT-002)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-002). Everything here is one multiplication or one division, and the errors are nearly always in carrying µm, µm² and µm³ through a quotient.

If comparing $10^{13}$ with $10^{-6}$ still feels unfamiliar, return to [Powers, roots, and scale (PREM-QNT-005)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-005). This lesson compares quantities by order of magnitude constantly and does not re-teach it.

If the crypt is not yet a clear picture, go back to [Cell theory, scale, and emergence (PREM-BIO-001)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-BIO-001) before continuing. Every scene here assumes a tube of epithelium one cell thick, renewing itself every few days, with the lumen on one side.

If the word *prokaryote* keeps pulling you back toward *primitive*, try a mechanical substitution for a week. Every time you read or write it, say "cell with no envelope around its DNA" in your head. The phrase is clumsy and that is the point: it carries only what the term is entitled to carry.

If you are still unsure after another reading, ask your course text or instructor before pressing on. Lesson 03 assumes the compartmentalisation argument from scene 3 and builds directly on it.

:::{source-note}
:claims: claim-cytoplasmic-diffusion, claim-surface-volume-model, claim-animal-cell-size-band, claim-transcription-translation-coupling, claim-nucleus-regulatory-layer, claim-prokaryotic-organelles, claim-giant-bacterium, claim-eukaryotes-within-archaea
:sources: source-elowitz-protein-mobility, source-cooper-origin-evolution-cells, source-li-cell-size, source-woodgate-coupling, source-shine-cotranscriptional, source-maccready-carboxysome, source-ionescu-giant-bacteria, source-spang-asgard

The relations and the numbers in these tasks are the ones established in scenes 2 and 3 and carry the same sources. The diffusion coefficient of 7.7 µm² per second is the value measured for a fluorescent protein in living *E. coli*, applied here to both cells so that only geometry varies; the two geometric relations are ordinary mathematics applied to those sourced inputs. The compartment claims come from a review of the carboxysome, which names both membrane-bound bacterial organelles and the carboxysome's protein shell. The 2 cm bacterium, its membrane-bound chromosome compartments, and its very large number of genome copies come from a 2023 review of giant bacteria. The placement of eukaryotes within the Archaea comes from a 2018 phylogenomic paper and remains an active research question. The engineered 20 µm bacterium in the third pass is a constructed exercise and describes nothing anyone has built.
:::
