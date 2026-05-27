import "./FractalsCatalog.css"

import Card from "../../elements/card/Card"
import { get_fractals } from "../../../utils/get_fractals"

export default function FractalsCatalog(){

    const fractals = get_fractals()

    return(
        <section
            id="fractals-catalog"
            className="fractals-catalog"
        >
            <div className="fractals-catalog-header">

                <div className="fractals-catalog-heading">
                    <p className="fractals-catalog-label">
                        Fractal Library
                    </p>
                    <h2 className="fractals-catalog-title">
                        Explore Fractals
                    </h2>
                </div>

                <div className="fractals-catalog-controls">
                    <div className="fractals-catalog-search">
                        <input
                            type="text"
                            placeholder="Search fractals..."
                            className="fractals-catalog-input"
                        />
                    </div>

                    <div className="fractals-catalog-filter">
                        <button className="fractals-catalog-filter-trigger">
                            <span>
                                All Dimensions
                            </span>
                            <span className="fractals-catalog-filter-icon">
                                ↓
                            </span>
                        </button>

                        <div className="fractals-catalog-filter-dropdown">
                            <button className="fractals-catalog-filter-option active">
                                All Dimensions
                            </button>
                            <button className="fractals-catalog-filter-option">
                                2D
                            </button>
                            <button className="fractals-catalog-filter-option">
                                3D
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fractals-catalog-grid">
                {
                    fractals.map((fractal:any)=>(

                        <Card
                            key={fractal.slug}
                            slug={fractal.slug}
                            thumbnail={fractal.thumbnail}
                            title={fractal.title}
                            description={fractal.description}
                            dimensionType={fractal.dimension_type}
                            exportTypes={fractal.export_types}
                        />
                    ))
                }
            </div>
        </section>
    )
}