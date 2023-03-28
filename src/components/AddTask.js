import { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");

  function handelTask(event) {
    setTaskValue(event.target.value);
  }
  function handelReset() {
    setTaskValue("");
  }
  function handleSubmit(e) {
    e.preventDefault;
    const task = {
      id: Math.floor(Math.random * 10000),
      name: taskValue,
      completed: false,
    };
    console.log(task);
  }
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handelTask}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue}
        />
        <button type="submit">Add Task</button>
        <span onClick={handelReset} className="reset">
          Reset
        </span>
      </form>
      <p>{taskValue.length}</p>
    </section>
  );
};
