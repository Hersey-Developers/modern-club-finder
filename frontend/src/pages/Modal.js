import React from "react";

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center h-screen">
      <div className="modal-content">
        <div className="modal-body">
            <h1>This is modal content</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
