import React, { useState, useEffect } from "react";
import StaffClub from "./StaffClub";
import { useHistory } from "react-router-dom";

const ClubRender = () => {
  const [activities, setActivities] = useState([]);
  const userId = localStorage.getItem('userId');
  const history = useHistory();

  useEffect(() => {
    // Load activities from the backend based on the userId
    const fetchActivities = async () => {
      const response = await fetch(`https://hersey-club-finder.herokuapp.com/activities?contact=${userId}`);
      const data = await response.json();
      setActivities(data);
    };

    fetchActivities();
  }, [userId]);

  // Get an array of unique subjects associated with the activities
  const subjects = [...new Set(activities.map((activity) => activity.categories))];

  const handleClick = (event, activityId) => {
    history.push(`/editactivity/${activityId}`);
  };

  return (
    <div>
      {subjects.map((subject) => {
        const subActivities = activities.filter((activity) => activity.categories === subject);
        return <StaffClub key={subject} sub={subject} activities={subActivities} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default ClubRender;