# A room of its own, and the rent it charges

Twenty-six seconds is the number scene 2 left on the table. That is how long a protein needs to cross a 20 µm cell if nothing is pushing it. A bacterium never faces that problem, because a quarter of a second is not a delay anybody has to plan around. So the eukaryotic cell is stuck with distances that diffusion handles badly, and it has an internal membrane where the bacterium has none. What is that membrane worth?

## What the envelope buys

Start with what happens when a gene is read. DNA is transcribed into RNA, and RNA is translated by ribosomes into protein. Where those two steps happen relative to each other is decided entirely by the criterion from scene 1.

In a bacterium the two steps share one space. A ribosome can bind a transcript that RNA polymerase is still making and begin translating the front of it while the back is still being written. Transcription and translation run coupled, and that arrangement is characteristic of prokaryotic gene expression. Nothing stands between the polymerase and the ribosome, because nothing can.

In a eukaryotic cell a membrane stands between them, for the genes in the nucleus. Transcription of a nuclear gene happens inside the envelope; translation happens outside it. A transcript therefore cannot be read at the moment it is made. It has to be finished, chemically modified at both ends, have its non-coding stretches removed, pass quality control, and be exported through the envelope. Only then does a ribosome see it.

The qualification is not pedantry. A eukaryotic cell also carries DNA in its mitochondria, outside the nucleus, and those genes are transcribed and translated in the same compartment as each other. The separation this scene is about is a property of the nuclear genome, not of every gene a eukaryotic cell owns. Lesson 03 of this module opens that compartment.

That sequence is an opportunity, and it is the real answer to what the envelope buys. Every one of those steps is a place where the cell can decide something: whether this transcript is exported at all, which version of it is assembled, whether it is held back or destroyed. A compartment converts a one-step process into a staged one, and each stage is a control point. Compartmentalisation, in this lesson's sense, means exactly that: separating incompatible or sequential activities into different membrane-bounded spaces so that each can be run and regulated on its own terms.

Be exact about the word *opportunity*, because it is a tier of its own and the next scene will make you sort by it. The envelope directly causes one thing: a nuclear transcript cannot be read where it was made, so it has to cross first. Everything in the list after that — the modifications, the removal of non-coding stretches, the quality check, the choice of whether to export — is *made possible* by that separation and is not caused by it. A membrane inspects nothing. Each of those steps needs its own machinery, which the cell also has to build and run, and a cell could in principle have the compartment and do very little with it. So there are two different strengths of claim here, and running them together is the commonest way this topic goes wrong: the separation follows from the criterion, and the regulation is what the separation opens up.

One further qualification belongs beside that claim, not after it. Coupling in prokaryotes is not uniform. How tightly transcription and translation run together varies between bacterial species and with growth conditions, so "bacteria always couple, eukaryotes never do" overstates a real difference into a law. The structural statement is the safe one: a eukaryotic cell has a compartment boundary available to regulate at, and a prokaryotic cell does not.

## What it costs

Every gate is also a delay and a piece of machinery. A eukaryotic cell pays for its regulatory layer in transport: transcripts out, proteins in, each through pores, each requiring the apparatus that recognises what is allowed through. A bacterium responding to a change in its surroundings can have new protein appearing while the gene is still being read. A eukaryotic cell cannot match that, and for a cell whose job is to hold a barrier for four days and then be replaced, it does not need to.

The cost shows up hardest at division, and the reason is arithmetic about copying.

| | Prokaryotic cell | Eukaryotic human cell |
| --- | --- | --- |
| DNA to copy | 4.6 million base pairs in *E. coli*, and 0.6 to 5 million across bacteria generally | about 3.05 billion base pairs |
| Arrangement | usually a single circular molecule in the nucleoid | linear molecules across 23 distinct chromosomes |
| Extra work at division | none of the following | condense chromosomes, build a spindle, take the envelope apart, rebuild it |
| Time for one cycle | 17 to 18 minutes in rich broth at 37 °C, and 51 to 54 minutes in a minimal medium | about 24 hours for human cells in culture |

