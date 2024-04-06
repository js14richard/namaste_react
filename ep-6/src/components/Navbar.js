import { useEffect, useState } from "react"
import { LogoImageUrl } from "../utils/constants"


export const Navbar = () => {

    const [loginState, setLoginState] = useState("Login");

    // UseEffect will be called after the component is rendered
    // If there is no dependency given in the useEffect it will be called everytime when ever the component render
    // If [] is passed as dependency, useEffect will be called only once.
    // If dependency array is [loginState] , useEffect will be called when ever the stateVariable value gets updated.

    useEffect(()=>{
        console.log("Use Effect Called")
    },[loginState])

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
