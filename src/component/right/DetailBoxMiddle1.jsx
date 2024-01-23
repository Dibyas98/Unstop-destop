import React from "react";
import people from "./Assects/people.png";

export default function DetailBoxMiddle1() {
  // DETAIL BOX MIDDLE
  return (
    <div className="detail-box box-middle1">
      <h4>Candidates</h4>
      <div className="rect-icon">
        <img src={people} alt="" />
        <ul>
          <li className="bord">
            <h2>
              11,145 <span>+89</span>
            </h2>
          </li>
          <li className="bord">Total Candidates</li>
        </ul>
        <ul>
          <li className="bord borhide" style={{ border: "" }}>
            <h2>
              1,14 <span> +89</span>
            </h2>
          </li>
          <li className="bord borhide" style={{ border: "" }}>
            Who Attemped
          </li>
        </ul>
      </div>
    </div>
  );
}
