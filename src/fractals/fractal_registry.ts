import type {FractalRegistry} from "../types/FractalRegistryEntry"

import SierpinskiTriangleRenderer from "./2D/sierpinski-triangle/sierpinski_triangle_renderer"

import {generate_sierpinski_triangle} from "./2D/sierpinski-triangle/sierpinski_triangle_generator"

export const fractal_registry:FractalRegistry = {
    "sierpinski-triangle": {
        renderer: SierpinskiTriangleRenderer,
        generator: generate_sierpinski_triangle,
        dimension_type:"2D",
        supports_svg_export: true,
        supports_png_export: true
    }
}