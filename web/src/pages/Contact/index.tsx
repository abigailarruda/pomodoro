import React from "react";
import { Link } from "react-router-dom";
import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import "./styles.css";

import Modal from "../../components/Modal";

interface ContactProps {
  id: string;
}

function Contact(props: ContactProps) {
  return <Modal target={props.id}>
    <div className="w-100 d-flex flex-column align-items-center">
        <h1 className="title-contact">Contact Us</h1>
        <p className="subtitle-contact">pomodoro@contact.com</p>
        <h1 className="title-contact">Follow Us</h1>
        <Link to="/github" className="btn">
          <Icon path={mdiGithub} size={1} color="#a2a2a2" />
        </Link>
      </div>
  </Modal>;
}

export default Contact;
