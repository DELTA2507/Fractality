import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { generate_sierpinski_tetrahedron } from "./sierpinski_tetrahedron_generator"
import TetrahedronMesh from "./sierpinski_tetrahedron_mesh"

type SierpinskiTetrahedronRendererProps = {
    iterations: number
    color: string
    wireframe: boolean
}

export default function SierpinskiTetrahedronRenderer({
    iterations,
    color,
    wireframe
}:SierpinskiTetrahedronRendererProps){

    const tetrahedrons =
        generate_sierpinski_tetrahedron(
            iterations
        )

    return(
        <Canvas
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                position: [4, 4, 4],
                fov: 30,
                up: [0, 1, 0]
            }}
        >

            <ambientLight
                intensity={1.5}
            />

            <directionalLight
                position={[5,5,5]}
                intensity={2}
            />

            <directionalLight
                position={[-5,5,-5]}
                intensity={1}
            />

            <OrbitControls
                target={[0, 0, 0]}
                enableZoom
                enableRotate
                enablePan
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
            />

            {
                tetrahedrons.map(

                    (
                        tetrahedron,
                        index
                    ) => (

                        <TetrahedronMesh
                            key={index}
                            tetrahedron={tetrahedron}
                            color={color}
                            wireframe={wireframe}
                        />
                    )
                )
            }
        </Canvas>
    )
}