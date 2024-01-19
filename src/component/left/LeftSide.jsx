import React, { useContext } from 'react'
import Lefticons from './Lefticons'
import Leftadmin from './Leftadmin'
import LeftMobile from './LeftMobile'
import { Data } from '../Store'

export default function LeftSide() {
  const {menu} =useContext(Data)
  return (
    
    <>
    <aside className="left-cont">
      <Lefticons></Lefticons>
      
      <Leftadmin></Leftadmin>
      
    </aside>
   {menu?<div className='mob-con'>
    
   <LeftMobile></LeftMobile>
   </div>:null}
    </>
  )
}
