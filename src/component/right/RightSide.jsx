import React from "react";
import RightHead from "./RightHead";
import RightHero from "./RightHero";
import Assessment from "./Assessment";

export default function RightSide({ dial }) {
  // RIGHT SIDE COMPONENT 
  return (
    <main className="right-cont">
      {/* HERE IT IS DIVIDED IN THREE COMPONENT  */}
      <RightHead></RightHead>
      <RightHero></RightHero>
      <Assessment dia={dial}></Assessment>
    </main>
  );
}
