import React from "react";
import Skill from "./Skill";

export default function DialogForm() {
  // CREATE ASSESSMENT FORM COMPONENET
  return (
    <div
      className="dialog-form"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="dialog-input">
        <label>Name of Assessment</label>
        <input type="text" placeholder="Type Here" />
      </div>
      <div className="dialog-input">
        <label>Purpose of the test is</label>
        <select name="select" id="">
          <option value="">select</option>
          <option value="">Job</option>
          <option value="">Internship</option>
        </select>
      </div>
      <div className="dialog-input">
        <label>Description</label>
        <select name="select" id="">
          <option value="">select</option>
        </select>
      </div>
      <div className="dialog-input hide-mob">
        <div className="skill-box">
          <Skill name={"ui/ux design"} className="hide"></Skill>
          <Skill className="hide" name={"No of questions"}></Skill>
          <Skill name={"Web Developnment"}></Skill>
          <Skill name={"ui/ux design"}></Skill>
          <Skill name={"ui/ux design"} className="hide"></Skill>
        </div>
        <input type="text" placeholder="Type here" />
      </div>
      <div className="dialog-input hide-des">
        <div className="skill-box">
          <Skill name={"ui/ux design"} className="hide"></Skill>
          <Skill className="hide" name={"No of questions"}></Skill>
        </div>
        <input type="text" placeholder="Type here" />
      </div>
      <div className="dialog-input">
        <label>Duration of assessment</label>
        <input type="text" placeholder="HH:MM:SS" />
      </div>
      <button className="dialig-btn cancel">Save</button>
    </div>
  );
}
