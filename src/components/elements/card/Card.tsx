import "./Card.css"

interface CardProps {
    slug:string
    thumbnail:string
    title:string
    description:string
    dimensionType:string
    exportTypes:string[]
}

export default function Card({
    slug,
    thumbnail,
    title,
    description,
    dimensionType,
    exportTypes
}:CardProps){

    return(
        <article className="card">
            <a
                href={`/fractals/${slug}`}
                className="card-thumbnail-wrapper"
            >
                <img
                    src={thumbnail}
                    alt={title}
                    className="card-thumbnail"
                />
                <div className="card-thumbnail-overlay">

                    <span className="card-thumbnail-label">
                        Explore
                    </span>
                </div>
            </a>

            <div className="card-content">
                <div className="card-meta">
                    <span className="card-tag">
                        {dimensionType}
                    </span>
                    {
                        exportTypes.map(

                            (
                                type:string
                            )=>(

                                <span
                                    key={type}
                                    className="card-tag"
                                >

                                    {type}

                                </span>

                            )
                        )
                    }
                </div>
                <h3 className="card-title">
                    {title}
                </h3>
                <p className="card-description">
                    {description}
                </p>
            </div>
        </article>
    )
}