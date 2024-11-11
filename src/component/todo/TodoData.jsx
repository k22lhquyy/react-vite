
const TodoData = (props) => {
    const {todoList} = props;

    return (
        <div className='todo-data'>
            {
                todoList.map((value, index) => {
                    return (
                        <div className="todo">
                            <div>{`${index}`}: {`${value.name}`}</div>
                            <button>delete</button>
                        </div>
                    )
                })
            }
            <div>{JSON.stringify(todoList)}</div>
            <div></div>
        </div>
    );
}

export default TodoData;
