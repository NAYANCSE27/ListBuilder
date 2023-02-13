import { useState } from "react";
import Input from "./input/Input";
import Output from "./output/Output";

import "./App.css";

function App() {
  const [listMessage, setListMessage] = useState([]);
  return (
    <div className="App">
      <Input listMessage={listMessage} setListMessage={setListMessage} />
      <Output listMessage={listMessage} setListMessage={setListMessage} />
    </div>
  );
}

export default App;
