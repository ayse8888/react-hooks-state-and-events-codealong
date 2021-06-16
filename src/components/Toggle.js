import React, {useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState("OFF")
  const clickHandler = () => {
    toggle === "OFF"
    ? setToggle("ON")
    : setToggle ("OFF")
  }

  const color = toggle === "OFF" ? "red" : "white"
  return <button style={{background : color}} onClick={clickHandler}>{toggle}</button>;
}

export default Toggle;
