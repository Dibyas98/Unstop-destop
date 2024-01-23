import React from "react";
import { LayoutDashboard, SquarePen, BookCopy } from "lucide-react";

export default function Lefticons() {
  // LEFT ICON COMPONENT 
  return (
    <div className="dash-cont mobile-dash">
      <div className="set-icon mobileiver">
        <LayoutDashboard />
        <p>Dashboard</p>
      </div>
      <div className="set-icon live mobileiver">
        <SquarePen></SquarePen>
        <p>Assessment</p>
      </div>
      <div className="set-icon mobileiver">
        <BookCopy></BookCopy>
        <p>My Library</p>
      </div>
      <div className="hr"></div>
    </div>
  );
}
