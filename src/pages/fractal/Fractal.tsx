import "./Fractal.css"

import { useParams } from "react-router-dom"
import { marked } from "marked"
import katex  from "marked-katex-extension"

import TableOfContents from "../../components/elements/table-of-contents/TableOfContents"

import { get_fractal } from "../../utils/get_fractal"
import { get_fractal_entry } from "../../utils/get_fractal_entry"

marked.use(
    katex({
        throwOnError:false
    })
)

const renderer = new marked.Renderer()

renderer.heading = ({ tokens, depth }) => {

    const text = tokens
        .map(token => token.raw)
        .join("")

    const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")

    return `
        <h${depth} id="${id}">
            ${text}
        </h${depth}>
    `
}

marked.use({
    renderer
})

export default function Fractal(){

    const { slug } = useParams()

    const fractal =
        get_fractal(
            slug || ""
        )

    if(!fractal){

        return(
            <main className="fractal-page">
                Fractal not found
            </main>
        )

    }

    const entry =
        get_fractal_entry(
            fractal.slug
        )

    const Renderer =
        entry?.renderer

    const markdown =
        marked.parse(
            fractal.__content
        )

    return(
        <main className="fractal-page">

            <div className="fractal-container">

                <div className="fractal-header">

                    <h1 className="fractal-title">
                        {fractal.title}
                    </h1>

                </div>

                <div className="fractal-preview-wrapper">

                    <div className="fractal-preview">

                        {
                            Renderer && (

                                <Renderer
                                    iterations={
                                        fractal.default_iterations
                                    }
                                />

                            )
                        }

                    </div>

                </div>

                <div className="fractal-layout">

                    <section className="fractal-main">

                        <p className="fractal-summary">
                            {fractal.description}
                        </p>

                        <article
                            className="fractal-markdown"
                            dangerouslySetInnerHTML={{
                                __html:markdown
                            }}
                        />

                    </section>

                    <aside className="fractal-sidebar">

                        <div className="fractal-sidebar-sticky">

                            <TableOfContents />

                        </div>

                    </aside>

                </div>

            </div>

        </main>
    )

}