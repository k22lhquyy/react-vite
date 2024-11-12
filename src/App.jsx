import './component/todo/todo.css'
import TodoData from './component/todo/TodoData';
import TodoForm from './component/todo/TodoForm';
import TodoLogo from './assets/react.svg'
import { useState } from 'react';
import Header from './component/layout/header';
import Footer from './component/layout/footer';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Watching youtube" },
    // { id: 2, name: "Learning React" }
  ]);

  const randomId = () => {
    return (Math.floor(Math.random() * 1000) + 1);
  }


  const deleteTodo = (id) => {
    const list = todoList.filter((item) => item.id != id);
    setTodoList(list)
  }

  const callMe = (name) => {
    const newTodo = {
      id: randomId(),
      name: name
    }
    setTodoList([...todoList, newTodo]);
    // alert(`call me ${name}`);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoForm
          callMe={callMe}
        />
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        {todoList.length == 0 &&
          <div>
            <img src={TodoLogo} alt="" />
          </div>
        }
      </div>
      <Footer/>
    </>
  );
}

export default App;