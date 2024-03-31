import React from "react"
import ReactDOM from "react-dom/client"
import { HomeContainer } from "./components/HomeContainer";
import { Header } from "./components/Header";



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