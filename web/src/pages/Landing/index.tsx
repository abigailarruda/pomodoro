import React from "react";

import "./styles.css";

import tomato from "../../assets/images/tomato.png";

import $ from "jquery";

import Icon from "@mdi/react";
import {
  mdiTimer,
  mdiAccount,
  mdiCog,
  mdiEmail,
  mdiLogoutVariant,
  mdiMenu,
} from "@mdi/js";

function Landing() {
  return (
    <div className="d-flex toggled" id="wrapper">
      <div id="sidebar-wrapper">
        <div className="sidebar-heading">
          <div className="brand">
            <img src={tomato} width="40" alt="Pomodoro Tracker" />
          </div>
        </div>

        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <button className="btn btn-sidebar-active">
              <Icon path={mdiTimer} size={0.7} color="#FAFAFA" />
              <span>Tracker</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar">
              <Icon path={mdiAccount} size={0.7} color="#e0e0e0" />
              <span>Account</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar">
              <Icon path={mdiCog} size={0.7} color="#e0e0e0" />
              <span>Settings</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar">
              <Icon path={mdiEmail} size={0.7} color="#e0e0e0" />
              <span>Contact</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar">
              <Icon path={mdiLogoutVariant} size={0.7} color="#e0e0e0" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg">
          <button
            className="btn btn-menu d-flex d-sm-flex d-md-flex d-lg-none d-xl-none"
            id="menu-toggle"
            onClick={() => {
              $("#wrapper").toggleClass("toggled");
            }}
          >
            <Icon path={mdiMenu} size={1} color="#e1e1e1" />
          </button>
        </nav>

        <div className="container-fluid"></div>
      </div>
    </div>
  );
}

export default Landing;
