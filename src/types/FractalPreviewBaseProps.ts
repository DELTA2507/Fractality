import type { ComponentType } from "react"

export type FractalRendererProps = Record<string, number | string>

export type FractalPreviewBaseProps = {
    Renderer: ComponentType<any>
    params: FractalRendererProps
}