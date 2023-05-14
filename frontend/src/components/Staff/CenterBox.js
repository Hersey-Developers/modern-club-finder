import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Chevron from "../Homepage/resources/Chevron.png";
import Checkbox from "./Checkbox";
import { useHistory } from 'react-router-dom';

const CenterBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showEmptyFieldsError, setShowEmptyFieldsError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    if (event.target.value.includes(" ")) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };
  
  const history = useHistory();

  const handleLoginClick = () => {
    setShowEmptyFieldsError(false);
    if (!email || !password) {
      setShowEmptyFieldsError(true);
      return;
    }
  
    const user = {email, password};
  
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
  
      if (!response.errorMessage) {
        // Save JWT token to local storage
        localStorage.setItem('jwt', response.token);
        localStorage.setItem('userId', response.userId);
        history.push({
          pathname: '/staffhome',
          state: { userId: response.userId }
        });
      }
    });
  };
  

  return (
    <div className="bg-box-staff">
      <h1 className="mb-3 font-bold-700 text-30px leading-45px text-gray-custom">
        Hersey Club Finder Staff Login
      </h1>
      <input
        type="text"
        id="email-field"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-3 p-2 rounded-lg text-field-style-staff  transition-all duration-500 ease-in-out hover:scale-105"
      />

      <div className="relative w-full transition-all duration-500 ease-in-out hover:scale-105">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            handleInputChange(e);
          }}
          className="mt-3 p-2 mb-2 rounded-lg text-field-style-staff"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-3 right-0 pr-3 pt-3 pb-2 flex items-center"
        >
          {showPassword ? (
            <FiEye className="text-system-blue" />
          ) : (
            <FiEyeOff className="text-system-blue" />
          )}
        </button>
      </div>
      {showWarning && <h1 className="text-error-red font-bold">ERROR: Spaces not allowed </h1>}
      {showEmptyFieldsError && (
        <h1 className="text-error-red font-bold">ERROR: Please fill in both fields</h1>
      )}

      
      <Checkbox label="Stay signed in" />

      <br />
      
      <button
        onClick={handleLoginClick}
        className="mt-2 next-button-staff transition-all duration-500 ease-in-out hover:scale-105"
      >
        <div style={{ display: "inline-block" }}>
          <h2 style={{ display: "inline-block" }} className="mr-12">
            Log In
          </h2>
          <img
            src={Chevron}
            alt=""
            className="mb-1 ml-12"
            style={{ display: "inline-block" }}
          />
        </div>
      </button>
      <button className="all-button-staff mt-2">Forgot My Password</button>
    </div>
  );
};

export default CenterBox;
