import React from "react";
import StaffHeader from "../components/StaffHome/StaffHeader";
import "../components/StaffHome/styles/StaffHomeStyles.css";

const NewActivity = () => {
  return (
    <div>
      <StaffHeader />
      <p className="pt-6 pl-6 text-[#007AFF]">&#60; Cancel (does not save)</p>
      <h1 className="pt-7 pl-6 font-bold text-3xl">New Activity</h1>
      <p className="pt-1 pl-6 pb-3">Relevant Catagories</p>
      <form className="pl-6">
        <div>
          <input type="checkbox" id="stem" name="catagory" value="stem" />
          <label for="stem" className="pl-2">
            STEM
          </label>
        </div>
        <div>
          <input type="checkbox" id="finance" name="catagory" value="finance" />
          <label for="finance" className="pl-2">
            Finance
          </label>
        </div>
        <div>
          <input type="checkbox" id="art" name="catagory" value="art" />
          <label for="art" className="pl-2">
            Art
          </label>
        </div>
        <div>
          <input type="checkbox" id="music" name="catagory" value="music" />
          <label for="music" className="pl-2">
            Music
          </label>
        </div>
        <div>
          <input type="checkbox" id="coding" name="catagory" value="coding" />
          <label for="coding" className="pl-2">
            Coding
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="entreprenuership"
            name="catagory"
            value="entreprenuership"
          />
          <label for="entreprenuership" className="pl-2">
            Entreprenuership
          </label>
        </div>
      </form>
      <p className="pt-4 pl-6 pb-3">Description</p>
      <textarea
    name="description"
    rows="4"
    placeholder="Description"
    class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
></textarea>

      <p className="pt-4 pl-6 pb-3">Meeting Days</p>
      <form className="pl-6">
        <div>
          <input type="checkbox" id="monday" name="day" value="monday" />
          <label for="monday" className="pl-2">
            Monday
          </label>
        </div>
        <div>
          <input type="checkbox" id="tuesday" name="day" value="tuesday" />
          <label for="music" className="pl-2">
            Tuesday
          </label>
        </div>
        <div>
          <input type="checkbox" id="wednesday" name="day" value="wednesday" />
          <label for="wednesday" className="pl-2">
            Wednesday
          </label>
        </div>
        <div>
          <input type="checkbox" id="thursday" name="day" value="thursday" />
          <label for="thursday" className="pl-2">
            Thursday
          </label>
        </div>
        <div>
          <input type="checkbox" id="friday" name="day" value="friday" />
          <label for="friday" className="pl-2">
            Friday
          </label>
        </div>
        <div>
          <input type="checkbox" id="saturday" name="day" value="saturday" />
          <label for="saturday" className="pl-2">
            Saturday
          </label>
        </div>
        <div>
          <input type="checkbox" id="sunday" name="day" value="sunday" />
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
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Location</p>
      <textarea
        name="location"
        rows="2"
        placeholder="Room name or number of where you usually meet."
        class="bg-[#E1E1E1] w-96 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none ml-6"
      ></textarea>
      <p className="pt-4 pl-6 pb-3">Link</p>
      <textarea
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
            type="radio"
            id="yes"
            name="ispublic"
            value="yes"
            checked
          ></input>
          <label for="yes" className="pl-2">
            yes
          </label>
        </div>

        <div>
          <input type="radio" id="no" name="ispublic" value="no"></input>
          <label for="no" className="pl-2">
            no
          </label>
        </div>
      </form>
      <button
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
