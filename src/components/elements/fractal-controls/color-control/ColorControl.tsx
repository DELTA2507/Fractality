import type { FractalControl } from "../../../../types/FractalControl"

export function ColorControl (
    control: Extract<
        FractalControl,
        { type: "color" }
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
                type="color"
                value={
                    String(
                        state[control.key]
                    )
                }
                onChange={e =>
                    set_control(
                        control.key,
                        e.target.value
                    )
                }
            />

        </div>
    )

}