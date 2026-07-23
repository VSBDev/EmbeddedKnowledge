# Represent vectors with signed components

In this lesson, a **scalar** is one real numerical value. It may be positive, zero, or negative and has no vector direction. A **vector** is a mathematical object that can be added to another vector and multiplied by scalars; once Cartesian axes are declared, a vector $\mathbf v$ can be written as

$$\mathbf v=(v_x,v_y,v_z)=v_x\mathbf i+v_y\mathbf j+v_z\mathbf k,$$

where $\mathbf i,\mathbf j,\mathbf k$ are unit vectors along the positive axes. Components are signed: a negative $v_x$ points opposite the positive horizontal direction. Every Euclidean vector has a nonnegative magnitude, but only a nonzero vector determines a unique direction.

## Arithmetic and magnitude

For $\mathbf u=(u_x,u_y,u_z)$ and $\mathbf v=(v_x,v_y,v_z)$,

$$\mathbf u\mathbin{\pm}\mathbf v=(u_x\mathbin{\pm}v_x,u_y\mathbin{\pm}v_y,u_z\mathbin{\pm}v_z),$$

$$c\mathbf v=(cv_x,cv_y,cv_z),\qquad
\lVert\mathbf v\rVert=\sqrt{v_x^2+v_y^2+v_z^2}.$$

The two-dimensional forms use the same rules with the $z$ components omitted.

For nonzero $\mathbf v$, its direction unit vector is $\widehat{\mathbf v}=\mathbf v/\lVert\mathbf v\rVert$. The zero vector has magnitude zero but no unique direction, so it cannot be normalized.

## Resolve and reconstruct

Declare that $\theta$ is measured counterclockwise from the positive horizontal axis. A vector with magnitude $r$ then has

$$v_x=r\cos\theta,\qquad v_y=r\sin\theta.$$

Reconstruct with $r=\sqrt{v_x^2+v_y^2}$ and a quadrant-aware two-argument inverse tangent, $\theta=\operatorname{atan2}(v_y,v_x)$. The vertical component is the first argument and the horizontal component is the second, so both signs are available for choosing the quadrant. For directions reported from $0^\circ$ through $360^\circ$, start with the principal value of $\arctan(v_y/v_x)$: add $180^\circ$ when $v_x<0$, and add $360^\circ$ when $v_x>0$ but the principal value is negative. If $v_x=0$, the direction is $90^\circ$ for $v_y>0$ or $270^\circ$ for $v_y<0$. The zero vector has no direction. The two-argument function performs these quadrant choices directly.

## Dot product

$$\mathbf u\mathbin{\boldsymbol\cdot}\mathbf v=u_xv_x+u_yv_y+u_zv_z
=\lVert\mathbf u\rVert\lVert\mathbf v\rVert\cos\phi.$$

In two dimensions, omit the $z$ term.

The sign describes alignment: positive for an acute included angle, zero for perpendicular nonzero vectors, and negative for an obtuse angle. If $\widehat{\mathbf d}$ is a unit direction, $\mathbf v\mathbin{\boldsymbol\cdot}\widehat{\mathbf d}$ is the signed scalar projection of $\mathbf v$ along it.

:::{source-note}
:claims: claim-scalar-vector, claim-vector-components, claim-vector-norm, claim-dot-product, claim-direction-components
:sources: source-nist-dlmf-vectors

NIST DLMF supports the scalar/vector boundary and the component, unit-vector, scalar-product, norm, and angle relations used here. The resolve-combine-reconstruct-check organization is original synthesis.
:::
