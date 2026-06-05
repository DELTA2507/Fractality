import type {
    Point,
    Polyline
} from "../../../types/Geometry"

function subdivide_segment(
    point_a:Point,
    point_b:Point
):Point[]{

    const dx =
        point_b.x - point_a.x

    const dy =
        point_b.y - point_a.y

    const point_1 = {
        x: point_a.x + dx / 3,
        y: point_a.y + dy / 3
    }

    const point_2 = {
        x: point_a.x + (dx * 2) / 3,
        y: point_a.y + (dy * 2) / 3
    }

    const angle =
        Math.PI / 3

    const peak = {
        x:
            point_1.x +
            (
                (point_2.x - point_1.x) *
                Math.cos(-angle)
            ) -
            (
                (point_2.y - point_1.y) *
                Math.sin(-angle)
            ),

        y:
            point_1.y +
            (
                (point_2.x - point_1.x) *
                Math.sin(-angle)
            ) +
            (
                (point_2.y - point_1.y) *
                Math.cos(-angle)
            )
    }

    return [
        point_a,
        point_1,
        peak,
        point_2
    ]
}

export function generate_koch_snowflake(
    iterations:number
):Polyline {

    let points:Polyline = [

        {
            x:500,
            y:120
        },

        {
            x:880,
            y:800
        },

        {
            x:120,
            y:800
        }

    ]

    for(
        let i = 0;
        i < iterations;
        i++
    ){

        const next_points:Polyline = []

        for(
            let j = 0;
            j < points.length;
            j++
        ){

            const point_a =
                points[j]

            const point_b =
                points[
                    (j + 1) %
                    points.length
                ]

            next_points.push(
                ...subdivide_segment(
                    point_a,
                    point_b
                )
            )

        }

        points = next_points

    }

    return points
}