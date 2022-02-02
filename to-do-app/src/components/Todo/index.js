import { useEffect, useState } from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Todo() {
  const [todos,setTodos] = useState([
    {text: 'Taste JavaScript',complete:false},
    {text: 'Code furiously',complete:true},
    {text: 'Have a life!',complete:false}
  ]);
  const [activeTodo, setActiveTodo] = useState("All");

  const CompletedTodos = todos.filter(item => item.complete === false);

  const removeTodo=(text) => {
    const filtered = todos.filter(item=>item.text!==text)
    setTodos(filtered);
  };

  let filteredTodo = activeTodo === "All" ? todos 
  : activeTodo === "Active" ? todos.filter(item => item.complete === false)
  : todos.filter(item=> item.complete === true)

  const updateCompleteTodo=(text)=>{
    const index = todos.findIndex(item => item.text === text);
    const todo = todos.find(item => item.text === text);
    todo.complete = !todo.complete
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  }

  useEffect(()=> {
    console.log(todos);
  },[todos])

  return (
    <div>
      <Header addTodo={setTodos} todos={todos}/>
      <Main filteredTodo={filteredTodo} updateCompleteTodo={updateCompleteTodo} removeTodo={removeTodo} todos={todos}/>
      <Footer updateCompleteTodo={updateCompleteTodo} 
        activeTodo={activeTodo}  
        setActiveTodo={setActiveTodo} 
        filteredTodo={filteredTodo} 
        addTodo={setTodos} 
        CompletedTodos={CompletedTodos}
        todos={todos}  />
    </div>
  )
}

export default Todo
