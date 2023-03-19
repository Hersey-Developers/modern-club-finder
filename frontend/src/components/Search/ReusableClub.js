import React from "react";
import Subjects from "./Subjects";
import Clubs from "./script/ClubScript";
import Calendar from "./resources/Calendar.png";
import Clock from "./resources/Clock.png";
import Person from "./resources/Person.png";
import Ping from "./resources/Ping.png";

const ReusableClub = (props) => {
  const clubs = new Clubs(props.sub);
  const subjects = clubs.getCategories();
  const subComponents = [];
  subjects.forEach((sub) => {
    subComponents.push(<Subjects sub={sub} />);
  });

  return (
    <div className="club-box inline-block pr-2 transition-all duration-500 ease-in-out hover:scale-105">
      <h1 className="heading-component">{clubs.getClubName()}</h1>

      <div style={{ display: "inline-block" }}>{subComponents}</div>
      <h3 className="description-font mt-3">{clubs.getDescription()}</h3>
      <div class="grid grid-cols-2 gap-4 description-font mt-5">
        <div style={{ display: "inline-block" }}>
          <img
            src={Calendar}
            alt="Cal"
            className="mb-1 mr-2"
            style={{ display: "inline-block" }}
          />
          <p class="col-span-1" style={{ display: "inline-block" }}>
            {clubs.getDate()}{" "}
          </p>
        </div>
        <div style={{ display: "inline-block" }}>
          <img
            src={Ping}
            alt="Ping"
            className="mb-1 mr-2"
            style={{ display: "inline-block" }}
          />
          <p class="col-span-1" style={{ display: "inline-block" }}>{clubs.getRoom()}</p>
        </div>
        <div style={{ display: "inline-block" }}>
          <img
            src={Clock}
            alt="Clock"
            className="mb-1 mr-2"
            style={{ display: "inline-block" }}
          />
          <p class="col-span-1" style={{ display: "inline-block" }}>{clubs.getTime()}</p>
        </div>
        <div style={{ display: "inline-block" }}>
          <img
            src={Person}
            alt="Clock"
            className="mb-1 mr-2"
            style={{ display: "inline-block" }}
          />
          <p class="col-span-1" style={{ display: "inline-block" }}>{clubs.getSponsor()}</p>
        </div>
      </div>
    </div>
  );
};

export default ReusableClub;
