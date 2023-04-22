import React from "react";
import StaffHeader from "../components/StaffHome/StaffHeader";
import ClubRender from "../components/StaffHome/ClubRender";
import '../components/StaffHome/styles/StaffHomeStyles.css'

const StaffHome = ({ userId }) => {
  return (
    <div className="pl-7">
      <StaffHeader />
      <h1 className="pt-14 font-bold text-3xl">My Sponsored Activities</h1>
      <button type="button" className="mt-5 bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg relative">+ Add New Activity</button>
      <ClubRender userId={userId} />
    </div>
  );
};

export default StaffHome;
