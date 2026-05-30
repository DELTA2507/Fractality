export type FractalControl =
    | {
        key: string
        type: "range"
        min: number
        max: number
        default: number
    }
    | {
        key: string
        type: "color"
        default: string
    }