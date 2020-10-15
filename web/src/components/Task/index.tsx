import React from "react";

import "./styles.css";

import {
  mdiCalendarMonth as calendar,
  mdiCheck as check,
  mdiClockTimeThreeOutline as clock,
  mdiDelete as trash,
  mdiDotsHorizontal as dots,
  mdiPencil as pencil,
} from "@mdi/js";
import Icon from "@mdi/react";

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
        {/* Text */}
        <p className={getClasses()}>{text}</p>
      </div>

      <div className="card-footer">
        {/* Date & Time */}
        <div
          className="justify-content-start
                     d-none d-sm-none d-md-none d-lg-flex d-xl-flex"
        >
          {/* Date */}
          <p>
            <Icon path={calendar} size={0.7} color="#e1e1e1" />
            <span className="ml-2">{date}</span>
          </p>

          {/* Time */}
          <p className="ml-3">
            <Icon path={clock} size={0.7} color="#e1e1e1" />
            <span className="d-flex ml-2">{time}</span>
          </p>
        </div>

        <div className="justify-content-end">
          {/* Menu Button */}
          <button
            id="menu"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
            className="btn btn-dots dropdown-toggle"
          >
            <Icon path={dots} size={0.8} color="#e1e1e1" />
          </button>

          {/* Menu Dropdown */}
          <div className="dropdown-menu" aria-labelledby="menu">
            {/* Mark as done */}
            <button className="dropdown-item" type="button">
              <Icon path={check} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Mark as done</span>
            </button>

            {/* Edit task */}
            <button className="dropdown-item" type="button">
              <Icon path={pencil} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Edit task</span>
            </button>

            {/* Delete task */}
            <button className="dropdown-item" type="button">
              <Icon path={trash} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Delete task</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
