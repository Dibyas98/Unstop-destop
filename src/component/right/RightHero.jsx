import React, { useState } from 'react'
import DetailBoxLeft from './DetailBoxLeft'
import DetailBoxMiddle1 from './DetailBoxMiddle1'
import DetailBoxMiddle2 from './DetailBoxMiddle2'
import DetailBoxRight from './DetailBoxRight'
import { Search } from 'lucide-react';
import { Filter } from 'lucide-react';
import { BarChart2 } from 'lucide-react';

export default function RightHero() {
  const[detail,setdetail]=useState(false)
  const handelDetail=()=>{
    setdetail(!detail);
  }
const set = {
  backgroundColor:'#F2F8FE',
  borderRadius:'50%',
  border:'1px solid #0073E6',
  fontWeight:'600',
  fontSize:'2rem'
  

}
  return (
    <section className="hero-sec">
      <div className='head-option'>
        <h3><span className='overview'>Assessment Overview</span> <span className='assesment'>My Assessment</span></h3>
        <div style={{height:'60px'}} className=''>
          <Search className='lucid-icon'></Search>
          <Filter className='lucid-icon'></Filter>
          <BarChart2 className='lucid-icon' onClick={handelDetail} style={detail?set:null} ></BarChart2>
        </div>
        </div>
      {detail?<div className="details">
        <DetailBoxLeft></DetailBoxLeft>
        <DetailBoxMiddle1></DetailBoxMiddle1>
        <DetailBoxMiddle2></DetailBoxMiddle2>
        <DetailBoxRight></DetailBoxRight>
      </div>:null}
    </section>
  )
}
