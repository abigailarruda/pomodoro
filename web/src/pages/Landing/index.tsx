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

import Task from "../../components/Task";

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
            <button className="btn btn-sidebar-active" type="button">
              <Icon path={mdiTimer} size={0.7} color="#FAFAFA" />
              <span>Tracker</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiAccount} size={0.7} color="#e0e0e0" />
              <span>Account</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiCog} size={0.7} color="#e0e0e0" />
              <span>Settings</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiEmail} size={0.7} color="#e0e0e0" />
              <span>Contact</span>
            </button>
          </div>
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiLogoutVariant} size={0.7} color="#e0e0e0" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg">
          <button
            id="menu-toggle"
            onClick={() => {
              $("#wrapper").toggleClass("toggled");
            }}
            className="btn btn-menu d-flex d-sm-flex 
            d-md-flex d-lg-none d-xl-none"
          >
            <Icon path={mdiMenu} size={1} color="#e1e1e1" />
          </button>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 order-md-last">
              {/* Timer */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 offset-md-1 offset-lg-1 offset-xl-1 order-xs-last order-md-first">
              <Task
                text="Design an interactive receipt for a historic landmark."
                date="14/10/2020"
                time="20:49"
                isDone={false}
              />
              <Task
                text="Create a design to quickly and easily view important information about your home from a remote location."
                date="14/10/2020"
                time="20:00"
                isDone={true}
              />
            </div>
            <div className="offset-md-1 offset-lg-1 offset-xl-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
