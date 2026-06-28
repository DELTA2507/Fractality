import "./ExportButton.css"
import { useState, useRef, useEffect } from "react"
import { Icon } from "@iconify/react"

type ExportOption = {
    format: "svg" | "png"
    label: string
    hint: string
    icon: string
    color: string
}

type ExportButtonProps = {
    on_export_svg?: () => void
    on_export_png?: () => void
}

const OPTIONS: ExportOption[] = [
    {
        format: "svg",
        label: "SVG",
        hint: "vector",
        icon: "mdi:file-image-outline",
        color: "var(--export-svg-color)"
    },
    {
        format: "png",
        label: "PNG",
        hint: "raster",
        icon: "mdi:file-png-box",
        color: "var(--export-png-color)"
    }
]

export default function ExportButton({ on_export_svg, on_export_png }: ExportButtonProps) {

    const [open, set_open] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handle_click_outside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                set_open(false)
            }
        }
        document.addEventListener("mousedown", handle_click_outside)
        return () => document.removeEventListener("mousedown", handle_click_outside)
    }, [])

    const handle = (format: "svg" | "png") => {
        set_open(false)
        if (format === "svg") on_export_svg?.()
        if (format === "png") on_export_png?.()
    }

    const available = OPTIONS.filter(opt => {
        if (opt.format === "svg") return !!on_export_svg
        if (opt.format === "png") return !!on_export_png
        return false
    })

    return (
        <div className="export-button-root" ref={ref} onMouseDown={e => e.stopPropagation()}>
            {open && (
                <div className="export-dropdown">
                    <span className="export-dropdown-label">Export as</span>
                    {available.map(opt => (
                        <button
                            key={opt.format}
                            type="button"
                            className="export-dropdown-item"
                            onClick={() => handle(opt.format)}
                        >
                            <Icon icon={opt.icon} style={{ color: opt.color }} className="export-dropdown-icon" />
                            <span className="export-dropdown-name">{opt.label}</span>
                            <span className="export-dropdown-hint">{opt.hint}</span>
                        </button>
                    ))}
                </div>
            )}
            <button type="button" className="export-trigger" onClick={() => set_open(prev => !prev)}>
                <Icon icon="mdi:download" className="export-trigger-icon" />
                <span>Export</span>
               <Icon
                    icon="mdi:chevron-up"
                    className={`export-trigger-chevron ${open ? "open" : ""}`}
                />
            </button>
        </div>
    )
}