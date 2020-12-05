import React from "react";

import "./styles.css";

import Modal from "../../components/Modal";

interface ContactProps {
  id: string;
}

function Contact(props: ContactProps) {
  return <Modal target={props.id}>{/* Conteúdo */}</Modal>;
}

export default Contact;
