import React from "react";
import DialogHead from "./DialogHead";
import DialogForm from "./DialogForm";

export default function Dialogbox({ dial }) {
  // DIALOG BOX COMPONENT FOR CREATE ASSESSMENT
  return (
    <div
      className="dia-dis dialog-show "
      onClick={() => {
        dial();
      }}
    >
      <dialog className="dialog animate__animated animate__slideInUp">
        <DialogHead dia={dial}></DialogHead>
        <DialogForm></DialogForm>
      </dialog>
    </div>
  );
}
