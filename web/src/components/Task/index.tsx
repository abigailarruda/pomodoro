import React, { useState } from "react";

import "./styles.css";

import Icon from "@mdi/react";
import {
  mdiCalendarMonth,
  mdiClockTimeThreeOutline,
  mdiDotsHorizontal,
  mdiDelete,
  mdiPencil,
  mdiCheck,
} from "@mdi/js";

interface TaskProps {
  text: String;
  date: String;
  time: String;
  isDone: boolean;
}

const Task: React.FC<TaskProps> = ({ text, date, time, isDone }) => {
  function getClasses() {
    if (isDone) {
      return "card-text done";
    } else {
      return "card-text";
    }
  }
  return (
    <div className="card">
      <div className="card-body">
        <p className={getClasses()}>{text}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div className="d-flex justify-content-start flex-row">
          <p className="d-flex align-items-center mb-0">
            <Icon path={mdiCalendarMonth} size={0.7} color="#e1e1e1" />
            <span className="ml-2">{date}</span>
          </p>
          <p className="d-flex align-items-center ml-3 mb-0">
            <Icon path={mdiClockTimeThreeOutline} size={0.7} color="#e1e1e1" />
            <span className="ml-2">{time}</span>
          </p>
        </div>
        <div className="justify-content-end">
          <button
            className="btn btn-dots dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Icon path={mdiDotsHorizontal} size={0.8} color="#e1e1e1" />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item d-flex align-items-center"
              type="button"
            >
              <Icon path={mdiCheck} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Mark as done</span>
            </a>
            <a
              className="dropdown-item d-flex align-items-center"
              type="button"
            >
              <Icon path={mdiPencil} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Edit task</span>
            </a>
            <a
              className="dropdown-item d-flex align-items-center"
              type="button"
            >
              <Icon path={mdiDelete} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Delete task</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
