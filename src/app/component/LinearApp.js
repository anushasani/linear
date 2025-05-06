"use client";

import { useState } from "react";
import { ShowPopup } from "./ShowPopup";

export const LinearApp = () => {
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = (statusClick) => {
    setStatus(statusClick);
    setShowPopup(true);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Linear App</h1>

      <section
        style={{
          display: "flex",
          gap: "5rem",
          justifyContent: "center",
          margin: "40px",
        }}
      >
        {["ToDo", "InProgress", "Review"].map((col) => (
          <div key={col}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <strong>{col}</strong>
              <button onClick={() => handleClick(col)}>+</button>
            </div>
            <ul>
              {getTasksByStatus(col).map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {showPopup && (
        <ShowPopup
          status={status}
          onClose={() => setShowPopup(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
};
