import {useState,useEffect} from "react";

const values={text: "",complete: false};

function Header({addTodo,todos}) {
  const [todo,setAdd] = useState(values)

  useEffect(()=> {
    setAdd(values);
  },[todos]);

  const onChangeInput = (e) => {
    setAdd({...todo,[e.target.name]: e.target.value});
  };
 
  const handleKeyDown = (e)=> {
    if (e.key === 'Enter') {
      e.preventDefault();

      if(todo.text==='') return false;
      addTodo([...todos,todo]);
    }
  };
  return (
	    <header className="header">
        <h1>todos</h1>
        <form>
          <input className="new-todo"
          name="text"
          value= {todo.text}
          onChange={onChangeInput}
          onKeyDown={handleKeyDown}
          autoFocus/>
        </form>
      </header>
  )
}

export default Header;
