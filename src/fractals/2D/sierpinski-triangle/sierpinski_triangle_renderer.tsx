import { generate_sierpinski_triangle } from "./sierpinski_triangle_generator"

type SierpinskiTriangleRendererProps = {
  iterations: number
  color: string
  wireframe: boolean
}

export default function SierpinskiTriangleRenderer({iterations, color, wireframe}: SierpinskiTriangleRendererProps) {

  const triangles = generate_sierpinski_triangle(iterations)
  const is_wireframe = wireframe
  
  return (
    <svg
      viewBox="0 0 1000 1000"
      width="100%"
      height="100%"
    >
      {
        triangles.map((triangle, index) => {

          const points = triangle
            .map(p => `${p.x},${p.y}`)
            .join(" ")

          return is_wireframe ? (
            <polygon
              key={index}
              points={points}
              fill="none"
              stroke={color}
              strokeWidth={1}
            />
          ) : (
            <polygon
              key={index}
              points={points}
              fill={color}
              stroke="none"
            />
          )
        })
      }
    </svg>
  )
}