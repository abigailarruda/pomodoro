import React, { useState } from "react";

import $ from "jquery";

import "./styles.css";

import Modal from "../../components/Modal";

import { useDispatch, useSelector } from "react-redux";
import { TaskProps } from "../../components/Task";
import { updateTask } from "../../store/modules/task/actions";
import showAlert from "../../assets/util/alert";

interface EditTaskProps {
  id: string;
}

export interface Type {
  task: TaskProps;
}

function EditTask(props: EditTaskProps) {
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state: Type) => state.task);

  const initialFieldValues = {
    id: taskToEdit.id,
    text: taskToEdit.text,
    date: taskToEdit.date,
    time: taskToEdit.time,
    isDone: taskToEdit.isDone,
  };

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
      id: taskToEdit.id,
      text: taskValue,
      date: getCurrentDate(),
      time: getCurrentTime(),
      isDone: taskToEdit.isDone,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (values.text) {
      let update = dispatch(updateTask(values.id || "", values.text));
      if (update) {
        ($("#editTask") as any).modal("hide");
        setValues(initialFieldValues);
        showAlert(
          "Mission complete!",
          "Your task has been successfully edited!",
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
      <h1 className="title-edittask">Edit your task</h1>
      <form className="w-100" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="What task would you like to edit?"
            id="editTask"
            rows={3}
            name="text"
            defaultValue={taskToEdit.text}
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

export default EditTask;
