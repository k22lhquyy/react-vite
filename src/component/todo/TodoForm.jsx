import { useState } from "react"

const TodoForm = (props) => {

    const [myValue, setMyValue] = useState("");

    const handleChange = (name) => {
        console.log(name)
        setMyValue(name)
    }

    const handleClick = () => {
        alert("tôi đã click");
    }

    return (
        <div className="todoform">
            <input type="text" 
                onChange={(event) => {
                    handleChange(event.target.value);
                }}

            />
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick} 
            >Add</button>
            <div>
                đây là text của tôi = {`${myValue}`}
            </div>
        </div>
    );
}

export default TodoForm;