import React from "react"
import ReactDOM from "react-dom"



const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="logo-location">
                <img src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" alt="swiggy logo" className="navbar-logo"/>

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

const Header = ()=> {   
    return(
        <div className="header-container">
            <Navbar/>
        </div>
    )
}

const RestaurantCard = () => {
    return(
        <div className="restaurant-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108" alt="restaurant image" className="restaurant-card-image"/>
            <h2 className="restaurant-card-offer-text">50% off upto ₹100</h2>
            <div className="restaurant-card-text">
                <h3>The Good Bowl</h3>
                <h3>4.4. 35-40 mins</h3>
                <p>Biriyani, Pastas, Punjabi,Desserts</p>
                <p>Ezhil Nagar</p>
            </div>
    </div>
    )
}

const RestaurantContainer = () => {
    return(
        <div className="restaurant-containter">
            <h2 className="restaurant-heading">Top restaurant chains in Chennai</h2>
            <div className="restaurant-card-containter">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const HomeContainer = () =>{
    return(
        <div className="home-container">
            <RestaurantContainer/>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <Header/>
            <div className="home-wrapper">
                <HomeContainer/>
            </div>
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(<App />) 