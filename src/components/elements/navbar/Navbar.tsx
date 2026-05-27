import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Fractality
            </div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <a href="#hero" className="navbar-link">
                        Home
                    </a>
                </li>

                <li className="navbar-item">
                    <a href="#fractals-catalog" className="navbar-link">
                        Explore Fractals
                    </a>
                </li>

                <li className="navbar-item">
                    <a href="#about" className="navbar-link">
                        About
                    </a>
                </li>
            </ul>
        </nav>
    )
}