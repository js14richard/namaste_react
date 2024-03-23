const heading = React.createElement("h1", {
    id:"heading", className:"primary_heading"
}, "Hello World from React")
console.log(heading)


const navbar = React.createElement("nav", {id:"navigation"}, [
    React.createElement("div", {id:"navigation_links"}, [
        React.createElement("div",{},"Home"),
        React.createElement("div",{},"About"),
        React.createElement("div",{},"Contact"),
        React.createElement("div",{},"Login")
    ]),
    React.createElement("div", {id:"navbar_logo_section"}, [
        React.createElement("img", {id:"nav_logo_img", src:"./logo.png"}),
        React.createElement("h1", {id:"nav_logo_text"}, "WebsiteName")
    ]) 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(navbar) 