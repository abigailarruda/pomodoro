import React, { useState } from "react";

import "./styles.css";

import Modal from "../../components/Modal";

import $ from "jquery";

import { useDispatch } from "react-redux";
import { createTask } from "../../store/modules/task/actions";

import showAlert from "../../assets/util/alert";

interface AddTaskProps {
  id: string;
}

function AddTask(props: AddTaskProps) {
  const initialFieldValues = {
    id: "",
    text: "",
    date: "",
    time: "",
    isDone: false,
  };

  const dispatch = useDispatch();

  const [values, setValues] = useState(initialFieldValues);

  const getCurrentDate = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    return day + "/" + month + "/" + year;
  };

  const getCurrentTime = () => {
    let time = new Date();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minutes =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    return hour + ":" + minutes;
  };

  const handleTaskChange = (event: any) => {
    let taskValue = event.target.value;
    setValues({
      ...values,
      id: "",
      text: taskValue,
      date: getCurrentDate(),
      time: getCurrentTime(),
      isDone: false,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (values.text) {
      let create = dispatch(createTask(values));
      if (create) {
        ($("#addTask") as any).modal("hide");
        setValues(initialFieldValues);
        showAlert(
          "Mission complete!",
          "Your task has been successfully added!",
          "success"
        );
      } else {
        showAlert(
          "Oops!",
          "Sorry. We are working on fixing the problem.",
          "error"
        );
      }
    } else {
      let modalID = "#" + props.id;
      ($(modalID) as any).modal("hide");
      showAlert("Oops!", "You must add a description for your task.", "error");
    }
  };

  return (
    <Modal target={props.id}>
      <h1 className="title-task">Add a new task</h1>
      <p className="subtitle-task">Our tip is to use a short description</p>
      <form className="w-100" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="What task would you like to add?"
            id="task"
            rows={3}
            name="text"
            value={values.text}
            onChange={handleTaskChange}
            required
          ></textarea>
        </div>
        <button className="btn btn-done" type="submit">
          Done
        </button>
      </form>
    </Modal>
  );
}

export default AddTask;
