import React from "react";

const Subjects = (props) => {
  const inlineBlock = { display: "inline-block" };

  return (
    <div style={{ display: "inline-block" }} className="mt-2 mr-1">
      <button id={props.sub} className="my-button">
        {props.sub}
      </button>
    </div>
  );
};

export default Subjects;
