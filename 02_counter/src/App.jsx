import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  function addValue(){
    let newCount = counter + 1
    if(newCount >= 21){
      alert("You are Done")
    }else{
      setCount(newCount)
    }
  }
  function removeValue(){
    let removeCount = counter - 1
    if(removeCount <= -1){
      alert("You are done can't go beyound 0")
    }else{
      setCount(removeCount)
    }
    
  }
  return (
    <>
      <h1>Counter App with Add and Remove</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add a Value</button>
      <br />
      <button onClick={removeValue}>Remove a Value</button>
    </>
  )
}

export default App
