import "./FractalPreview.css"
import type { ComponentType } from "react"

import type { FractalRendererProps } from "../../../types/FractalPreviewBaseProps"

import FractalPreview2D from "./fractal-preview-2d/FractalPreview2D"
import FractalPreview3D from "./fractal-preview-3d/FractalPreview3D"

export type FractalPreviewProps = {
    Renderer: ComponentType<FractalRendererProps>
    params: FractalRendererProps
    dimension_type: "2D" | "3D"
}

export default function FractalPreview({
    Renderer,
    params,
    dimension_type
}: FractalPreviewProps) {

    if (dimension_type === "2D") {
        return (
            <FractalPreview2D
                Renderer={Renderer}
                params={params}
            />
        )
    }

    return (
        <FractalPreview3D
            Renderer={Renderer}
            params={params}
        />
    )
}