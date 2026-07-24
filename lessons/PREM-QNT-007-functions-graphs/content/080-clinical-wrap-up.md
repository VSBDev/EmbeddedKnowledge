# Clinical wrap-up: read a drug's concentration–time curve

At this fictional bedside, graph-reading lets the team summarize what changed, when it peaked, and how fast it fell.

The generic placeholder **Drug X**, its single-dose case, curve, and all numerical values below are author-created teaching material rather than real drug or patient data.

**Figure 1 (described). Alt text:** The horizontal axis is time $t$ in hours, ranging from 0 to 8. The vertical axis is plasma concentration $C(t)$ in mg/L, ranging from 0 to 10. The plotted points are $(0,2)$, $(1,6)$, $(2,8)$, $(4,5)$, $(6,3)$, and $(8,2)$. A single curve starts low, rises to one peak, is concave-down near that peak, and then declines with decreasing steepness; it has one maximum and no minimum turning point.

| Time, $t$ (h) | Plasma concentration, $C(t)$ (mg/L) |
| ---: | ---: |
| 0 | 2 |
| 1 | 6 |
| 2 | 8 |
| 4 | 5 |
| 6 | 3 |
| 8 | 2 |

Treat the curve, not an equation, as the source; the table preserves the same plotted coordinates for text-only access.

:::{check}
:id: check-clinical-concentration-curve

A fictional bedside team reviews the curve after one illustrative dose of Drug X. Read from Figure 1:

1. Find $C(0)$ and identify the baseline/intercept.
2. Give the peak concentration and time-to-peak as the maximum point.
3. State the intervals on which concentration is increasing and decreasing.
4. Calculate the average rate of change from $t=2$ to $t=6$ in mg/L per hour, and interpret its sign.
:::

## Feedback after a complete attempt

The baseline and vertical-axis intercept are represented by $(0,2)$, so $C(0)=2$ mg/L. The maximum is $(2,8)$, so $C_{\max}=8$ mg/L at $t=2$ h.

Concentration is increasing on $[0,2]$ and decreasing on $[2,8]$ over the displayed time domain.

$$\frac{C(6)-C(2)}{6-2}=\frac{3-8}{4}=-1.25\ \text{mg/L per h}.$$

The negative sign means the endpoint concentration at 6 hours is lower than at 2 hours. Over that interval, concentration decreased by an average of 1.25 mg/L per hour; this average alone does not identify a biological phase or an instantaneous rate.

:::{source-note}
:claims: claim-function-notation, claim-axis-quantity, claim-average-rate
:sources: source-common-core-functions, source-nist-si-axis

The standards source supports function notation, graph features, and average-rate interpretation; NIST supports explicit quantity and axis labels. Drug X, the curve, the values, and the bedside setting are fictional, and no pharmacokinetic mechanism is inferred.
:::

*Teaching example — illustrative numbers, not medical advice.*
