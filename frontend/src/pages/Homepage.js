import React from "react";
import Header from "../components/Homepage/Header";
import Contact from "../components/Homepage/Contact";
import CenterBox from "../components/Homepage/CenterBox";
import "../components/Homepage/styles/Homepage.css";

const HomePage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-orange to-red flex items-center justify-center ">
      <div>
        <Header />
        <CenterBox />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
