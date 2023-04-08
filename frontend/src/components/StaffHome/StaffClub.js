import React from "react";

const StaffClub = (props) => {
    
    return (
        <div className="text-black mt-5 bg-box phone: w-9/10 tablet:w-9/10 laptop:w-749px desktop: w-749px">
      <div style={{ display: "inline-block" }}>
        <h2 className="subheader-font ml-1" style={{ display: "inline-block" }}>
          {props.sub}
        </h2>
      </div>
    </div>
  );
};

export default StaffClub;
