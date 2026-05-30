import * as THREE from "three"
import { useMemo } from "react"

import type {
    Tetrahedron
} from "../../../types/Geometry"

type TetrahedronMeshProps = {
    tetrahedron: Tetrahedron
    color: string
    wireframe: boolean
}

export default function TetrahedronMesh({
    tetrahedron,
    color,
    wireframe
}:TetrahedronMeshProps){

    const geometry = useMemo(() => {

        const [
            point_a,
            point_b,
            point_c,
            point_d
        ] = tetrahedron

        const vertices = new Float32Array([

            point_a.x, point_a.y, point_a.z,
            point_b.x, point_b.y, point_b.z,
            point_c.x, point_c.y, point_c.z,

            point_a.x, point_a.y, point_a.z,
            point_b.x, point_b.y, point_b.z,
            point_d.x, point_d.y, point_d.z,

            point_a.x, point_a.y, point_a.z,
            point_c.x, point_c.y, point_c.z,
            point_d.x, point_d.y, point_d.z,

            point_b.x, point_b.y, point_b.z,
            point_c.x, point_c.y, point_c.z,
            point_d.x, point_d.y, point_d.z

        ])

        const geometry =
            new THREE.BufferGeometry()

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(
                vertices,
                3
            )
        )

        geometry.computeVertexNormals()

        return geometry

    }, [tetrahedron])

    return(

        <mesh geometry={geometry}>

            <meshStandardMaterial
                color={color}
                wireframe={wireframe}
                side={THREE.DoubleSide}
            />

        </mesh>

    )

}