import React, { useContext } from 'react'
import Lefticons from './Lefticons'
import Leftadmin from './Leftadmin'
import LeftMobile from './LeftMobile'
import { Data } from '../Store'

export default function LeftSide() {

  // USECONTEX INITIALIZE TO GET MENU FOR MOBILE MUNU DISPLAY
  const { menu } = useContext(Data)
  return (

    <>
      {/* LEFT SIDE MENU COMPONENT  */}
      <aside className="left-cont">
        {/* ICON DISPLAY COMPONENT  */}
        <Lefticons></Lefticons>

        {/* ADMIN ICON AND LINK COMPONENT  */}
        <Leftadmin></Leftadmin>
      </aside>

      {/* MENU FOR MOBILE WHEN CLICKED ON BAR ICONS  */}
      {menu ? <div className='mob-con'>

        <LeftMobile></LeftMobile>
      </div> : null}
    </>
  )
}
