import { generate_sierpinski_triangle } from "./sierpinski_triangle_generator"

type SierpinskiTriangleRendererProps = {
  iterations: number
}

export default function SierpinskiTriangleRenderer({iterations}: SierpinskiTriangleRendererProps) {

  const triangles = generate_sierpinski_triangle(iterations)
  
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
    >
      {
        triangles.map((triangle, index) => {

          const points = triangle
            .map(point => `${point.x},${point.y}`)
            .join(" ")

          return (
            <polygon
              key={index}
              points={points}
              fill="white"
            />
          )

        })
      }
    </svg>
  )
}