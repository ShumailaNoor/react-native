import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          <span
            onClick={() => toggleTask(index)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
