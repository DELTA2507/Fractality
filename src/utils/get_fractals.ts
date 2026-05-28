import { loadFront } from "yaml-front-matter"
import type { Fractal } from "../types/Fractal"

const fractal_files = import.meta.glob(
    "../content/fractals/*.md",
    {
        eager:true,
        as:"raw"
    }
)

export function get_fractals():Fractal[] {

    return Object.values(fractal_files).map((file) => {

        const parsed = loadFront(
            file as string
        )

        return {
            ...parsed,
            export_types:Array.isArray(
                parsed.export_types
            )
                ? parsed.export_types
                : []
        } as Fractal

    })

}