import React from 'react'

export default function Skill({name}) {
  // SKILL COMPONENT USED IS FORM TO DISPLAY CLICK WITH TAKING PROPS AS NAME TO SHOW THE SKILL 
  return (
    <div className="skill">
    <p>{name}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="lucide lucide-x">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
</div>
  )
}
