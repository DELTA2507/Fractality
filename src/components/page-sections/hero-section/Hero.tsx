import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-glow"></div>
            <div className="hero-background"></div>
            <section className="hero-content">
                <h1 className="hero-title">
                    Fractality
                </h1>
                <p className="hero-description">
                    The place to explore the beauty of fractals
                </p>
            </section>
            <div className="hero-scroll">
                Discover
            </div>
        </section>
    )
}