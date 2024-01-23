import React, { useContext } from 'react'
import { Smartphone } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Data } from '../Store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RightHead() {
  const {handelmenu} =useContext(Data)
  const handelDisplay=(arg)=>{
    if(arg === 'phone'){
       toast.warning("Changed Your Display Screen to Mobile It is fully responsive");
      // alert('Changed Your Display Screen to Mobile It is fully responsive');
    }else{
      toast.warning("Changed Your Display Screen to Destop It is fully responsive");
      // alert('Changed Your Display Screen to Destop It is fully responsive');
    }
  }
  return (
    <div className="head">
    <div>
        <div className='right-top'>
          <Menu  className='menubar' onClick={()=>{handelmenu()}}></Menu>
        <h1>Assessment</h1>
        </div>
        <h4>My Assessments <span className='mobile-head'>Unstop Assessment</span></h4>
       
        <div >
            <Smartphone className="smartphone" onClick={()=>(handelDisplay('phone'))}></Smartphone>
            <Monitor className='destop' onClick={()=>{handelDisplay()}}/>
            <ToastContainer />
        </div>
    </div>
</div>
  )
}
