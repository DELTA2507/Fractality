import type { FractalControl} from "../../../../types/FractalControl"

export function RangeControl(
    control: Extract<
        FractalControl,
        { type: "range" }
    >,
    state: Record<string, number>,
    set_control: (key: string, value: number) => void
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
                value={Number(state[control.key])}
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