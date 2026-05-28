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

export type Fractal = {
    title:string
    slug:string
    description:string
    thumbnail:string

    dimension_type:"2D"|"3D"

    export_types:string[]

    max_iterations:number
    default_iterations:number

    author:string
    date:string

    __content:string
}