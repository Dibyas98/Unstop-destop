import React, { createContext, useState } from "react";

export const Data = createContext(); //NEW CONTEXT IS CREATED
export default function Store({ children }) {
  // MENU STATE IS CREATED AS FLASE
  const [menu, setmenu] = useState(false);

  // FUNCTION TO HANDEL MENU TO DISPLAY
  const handelmenu = () => {
    setmenu(!menu);
  };

  return <Data.Provider value={{ handelmenu, menu }}>{children}</Data.Provider>;
}
