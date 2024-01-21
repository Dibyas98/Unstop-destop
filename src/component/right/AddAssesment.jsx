import React from "react";
import plus from "./Assects/plus1.png";
import AssesmentList from "./AssesmentList";
export default function AddAssesment({ dia }) {
  return (
    <div className="all-assess">
      <div className="add-assess added">
        <div
          className="plus"
          onClick={() => {
            dia("hii");
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
      <AssesmentList></AssesmentList>
      <AssesmentList></AssesmentList>
      <div className="mob-ass">
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      <AssesmentList ></AssesmentList>
      </div>
      


    </div>
  );
}
