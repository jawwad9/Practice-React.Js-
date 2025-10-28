import { useState } from "react";

function App(){
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);


  function addTodo(event){
  event.preventDefault();
  // console.log(text);
  setTodo([...todo, text])
  console.log(todo);
  setText("")
  }
  

  return(
    <>
    <h1>Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter Your Text" onChange={(e)=> setText(e.target.value)} value={text}/>
      <button type="submit">Add Todo</button>
    </form>
    <ul>
      {
        todo.map((item, index)=>{
          return<li key={index}>{item}</li>
        })
      }
    </ul>
    </>
  )
}

export default App
