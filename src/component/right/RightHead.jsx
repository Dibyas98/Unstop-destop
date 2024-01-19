import React, { useContext } from 'react'
import { Smartphone } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Data } from '../Store';

export default function RightHead() {
  const {handelmenu} =useContext(Data)
  return (
    <div className="head">
    <div>
        <div className='right-top'>
          <Menu  className='menubar' onClick={()=>{handelmenu()}}></Menu>
        <h1>Assessment</h1>
        </div>
        <h4>My Assessments <span className='mobile-head'>Unstop Assessment</span></h4>
       
        <div >
            <Smartphone className="smartphone"></Smartphone>
            <Monitor className='destop'/>
        </div>
    </div>
</div>
  )
}
