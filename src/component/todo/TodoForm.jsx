import { useState } from "react"

const TodoForm = (props) => {

    const [myValue, setMyValue] = useState("");

    const {callMe} = props;

    const handleChange = (name) => {
        console.log(name)
        setMyValue(name)
    }

    const handleClick = () => {
        callMe(myValue);
        setMyValue("")
    }

    return (
        <div className="todoform">
            <input type="text" 
                onChange={(event) => {
                    handleChange(event.target.value);
                }}
                value={myValue}
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