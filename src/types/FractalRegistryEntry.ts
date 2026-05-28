import type { ComponentType } from "react"

export type FractalRendererProps = {
    iterations:number
}

export type FractalRegistryEntry = {
    renderer:ComponentType<FractalRendererProps>

    generator:(
        iterations:number
    ) => unknown

    dimension_type:"2D" | "3D"

    supports_svg_export:boolean

    supports_png_export:boolean
}

export type FractalRegistry = Record<
    string,
    FractalRegistryEntry
>