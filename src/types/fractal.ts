export type FractalDimensionType =
    "2D"
    |
    "3D"

export type FractalExportType =
    "SVG"
    |
    "PNG"

export type FractalRendererType =
    "SVG"
    |
    "THREE_FIBER"

export type FractalData = {
    max_iterations:number
    default_iterations:number
    min_iterations:number
    renderer_type:FractalRendererType
    export_types:FractalExportType[]
}