import React from 'react'
import RightHead from './RightHead'
import RightHero from './RightHero'
import Assessment from './Assessment'

export default function RightSide({dial}) {
  return (
    <main className="right-cont">
        <RightHead></RightHead>
        <RightHero></RightHero>
        <Assessment dia={dial}></Assessment>
    </main>
  )
}
