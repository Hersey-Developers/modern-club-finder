import React from "react";
import { changeClass } from "./script/changeClass.js";

const Category = (props) => {
  const inlineBlock = { display: "inline-block" };
  const handleClick = () => {
    changeClass(props.sub, "category-clicked");
  };

  return (
    <div style={{ display: "inline-block" }} className="mt-3 mr-1">
      {/* <input type="checkbox" id="category" name="category" />
      <label for="category">{props.sub}</label> */}

      <button
        id={props.sub}
        className="my-button-unclicked transition-all duration-500 ease-in-out hover:scale-105"
        onClick={handleClick}>
        {props.sub}
      </button>
    </div>
  );
};

export default Category;
