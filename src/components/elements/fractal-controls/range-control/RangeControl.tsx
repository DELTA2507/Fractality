import type { FractalControl } from "../../../../types/FractalControl"

export function RangeControl(
    control: Extract<
        FractalControl,
        { type: "range" }
    >,
    state: Record<string, number | string>,
    set_control: (
        key: string,
        value: number | string
    ) => void
) {

    return (
        <div
            key={control.key}
            className="fractal-control"
        >

            <label>
                {control.key}
            </label>

            <input
                type="range"
                min={control.min}
                max={control.max}
                value={state[control.key]}
                onChange={e =>
                    set_control(
                        control.key,
                        Number(e.target.value)
                    )
                }
            />

            <span>
                {state[control.key]}
            </span>

        </div>
    )

}