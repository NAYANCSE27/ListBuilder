import "./Output.css";

const Output = ({ listMessage, setListMessage }) => {
  return (
    <div className="table__value">
      <ul>
        {
          listMessage.map((message, index) =>(
            <li key={index}>{message}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Output;

