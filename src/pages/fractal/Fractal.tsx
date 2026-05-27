import "./Fractal.css"
import { useParams } from "react-router-dom"

export default function Fractal() {
    const { slug } = useParams()
    return (
        <main className="fractal-page">
            <div className="fractal-container">
                <div className="fractal-header">
                    <h1 className="fractal-title">Sierpinski Triangle</h1>
                </div>
                <div className="fractal-preview-wrapper">
                    <div className="fractal-preview">
                    FRACTAL PREVIEW
                    </div>
                </div>
                <div className="fractal-layout">
                    <section className="fractal-main">
                        <p className="fractal-summary">
                            A recursive geometric fractal formed by repeatedly subdividing triangles into smaller self-similar triangles.
                        </p>
                        <div className="fractal-cover">
                            COVER IMAGE
                        </div>

                        <article className="fractal-markdown">
                            MARKDOWN CONTENT
                        </article>
                    </section>

                    <aside className="fractal-sidebar">
                        <div className="fractal-sidebar-sticky">
                            TABLE OF CONTENTS
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )

}