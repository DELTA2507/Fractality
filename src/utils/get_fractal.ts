import { get_fractals } from "./get_fractals"

export function get_fractal(
    slug:string
){
    return get_fractals().find(

        fractal =>
            fractal.slug === slug

    )
}