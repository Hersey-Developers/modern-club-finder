import React from "react";
import ReusableClub from "./ReusableClub";
import Clubs from "./script/ClubScript";


const Club = (props) => {
  const clubsShown = [
    [
      "Hersey Hack Club",
      ["Coding", "Math", "Science"],
      "Learn to code and build awesome projects at the JHHS Hack Club! No experience needed",
      "Every Friday",
      "4:00PM - 5:00PM",
      "158",
      "Bob Brown",
    ],
    [
        "Hersey Hack Club",
        ["Coding", "Math", "Science"],
        "Learn to code and build awesome projects at the JHHS Hack Club! No experience needed",
        "Every Friday",
        "4:00PM - 5:00PM",
        "158",
        "Bob Brown",
      ],
      [
      "Hersey Hack Club",
      ["Coding", "Math", "Science"],
      "Learn to code and build awesome projects at the JHHS Hack Club! No experience needed",
      "Every Friday",
      "4:00PM - 5:00PM",
      "158",
      "Bob Brown",
    ],
  ];
  const reusableClubArray = [];

  clubsShown.forEach((sub) => {
    console.log(sub);
    reusableClubArray.push(<ReusableClub className="inline-block" sub={sub}/>);
  });
  return (
  <div className="div-margin grid grid-cols-1 phone: grids-cols-1 gap-4 tablet:grid-cols-2 gap-4 laptop:grid-cols-2 gap-4 desktop:grid-cols-3 gap-4">{reusableClubArray}</div>
  );
};

export default Club;
