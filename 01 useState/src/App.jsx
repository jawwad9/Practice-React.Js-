import { useState } from "react"


function App(){
  let [num, setNum] = useState(0)

  const add = () => {
    setNum(num + 1)
    console.log(num);
  }

  const sub = () => {
     if(num === 0){
      console.log("ab nhi hoga");
    }else{
    setNum(num - 1)
    console.log(num);
  }
  }
  
  return(<>
      <h1>hello world</h1>
      <h1>Count {num}</h1>
      <button onClick={add}>Add | {num}</button>
      <button onClick={sub}>Sud | {num}</button>
  </>
  )
}

export default App