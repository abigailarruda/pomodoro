import React, { useState } from "react";
import tomato from "../../assets/images/tomato.png";
import { mdiGoogle, mdiGithub } from "@mdi/js";
import { GoogleLogin } from "react-google-login";
import ReactDOM from "react-dom";
import Icon from "@mdi/react";
import "./styles.css";
import Modal from "../../components/Modal";

// @ts-ignore
import LoginGithub from "react-login-github";

interface AccountProps {
  id: string;
}

function Account(props: AccountProps) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profileImage, setProfileImage] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response: any) => {
    const {
      profileObj: { name, email, imgUrl },
    } = response;
    setName(name);
    setEmail(email);
    setProfileImage(imgUrl);
    setIsLoggedIn(true);

    console.log(name);
  };

  return (
    <Modal target={props.id}>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="tomato-brand">
          <img src={tomato} width="48" alt="Pomodoro Tracker" />
        </div>
        <h1 className="title-account">Welcome to Pomodoro</h1>
        <p className="subtitle-account">Don't have an account?</p>
        {/* <button className="btn btn-google">
    <Icon path={mdiGoogle} size={0.7} color="#FAFAFA" />{" "}
    <span>Continue with Google</span>
  </button> */}
        <GoogleLogin
          clientId="587816230714-dfbm14btdpbfavveitvuqbt2a38q27if.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="btn btn-google"
        />
        <button className="btn btn-github">
          <Icon path={mdiGithub} size={0.7} color="#1E1E1E" />{" "}
          <span>Continue with Github</span>
        </button>
      </div>
    </Modal>
  );
}

export default Account;
