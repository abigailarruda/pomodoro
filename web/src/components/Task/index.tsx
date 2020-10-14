import React from "react";

import "./styles.css";

interface TaskProps {
  text: String;
  date: String;
  time: String;
  isDone: boolean;
}

const Task: React.FC<TaskProps> = ({ text, date, time, isDone }) => {
  return <h1>Task</h1>;
};

export default Task;
