import React from "react";
import link from "./Assects/link.png";

export default function DetailBoxRight() {
  //  COMPONENT DISPALY FOR RIGHT
  return (
    <div className="detail-box box-right">
      <h4>Total Purpose</h4>
      <div className="rect-icon">
        <img src={link} alt="" />
        <h2>11</h2>
      </div>
    </div>
  );
}
