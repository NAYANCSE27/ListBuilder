import { useState } from "react";
import Output from "../output/Output";
import "./Input.css";

const Input = (props) =>{
    const {listMessage, setListMessage} = props;
    const [message, setMessage] = useState("");

    function handleOnChange(event){
        setMessage(event.target.value);
    }
    function handleOnClick(){
        setListMessage([...listMessage, message]);
    }

    return (
        <div className="input__value">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter Activity"
              onChange={handleOnChange}
              required
            />
            <button onClick={handleOnClick} id="add">Add</button>
        </div>
    );
}

export default Input;