import "./Fractal.css"

import { Icon } from "@iconify/react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { marked } from "marked"
import katex  from "marked-katex-extension"

import TableOfContents from "../../components/elements/table-of-contents/TableOfContents"
import FractalPreview from "../../components/elements/fractal-preview/FractalPreview"
import FractalControls from "../../components/elements/fractal-controls/FractalControls"

import { get_fractal } from "../../utils/get_fractal"
import { get_fractal_entry } from "../../utils/get_fractal_entry"
import { create_fractal_state } from "../../utils/create_fractal_state"
import Breadcrumbs from "../../components/elements/breadcrumbs/Breadcrumbs"
import type { ControlValueMap } from "../../types/FractalControl"

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
    const [show_controls, set_show_controls] = useState(false)

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
    
    const [state, set_state] = useState(
        () => create_fractal_state(
            entry.controls
        )
    )
    const set_control = (
        key: string,
        value: ControlValueMap[keyof ControlValueMap]
    ) => {
        set_state(prev => ({
            ...prev,
            [key]: value
        }))
    }

    return(
        <main className="fractal-page">

            <div className="fractal-container">
                <Breadcrumbs
                    paths={[
                        { name: "Home", href: "/" },
                        { name: fractal.title }
                    ]}
                />
                <div className="fractal-header">

                    <h1 className="fractal-title">
                        {fractal.title}
                    </h1>

                </div>

                <div className="fractal-preview-wrapper">
                    <div className="fractal-preview-toolbar">

                        <span className="fractal-preview-label">
                            Interactive Preview
                        </span>

                        <div className="fractal-preview-toolbar-controls">
                            <button
                                type="button"
                                className="fractal-preview-toolbar-controls-button"
                                onClick={() => set_show_controls(!show_controls)}
                            >
                                {show_controls ? <Icon icon="mdi:close" /> : <Icon icon="mdi:cog" />}
                            </button>
                        </div>

                    </div>
                    <div
                        className={`
                            fractal-controls-container
                            ${
                                show_controls
                                    ? "open"
                                    : ""
                            }
                        `}
                    >

                        <FractalControls
                            controls={entry.controls}
                            state={state}
                            set_control={set_control}
                        />

                    </div>
                    <div className="fractal-preview-panel">
                        <FractalPreview
                            Renderer={Renderer}
                            params={state}
                            dimension_type={entry.dimension_type}
                        />
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