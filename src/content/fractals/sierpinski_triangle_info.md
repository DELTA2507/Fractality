---
title: Sierpinski Triangle
slug: sierpinski-triangle
description: A recursive geometric fractal formed through repeated triangle subdivision.
thumbnail: "/fractals/sierpinski-triangle/thumbnail.png"
dimension_type: 2D
export_types:
  - SVG
  - PNG
max_iterations: 8
default_iterations: 5

author: DELTA
date: 2026-05-26
---

# Sierpinski Triangle

The Sierpinski Triangle is one of the most recognizable recursive fractals in mathematics. It emerges from repeatedly subdividing an equilateral triangle into smaller self-similar triangles.

---

## History

The fractal is named after the Polish mathematician **Wacław Sierpiński**, who formally described it in 1915.

Although its mathematical formalization is relatively modern, similar recursive triangular patterns appeared centuries earlier in architecture, mosaics, and textile designs.

---

## Construction

The construction process is surprisingly simple:

1. Start with a single triangle.
2. Find the midpoint of each edge.
3. Remove the center triangle.
4. Repeat the process recursively for the remaining triangles.

---

## Mathematical Formula

The subdivision process can be described recursively.

### Midpoint Formula

Given two points:

$$
A(x_1, y_1)
$$

and

$$
B(x_2, y_2)
$$

their midpoint is:

$$
M =
\left(
\frac{x_1 + x_2}{2},
\frac{y_1 + y_2}{2}
\right)
$$

---

## Recursive Algorithm

```ts
function subdivideTriangle(
    triangle,
    depth
){

    if(depth === 0){

        return triangle

    }

    // Recursive subdivision logic

}