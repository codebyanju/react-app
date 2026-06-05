// import React from "react";
// import ReactDOM from "react-dom/client";

// CREATE REACT ELEMENT
const reactEle = React.createElement(
  "h1",
  { className: "box" }, // ATTRIBUTES
  "Hello World from React.createElement", // CHILDREN
);

console.log("reactEle", reactEle); // JS OBJECT

// CREATE ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));

// RENDER
root.render(reactEle);
