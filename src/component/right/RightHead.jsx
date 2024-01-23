import React, { useContext } from "react";
import { Smartphone } from "lucide-react";
import { Monitor } from "lucide-react";
import { Menu } from "lucide-react";
import { Data } from "../Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RightHead() {
  // USECONTEXT IS USES TO DISPLAY MENU OF MOBILE SCREEN WHEN CLICKED ON BAR ICONS 
  const { handelmenu } = useContext(Data);

  // FUNCTION TO HANDEL DISPLAY SCREEN  WIDTH AND ERROR MESSAGE 
  const handelDisplay = (arg) => {
    if (arg === "phone") {
      toast.warning(
        "Changed Your Display Screen to Mobile It is fully responsive"
      );
    } else {
      toast.warning(
        "Changed Your Display Screen to Destop It is fully responsive"
      );

    }
  };

  // RIGHT SIDE HEAD COMPNENT 
  return (
    <div className="head">
      <div>
        <div className="right-top">
          <Menu
            className="menubar"
            onClick={() => {
              handelmenu();
            }}
          ></Menu>
          <h1>Assessment</h1>
        </div>
        <h4>
          My Assessments <span className="mobile-head">Unstop Assessment</span>
        </h4>

        {/* SHOW ICON OF SMARTPHONE OR DESTOP  */}
        <div>
          <Smartphone
            className="smartphone"
            onClick={() => handelDisplay("phone")}
          ></Smartphone>
          <Monitor
            className="destop"
            onClick={() => {
              handelDisplay();
            }}
          />
          {/* USE TOSTER TO DISPLAY ERROER MESSAGE  */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
