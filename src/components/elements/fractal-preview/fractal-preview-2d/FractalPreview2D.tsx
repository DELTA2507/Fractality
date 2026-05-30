import "./FractalPreview2D.css"
import { useRef, useState } from "react"
import type { FractalPreviewBaseProps } from "../../../../types/FractalPreviewBaseProps"

export default function FractalPreview2D({
    Renderer,
    params
}: FractalPreviewBaseProps) {

    const [zoom, set_zoom] = useState(0.5)
    const [offset, set_offset] = useState({
        x: 0,
        y: 0
    })
    
    const [dragging, set_dragging] = useState(false)
    
    const last_mouse = useRef({
        x: 0,
        y: 0
    })
    
    const on_double_click = () => {
        reset_view()
    }
    
    const reset_view = () => {
        set_zoom(0.5)
        set_offset({
            x: 0,
            y: 0
        })
    }

    const on_wheel = (
        e: React.WheelEvent<HTMLDivElement>
    ) => {
        
        e.preventDefault()

        set_zoom(prev =>
            Math.max(
                0.1,
                Math.min(
                    10,
                    prev - e.deltaY * 0.001
                )
            )
        )
    }

    const on_mouse_down = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {

        set_dragging(true)

        last_mouse.current = {
            x: e.clientX,
            y: e.clientY
        }
    }

    const on_mouse_up = () => {
        set_dragging(false)
    }

    const on_mouse_move = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {

        if (!dragging) {
            return
        }

        const dx =
            e.clientX -
            last_mouse.current.x

        const dy =
            e.clientY -
            last_mouse.current.y

        last_mouse.current = {
            x: e.clientX,
            y: e.clientY
        }

        set_offset(prev => ({
            x: prev.x + dx,
            y: prev.y + dy
        }))
    }

    return (
        <div
            className="fractal-preview-2d"
            style={{
                cursor: dragging
                    ? "grabbing"
                    : "grab"
            }}
            onWheel={on_wheel}
            onMouseDown={on_mouse_down}
            onMouseUp={on_mouse_up}
            onMouseLeave={on_mouse_up}
            onMouseMove={on_mouse_move}
            onDoubleClick={on_double_click}
        >

            <div className="fractal-preview-toolbar-2d">

                <button
                    type="button"
                    onMouseDown={e => e.stopPropagation()}
                    onClick={reset_view}
                >
                    Reset View
                </button>

            </div>

            <div
                className="fractal-viewport-2d"
                style={{
                    transform: `
                        translate(${offset.x}px, ${offset.y}px)
                        scale(${zoom})
                    `,
                    transformOrigin: "center center"
                }}
            >
                <Renderer {...params} />
            </div>

        </div>
    )
}