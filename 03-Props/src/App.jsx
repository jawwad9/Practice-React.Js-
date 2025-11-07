import React, { useState } from 'react'
import Button from './Button';


const App = () => {
  const [count, setCount] = useState(0);

  function addCount(){
    console.log("add Count");
    setCount(count + 1)
  }

  function lessCount(){
  
    if(count === 0){
      return
    }
    console.log("Less count");
    setCount(count - 1)
  }


  return (
    <>
    <h1>Hello World</h1>
    <h3>Count: {count}</h3>
    <button onClick={lessCount}>Less</button>
    <button onClick={addCount}>Add</button>

      {/* // strat props and call defind the props */}
    <Button name="anas" price="450" modle="2025" />
    </>
  )
}

export default App