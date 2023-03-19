import React from "react";
import Header from "../components/Homepage/Header";
import Contact from "../components/Homepage/Contact";
import CenterBox from "../components/Homepage/CenterBox";
import "../components/Homepage/styles/Homepage.css";

const HomePage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-orange to-red flex items-center justify-center ">
      <div className="ml-4 mr-0 phone: ml-4 mr-2 tablet:ml-0 mr-0 laptop:ml-0 mr-0 desktop:ml-0 mr-0">
        <Header />
        <CenterBox />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
