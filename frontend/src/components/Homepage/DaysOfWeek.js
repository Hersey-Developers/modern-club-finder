import React from "react";
import { changeClass } from "./script/changeClass.js";

const DaysOfWeek = (props) => {
  const handleClick = () => {
    changeClass(props.day, "day-clicked");
  };

  return (
    <div style={{ display: "inline-block" }} className="mt-3 mr-1">
      <button
        id={props.day}
        className="my-button-unclicked transition-all duration-500 ease-in-out hover:scale-105"
        onClick={handleClick}
      >
        {props.day}
      </button>
    </div>
  );
};

export default DaysOfWeek;
