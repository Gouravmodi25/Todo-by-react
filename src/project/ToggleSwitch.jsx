import { useState } from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [isOn, setOn] = useState(false);

  function handleClick(e) {
    setOn(!isOn);
    console.log(e.target);
  }
  const checkIsOn = isOn ? "on" : "off";
  const backgroundChanger = {
    backgroundColor: `${isOn ? "#4caf50" : "#f44336"}`,
  };
  return (
    <div
      className={`toggle-switch `}
      style={backgroundChanger}
      onClick={handleClick}>
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
