import React, { useState } from "react";
import LeftSide from "./left/LeftSide";
import RightSide from "./right/RightSide";
import Dialogbox from "./Dialogbox";
import "./sceen.css";

export default function Scree() {
  // TO DISPLAY DIALOG BOX/CREATE NEW ASSESSMENT
  const [dia, setdia] = useState(false);

  // FUNCTION HANDEL TO DISPLAY DIALOGBOX COMPONENT
  const handelDia = (arg) => {
    setdia(!dia);
  };

  return (
    // HERE IS THE SCREEN
    <section className="cont">
      {/* LEFT SIDE BAR OR MENU COMPONENT */}
      <LeftSide />

      {/* RIGHT SIDE HERO COMPONENT */}
      <RightSide dial={handelDia}></RightSide>

      {/* DIALOG COMPONENT ON CLICK ADD OPTION */}
      {dia ? <Dialogbox dial={handelDia}></Dialogbox> : null}
    </section>
  );
}
