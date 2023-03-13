import React from "react";
import Header from "../components/Search/Header";
import "../components/Search/styles/Search.css";
import Club from "../components/Search/Club";
import { useHistory } from "react-router-dom";

const SearchPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <Header />
      <button onClick={handleClick} className="back-button">&lt; Back</button>
      <Club />
    </div>
  );
};

export default SearchPage;
