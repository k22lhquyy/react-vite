import './component/todo/todo.css'
import TodoData from './component/todo/TodoData';
import TodoForm from './component/todo/TodoForm';

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm/>
      <TodoData/>
    </div>
  );
}

export default App;