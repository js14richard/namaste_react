import { LogoImageUrl } from "../utils/constants"

export const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="logo-location">
                <img src={LogoImageUrl} alt="swiggy logo" className="navbar-logo"/>

                <div className="navbar-location"> Other</div>
                <div className="location-dropdown">
                <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            <nav className="navbar">
                <div className="nav-item">
                    Search
                </div>
                <div className="nav-item">
                    Offers
                </div>
                <div className="nav-item">
                    Help
                </div>
                <div className="nav-item">
                    Sign In
                </div>
                <div className="nav-item">
                    Cart
                </div>
            </nav>
        </div>
    )
}
