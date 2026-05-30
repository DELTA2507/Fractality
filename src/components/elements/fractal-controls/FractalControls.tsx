import "./FractalControls.css"

import { useState } from "react"

import type { FractalControlCategory, FractalControls} from "../../../types/FractalRegistryEntry"
import type { ControlState, ControlValueMap, FractalControl } from "../../../types/FractalControl"

import FractalControlsTabs from "./fractal-controls-tabs/FractalControlsTabs"
import FractalControlsPanel from "./fractal-controls-panel/FractalControlsPanel"

interface FractalControlsProps {
    controls: Partial<Record<FractalControlCategory, FractalControl[]>>
    state: ControlState
    set_control: (key: string, value: ControlValueMap[keyof ControlValueMap]) => void
}

export default function FractalControls({
    controls,
    state,
    set_control
}: FractalControlsProps) {

    const categories = Object.keys(controls) as FractalControlCategory[]
    const [active_tab, set_active_tab] = useState(categories[0])
    const active_controls = controls[active_tab] ?? []


    return (
        <div className="fractal-controls">
            <FractalControlsTabs
                categories={categories}
                active_tab={active_tab}
                set_active_tab={set_active_tab}
            />

            <FractalControlsPanel
                key={active_tab}
                controls={active_controls}
                state={state}
                set_control={set_control}
            />
        </div>
    )
}