import React, { useState } from "react";

import $ from "jquery";

import "./styles.css";

import showAlert from "../../assets/util/alert";

import {
  mdiCalendarMonth as calendar,
  mdiCheck as check,
  mdiClockTimeThreeOutline as clock,
  mdiDelete as trash,
  mdiDotsHorizontal as dots,
  mdiPencil as pencil,
} from "@mdi/js";
import Icon from "@mdi/react";

import { useDispatch } from "react-redux";
import {
  deleteTask,
  getTask,
  markAsDone,
} from "../../store/modules/task/actions";

export interface TaskProps {
  id?: string;
  text: string;
  date: string;
  time: string;
  isDone: boolean;
}

const Task: React.FC<TaskProps> = ({ id, text, date, time, isDone }) => {
  const dispatch = useDispatch();

  const [done, setDone] = useState(isDone ? "card-text done" : "card-text");

  function editTask() {
    dispatch(getTask(id || ""));
    ($("#editTask") as any).modal("show");
  }

  function markTaskAsDone() {
    dispatch(getTask(id || ""));
    setDone("card-text done");
    dispatch(markAsDone(id || ""));
  }

  function removeTask() {
    let d = dispatch(deleteTask(id || ""));
    if (d) {
      showAlert(
        "Mission complete!",
        "Your task has been successfully deleted!",
        "success"
      );
    } else {
      showAlert(
        "Oops!",
        "Sorry. We are working on fixing the problem.",
        "error"
      );
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        {/* Text */}
        <p className={done}>{text}</p>
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
            {/* Date & Time on mobile only */}
            <h6 className="dropdown-header d-flex d-sm-none">
              <Icon path={calendar} size={0.7} color="#e1e1e1" />
              <span className="ml-2">{date}</span>
            </h6>
            <h6 className="dropdown-header d-flex d-sm-none">
              <Icon path={clock} size={0.7} color="#e1e1e1" />
              <span className="ml-2">{time}</span>
            </h6>
            {/* Mark as done */}
            <button
              className="dropdown-item"
              type="button"
              onClick={(event: any) => {
                markTaskAsDone();
              }}
            >
              <Icon path={check} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Mark as done</span>
            </button>

            {/* Edit task */}
            <button
              className="dropdown-item"
              type="button"
              onClick={(event: any) => {
                editTask();
              }}
            >
              <Icon path={pencil} size={0.7} color="#e1e1e1" />
              <span className="ml-2">Edit task</span>
            </button>

            {/* Delete task */}
            <button
              className="dropdown-item"
              type="button"
              onClick={(event: any) => {
                removeTask();
              }}
            >
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
