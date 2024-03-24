import React from "react"
import ReactDOM from "react-dom"


// React.CreateElement creates the React element (JS-Object) then the render method converts it into HTML 

const heading = React.createElement("h1", {
    id:"heading", className:"primary_heading"
}, "Hello World from React")
console.log(heading)


// JSX => Parcel => Babel (compiles/transpiles) => React element (JS-Object) then the render method converts it into HTML 

const jsxHeading = <h1 id="jsxHeading">This is a heading from JSX </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(jsxHeading) 