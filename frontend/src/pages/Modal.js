import React, { useState } from "react";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

function Modal(props) {
  const [showModal, setShowModal] = useState(true);

  const myArray = [
    { text: props.date, icon: <FaCalendar /> },
    { text: props.time, icon: <FaClock /> },
    { text: propms.room, icon: <FaMapMarkerAlt /> },
  ];

  const myArrayTwo = [
    { text: props.email, icon: <FaEnvelope /> },
    { text: props.link, icon: <FaExternalLinkAlt /> },
  ];

  const handleClick = () => {
    setShowModal(false);
    props.onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur">
          <div className="relative z-10 bg-white rounded-lg p-8 shadow-lg max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{props.title}</h2>

              <button className="text-gray-700 text-lg" onClick={handleClick}>
                &times;
              </button>
            </div>

            <div className="bg-black-100 pb-4">Insert Category Component</div>

            <p className="pb-4 text-gray-400">{props.content}</p>

            <div className="flex justify-between">
              <table className="table-auto text-gray-400" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {myArray.map((value) => (
                    <tr key={value.text}>
                      <td className="flex items-center">{value.icon}{value.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="table-auto text-gray-400" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {myArrayTwo.map((value) => (
                    <tr key={value.text}>
                      <td className="flex items-center pl-10">{value.icon}{value.text}</td>
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
