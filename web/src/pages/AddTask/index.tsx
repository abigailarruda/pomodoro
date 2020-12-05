import React from "react";

import "./styles.css";

import Modal from "../../components/Modal";

interface AddTaskProps {
  id: string;
}

function AddTask(props: AddTaskProps) {
  return <Modal target={props.id}>{/* Conteúdo */}</Modal>;
}

export default AddTask;
