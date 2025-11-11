import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function addcount(e){
    setNum(num + 1)
  }

  return (
    <>
    <h1>Count: {num}</h1>
    <button onClick={(e)=>{addCount}}>Add</button>
    <button>less</button>
    </>
  )
}

export default App