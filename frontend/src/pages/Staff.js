import React from "react";
import CenterBox from "../components/Staff/CenterBox";
import "../components/Staff/styles/Staff.css";
import Contact from "../components/Homepage/Contact";

const StaffPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-orange to-red flex flex-col items-center justify-center ">
      <div className="ml-4 mr-0 phone: ml-4 mr-2 tablet:ml-0 mr-0 laptop:ml-0 mr-0 desktop:ml-0 mr-0">
        <CenterBox />
        <Contact />
      </div>
    </div>
  );
};

export default StaffPage;
