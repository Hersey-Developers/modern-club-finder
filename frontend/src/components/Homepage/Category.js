import React from "react";
import { changeClass } from "./script/changeClass.js";

const Category = (props) => {
  const inlineBlock = { display: "inline-block" };
  const handleClick = () => {
    changeClass(props.sub);
  };

  return (
    <div style={{ display: "inline-block" }} className="mt-3 mr-1">
      {/* <input type="checkbox" id="category" name="category" />
      <label for="category">{props.sub}</label> */}

      <button
        id={props.sub}
        className="my-button-unclicked"
        onClick={handleClick}
      >
        {props.sub}
      </button>
    </div>
  );
};

export default Category;
