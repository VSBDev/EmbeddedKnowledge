# Represent vectors with signed components

A **scalar** has magnitude in the model; a **vector** also has direction. Once axes are declared, a vector $\mathbf v$ can be written as

$$\mathbf v=(v_x,v_y,v_z)=v_x\mathbf i+v_y\mathbf j+v_z\mathbf k,$$

where $\mathbf i,\mathbf j,\mathbf k$ are unit vectors along the positive axes. Components are signed: a negative $v_x$ points opposite the positive horizontal direction.

## Arithmetic and magnitude

For $\mathbf u=(u_x,u_y)$ and $\mathbf v=(v_x,v_y)$,

$$\mathbf u+\mathbf v=(u_x+v_x,u_y+v_y),$$

$$c\mathbf v=(cv_x,cv_y),\qquad
\lVert\mathbf v\rVert=\sqrt{v_x^2+v_y^2}.$$

For nonzero $\mathbf v$, its direction unit vector is $\widehat{\mathbf v}=\mathbf v/\lVert\mathbf v\rVert$. The zero vector has magnitude zero but no unique direction, so it cannot be normalized.

## Resolve and reconstruct

Declare that $\theta$ is measured counterclockwise from the positive horizontal axis. A vector with magnitude $r$ then has

$$v_x=r\cos\theta,\qquad v_y=r\sin\theta.$$

Reconstruct with $r=\sqrt{v_x^2+v_y^2}$ and a quadrant-aware two-argument inverse tangent, $\theta=\operatorname{atan2}(v_y,v_x)$. A one-argument $\arctan(v_y/v_x)$ can return the wrong quadrant.

## Dot product

$$\mathbf u\mathbin{\boldsymbol\cdot}\mathbf v=u_xv_x+u_yv_y
=\lVert\mathbf u\rVert\lVert\mathbf v\rVert\cos\phi.$$

The sign describes alignment: positive for an acute included angle, zero for perpendicular nonzero vectors, and negative for an obtuse angle. If $\widehat{\mathbf d}$ is a unit direction, $\mathbf v\mathbin{\boldsymbol\cdot}\widehat{\mathbf d}$ is the signed scalar projection of $\mathbf v$ along it.

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-dot-product, claim-direction-components
:sources: source-nist-dlmf-vectors

NIST DLMF directly supports component, unit-vector, scalar-product, norm, and angle relations. The resolve-combine-reconstruct-check organization is original synthesis.
:::
