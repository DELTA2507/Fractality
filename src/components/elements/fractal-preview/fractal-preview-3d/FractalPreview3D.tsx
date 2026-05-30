import type { FractalPreviewBaseProps } from "../../../../types/FractalPreviewBaseProps"

export default function FractalPreview3D({ Renderer, params }: FractalPreviewBaseProps) {
    return (
        <div className="fractal-preview-3d">
            <Renderer {...params} />
        </div>
    )
}