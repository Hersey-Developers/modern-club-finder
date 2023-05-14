import React, { useState, useEffect } from "react";
import StaffHeader from "../components/StaffHome/StaffHeader";
import { useHistory } from 'react-router-dom';
import "../components/StaffHome/styles/StaffHomeStyles.css";



const EditActivity = () => {
  const history = useHistory();

  const urlParts = window.location.pathname.replace(/#/g, "").split("/");
  const activityId = urlParts[urlParts.length - 1];

  const [activity, setActivity] = useState({});
  const [editedActivity, setEditedActivity] = useState({});
  const [patchRequested, setPatchRequested] = useState(false);

  // define the array of categories that the activity belongs to
  const activityName = editedActivity.name || [];
  const activityCategories = editedActivity.categories ? [...editedActivity.categories] : [];
  const activityDescription = editedActivity.description || [];
  const activityMeetingDays = editedActivity.meetingDays || [];
  const activityMeetingStartEndTimes = editedActivity.meetingStartEndTimes || [];
  const activityLocation = editedActivity.location || [];
  const activityLink = editedActivity.link || [];

  useEffect(() => {

    fetch(`https://hersey-club-finder.herokuapp.com/activities`)
      .then(response => response.json())
      .then(data => {
        const activity = data.find(activity => activity._id === activityId);
        setActivity(activity);
        setEditedActivity(activity);
      })
      .catch(error => {
        console.error(error);
      });
  }, [activityId]);

  const handleSave = (e) => {
    e.preventDefault();
    setPatchRequested(true);
  };

  const handleSaveLeave = async (e) => {
    e.preventDefault();
    await setPatchRequested(true);
    history.push('/staffhome')
  };
  
  const handleLeaveNoSave = (e) => {
    e.preventDefault();
    history.push('/staffhome')
  };

  useEffect(() => {
    if (patchRequested) {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedActivity)
      };
      fetch(`https://hersey-club-finder.herokuapp.com/activities/${activityId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setActivity(data);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setPatchRequested(false);
        });
    }
  }, [patchRequested, activityId, editedActivity]);

    const [stemChecked, setStemChecked] = useState(activityCategories.includes('STEM'));
    const [financeChecked, setFinanceChecked] = useState(activityCategories.includes('Finance'));
    const [artChecked, setArtChecked] = useState(activityCategories.includes('Art'));
    const [musicChecked, setMusicChecked] = useState(activityCategories.includes('Music'));
    const [codingChecked, setCodingChecked] = useState(activityCategories.includes('Coding'));
    const [entreChecked, setEntreChecked] = useState(activityCategories.includes('Entrepreneurship'));

    const handleCategoryChange = (category, setChecked, checked) => {
      setChecked(checked);
      setEditedActivity(prevState => {
        const categories = checked
          ? prevState.categories.filter(c => c !== category)
          : [...prevState.categories, category];
        return { ...prevState, categories };
      });
    };

    const [monChecked, setMonChecked] = useState(activityMeetingDays.includes('Monday'));
    const [tuesChecked, setTuesChecked] = useState(activityMeetingDays.includes('Tuesday'));
    const [wedChecked, setWedChecked] = useState(activityMeetingDays.includes('Wednesday'));
    const [thursChecked, setThursChecked] = useState(activityMeetingDays.includes('Thursday'));
    const [friChecked, setFriChecked] = useState(activityMeetingDays.includes('Friday'));
    const [satChecked, setSatChecked] = useState(activityMeetingDays.includes('Saturday'));
    const [sunChecked, setSunChecked] = useState(activityMeetingDays.includes('Sunday'));

    const handleMeetingDaysChange = (day, setChecked, checked) => {
      setChecked(checked);
      setEditedActivity(prevState => {
        const meetingDays = checked
          ? prevState.meetingDays.filter(d => d !== day)
          : [...prevState.meetingDays, day];
        return { ...prevState, meetingDays };
      });
    };

    const handleDescriptionChange = (e) => {
      const value = e.target.value;
      setEditedActivity(prevState => ({ ...prevState, description: value }));
    };

    function handleStartEndTimesChange(e) {
      const value = e.target.value;
      setEditedActivity(prevState => ({ ...prevState, meetingStartEndTimes: value }));
    }

    const handleLocationChange = (e) => {
      const value = e.target.value;
      setEditedActivity(prevState => ({ ...prevState, location: value }));
    };

    const handleLinkChange = (e) => {
      const value = e.target.value;
      setEditedActivity(prevState => ({ ...prevState, link: value }));
    };

    const [displayPubliclyValue, setDisplayPubliclyValue] = useState(false);
    useEffect(() => {
      setDisplayPubliclyValue(editedActivity.displayedPublically || false);
    }, [editedActivity.displayedPublically]);
    
    const handleDisplayPubliclyChange = (value) => {
      setDisplayPubliclyValue(value);
      setEditedActivity((prevState) => {
        if (!prevState) {
          return prevState;
        }
        return {
          ...prevState,
          displayedPublically: value,
        };
      });
    };

  return (
    <div>
      <StaffHeader />
      <p className="pt-6 pl-6 text-[#007AFF] cursor-pointer" onClick={handleLeaveNoSave}>Leave without saving</p>
      <p className="pt-3 pl-6 text-[#007AFF] cursor-pointer" onClick={handleSaveLeave}>Leave and save</p>
      <h1 className="pt-7 pl-6 font-bold text-3xl">{activityName}</h1>
      <p className="pt-1 pl-6 pb-3">Selected Catagories</p>
      <form className="pl-6">
        <div>
        <input type="checkbox" id="stem" name="category" value="stem" checked={activityCategories.includes('STEM')} onChange={() => handleCategoryChange('STEM', setStemChecked, !stemChecked)} />
          <label htmlFor="stem" className="pl-2">STEM</label>
        </div>
        <div>
          <input type="checkbox" id="finance" name="category" value="finance" checked={activityCategories.includes('Finance')} onChange={() => handleCategoryChange('Finance', setFinanceChecked, !financeChecked)} />
          <label htmlFor="finance" className="pl-2">Finance</label>
        </div>
        <div>
          <input type="checkbox" id="art" name="category" value="art" checked={activityCategories.includes('Art')} onChange={() => handleCategoryChange('Art', setArtChecked, !artChecked)} />
          <label htmlFor="art" className="pl-2">Art</label>
        </div>
        <div>
          <input type="checkbox" id="music" name="category" value="music" checked={activityCategories.includes('Music')} onChange={() => handleCategoryChange('Music', setMusicChecked, !musicChecked)} />
          <label htmlFor="music" className="pl-2">Music</label>
        </div>
        <div>
          <input type="checkbox" id="coding" name="category" value="coding" checked={activityCategories.includes('Coding')} onChange={() => handleCategoryChange('Coding', setCodingChecked, !codingChecked)} />
          <label htmlFor="coding" className="pl-2">Coding</label>
        </div>
        <div>
          <input type="checkbox" id="entrepreneurship" name="category" value="entrepreneurship"checked={activityCategories.includes('Entreprenuership')} onChange={() => handleCategoryChange('Entreprenuership', setEntreChecked, !entreChecked)} />
          <label htmlFor="entrepreneurship" className="pl-2">Entrepreneurship</label>
        </div>
      </form>
      <p className="pt-4 pl-6 pb-3">Description</p>
      <textarea
        name="description"
        rows="4"
        placeholder="Description"
        className="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
        defaultValue={activityDescription}
        onChange={handleDescriptionChange}
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Meeting Days</p>
      <form className="pl-6">
        <div>
          <input type="checkbox" id="monday" name="day" value="monday" checked={activityMeetingDays.includes('Monday')} onChange={() => handleMeetingDaysChange('Monday', setMonChecked, !monChecked)} />
          <label for="monday" className="pl-2">
            Monday
          </label>
        </div>
        <div>
          <input type="checkbox" id="tuesday" name="day" value="tuesday" checked={activityMeetingDays.includes('Tuesday')} onChange={() => handleMeetingDaysChange('Tuesday', setTuesChecked, !tuesChecked)} />
          <label for="tuesday" className="pl-2">
            Tuesday
          </label>
        </div>
        <div>
          <input type="checkbox" id="wednesday" name="day" value="wednesday" checked={activityMeetingDays.includes('Wednesday')} onChange={() => handleMeetingDaysChange('Wednesday', setWedChecked, !wedChecked)} />
          <label for="wednesday" className="pl-2">
            Wednesday
          </label>
        </div>
        <div>
          <input type="checkbox" id="thursday" name="day" value="thursday" checked={activityMeetingDays.includes('Thursday')} onChange={() => handleMeetingDaysChange('Thursday', setThursChecked, !thursChecked)} />
          <label for="thursday" className="pl-2">
            Thursday
          </label>
        </div>
        <div>
          <input type="checkbox" id="friday" name="day" value="friday" checked={activityMeetingDays.includes('Friday')} onChange={() => handleMeetingDaysChange('Friday', setFriChecked, !friChecked)} />
          <label for="friday" className="pl-2">
            Friday
          </label>
        </div>
        <div>
          <input type="checkbox" id="saturday" name="day" value="saturday" checked={activityMeetingDays.includes('Saturday')} onChange={() => handleMeetingDaysChange('Saturday', setSatChecked, !satChecked)} />
          <label for="saturday" className="pl-2">
            Saturday
          </label>
        </div>
        <div>
        <input type="checkbox" id="sunday" name="day" value="sunday" checked={activityMeetingDays.includes('Sunday')} onChange={() => handleMeetingDaysChange('Sunday', setSunChecked, !sunChecked)} />
          <label for="sunday" className="pl-2">
            Sunday
          </label>
        </div>
      </form>
      <p className="pt-4 pl-6 pb-3">Meeting Start-End Times</p>
      <textarea
        name="startend"
        rows="2"
        placeholder="Describe when your meetings start and end."
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
        defaultValue={activityMeetingStartEndTimes}
        onChange={handleStartEndTimesChange}
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Location</p>
      <textarea
        name="location"
        rows="2"
        placeholder="Room name or number of where you usually meet."
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
        defaultValue={activityLocation}
        onChange={handleLocationChange}
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Link</p>
      <textarea
        name="link"
        rows="1"
        placeholder="(Optional) Link for more info or to the club’s website"
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
        defaultValue={activityLink}
        onChange={handleLinkChange}
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
            type="radio"
            id="yes"
            name="ispublic"
            value="yes"
            checked={displayPubliclyValue}
            onChange={() => handleDisplayPubliclyChange(true)}
          ></input>
          <label htmlFor="yes" className="pl-2">
            yes
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="no"
            name="ispublic"
            value="no"
            checked={!displayPubliclyValue}
            onChange={() => handleDisplayPubliclyChange(false)}
          ></input>
          <label htmlFor="no" className="pl-2">
            no
          </label>
        </div>
      </form>
      <p 
      className="pt-6 pl-6 text-[#007AFF] font-bold cursor-pointer"
      onClick={handleSave}>Save Changes</p>
    </div>
  );
};

export default EditActivity;