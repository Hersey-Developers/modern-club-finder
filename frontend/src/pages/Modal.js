import React, { useState } from "react";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaEnvelope, FaLink } from "react-icons/fa";

import Calendar from "../components/Search/resources/Calendar.png";
import Clock from "../components/Search/resources/Clock.png";
import Ping from "../components/Search/resources/Ping.png";
import Email from "../components/Search/resources/Email.png"
import Link from "../components/Search/resources/Link.png"


function Modal(props) {
  const [showModal, setShowModal] = useState(true);

  const myArray = [
    { text: props.date, icon: <img src={Calendar} alt="Calendar Icon" style={{ width: "18px" }} /> },
    { text: props.time, icon: <img src={Clock} alt="Clock Icon" style={{ width: "18px" }} /> },
    { text: props.room, icon: <img src={Ping} alt="Clock Icon" style={{ width: "18px" }} /> },

  ];

  const myArrayTwo = [
    { text: <a href={props.email} style={{ color: "#007AFF" }} target="_blank" rel="noopener noreferrer">{props.email}</a>, icon: <img src={Email} alt="Email Icon" style={{ width: "22px"}} /> },
    { text: <a href={props.link} style={{ color: "#007AFF" }} target="_blank" rel="noopener noreferrer">herseyhack.club</a>, icon: <img src={Link} alt="Link Icon" style={{ width: "22px"}} /> },
  ];

  const handleClick = () => {
    setShowModal(false);
    props.onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur">
          <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">{props.title}</h2>

              <button className="font-[#000000] text-lg" onClick={handleClick}>
                &times;
              </button>
            </div>

            <div className="bg-black-100 pb-4">Insert Category Component</div>

            <p className="pb-4 text-[#7D7D7D]">{props.content}</p>

            <div className="flex justify-between">
              <table className="table-auto text-[#7D7D7D]" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {myArray.map((value) => (
                    <tr key={value.text}>
                      <td className="flex items-center">{value.icon} <span className="pl-2">{value.text}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="table-auto text-[#7D7D7D]" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {myArrayTwo.map((value) => (
                    <tr key={value.text}>
                      <td className="flex items-center pl-10">{value.icon} <span className="pl-2">{value.text}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-0"
            onClick={handleClick}
          ></div>
        </div>
      )}
    </>
  );
}

export default Modal;
