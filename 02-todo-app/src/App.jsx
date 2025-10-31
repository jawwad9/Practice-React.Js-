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
  

  const deleteTodo = (index)=>{
    console.log("delete",index);
    todo.splice(index, 1)
    setTodo([...todo])
  }

  const editTodo = (index)=>{
    console.log("edit",index);
    const update = prompt()
    todo.splice(index, 1, update)
    setTodo([...todo])    
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
          return<li key={index}>{item} <button onClick={() => editTodo(index)}>Edit</button><button onClick={()=>deleteTodo(index)}>Delete</button></li>
        })
      }
    </ul>
    </>
  )
}

export default App
