# Choose signs before calculating

## 1. Add and scale

Let $\mathbf a=(2,-5)$ and $\mathbf b=(-7,3)$. Find $2\mathbf a+\mathbf b$.

**Feedback:** $2\mathbf a+\mathbf b=(4,-10)+(-7,3)=(-3,-7)$.

## 2. Normalize

Find a unit vector in the direction of $(6,8)$.

**Feedback:** The magnitude is 10, so the unit vector is $(0.6,0.8)$. Its magnitude is 1.

## 3. Test perpendicularity

Are $(3,4)$ and $(-4,3)$ perpendicular?

**Feedback:** Their dot product is $3(-4)+4(3)=0$. Because both are nonzero, they are perpendicular.

## 4. Project onto a direction

Let $\mathbf v=(6,2)$ and let $\widehat{\mathbf d}=(3/5,4/5)$. Find the signed scalar projection of $\mathbf v$ along $\widehat{\mathbf d}$.

**Feedback:** $\mathbf v\mathbin{\boldsymbol\cdot}\widehat{\mathbf d}=18/5+8/5=26/5=5.2$ units. Check first that $\widehat{\mathbf d}$ has magnitude 1.

## Recovery route

- Wrong resultant: align vectors by axis and add matching signed components.
- Wrong quadrant: predict component signs before using trigonometry.
- Unit vector does not have magnitude 1: divide every component by the original magnitude.
- Dot product returned a vector: multiply corresponding components and add to obtain one scalar.
- Angle formula fails: check for a zero vector before dividing by magnitudes.

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-dot-product, claim-direction-components
:sources: source-nist-dlmf-vectors

All practice, feedback, and recovery guidance are original.
:::
