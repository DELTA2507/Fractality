import "./FractalControlsTabs.css"
import type { FractalControlCategory } from "../../../../types/FractalRegistryEntry"

interface FractalControlsTabsProps {
    categories: FractalControlCategory[]
    active_tab: FractalControlCategory
    set_active_tab: React.Dispatch<React.SetStateAction<FractalControlCategory>>
}

export default function FractalControlsTabs({
    categories,
    active_tab,
    set_active_tab
}: FractalControlsTabsProps) {
    return (
        <div className="segmented">
            <div className="segmented-track">
                <div
                    className="segmented-thumb"
                    style={{
                        transform: `translateX(${categories.indexOf(active_tab) * 100}%)`,
                        width: `${100 / categories.length}%`
                    }}
                />
            </div>

            {categories.map(category => (
                <button
                    key={category}
                    className={`segmented-item ${category === active_tab ? "active" : ""}`}
                    onClick={() => set_active_tab(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}