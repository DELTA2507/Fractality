import type {
    Point3D,
    Tetrahedron
} from "../../../types/Geometry"

function get_midpoint(
    point_a:Point3D,
    point_b:Point3D
):Point3D{

    return{
        x:(point_a.x + point_b.x) / 2,
        y:(point_a.y + point_b.y) / 2,
        z:(point_a.z + point_b.z) / 2
    }

}

function subdivide_tetrahedron(
    tetrahedron:Tetrahedron,
    depth:number,
    tetrahedrons:Tetrahedron[]
):void{

    if(depth === 0){

        tetrahedrons.push(
            tetrahedron
        )

        return

    }

    const [
        point_a,
        point_b,
        point_c,
        point_d
    ] = tetrahedron

    const midpoint_ab =
        get_midpoint(
            point_a,
            point_b
        )

    const midpoint_ac =
        get_midpoint(
            point_a,
            point_c
        )

    const midpoint_ad =
        get_midpoint(
            point_a,
            point_d
        )

    const midpoint_bc =
        get_midpoint(
            point_b,
            point_c
        )

    const midpoint_bd =
        get_midpoint(
            point_b,
            point_d
        )

    const midpoint_cd =
        get_midpoint(
            point_c,
            point_d
        )

    subdivide_tetrahedron(
        [
            point_a,
            midpoint_ab,
            midpoint_ac,
            midpoint_ad
        ],
        depth - 1,
        tetrahedrons
    )

    subdivide_tetrahedron(
        [
            midpoint_ab,
            point_b,
            midpoint_bc,
            midpoint_bd
        ],
        depth - 1,
        tetrahedrons
    )

    subdivide_tetrahedron(
        [
            midpoint_ac,
            midpoint_bc,
            point_c,
            midpoint_cd
        ],
        depth - 1,
        tetrahedrons
    )

    subdivide_tetrahedron(
        [
            midpoint_ad,
            midpoint_bd,
            midpoint_cd,
            point_d
        ],
        depth - 1,
        tetrahedrons
    )

}

export function generate_sierpinski_tetrahedron(
    iterations:number
):Tetrahedron[]{

    const tetrahedrons:Tetrahedron[] = []

    const base_tetrahedron:Tetrahedron = [

        {
            x:0,
            y:1,
            z:0
        },

        {
            x:-1,
            y:-1,
            z:1
        },

        {
            x:1,
            y:-1,
            z:1
        },

        {
            x:0,
            y:-1,
            z:-1
        }

    ]

    subdivide_tetrahedron(
        base_tetrahedron,
        iterations,
        tetrahedrons
    )

    return tetrahedrons

}