import React from 'react'
import internet from './Assects/internet.png'

export default function DetailBoxMiddle2() {
  return (
    <div className="detail-box box-middle2">
                    <h4>Candidates Score</h4>
                    <div className="rect-icon">
                        <img src={internet} alt="" />
                        <ul>
                            <li className="bord">
                                <h2>11,000 <span>+89</span></h2>
                            </li>
                            <li className='bord'>Email</li>
                        </ul>
                        <ul>
                            <li className="bord">
                                <h2>145 <span> +89</span></h2>
                            </li>
                            <li className="bord">Social Share</li>
                        </ul>
                        <ul>
                            <li className="bord borhide" style={{border:''}}>
                                <h2>145 <span>+89</span></h2>
                            </li>
                            <li className="bord borhide" style={{border:''}}>Unique Link</li>
                        </ul>
                    </div>
                </div>
  )
}
