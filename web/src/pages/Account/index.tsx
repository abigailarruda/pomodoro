import React from "react";

import "./styles.css";

import Modal from "../../components/Modal";

interface AccountProps {
  id: string;
}

function Account(props: AccountProps) {
  return <Modal target={props.id}>{/* Conteúdo */}</Modal>;
}

export default Account;
