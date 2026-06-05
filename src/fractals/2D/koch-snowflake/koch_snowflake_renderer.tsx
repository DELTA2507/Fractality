import type {
    Point
} from "../../../types/Geometry"

import {
    generate_koch_snowflake
} from "./koch_snowflake_generator"

type KochSnowflakeRendererProps = {
    iterations:number
    color:string
    wireframe:boolean
}

export default function KochSnowflakeRenderer({
    iterations,
    color,
    wireframe
}:KochSnowflakeRendererProps){

    const points =
        generate_koch_snowflake(
            iterations
        )

    const path =
        points
            .map(
                (
                    point:Point
                ) =>
                    `${point.x},${point.y}`
            )
            .join(" ")

    return(

        <svg
            viewBox="0 0 1000 1000"
            width="100%"
            height="100%"
        >

            <polygon
                points={path}
                fill={
                    wireframe
                        ? "none"
                        : color
                }
                stroke={color}
                strokeWidth={2}
            />

        </svg>

    )

}