The DNA row alone is a factor of order a thousand. A human cell has to duplicate roughly a thousand times as much sequence, spread over more than twenty separate molecules that then have to be sorted so each daughter receives a full set. Sorting is the part that needs mitosis, and mitosis needs the envelope taken down and put back. Of the roughly 24 hours a cultured human cell spends on one cycle, mitosis and the division itself occupy about an hour; the other 95% is spent getting ready.

:::{check}
:id: check-generations-in-a-renewal
:kind: retrieval

PREM-BIO-001 established that much of the colonic lining is replaced on a three-to-five-day timescale, with absorptive cells lasting about four to five days.

Take four days as the renewal interval and 20 minutes as a bacterial doubling time. How many bacterial generations fit inside one renewal of the lining? Then say why the number you get is an upper bound rather than an estimate of what happens in a colon.
:::

Four days is 96 hours, which is 5760 minutes, and 5760 divided by 20 is **288 generations**. In the time the lining rebuilds itself once, a bacterium at laboratory speed could run through nearly three hundred.

The number is an upper bound, and the measurements say so themselves. Seventeen to eighteen minutes is what *E. coli* manages in rich broth at 37 °C; the same organism in a defined minimal medium takes 51 to 54 minutes, three times longer, and neither flask is a colon. Growth in the gut is limited by what is available, by competition with everything else living there, and by being carried along and out. Treating a maximum as a measurement is the error to avoid. What survives the caveat is the direction and the size of the gap: the two sides of that epithelium run on clocks that differ by orders of magnitude, whatever the exact numbers.

## What the asymmetry forces

A sheet of cells cannot win a race against a population that divides that much faster. Out-multiplying the lumen is not available, and it never was. So the epithelium does something else: it excludes. It keeps a continuous barrier, it renews itself before individual cells wear out, and it holds the bacteria on the far side instead of competing with them.

That is where the rest of this module goes. Lesson 03 opens the eukaryotic interior and shows what all those compartments are actually doing. Lesson 04 asks what the barrier is made of. Lesson 07 asks what physically joins one lining cell to the next, and lesson 08 returns to the cell cycle with the machinery to explain the 24 hours properly.

:::{source-note}
:claims: claim-transcription-translation-coupling, claim-nucleus-regulatory-layer, claim-genome-sizes, claim-ecoli-generation-time, claim-human-cell-cycle, claim-epithelial-renewal
:sources: source-woodgate-coupling, source-shine-cotranscriptional, source-cooper-origin-evolution-cells, source-ecmdb-ecoli-genome, source-nurk-complete-human-genome, source-irwin-doubling-time, source-cooper-cell-cycle, source-nguyen-colonic-crypt

A 2023 review supplies the contrast directly: in eukaryotes transcription and translation are separated by a nuclear envelope, in bacterial cells they occur in the same compartment, and a pioneering ribosome begins translating a transcript that RNA polymerase is still making. A 2024 review supplies what the compartment is worth and the qualification used above: co-transcriptional processes in eukaryotes are confined to the nucleus while prokaryotic ones occur in a shared space, the nuclear envelope adds a layer of regulatory potential including processing and quality control before translation, and tight coupling is not universal across prokaryotes or growth conditions. The bacterial DNA content of about 0.6 to 5 million base pairs, the single circular molecule in the nucleoid, and the linear organisation of eukaryotic DNA come from a cell-biology textbook chapter; the specific figure of 4.639 million base pairs on a single circular chromosome for *E. coli* K-12 comes from a 2015 database paper. The human figure of 3,054,815,472 base pairs of nuclear DNA across 22 autosomes and chromosome X is the total for the first gapless telomere-to-telomere assembly, reported in 2022; it is one assembled genome rather than an average across people. The *E. coli* doubling time was measured at 37 °C by three independent methods as 17 to 18 minutes in rich broth and 51 to 54 minutes in a defined minimal medium, which is exactly why the 20-minute figure is used here as an upper bound and not as a property of the organism. The approximately 24-hour cycle and the roughly one hour occupied by mitosis and cytokinesis are stated for human cells in culture, not for colonic cells in a person. The renewal interval comes from a 2025 review of colonic crypt biology and describes population turnover.
:::
