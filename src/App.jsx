import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scree from './component/Scree'

import Store, { Data } from './component/Store'


function App() {
  
  // const handelscreen = ()=>{
  //   if
  // }
  const [des,setdes]=useState(true)
  return (

    <Store>
      <Scree></Scree>
{/* {des?<Scree></Scree>:
    // <div className='screen-cont' style={{width:'100vw',display:'flex',justifyContent:'center',backgroundColor:'black'}}>
    
    // <Mobile></Mobile>
    // </div>} */}

    </Store>

  )
}

export default App
