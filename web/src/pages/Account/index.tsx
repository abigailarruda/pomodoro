import React from "react";
import tomato from "../../assets/images/tomato.png";
import { mdiGoogle, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import "./styles.css";

import Modal from "../../components/Modal";

interface AccountProps {
  id: string;
}

function Account(props: AccountProps) {
  return <Modal target={props.id}>
    <div className="w-100 d-flex flex-column align-items-center">
  <div className="tomato-brand">
    <img src={tomato} width="48" alt="Pomodoro Tracker" />
  </div>
  <h1 className="title-account">Welcome to Pomodoro</h1>
  <p className="subtitle-account">Don't have an account?</p>
  <button className="btn btn-google">
    <Icon path={mdiGoogle} size={0.7} color="#FAFAFA" />{" "}
    <span>Continue with Google</span>
  </button>
  <button className="btn btn-github">
        <Icon path={mdiGithub} size={0.7} color="#1E1E1E" />{" "}
          <span>Continue with Github</span>
        </button>
      </div></Modal>;
}

export default Account;
