import type { FractalRegistry } from "../types/FractalRegistryEntry"

import SierpinskiTriangleRenderer from "./2D/sierpinski-triangle/sierpinski_triangle_renderer"
import { generate_sierpinski_triangle } from "./2D/sierpinski-triangle/sierpinski_triangle_generator"

import SierpinskiTetrahedronRenderer from "./3D/sierpinski-tetrahedron/sierpinski_tetrahedron_renderer"
import { generate_sierpinski_tetrahedron } from "./3D/sierpinski-tetrahedron/sierpinski_tetrahedron_generator"

import KochSnowflakeRenderer from "./2D/koch-snowflake/koch_snowflake_renderer"
import { generate_koch_snowflake } from "./2D/koch-snowflake/koch_snowflake_generator"

export const fractal_registry: FractalRegistry = {
    "sierpinski-triangle": {
        renderer: SierpinskiTriangleRenderer,
        generator: generate_sierpinski_triangle,

        dimension_type: "2D",

        supports_svg_export: true,
        supports_png_export: true,

        controls: {
            geometry: [
                {
                    type: "range",
                    key: "iterations",
                    min: 0,
                    max: 6,
                    default: 5
                }
            ],
            appearance: [
                {
                    type: "color",
                    key: "color",
                    default: "#ffffff"
                },
                {
                    type: "toggle",
                    key: "wireframe",
                    default: false
                }
            ]
        }
    },
    "sierpinski-tetrahedron": {
        renderer: SierpinskiTetrahedronRenderer,
        generator: generate_sierpinski_tetrahedron,

        dimension_type: "3D",

        supports_svg_export: false,
        supports_png_export: true,

        controls: {
            geometry: [
                {
                    type: "range",
                    key: "iterations",
                    min: 0,
                    max: 6,
                    default: 5
                }
            ],
            appearance: [
                {
                    type: "color",
                    key: "color",
                    default: "#ffffff"
                },
                {
                    type: "toggle",
                    key: "wireframe",
                    default: false
                }
            ]
        }
    },
    "koch-snowflake": {
        renderer: KochSnowflakeRenderer,
        generator: generate_koch_snowflake,

        dimension_type: "2D",

        supports_svg_export: true,
        supports_png_export: true,

        controls: {
            geometry: [
                {
                    type: "range",
                    key: "iterations",
                    min: 0,
                    max: 6,
                    default: 5
                }
            ],
            appearance: [
                {
                    type: "color",
                    key: "color",
                    default: "#ffffff"
                },
                {
                    type: "toggle",
                    key: "wireframe",
                    default: false
                }
            ]
        }
    },
}