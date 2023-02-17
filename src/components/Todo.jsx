import { useEffect, useState } from "react";
import "./Todo.css";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        x
      </button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add new Task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function validatedTask(message, tasks) {
  if(typeof message === null) {
    return "Null string is not accepted";
  }

  console.log(message);

  tasks.map((task) => {
    if(task.title === message) {
      return "Task already exist";
    }
  });

  return true;
}

function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    try{
      if(validatedTask(newTasks, tasks)){
        setTasks(newTasks);
      }
    }catch(error){
      alert(error);
    }
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">
        <p>TODO-ITEMS</p>
        Pending Tasks ({tasksRemaining})
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;


// extra information
