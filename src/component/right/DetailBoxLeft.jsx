import React from "react";
import rectBox from './Assects/rect-box.png'

export default function DetailBoxLeft() {
  return (
    <div className="detail-box box-left">
      <h4>Total Assessment</h4>
      <div className="rect-icon">
        <img src={rectBox} alt="" />
        <h2>34</h2>
      </div>
    </div>
  );
}
