import "./FractalPreview2D.css"
import { useRef, useState } from "react"
import type { FractalPreviewBaseProps } from "../../../../types/FractalPreviewBaseProps"
import ExportButton from "../../export-button/ExportButton"

export default function FractalPreview2D({ Renderer, params }: FractalPreviewBaseProps) {

    const [zoom, set_zoom] = useState(0.5)
    const [offset, set_offset] = useState({ x: 0, y: 0 })
    const [dragging, set_dragging] = useState(false)
    const last_mouse = useRef({ x: 0, y: 0 })
    const viewport_ref = useRef<HTMLDivElement>(null)

    const reset_view = () => { set_zoom(0.5); set_offset({ x: 0, y: 0 }) }

    const on_wheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault()
        set_zoom(prev => Math.max(0.1, Math.min(10, prev - e.deltaY * 0.001)))
    }

    const on_mouse_down = (e: React.MouseEvent<HTMLDivElement>) => {
        set_dragging(true)
        last_mouse.current = { x: e.clientX, y: e.clientY }
    }

    const on_mouse_up = () => set_dragging(false)

    const on_mouse_move = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging) return
        const dx = e.clientX - last_mouse.current.x
        const dy = e.clientY - last_mouse.current.y
        last_mouse.current = { x: e.clientX, y: e.clientY }
        set_offset(prev => ({ x: prev.x + dx, y: prev.y + dy }))
    }

    const export_svg = () => {
        const svg_el = viewport_ref.current?.querySelector("svg")
        if (!svg_el) return
        const blob = new Blob([new XMLSerializer().serializeToString(svg_el)], { type: "image/svg+xml" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url; a.download = "fractal.svg"; a.click()
        URL.revokeObjectURL(url)
    }

    const export_png = () => {
        const svg_el = viewport_ref.current?.querySelector("svg")
        if (!svg_el) return
        const blob = new Blob([new XMLSerializer().serializeToString(svg_el)], { type: "image/svg+xml" })
        const url = URL.createObjectURL(blob)
        const img = new Image()
        img.onload = () => {
            const canvas = document.createElement("canvas")
            canvas.width = svg_el.viewBox.baseVal.width || 1000
            canvas.height = svg_el.viewBox.baseVal.height || 1000
            const ctx = canvas.getContext("2d")!
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0)
            const a = document.createElement("a")
            a.href = canvas.toDataURL("image/png"); a.download = "fractal.png"; a.click()
            URL.revokeObjectURL(url)
        }
        img.src = url
    }

    return (
        <div
            className="fractal-preview-2d"
            style={{ cursor: dragging ? "grabbing" : "grab" }}
            onWheel={on_wheel}
            onMouseDown={on_mouse_down}
            onMouseUp={on_mouse_up}
            onMouseLeave={on_mouse_up}
            onMouseMove={on_mouse_move}
            onDoubleClick={reset_view}
        >
            <div
                ref={viewport_ref}  // <- nuevo
                className="fractal-viewport-2d"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: "center center" }}
            >
                <Renderer {...params} />
            </div>
            <ExportButton on_export_svg={export_svg} on_export_png={export_png} />
        </div>
    )
}