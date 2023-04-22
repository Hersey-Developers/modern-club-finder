import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ReusableClub from "./ReusableClub";
import Clubs from "./script/ClubScript";
import Modal from "../../pages/Modal";


const Club = (props) =>   {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const categories = queryParams.get('categories')?.split(',') || [];
  const availableDays = queryParams.get('availableDays')?.split(',') || [];

  const [showModal, setShowModal] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  const handleClick = (id) => {
    setSelectedClub(id)
    setShowModal(!showModal);
  };

  // pre-create data setup
  const [clubsShown, setClubsShown] = useState([]);

  // fetch the data from activities
  useEffect(() => {
    fetch('https://hersey-club-finder.herokuapp.com/activities/')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setClubsShown(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Get values so we can later place it into an array and iterate through it
  const clubsShownValues = Object.values(clubsShown);

  // Get values and match it to the queries sent from the Homepage
  const clubsShownArray = clubsShownValues.filter(activity => {
    let categoryMatch = false;
    let dayMatch = false;
    let nameMatch = false;
  
    // Check if the activity has any of the selected categories
    if (categories[0] !== '') {
      categoryMatch = activity.categories.some(category => categories.includes(category));
    } else {
      categoryMatch = true; // Match all categories if none are selected
    }
  
    // Check if the activity has any of the selected available days
    if (availableDays[0] !== '') {
      dayMatch = activity.meetingDays.some(day => availableDays.includes(day));
    } else {
      dayMatch = true; // Match all days if none are selected
    }
  
    // Check if the activity name includes the name in the query parameter
    if (name) {
      nameMatch = activity.name.toLowerCase().includes(name.toLowerCase());
    } else {
      nameMatch = true; // Match all names if none are selected
    }
  
    return categoryMatch && dayMatch && nameMatch;
  }).map(activity => [
    activity._id,
    activity.name,
    activity.categories,
    activity.description,
    activity.meetingDays,
    activity.meetingStartEndTimes,
    activity.location,
    activity.link,
    activity.displayedPublically,
  ]);
  
  // format of data (keeping for possible later visual aid if bug fixes)
  // const clubsShown = [
  //   [
  //     "6415cfb2a90acb37c316b6e0",
  //     "Hersey Hack Club",
  //     ["Coding", "Math", "Science"],
  //     "Learn to code and build awesome projects at the JHHS Hack Club! No experience needed",
  //     "Every Friday",
  //     "4:00PM - 5:00PM",
  //     "158",
  //     "Bob Brown",
  //     "bob.brown@d214.org",
  //   ]
  // ];

  const reusableClubArray = [];

  // iterate through each matched found club and show it on user interface
  clubsShownArray.forEach((sub) => {
    reusableClubArray.push(
      <div onClick={() => {
        handleClick(sub[0])
      }}>
        <ReusableClub className="inline-block" sub={sub} />
      </div>
    );
  });

  return (
    <div
      className="div-margin ml-10 mr-10 grid grid-cols-1 phone: grids-cols-2 gap-2 ml-10 mr-10 tablet:grid-cols-2 gap-2 ml-10 mr-10 laptop:grid-cols-3 gap-2 ml-10 mr-10 desktop:grid-cols-3 gap-5 ml-10 mr-10"
    >
      {reusableClubArray}
      {showModal && (
        <Modal
          selectedClub={selectedClub}
          title="JHHS Hack Club"
          content="Learn to code and build awesome projects at the JHHS Hack Club! No prior experience needed. We also do hackathons, game nights, and more!"
          date="Every Monday"
          time="4:00PM - 5:00PM"
          room="JHHS Room 158"
          email="Email Sponsor (Bob Brown)"
          link="herseyhack.club"
          onClose={handleClick}
        />
      )}
    </div>
  );
};

export default Club;
