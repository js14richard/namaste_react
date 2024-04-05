import { useState } from "react"
import { LogoImageUrl } from "../utils/constants"


export const Navbar = () => {

    const [loginState, setLoginState] = useState("Login");

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
                <button className="nav-item btn" onClick={
                        ()=> (loginState === "Login") ? setLoginState("Logout") : setLoginState("Login") 
                    }>{loginState}
                </button>
                
            </nav>
        </div>
    )
}
