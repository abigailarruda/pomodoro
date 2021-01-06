import React, { useState } from "react";

import Swal from "sweetalert2";

import "./styles.css";

import Modal from "../../components/Modal";
import { TaskProps } from "../../components/Task";

import db from "../../server/server";

import $ from "jquery";

interface AddTaskProps {
  id: string;
}

function AddTask(props: AddTaskProps) {
  const initialFieldValues = {
    text: "",
    date: "",
    time: "",
    isDone: false,
  };

  const [values, setValues] = useState(initialFieldValues);

  const handleTaskChange = (event: any) => {
    let taskValue = event.target.value;
    let currentDateTime = new Date();
    let day = String(currentDateTime.getDate()).padStart(2, "0");
    let month = String(currentDateTime.getMonth() + 1).padStart(2, "0"); //January is 0!
    let year = currentDateTime.getFullYear();
    let dateValue = day + "/" + month + "/" + year;
    let hour =
      currentDateTime.getHours() < 10
        ? "0" + currentDateTime.getHours()
        : currentDateTime.getHours();
    let minutes =
      currentDateTime.getMinutes() < 10
        ? "0" + currentDateTime.getMinutes()
        : currentDateTime.getMinutes();
    let timeValue = hour + ":" + minutes;
    setValues({
      ...values,
      text: taskValue,
      date: dateValue,
      time: timeValue,
      isDone: false,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (values.text) {
      createTask(values);
    } else {
      let modalID = "#" + props.id;
      ($(modalID) as any).modal("hide");
      Swal.fire({
        title: "Oops!",
        text: "You must add a description for your task.",
        icon: "error",
        width: 400,
        allowEscapeKey: true,
        allowOutsideClick: true,
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
  };

  const createTask = (object: TaskProps) => {
    db.child("tasks").push(object, (error: any) => {
      if (error) {
        Swal.fire({
          title: "Oops!",
          text: "Sorry. We are working on fixing the problem.",
          icon: "error",
          width: 400,
          allowEscapeKey: true,
          allowOutsideClick: true,
          showCloseButton: true,
          showConfirmButton: false,
        });
      } else {
        let modalID = "#" + props.id;
        ($(modalID) as any).modal("hide");
        setValues(initialFieldValues);
        Swal.fire({
          title: "Mission complete!",
          text: "Your task has been successfully added!",
          icon: "success",
          width: 400,
          allowEscapeKey: true,
          allowOutsideClick: true,
          showCloseButton: true,
          showConfirmButton: false,
        });
      }
    });
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
