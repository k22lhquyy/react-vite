
const TodoData = (props) => {
    const {todoList, deleteTodo} = props;

    return (
        <div className='todo-data'>
            {
                todoList.map((value, index) => {
                    return (
                        <div className="todo" key={value.id}>
                            <div>{`${index}`}: {`${value.name}   ---------> ${value.id}`}</div>
                            <button id={value.id} onClick={(event) => deleteTodo(event.target.id)}>delete</button>
                        </div>
                    )
                })
            }
            <div></div>
        </div>
    );
}

export default TodoData;
