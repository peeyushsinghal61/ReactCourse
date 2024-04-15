/**  <div id="parent">
  <div id="child1">
    <h1>Hi I am an H1 tag!!</h1>
    <h2>Hi I am an H2 tag!!</h2>
  </div>
  <div id="child2">
    <h1>Hi I am an H1 tag!!</h1>
    <h2>Hi I am an H2 tag!!</h2>
  </div>
  <span>This is first span </span>
</div> **/
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", style: { color: "pink", hover: "yellow" } },
  "Hello world from react!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi I am an H1 tag!!"),
    React.createElement("h2", {}, "Hi I am an H2 tag!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am an H1 tag!!"),
    React.createElement("h2", {}, "Hi I am an H2 tag!!"),React.createElement("span",{},"This is first span")
  ])
]);
// console.log(heading); // creates an react element // react element is just an js object.
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));  // creates a root element in react.And inside this root all things all the elemets will be rendered.
root.render(parent); // this render will take that js object and convert it into respective html tag and put it in dom.
//root.render(heading);
