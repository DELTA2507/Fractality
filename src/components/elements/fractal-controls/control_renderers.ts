import { RangeControl} from "./range-control/RangeControl"
import { ColorControl } from "./color-control/ColorControl"
import { ToggleControl } from "./toggle-control/ToggleControl"
import type { ControlState, ControlValueMap, FractalControl } from "../../../types/FractalControl"
import type { JSX } from "react"

export type ControlRenderer<K extends keyof ControlValueMap> = (
    control: Extract<FractalControl, { type: K }>,
    state: ControlState,
    set_control: (key: string, value: ControlValueMap[K]) => void
) => JSX.Element

export const control_renderers = {
    range: RangeControl,
    color: ColorControl,
    toggle: ToggleControl
} as const