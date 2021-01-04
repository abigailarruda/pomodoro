import React from "react";

import "./styles.css";

import Modal from "../../components/Modal";

interface AddTaskProps {
  id: string;
}

function AddTask(props: AddTaskProps) {
  return <Modal target={props.id}>
    <h1 className="title-task">Add a new task</h1>
      <p className="subtitle-task">Our tip is to use a short description</p>
      <form className="w-100">
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="What task would you like to add?"
            id="task"
            rows={3}
          ></textarea>
        </div>
        <button className="btn btn-done" type="submit">
          Done
        </button>
      </form>
  </Modal>;
}

export default AddTask;
