import React from "react";
import { changeClass } from "./script/changeClass.js";

const DaysOfWeek = (props) => {
  const handleClick = () => {
    changeClass(props.day);
  };

  return (
    <div style={{ display: "inline-block" }} className="mt-3 mr-1">
      <button
        id={props.day}
        className="my-button-unclicked"
        onClick={handleClick}
      >
        {props.day}
      </button>
    </div>
  );
};

export default DaysOfWeek;
