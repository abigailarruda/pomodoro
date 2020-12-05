import React from "react";

import "./styles.css";

import Modal from "../../components/Modal";

interface SettingsProps {
  id: string;
}

function Settings(props: SettingsProps) {
  return <Modal target={props.id}>{/* Conteúdo */}</Modal>;
}

export default Settings;
