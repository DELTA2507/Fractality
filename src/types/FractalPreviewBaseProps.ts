import type { ComponentType } from "react"

export type FractalRendererProps =
    Record<string, string | number | boolean>

export type FractalPreviewBaseProps = {
    Renderer: ComponentType<any>
    params: FractalRendererProps
}