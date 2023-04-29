import React, { useState } from "react";
import StaffHeader from "../components/StaffHome/StaffHeader";
import "../components/StaffHome/styles/StaffHomeStyles.css";
import { useHistory } from "react-router-dom";

const NewActivity = () => {

  const [data, setData] = useState({
    name: "",
    categories: [''],
    description: "",
    meetingDays: [''],
    meetingStartEndTimes: "",
    location: "",
    link: "",
    displayedPublically: false,
  })

  const history = useHistory();

  const handleSelectCategory = (category) => {
    if (data.categories.includes(category)) {
      setData({
        ...data,
        categories: data.categories.filter((c) => c !== category),
      });
    } else {
      setData({
        ...data,
        categories: [...data.categories, category],
      });
    }
  }

  const handleSelectMeetingDays = (day) => {
    if (data.meetingDays.includes(day)) {
      setData({
        ...data,
        meetingDays: data.meetingDays.filter((d) => d !== day),
      });
    } else {
      setData({
        ...data,

        meetingDays: [...data.meetingDays, day],
      });
    }
  }

  const handleSetName = (name) => {
    setData({
      ...data,
      name: name,
    });
  }

  const handleSetDescription = (description) => {
    setData({
      ...data,
      description: description,
    });
  }

  const handleSetLocation = (location) => {
    setData({
      ...data,
      location: location,
    });
  }


  const handleSetMeetingStartEndTimes = (meetingStartEndTimes) => {
    setData({
      ...data,
      meetingStartEndTimes: meetingStartEndTimes,
    });
  }

  const handleSetLink = (link) => {
    setData({
      ...data,
      link: link,
    });
  }

  const handleSetDisplayedPublically = (displayedPublically) => {
    setData({
      ...data,
      displayedPublically: displayedPublically,
    });
  }

  const handleClick = () => {
    let newData = {
      ...data,
      
    }

    
    
    fetch('https://hersey-club-finder.herokuapp.com/activities', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newData)
    })
    .then((response) => {
      if (!response.errorMessage) {
        history.push('/staffhome')
      } else {
        console.log(response.errorMessage);
      }
    })
  }

  return (
    <div>
      <StaffHeader />
      <p className="pt-6 pl-6 text-[#007AFF]">&#60; Cancel (does not save)</p>
      <h1 className="pt-7 pl-6 font-bold text-3xl">New Activity</h1>


      <p className="pt-4 pl-6 pb-3">Name</p>
      <input
        value={data.name}
        onChange={(e) => {
          handleSetName(e.target.value);
        }}
        name="description"
        rows="4"
        placeholder="Description"
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
      ></input>
      <br/>

      <p className="pt-1 pl-6 pb-3">Relevant Catagories</p>
      <form className="pl-6">
        <div>
          <input onClick={() => {
            handleSelectCategory("STEM");
          }} type="checkbox" id="stem" name="catagory" value="stem" />
          <label htmlFor="stem" className="pl-2">
            STEM
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectCategory("Finance");
          }} type="checkbox" id="finance" name="catagory" value="finance" />
          <label htmlFor="finance" className="pl-2">
            Finance
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectCategory("Art");
          }} type="checkbox" id="art" name="catagory" value="art" />
          <label htmlFor="art" className="pl-2">
            Art
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectCategory("Music");
          }} type="checkbox" id="music" name="catagory" value="music" />
          <label htmlFor="music" className="pl-2">
            Music
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectCategory("Coding");
          }} type="checkbox" id="coding" name="catagory" value="coding" />
          <label htmlFor="coding" className="pl-2">
            Coding
          </label>
        </div>
        <div>
          <input
            onClick={() => {
              handleSelectCategory("Entrepreneurship");
            }}
            type="checkbox"
            id="entreprenuership"
            name="catagory"
            value="entreprenuership"
          />
          <label htmlFor="entreprenuership" className="pl-2">
            Entreprenuership
          </label>
        </div>
      </form>
      <p className="pt-4 pl-6 pb-3">Description</p>
      <textarea
        value={data.description}
        onChange={(e) => {
          handleSetDescription(e.target.value);
        }}
        name="description"
        rows="4"
        placeholder="Description"
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Meeting Days</p>
      <form className="pl-6">
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Monday");
          }} type="checkbox" id="monday" name="day" value="monday" />
          <label for="monday" className="pl-2">
            Monday
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Tuesday");
          }} type="checkbox" id="tuesday" name="day" value="tuesday" />
          <label for="tuesday" className="pl-2">
            Tuesday
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Wednesday");
          }} type="checkbox" id="wednesday" name="day" value="wednesday" />
          <label htmlFor="wednesday" className="pl-2">
            Wednesday
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Thursday");
          }} type="checkbox" id="thursday" name="day" value="thursday" />
          <label htmlFor="thursday" className="pl-2">
            Thursday
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Friday");
          }} type="checkbox" id="friday" name="day" value="friday" />
          <label htmlFor="friday" className="pl-2">
            Friday
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Saturday");
          }} type="checkbox" id="saturday" name="day" value="saturday" />
          <label htmlFor="saturday" className="pl-2">
            Saturday
          </label>
        </div>
        <div>
          <input onClick={() => {
            handleSelectMeetingDays("Sunday");
          }} type="checkbox" id="sunday" name="day" value="sunday" />
          <label htmlFor="sunday" className="pl-2">
            Sunday
          </label>
        </div>
      </form>
      <p className="pt-4 pl-6 pb-3">Meeting Start-End Times</p>
      <textarea
        value={data.meetingStartEndTimes}
        onChange={(e) => {
          handleSetMeetingStartEndTimes(e.target.value);
        }}
        name="startend"
        rows="2"
        placeholder="Describe when your meetings start and end."
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Location</p>
      <textarea
        value={data.location}
        onChange={(e) => {
          handleSetLocation(e.target.value);
        }}
        name="location"
        rows="2"
        placeholder="Room name or number of where you usually meet."
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Link</p>
      <textarea
        value={data.link}
        onChange={(e) => {
          handleSetLink(e.target.value);
        }}
        name="link"
        rows="1"
        placeholder="(Optional) Link for more info or to the club’s website"
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
      ></textarea>
      <p className="pt-1 pl-6 pb-1 text-[#8C8C8C] text-sm mb-3 mt-3">
        Need a website? Contact{" "}
        <span className="text-[#007AFF]">Hersey Developers</span> for inquiries
        (we built the Club Finder)
      </p>
      <p className="pt-1 pl-6 pb-1">Display Publicly?</p>
      <form className="pl-6">
        <div>
          <input
            onClick={() => {
              handleSetDisplayedPublically(true);
            }}
            type="radio"
            id="yes"
            name="ispublic"
            value="yes"
            checked
          ></input>
          <label htmlFor="yes" className="pl-2">
            yes
          </label>
        </div>

        <div>
          <input onClick={() => {
            handleSetDisplayedPublically(false);
          }} type="radio" id="no" name="ispublic" value="no"></input>
          <label htmlFor="no" className="pl-2">
            no
          </label>
        </div>
      </form>
      <button
        onClick={() => {
          handleClick();
        }}
        type="button"
        className="ml-6 mt-5 bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg relative"
      >
        + Add Activity
      </button>
      <p className="pt-1 pl-6 pb-1 text-[#8C8C8C] text-sm mt-3 mb-3">
        Will be added immedietly
      </p>
    </div>
  );
};

export default NewActivity;