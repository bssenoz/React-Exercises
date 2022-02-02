import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <section class="todoapp">
        <Todo />
      </section>
      <footer class="info">
          <p>Click to edit a todo</p>
          <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default App;
