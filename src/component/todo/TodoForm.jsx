const TodoForm = (props) => {

    const handleChange = (name) => {
        console.log(name)
    }

    const handleClick = () => {
        alert("tôi đã click");
    }

    return (
        <div>
            <input type="text" 
                onChange={(event) => handleChange(event.target.value)}
            />
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick} 
            >Add</button>
        </div>
    );
}

export default TodoForm;