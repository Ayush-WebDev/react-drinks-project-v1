import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="section" style={{ textAlign: "center" }}>
      <h3 className="section-title">404 Page not found</h3>
      <Link to="/" className="btn" style={{ margin: "0 auto" }}>
        Go back to Home page
      </Link>
    </div>
  );
};

export default Error;
