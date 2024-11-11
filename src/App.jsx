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

  const name = "quyle"
  const age = "25"
  const data = {
    address: "Quang Nam",
    country: "Viet Nam"
  }

  // const hander = () => {
  //   alert("Click me");
  // }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div>
        <img src={TodoLogo} alt="" />
      </div>
    </div>
  );
}

export default App;