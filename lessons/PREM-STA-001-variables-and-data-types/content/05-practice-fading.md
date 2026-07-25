# Practice on a file you have not seen

A heart-failure clinic keeps a register. Both the clinic and its columns were invented for this practice.

| Column | Example value | How it was produced |
| --- | --- | --- |
| Blood group | `O` | copied from the laboratory record, one of A, B, AB, O |
| NYHA class | `II` | the clinician's placement of the patient in one of four functional classes, I to IV |
| Serum sodium | `137` | laboratory result in mmol/L |
| Admissions last year | `2` | counted from the hospital record |
| Referral to first review | `11` | days from referral letter to the first clinic appointment, recorded to the nearest day |

## First pass, with the questions supplied

Use the five audit questions from the worked example: label or amount, ranked, any value in a range, gap fixed, zero real.

:::{check}
:id: check-register-classification
:kind: practice

Fill this in before opening the feedback.

| Column | Categorical or quantitative | Level |
| --- | --- | --- |
| Blood group | ___ | ___ |
| NYHA class | ___ | ___ |
| Serum sodium | ___ | ___ |
| Admissions last year | ___ | ___ |
| Referral to first review | ___ | ___ |
:::

### Feedback after your attempt

Blood group is categorical and nominal: four named groups with no ranking. Reordering them changes nothing.

NYHA class is categorical and ordinal. Class III is worse than class II, so the order carries information, and nothing in the four descriptions fixes the size of the steps between them.

Serum sodium is quantitative and continuous, on a ratio scale. One mmol/L is one mmol/L anywhere on the scale, and zero would mean none present.

Admissions last year is quantitative and discrete, on a ratio scale. Only whole admissions can occur, the gap between 2 and 3 is one admission, and zero admissions is a real value that many patients have.

Referral to first review is the interesting one. Waiting is a continuous quantity; the register rounds it to whole days. Rounding a continuous measurement does not turn it into a count, and this column is normally treated as continuous. If you called it discrete because the stored values are whole numbers, reread the recoding test: the question is what the underlying quantity does, not what the storage looks like.

## Second pass, with less support

Now write the results line each column can carry. State the summary and the units where units apply.

:::{check}
:id: check-register-summaries
:kind: practice

1. NYHA class.
2. Serum sodium.
3. Blood group.

For NYHA class, add one sentence explaining to a colleague why you are refusing to give them a mean.
:::

### Feedback after your attempt

NYHA class: the number and share of patients in each of classes I to IV, plus the median class. The refusal sentence needs the distance argument, in some form of: the classes rank patients without measuring how far apart they are, so an average of the numerals I to IV would change if the clinic renumbered them and would tell you about the numbering.

Serum sodium: mean and standard deviation in mmol/L. A median and range are also defensible and become the better choice if the values are strongly lopsided, which the next lessons in this block take up.

Blood group: the count and proportion in each of A, B, AB, O, and the most common group. No mean, no median, no ordering of the four.

If you gave a mean for NYHA class, go back to the recoding table in the previous scene and run it on classes I to IV yourself before continuing. If you gave counts for serum sodium, you have not lost anything, though you have thrown away the measurement scale that the laboratory took the trouble to produce.

## Third pass, unsupported

Structure, not columns, this time. For each description, decide whether the two sets of values are paired or independent, and name the feature of the collection that decides it.

:::{check}
:id: check-paired-independent-practice
:kind: practice

1. Serum sodium is recorded for forty patients on admission and again for the same forty on discharge.
2. Serum sodium is recorded once for forty patients taking drug A and once for forty different patients taking drug B.
3. The same blood sample from each of forty patients is measured once by laboratory method A and once by laboratory method B.
:::

### Self-check after your attempt

1. Paired. Each admission value has a partner: the discharge value from the same patient.
2. Independent. Nobody appears in both sets and no value in one set is tied to a particular value in the other.
3. Paired. Each result from method A has one partner: the method B result from the same patient's sample. The two values are paired by their shared source even though the methods differ.

If you answered 3 as independent, the repair is to ask whether the file could be written with one row per patient's sample. When one row naturally holds both method results, the values are paired.

## Where to go next

- Every column classified correctly, both summaries right, all three structures right: continue.
- One or two column errors: rerun the five audit questions on the columns you missed and say the answer aloud before checking.
- A mean offered for an ordinal column: this is the error the whole lesson guards against. Return to the recoding table, apply it to your own answer, and only then continue.
- Paired and independent reversed: write each description as a table and count how many rows it needs. Paired data fits one row per pair; independent data does not.

:::{source-note}
:claims: claim-variable-type-taxonomy, claim-level-constrains-summary, claim-paired-versus-independent
:sources: source-ali-bhaskar, source-mishra-descriptive, source-sullivan-artino

The register and every value in it were written for this practice. The methods sources support the categorical and quantitative families, the nominal to ratio scales, the summaries each scale sustains, and the difference between measurements repeated on the same subjects and measurements from two separate samples. Note where they stop: some columns sit genuinely on a boundary, as the referral-waiting column does, and settling those takes an argument about how the value was produced and what the analysis will ask of it.
:::
