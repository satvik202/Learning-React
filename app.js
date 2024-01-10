import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1>I am Satvik! And I am learning React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = () => <h1>What is this?</h1>;

const Component = () => {
  return (
    <div>
      {jsxElement}
      <Heading />

      <h1>This is a react Component</h1>
    </div>
  );
};

// root.render(jsxElement);
root.render(<Component />);
