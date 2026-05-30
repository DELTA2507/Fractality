import type { FractalControls } from "../types/FractalRegistryEntry"
import type { ControlValueMap } from "../types/FractalControl"

export function create_fractal_state(
    controls: FractalControls
) {
    const state: Record<string, ControlValueMap[keyof ControlValueMap]> = {}

    Object.values(controls).forEach(category => {
        category?.forEach(control => {
            state[control.key] = control.default
        })
    })

    return state
}