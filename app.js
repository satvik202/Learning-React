import React from "react";
import ReactDOM from "react-dom/client" ;
const heading= React.createElement("div", {id : "child1"},
[React.createElement("h1",{}, "this is an h1 tag"),
React.createElement("h2",{}, "this is an h2 tag")]
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)