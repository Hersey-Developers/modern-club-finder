import React from "react";

const StaffClub = ({ sub, activities, handleClick }) => {
  return (
    <div className="text-black mt-5 bg-box phone: w-9/10 tablet:w-9/10 laptop:w-749px desktop: w-749px" style={{ cursor: "pointer" }}>
      <div style={{ display: "inline-block" }}>
        <h2 className="subheader-font ml-1" style={{ display: "inline-block" }}>
          {sub}
        </h2>
        <ul>
          {activities.map((activity) => (
            <li key={activity._id}>
              <button onClick={(event) => handleClick(event, activity._id)}>{activity.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StaffClub;