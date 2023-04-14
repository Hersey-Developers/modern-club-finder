import React from "react";
import StaffClub from "./StaffClub";

const ClubRender = () => {
    const subjects = ["Coding", "Math", "Science", "English", "History"];
    const subComponents = [];
    subjects.forEach((sub) => {
        subComponents.push(<StaffClub sub={sub} />);
    });
  return (
    <div>
        {subComponents}
    </div>
  );
};

export default ClubRender;
