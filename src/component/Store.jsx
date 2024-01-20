import React, { createContext, useState } from 'react'

export const Data = createContext();
export default function Store({children}) {
 
    const[menu, setmenu] =useState(false)
    const handelmenu=()=>{
        setmenu(!menu)
    }
    // const handelDea = ()=>{
    //   setdes(!des)
    // }
  return (
    <Data.Provider value={{ handelmenu,menu}}>
        {children}
    </Data.Provider>
  )
}