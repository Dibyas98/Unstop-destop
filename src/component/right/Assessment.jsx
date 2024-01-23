import React from 'react'
import AddAssesment from './AddAssesment'


export default function Assessment({dia}) {
  // ASSESSMENT COMPONENET 
  return (
    <section className="assess">
        <h3>My Assessment</h3>
        <AddAssesment dia={dia}></AddAssesment>
        
    </section>
  )
}
