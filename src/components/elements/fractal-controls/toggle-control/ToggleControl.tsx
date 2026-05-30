import type { FractalControl } from "../../../../types/FractalControl"

export function ToggleControl(
    control: Extract<
        FractalControl,
        { type: "toggle" }
    >,
    state: Record<string, boolean>,
    set_control: (key: string, value: boolean) => void
) {
    const value = Boolean(state[control.key])

    return (
        <div
            key={control.key}
            className="fractal-control"
        >
            <label>
                {control.key}
            </label>

            <input
                type="checkbox"
                checked={value}
                onChange={e =>
                    set_control(
                        control.key,
                        e.target.checked
                    )
                }
            />
        </div>
    )
}