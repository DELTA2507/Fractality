import "./FractalPreview3D.css"
import { useRef } from "react"
import type { FractalPreviewBaseProps } from "../../../../types/FractalPreviewBaseProps"
import ExportButton from "../../export-button/ExportButton"

export default function FractalPreview3D({ Renderer, params }: FractalPreviewBaseProps) {

    const container_ref = useRef<HTMLDivElement>(null)

    const export_png = () => {
        // buscar el canvas en todo el preview panel, no solo en el ref
        const canvas = document.querySelector(".fractal-preview-3d canvas") as HTMLCanvasElement
        console.log("canvas:", canvas)
        if (!canvas) return
        const a = document.createElement("a")
        a.href = canvas.toDataURL("image/png")
        a.download = "fractal.png"
        a.click()
    }

    return (
        <div ref={container_ref} className="fractal-preview-3d">
            <Renderer {...params} />
            <ExportButton on_export_png={export_png} />
        </div>
    )
}