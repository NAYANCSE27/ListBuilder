import { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const { listMessage, setListMessage } = props;
  const [message, setMessage] = useState("");

  function isValidMessage(text) {
    console.log(text);
    if (text === null) {
      return false;
    }
    return true;
  }

  function handleOnChange(event) {
    setMessage(event.target.value);
  }
  function handleOnClick() {
    if (isValidMessage(message)) {
      setListMessage([...listMessage, message]);
    } else {
      alert("Invalid input");
    }
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
      <button onClick={handleOnClick} id="add">
        Add
      </button>
    </div>
  );
};

export default Input;
