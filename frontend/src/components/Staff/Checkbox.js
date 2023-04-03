import React, { useState } from 'react';

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-1"
      />
      {props.label}
    </label>
  );
}

export default Checkbox;