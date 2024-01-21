import React from 'react';
import bag from './Assects/bag.jpg';
import sha from './Assects/sha.PNG';
import cal from './Assects/calendar-days.png'
const assessmentData = [
    {
        assessmentName: 'Math Assessment',
        type: 'Job',
        date: '20 Apr 2000',
        duration: '00',
        qiestions: '00',
    }
]
export default function AssesmentList() {
    return (
        <div className='added added-con'>
            <div className='added-cont' style={{border:'none'}}>
                <img src={bag} alt="" />
                <div className='ad-up'>
                <h4>{assessmentData[0].assessmentName}</h4>
                <div class="ad">
                    <h5>{assessmentData[0].type}</h5>
                    <img src={cal} alt="" />
                    <p>20 Apr 200</p>
                </div>
                </div>
            </div>
            <div class="add-end">
                <p>{assessmentData[0].duration} Durations</p>
                <p>{assessmentData[0].qiestions} Questons</p>
                <div>
                    <img src={sha} alt="" />
                    <h1>LP</h1>
                </div>
            </div>
        </div>
    )
}
