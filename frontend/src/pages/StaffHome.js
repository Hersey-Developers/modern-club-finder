// import React, { useEffect, useState } from "react";
// import StaffHeader from "../components/StaffHome/StaffHeader";
// import ClubRender from "../components/StaffHome/ClubRender";
// import "../components/StaffHome/styles/StaffHomeStyles.css";
// import { useHistory } from "react-router-dom";

// const StaffHome = ({ userId }) => {
//   const history = useHistory();
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("jwt");
//     if (!token) {
//       // Redirect to staff login page if token is not present
//       history.push("/stafflogin");
//     } else {
//       setIsSignedIn(true);
//     }
//   }, []);

//   return (
//     <>
//       {isSignedIn && (
//         <div className="pl-7">
//           <StaffHeader />
//           <h1 className="pt-14 font-bold text-3xl">
//             My Sponsored Activities
//           </h1>
//           <button
//             type="button"
//             className="mt-5 bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg relative"
//           >
//             + Add New Activity
//           </button>
//           <ClubRender />
//         </div>
//       )}
//     </>
//   );
// };

// export default StaffHome;


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