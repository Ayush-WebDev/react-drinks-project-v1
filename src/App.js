import React from "react";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import Router from "./Components/Router";
const App = () => {
  return (
    <>
      <Nav />
      <div className="section">
        <Router />
      </div>
    </>
  );
};

export default App;
