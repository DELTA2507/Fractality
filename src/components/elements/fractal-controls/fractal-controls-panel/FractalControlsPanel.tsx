import type { ControlState, ControlValueMap, FractalControl } from "../../../../types/FractalControl"

import { control_renderers } from "../control_renderers"

interface FractalControlsPanelProps {
    controls: FractalControl[]
    state: ControlState
    set_control: (key: string, value: ControlValueMap[keyof ControlValueMap]) => void
}

export default function FractalControlsPanel({
    controls,
    state,
    set_control
}: FractalControlsPanelProps) {
    return (
        <div className="controls">
            {controls.map(control => {
                const render_control = control_renderers[control.type] as any

                if (!render_control) return null

                return render_control(
                    control as never,
                    state,
                    set_control
                )
            })}
        </div>
    )
}