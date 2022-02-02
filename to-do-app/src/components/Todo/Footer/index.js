import React from 'react'

function Footer({addTodo,activeTodo,setActiveTodo,CompletedTodos,todos}) {
  const clearTodos= () => {
    addTodo([]);
  }
  return (
    <div>
      <footer className="footer">
        <span className="todo-count"><strong>{CompletedTodos.length}</strong> items left</span>
        <ul className="filters">
          <li>
            <a onClick={(e) => { setActiveTodo("All") }} 
            className={activeTodo === "All" ? 'selected' : null}>All</a>
          </li>
          <li>
            <a onClick={(e) => { setActiveTodo("Active") }} 
            className={activeTodo === "Active" ? 'selected' : null}>Active</a>
          </li>
          <li>
            <a onClick={(e) => {setActiveTodo("Completed")}}
            className={activeTodo === "Completed" ? 'selected' : null}>Completed</a>
          </li>
        </ul>

      <button className="clear-completed" onClick = {clearTodos}>
        Clear completed
      </button>
    </footer>
    </div>
  )
}

export default Footer
