import type { FractalControl } from "../types/FractalControl"

export function create_fractal_state(
    controls: FractalControl[]
) {

    return Object.fromEntries(
        controls.map(control => [
            control.key,
            control.default
        ])
    )

}