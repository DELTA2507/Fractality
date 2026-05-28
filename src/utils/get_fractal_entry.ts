import { fractal_registry } from "../fractals/fractal_registry"

export function get_fractal_entry(
    slug:string
){

    return fractal_registry[
        slug
    ]

}