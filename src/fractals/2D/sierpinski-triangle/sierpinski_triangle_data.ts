import type {
    FractalData
} from "../../../types/fractal"

export const sierpinski_triangle_data:FractalData = {
    max_iterations:8,
    default_iterations:5,
    min_iterations:0,
    renderer_type:"SVG",
    export_types:[
        "SVG",
        "PNG"
    ]
}