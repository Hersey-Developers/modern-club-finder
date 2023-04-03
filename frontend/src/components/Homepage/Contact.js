import React from "react";
import './styles/Homepage.css'

const Contact = () => {
  const questions = {
    display: "inline-block",
  };

  const contactSupport = {
    display: "inline-block",
    fontWeight: "bold",
  };

  return (
    <div className="mt-4 contact-style">
      <h3 className="header-description-font">
        Built By{" "}
        <span
          className="header-description-font"
          style={{ fontWeight: "bold" }}
        >
          Hersey Developers
        </span>{" "}
        Pod A
      </h3>
      <h3 className="header-description-font mr-2" style={questions}>
        Questions?
      </h3>
      <button className="contact-support-button" style={contactSupport}>
        Contact Support
      </button>
    </div>
  );
};

export default Contact;
