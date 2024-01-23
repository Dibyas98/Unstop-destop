import React from "react";
import plus from "./Assects/plus1.png";
import AssesmentList from "./AssesmentList";
export default function AddAssesment({ dia }) {
  // ADD ASSESSMENT COMPONENT 
  return (
    <div className="all-assess">
      {/* ONCLICK LISTNER IS ADD TO DISPLAY DIALOG COMPONENT WHEN CLICKED  */}
      <div className="add-assess added">
        <div
          className="plus"
          onClick={() => {
            dia();
          }}
        >
          <img src={plus} alt="" />
        </div>
        <h3>New Assessment</h3>
        <p>
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </div>

      {/* TO DISPLAY ASSESSMENT LIST IN DESTOP  */}
      <AssesmentList></AssesmentList>
      <AssesmentList></AssesmentList>
      {/* TO DISPALY ASSESSMENTLIST IN MOBILE  */}
      <div className="mob-ass" style={{ width: "100%" }}>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
        <AssesmentList></AssesmentList>
      </div>
    </div>
  );
}
