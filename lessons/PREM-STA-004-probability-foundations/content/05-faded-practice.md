# Practice with the scaffolding taken away

Five tasks, on a second column of the same invented study. Each one hands you less than the last. Work each fully before reading its feedback, and write down which rule you reached for before you compute anything.

The study also recorded how closely each participant kept to their assigned dinner schedule, on a 1 to 4 rating. Group the ratings into high adherence, 3 or 4, and low adherence, 1 or 2.

| Group | High adherence ($A$) | Low adherence ($A^{c}$) | People |
| --- | ---: | ---: | ---: |
| Late dinner ($L$) | 18 | 12 | 30 |
| Early dinner ($L^{c}$) | 24 | 6 | 30 |
| All sixty | 42 | 18 | 60 |

## Task 1, fully guided

Find the probability that one participant drawn at random from the sixty kept low adherence, and the probability that the participant either ate late or kept high adherence.

The steps are laid out for you:

1. Read $P(A)$ off the totals row as a part-to-whole fraction.
2. Apply the complement rule for $P(A^{c})$.
3. Read $P(L)$ and $P(L \cap A)$ from the table.
4. Apply the addition rule, remembering the overlap term.
5. Check the second answer by counting people directly.

**Feedback.** $P(A) = 42/60 = 0.70$, so $P(A^{c}) = 1 - 0.70 = 0.30$, and the count confirms it at 18 of 60. Then $P(L) = 0.50$ and $P(L \cap A) = 18/60 = 0.30$, giving $P(L \cup A) = 0.50 + 0.70 - 0.30 = 0.90$. Counting directly: all 30 late diners, plus the 24 early diners with high adherence, is 54 people, and $54/60 = 0.90$. If you got 1.20, you added without subtracting the overlap.

## Task 2, partly guided

Compute $P(A \mid L)$ and $P(L \mid A)$. Then write one sentence for each that a colleague could not confuse with the other.

Hint: both use the same 18 people.

**Feedback.** $P(A \mid L) = 18/30 = 0.60$: of the late diners, 60 per cent kept high adherence. $P(L \mid A) = 18/42 \approx 0.43$: of the high-adherence participants, about 43 per cent ate late. The sentences have to name their group before they name the share. "Sixty per cent of late diners kept high adherence" and "about forty-three per cent of the high-adherence group ate late" cannot be swapped without changing what was measured.

## Task 3

Are $L$ and $A$ independent in this table? Show the test you used, then compute $P(L \cap A)$ by the rule your answer requires.

**Feedback.** The test is whether $P(L \cap A) = P(L) \times P(A)$. Here $0.50 \times 0.70 = 0.35$, while the table gives 0.30. They are not equal, so the events are dependent, and the plain product would put $0.35 \times 60 = 21$ people in that cell instead of the 18 recorded. The rule that applies is the general one: $P(L \cap A) = P(L) \times P(A \mid L) = 0.50 \times 0.60 = 0.30$, which matches. Anyone who answered "independent" because the two variables seem unrelated has used intuition where a two-line check was available.

## Task 4

An automated meter flags a reading for repeat testing with probability 0.08, and stipulate that flags on different readings are independent. A participant supplies five readings.

1. What is the probability that at least one is flagged?
2. Four readings have come back unflagged. What is the probability the fifth is flagged?

**Feedback.** For the first, count the complement. No flag on a single reading has probability $1 - 0.08 = 0.92$; on five independent readings, $0.92^{5} \approx 0.659$. So at least one flag has probability $1 - 0.659 = 0.341$. Computing "at least one" directly would mean adding five separate cases and stripping out their overlaps, which is the same answer through much more work.

For the second, the answer is 0.08. The four unflagged readings are independent of the fifth, so they carry no information about it. If you were drawn toward a higher number, you were expecting the sequence to correct itself, and nothing in independent trials does that.

## Task 5

A colleague reads a report on a different invented screen and says: "It misses only 4 per cent of cases, so a negative result means a 96 per cent probability of being clear." State what the 4 per cent is conditioned on, what the colleague's sentence is conditioned on, and what further quantity you would need before the second number could be computed.

**Feedback.** The 4 per cent is conditioned on having the condition: among people who have it, 4 per cent screen negative, which makes the detection rate 96 per cent. The colleague's sentence is conditioned on the test result: among people who screen negative, what share is clear. To move from the first to the second you need how common the condition is in the group being screened, plus the false-positive behaviour of the test. Without those two quantities the second number simply cannot be computed, and quoting 96 per cent in its place states something the report never measured. This is the inversion from scene 4 in its negative-result form, and it is the error the block returns to in lesson 10.

## Accessibility and alternatives

Everything assessed in this lesson is available without seeing a picture.

- The chart in scene 2 is fully described in words, and its underlying numbers are published as a data table beside it. The two claims it carries, that short records swing widely and that the running share converges without any deficit being repaid, are stated numerically in the surrounding prose and in the arithmetic of the misconception block. No question depends on reading the line.
- Every table in this lesson is a plain data table with a header row, readable in order by a screen reader, and every probability drawn from one is also written as an explicit fraction of counts in the prose.
- Every equation appears in accessible mathematical markup and is restated in a sentence: for example, $P(A \mid B)$ is always accompanied by "among the outcomes where $B$ holds, the share that also has $A$".
- Tasks require no drag interaction, no colour discrimination, no timing, and no personal health information. Nobody is asked to test themselves, record their own glucose, or supply any medical detail.
- Working the tasks with pencil and paper, a calculator, or mental arithmetic is equally acceptable; no software is needed and none is assumed.

:::{source-note}
:claims: claim-probability-as-long-run-frequency, claim-complement-and-addition, claim-conditional-probability-definition, claim-independence-product-rule, claim-conditional-asymmetry-screening, claim-short-run-compensation-error
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-law-of-large-numbers, source-eom-conditional-probability, source-eom-independence, source-screening-predictive-values, source-resident-probability-biases

The reference works support the long-run reading of a probability, the complement and addition rules, the definition of conditional probability, and independence as the product condition. The screening review supports the separation between measures conditioned on a person's true state and measures conditioned on a test result. The survey of medical residents supports treating short-run compensation as a documented reasoning error among clinicians. Every count, rating, and meter figure in this scene is invented.
:::
