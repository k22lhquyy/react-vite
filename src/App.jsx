import './component/todo/todo.css'
import TodoData from './component/todo/TodoData';
import TodoForm from './component/todo/TodoForm';
import TodoLogo from './assets/react.svg'
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Watching youtube" },
    { id: 2, name: "Learning React" }
  ]);


  const callMe = (name) => {
    const newTodo = {
      id : 3,
      name : name
    }
    setTodoList([...todoList, newTodo]);
    // alert(`call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm 
        callMe={callMe}
      />
      <TodoData
        todoList={todoList}
      />
      <div>
        <img src={TodoLogo} alt="" />
      </div>
    </div>
  );
}

export default App;