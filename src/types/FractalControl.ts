export type ControlValueMap = {
    range: number
    color: string
    toggle: boolean
}

type BaseControl<K extends keyof ControlValueMap> = {
    key: string
    type: K
    default: ControlValueMap[K]
}

export type FractalControl =
    | (BaseControl<"range"> & {
        min: number
        max: number
    })
    | BaseControl<"color">
    | BaseControl<"toggle">

export type ControlState<T extends FractalControl = FractalControl> = {
    [K in T as K["key"]]: ControlValueMap[K["type"]]
}