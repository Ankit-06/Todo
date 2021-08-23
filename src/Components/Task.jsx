import React, { useState } from "react";

const AddTask = ({ onCancel, onAddTask }) => {
  const [task, setTask] = useState("");
  return (
    <div className="add-task-dialog">
      <input value={task} onChange={(event) => setTask(event.target.value)} />
      <div className="add-task-actions-container">
        <div className="btns-container">
          <button
            className="add-btn"
            onClick={() => {
              onAddTask(task);
            }}
          >
            Add Task
          </button>
          <button className="cancel-btn" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
        <div className="icon-container"></div>
      </div>
    </div>
  );
};

const Task = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [Tasks, setTasks] = useState([]);

  const addNewTask = (text) => {
    setTasks((prevState) => [...prevState, text]);
  };
  return (
    <div className="tasks">
      <h1>Inbox</h1>
      <div
        className="add-task-btn"
        onClick={() => setShowAddTask((prevState) => !prevState)}
      >
        <span className="plus">+</span>
        <span className="add-task-text">Add Task</span>
      </div>
      {showAddTask && (
        <AddTask
          onAddTask={addNewTask}
          onCancel={() => setShowAddTask(false)}
        />
      )}
      {Tasks.length > 0 ? Tasks.map((task) => <p>{task}</p>) : null}
    </div>
  );
};

export default Task;
