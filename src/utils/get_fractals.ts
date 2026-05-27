import { loadFront } from "yaml-front-matter"

const fractal_files = import.meta.glob("../content/fractals/*.md", {
  eager: true,
  as: "raw"
})

export function get_fractals() {
  return Object.values(fractal_files).map((file) => {
    const parsed = loadFront(file)

    return {
        ...parsed,
        export_types: Array.isArray(parsed.export_types)
            ? parsed.export_types
            : [],
        tags: Array.isArray(parsed.tags) ? parsed.tags : []
    }
  })
}