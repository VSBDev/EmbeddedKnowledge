# Why one culture reads out overnight and another takes six weeks

Three specimens reach a hospital microbiology bench on a Monday morning. One is a stool sample, plated to look for enteric bacteria. One is sputum from a patient with a chronic cough and weight loss, set up to look for *Mycobacterium tuberculosis*. One is a tissue biopsy going to a research laboratory to be grown as a primary human cell culture.

Before reading further, predict the order in which those three will give an answer, and by roughly how much they will differ. Then read on, because one of the three will not do what the tendency predicts.

## The estimate you can do from this lesson

A colony on an agar plate is visible to the naked eye when it holds a large number of cells. Take **10⁸ cells** as the threshold; that figure is an assumption of this exercise rather than a measured constant, and the answer will be checked against something independent in a moment.

Starting from one cell, reaching 10⁸ takes $n$ doublings where $2^{n} = 10^{8}$, so $n = 8/\log_{10}2 \approx 27$. Twenty-seven doublings, whatever the organism. Only the length of a doubling differs.

:::{check}
:id: check-time-to-a-visible-colony
:kind: retrieval

Work out how long 27 doublings takes for each of these, and give the answer in the unit a laboratory would use.

1. *E. coli* in rich broth at 37 °C, doubling in about 18 minutes.
2. *E. coli* in a defined minimal medium at 37 °C, doubling in about 52 minutes.
3. *M. tuberculosis* on enriched media, doubling in about 24 hours.
:::

Twenty-seven doublings at 18 minutes is 486 minutes, a little over eight hours: set the plate up in the afternoon and read it in the morning. At 52 minutes it is 1404 minutes, close to a full day. At 24 hours it is 648 hours, which is 27 days, or near enough four weeks.

Now the independent check. Published figures for *M. tuberculosis* say identifiable colonies may not appear for four to six weeks on solid media inoculated with clinical material, and the 2014 study cited here reports a primary culture obtained in two to four weeks on average. Our estimate of about four weeks lands inside that band, from an assumed colony size and a published doubling time, with nothing fitted to the answer. The estimate is doing real work instead of being decorated with a number.

## The part that breaks the tendency

*M. tuberculosis* is a prokaryotic cell. Its DNA lies in the cytoplasm with no envelope around it, exactly as in the cutaway figure in scene 1. Its doubling time on enriched media is 18 to 24 hours.

A cultured human cell divides about once every 24 hours, and an intestinal stem cell in a crypt divides about once a day.

Those two numbers are the same. A bacterium and a human cell, the two architectures this lesson has spent five scenes contrasting, dividing at the same rate. If you predicted at the top of this scene that the bacterial culture would beat the human one, you were applying the tendency tier as though it were the criterion tier, which is the exact error scene 4 was built to prevent.

Nothing about the classification changes. *M. tuberculosis* is not less prokaryotic for being slow, and the sputum culture is not evidence against anything the criterion claims. What the case shows is where in the scene 4 diagram the statement "prokaryotes divide fast" belongs: on the tendency branch, with counterexamples, alongside "prokaryotes are small".

Why a mycobacterium is slow is a real question and this lesson does not answer it; the cause lies in its unusual cell envelope and its metabolism rather than in the presence or absence of a nucleus. What matters here is that the lesson's model tells you exactly how surprised to be, which is not very.

## What the delay costs a patient

Turnaround time is not an administrative detail. A stool culture answering overnight means a decision the next day. A mycobacterial culture answering in four to six weeks, with drug-susceptibility testing needing another two to four weeks after that, means treatment decisions get made long before the culture confirms them. That gap is why tuberculosis diagnosis now leads with molecular methods that do not wait for growth, while culture and phenotypic susceptibility testing stay slow and stay necessary. It is also why a negative mycobacterial culture at two weeks has to be read as weak evidence rather than as a result. How weak depends on the specimen, how many organisms were in it, and which system the laboratory used, and none of those are things this lesson can settle for you. The timings above come from one 2014 study and describe culture, not the diagnosis a patient receives today.

This is a teaching example and not clinical guidance, and it prescribes nothing. What it illustrates is that a doubling time measured in a flask propagates all the way to how a clinic is run.

:::{check}
:id: check-transfer-new-organism-turnaround
:kind: retrieval

A laboratory reports that a newly characterised gut organism forms visible colonies in about three days at 37 °C.

1. Estimate its doubling time, using the same 27-doubling assumption.
2. Does that estimate tell you whether the organism is prokaryotic or eukaryotic? Say what would.
3. Name one thing that could make your estimate wrong even if the doubling time is correct.
:::

Three days is 72 hours; 72 divided by 27 is about 2.7 hours per doubling. That places it between *E. coli* and *M. tuberculosis*, and it tells you nothing whatever about the cell's architecture. Deciding that requires looking at where the DNA sits, which in practice means microscopy with a stain that shows a nucleus, or sequence data placing the organism among relatives whose cell type is known.

For the third question, the assumption most likely to be wrong is the colony threshold of 10⁸ cells, which varies with the organism and the medium. A colony visible at 10⁷ cells needs only about 23 doublings, which spreads the same 72 hours over fewer of them and lengthens the estimated doubling time to about 3.1 hours. A lag phase before growth begins pushes the estimate the other way, because less of the 72 hours was spent doubling at all. Both are reasons this is an estimate with an error bar you cannot yet put a number on, which is the honest description of most first estimates.

:::{source-note}
:claims: claim-ecoli-generation-time, claim-mtb-slow-growth, claim-mtb-culture-time, claim-human-cell-cycle, claim-crypt-stem-cell-division, claim-architecture-criterion
:sources: source-irwin-doubling-time, source-mcmurray-mycobacteria, source-ghodbane-culture-time, source-cooper-cell-cycle, source-zhu-intestinal-stem-cells, source-cooper-origin-evolution-cells

The *E. coli* doubling times of about 17 to 18 minutes in Luria-Bertani broth and 51 to 54 minutes in a defined minimal medium were measured at 37 °C by three independent methods in a 2010 study; the rounded figures of 18 and 52 minutes are used above. The *M. tuberculosis* doubling time of 18 to 24 hours on enriched media, and the statement that identifiable colonies may not appear for four to six weeks on solid media inoculated with clinical material, come from a medical microbiology textbook chapter whose culture-time figures predate current automated systems. A 2014 study supplies the modern comparison, that a primary culture is obtained in two to four weeks on average with antibiotic susceptibility determined after a further two to four weeks. The 24-hour cell cycle is stated for human cells in culture, and the once-a-day division rate for intestinal stem cells comes from a 2021 review of the crypt niche. The threshold of 10⁸ cells for a visible colony is this exercise's own assumption and is not taken from any of these sources; it is used because the resulting estimate can be checked against the independently published culture times. The gut organism in the final task is constructed for teaching.
:::
