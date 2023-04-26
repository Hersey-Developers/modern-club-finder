import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="header-font">Hersey Club Finder</h1>
      <h2 className="header-description-font mb-4">
        Find your next Hersey club!{" "}
        <span style={{ fontWeight: "bold" }}>Click </span>
        <Link to="/stafflogin" className="btn btn-primary">
          <u><span style={{ fontWeight: "bold" }}>here</span></u>
        </Link>
        <span style={{ fontWeight: "bold" }}> for Staff Login page.</span>
      </h2>
    </div>
  );
};

export default Header;
