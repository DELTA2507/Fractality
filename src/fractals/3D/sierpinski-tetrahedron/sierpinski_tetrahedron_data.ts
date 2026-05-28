import type {
    FractalData
} from "../../../types/Fractal"

export const sierpinski_tetrahedron_data:FractalData = {
    max_iterations:8,
    default_iterations:5,
    min_iterations:0,
    renderer_type:"THREE_FIBER",
    export_types:[
        "PNG"
    ]
}