import React from 'react'

function Main({filteredTodo,updateCompleteTodo,removeTodo,todos}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className='todo-list'>
          {filteredTodo.map((todo,i) => (
            <li className='completed' key = {i} 
            className={todo.complete ? 'completed' : undefined}>
              <div className='view'>
                <input className="toggle" type="checkbox"
                checked={todo.complete}
                onChange={() => updateCompleteTodo(todo.text)}/>
                <label>{todo.text}</label>
                <button className="destroy"
                onClick={() => removeTodo(todo.text)}></button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Main
