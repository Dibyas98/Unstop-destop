import React, { useContext, useState } from 'react'
import Lefticons from './Lefticons'
import Leftadmin from './Leftadmin'
import { X } from 'lucide-react';
import { Data } from '../Store';


export default function LeftMobile() {
    const {handelmenu,menu} = useContext(Data)
  return (
    <>
    {
       <div className='menu-mobile'>
        <div className='menu-head'><h1 className='menu'>Menu</h1> <X onClick={()=>{handelmenu()}}></X></div>
      <Lefticons></Lefticons>
      <Leftadmin></Leftadmin>
    </div>
    }
    </>
  )
}
