import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex-wrap justify-center bottom-12 insext-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"yellow"}}>Yellow</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"purple"}}>Purple</button>
          <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"cyan"}}>Cyan</button>
          {/* Add more buttons with different colors here */}
        </div>
      </div>
    </div> 
  )
}

export default App
