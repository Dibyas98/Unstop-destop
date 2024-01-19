import React, { useState } from 'react'
import LeftSide from '../left/LeftSide'
import RightSide from '../right/RightSide'
import Dialogbox from '../Dialogbox'
// import './mobi.css'
export default function Mobile() {
    const [dia,setdia] = useState(false)
    const handelDia =(arg)=>{
      // console.log(arg);
      setdia(!dia)
      // console.log(dia);
    }
  return (
    <div className='moblic-cont'>
      <LeftSide/>
      <RightSide dial={handelDia}></RightSide>
      {dia ? <Dialogbox dial={handelDia}></Dialogbox> : null}
      
    </div>
  )
}
