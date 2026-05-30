import type { ComponentType } from "react"
import type { FractalControl } from "./FractalControl"

export type FractalRendererProps = Record<
    string,
    number | string
>

export type FractalRegistryEntry = {
    renderer: ComponentType<any>

    generator: (...args:any[]) => unknown

    dimension_type: "2D" | "3D"

    supports_svg_export: boolean

    supports_png_export: boolean

    controls: FractalControl[]
}

export type FractalRegistry = Record<
    string,
    FractalRegistryEntry
>