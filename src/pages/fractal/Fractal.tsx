import { useParams } from "react-router-dom"

export default function Fractal() {
    const { slug } = useParams()
    return (
        <main>
            <h1>{slug}</h1>
        </main>

    )

}