import React from "react";
import Header from "../components/Search/Header";
import "../components/Search/styles/Search.css";
import Club from "../components/Search/Club";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";

const SearchPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="h-screen w-screen">
      <Header />
      <button onClick={handleClick} className="back-button">&lt; Back</button>
      <Club />
      <Modal/>
    </div>
  );
};

export default SearchPage;
