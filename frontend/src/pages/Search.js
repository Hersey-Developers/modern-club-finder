import React from "react";
import Header from "../components/Search/Header";
import "../components/Search/styles/Search.css";
import Club from "../components/Search/Club";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <button className="back-button">&lt; Back</button>
      <Club />
    </div>
  );
};

export default SearchPage;
