import type {

    Point,
    Triangle

} from "../../../types/Geometry"

function get_midpoint(point_a:Point, point_b:Point):Point {
    return {
        x:(point_a.x + point_b.x) / 2,
        y:(point_a.y + point_b.y) / 2
    }
}

function subdivide_triangle(triangle:Triangle, depth:number, triangles:Triangle[]):void {
    if(depth === 0){
        triangles.push(
            triangle
        )
        return
    }

    const [point_a, point_b, point_c] = triangle
    
    const midpoint_ab = get_midpoint(
        point_a,
        point_b
    )
    const midpoint_bc = get_midpoint(
        point_b,
        point_c
    )
    const midpoint_ca = get_midpoint(
        point_c,
        point_a
    )

    subdivide_triangle(
        [point_a, midpoint_ab, midpoint_ca],
        depth - 1,
        triangles
    )

    subdivide_triangle(
        [midpoint_ab, point_b, midpoint_bc],
        depth - 1,
        triangles

    )

    subdivide_triangle(
        [midpoint_ca, midpoint_bc, point_c],
        depth - 1,
        triangles
    )

}

export function generate_sierpinski_triangle(iterations:number):Triangle[] {
    const triangles:Triangle[] = []
    const base_triangle:Triangle = [
        {
            x:500,
            y:0
        },
        {
            x:0,
            y:1000
        },
        {
            x:1000,
            y:1000
        }
    ]

    subdivide_triangle(
        base_triangle,
        iterations,
        triangles
    )
    return triangles
}