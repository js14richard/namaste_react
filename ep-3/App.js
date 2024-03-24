import React from "react"
import ReactDOM from "react-dom"


// React.CreateElement creates the React element (JS-Object) then the render method converts it into HTML 

const heading = React.createElement("h1", {
    id:"heading", className:"primary_heading"
}, "Hello World from React")
console.log(heading)


// JSX => Parcel => Babel (compiles/transpiles) => React element (JS-Object) then the render method converts it into HTML 

const jsxHeading = <h1 id="jsxHeading">This is a heading from JSX </h1>


// Functional components => A function that returns the JSX

const Title = () => <h1>This is the Title component</h1>

const Header = () =>{
   return <h2>This is the Header Component</h2>
}

const HeroSection = () =>{
    return(
        <h2>This is the Hero Section</h2>
    )
}


// Component Composition  --> Calling a component inside a component
const HomePage = ()=>{
    return(
        <div className="homepage">
            <Header/>
            <Title/>
            
            <HeroSection/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(<HomePage />) 