import React from "react";
import ReactDOM from "react-dom/client";

// React element using core react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to react"
);

const elem=<span>react element</span>

// jsx  // create React element using jsx.
const jsxHeading = <h1 id="jsxHeading">{elem}  || Welcome to react from JSX</h1>;
console.log(heading);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// react components -----> there are 2 types of components: functional components and class based components.
// React functional component--> it is just a js function which return some peice of JSX. or we can say a function which is returning a react element or bunch of react elements is a functional component.

const HeadingComponent = () => {
  return <h1 className="heading">React functional component</h1>;
};

// component composition: put one component inside another component.
const HeadingComponent1 = () => {
  return (
    <div className="">
      <HeadingComponent />
      {HeadingComponent()} 
      <h2>{100+500}</h2>
      {jsxHeading}
      <h1 className="heading">React functional component1</h1>
    </div>
  );
};
// both line 30 and 31 are same. 
// render a react element
//root.render(jsxHeading);

// render react functional component
root.render(<HeadingComponent1 />);

// this render method will take the react element and convert into HTML and push it to the browser. And It will replace everything present in the element in index.js who is having root as id.
