import "./FractalControls.css"
import type { FractalControl } from "../../../types/FractalControl"

import { control_renderers } from "./control_renderers"

interface FractalControlsProps {
    controls: FractalControl[]
    state: Record<string, number | string>
    set_control: (
        key: string,
        value: number | string
    ) => void
}

export default function FractalControls({
    controls,
    state,
    set_control
}: FractalControlsProps) {

    return (
        <div className="fractal-controls">

            {
                controls.map(control => {

                    const render_control =
                        control_renderers[
                            control.type
                        ]

                    if (!render_control) {
                        return null
                    }

                    return render_control(
                        control as never,
                        state,
                        set_control
                    )

                })
            }

        </div>
    )
}