import React, { useState } from "react";

import "./styles.css";

import Task from "../../components/Task";

import {
  mdiAccount,
  mdiCog,
  mdiEmail,
  mdiLogoutVariant,
  mdiMenu,
  mdiPause,
  mdiPlay,
  mdiPlus,
  mdiSkipNext,
  mdiTimer,
  mdiVolumeHigh,
  mdiVolumeOff,
} from "@mdi/js";
import Icon from "@mdi/react";

import $ from "jquery";

import tomato from "../../assets/images/tomato.png";

function Landing() {
  const [sound, setSound] = useState(mdiVolumeHigh);
  const [playPause, setPlayPause] = useState(mdiPause);

  function muteTimer(event: any) {
    if (sound === mdiVolumeHigh) {
      setSound(mdiVolumeOff);
    } else {
      setSound(mdiVolumeHigh);
    }
  }

  function startTimer(duration: any, display: any) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(String(timer / 60), 10);
      seconds = parseInt(String(timer % 60), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var fiveMinutes = 60 * 25,
      display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
  };

  function playTimer(event: any) {
    if (playPause === mdiPause) {
      setPlayPause(mdiPlay);
    } else {
      setPlayPause(mdiPause);
    }
  }

  return (
    <div className="d-flex toggled" id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <div className="sidebar-heading">
          {/* Tomato Emoji */}
          <div className="brand">
            <img src={tomato} width="40" alt="Pomodoro Tracker" />
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="list-group list-group-flush">
          {/* Tracker */}
          <div className="list-group-item">
            <button className="btn btn-sidebar-active" type="button">
              <Icon path={mdiTimer} size={0.7} color="#FAFAFA" />
              <span>Tracker</span>
            </button>
          </div>

          {/* Account */}
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiAccount} size={0.7} color="#e0e0e0" />
              <span>Account</span>
            </button>
          </div>

          {/* Settings */}
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiCog} size={0.7} color="#e0e0e0" />
              <span>Settings</span>
            </button>
          </div>

          {/* Contact */}
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiEmail} size={0.7} color="#e0e0e0" />
              <span>Contact</span>
            </button>
          </div>

          {/* Log Out */}
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiLogoutVariant} size={0.7} color="#e0e0e0" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Container */}
      <div id="page-content-wrapper">
        <nav className="navbar">
          {/* Sidebar Toggle Button (on mobile) */}
          <button
            type="button"
            id="menu-toggle"
            className="btn btn-menu d-flex d-sm-flex 
                       d-md-flex d-lg-none d-xl-none"
            onClick={() => {
              $("#wrapper").toggleClass("toggled");
            }}
          >
            <Icon path={mdiMenu} size={1} color="#e1e1e1" />
          </button>
        </nav>

        <div className="container-fluid">
          <div className="row">
            {/* Timer */}
            <div
              className="pl-md-0 col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5
                         offset-md-1 offset-lg-1 offset-xl-1 order-md-last"
            >
              <div className="timer">
                {/* Sound On, Pause & Skip Icons */}
                <div className="icons">
                  {/* Sound Of/Off */}
                  <button
                    type="button"
                    className="btn btn-timer"
                    onClick={muteTimer}
                  >
                    <Icon path={sound} size={1} color="#a2a2a2" />
                  </button>

                  {/* Play/Pause */}
                  <div className="buttons">
                    <button
                      type="button"
                      className="btn btn-timer"
                      onClick={playTimer}
                    >
                      <Icon path={playPause} size={1} color="#a2a2a2" />
                    </button>

                    {/* Skip */}
                    <button type="button" className="btn btn-timer ml-2">
                      <Icon path={mdiSkipNext} size={1} color="#a2a2a2" />
                    </button>
                  </div>
                </div>

                {/* Timer */}
                <h1 id="time">05:00</h1>
              </div>

              <div className="row m-0">
                {/* Start & Stop Buttons */}
                <div className="col mb-2 mb-sm-auto pl-0 pr-2">
                  {/* Start Button */}
                  <button type="button" className="btn btn-primary w-100">
                    Start
                  </button>
                </div>

                <div className="col pr-0 pl-2">
                  {/* Stop Button */}
                  <button type="button" className="btn btn-secondary w-100">
                    Stop
                  </button>
                </div>
              </div>

              {/* Stats */}
              <p className="stats">
                You have completed 3 pomodoros, 2 short breaks and 0 long
                breaks.
              </p>
            </div>

            {/* Tasks Container */}
            <div
              className="pr-md-0 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 
                         offset-md-1 offset-lg-1 offset-xl-1
                         order-xs-last order-md-first"
            >
              {/* Tasks Header */}
              <div className="header">
                {/* Title & Subtitle */}
                <div className="headings">
                  <h4>Tasks</h4>
                  <h6>Try adding new tasks!</h6>
                </div>

                {/* Add Task Button */}
                <button type="button" className="btn btn-plus">
                  <Icon path={mdiPlus} size={1} color="#e1e1e1" />
                </button>
              </div>

              <Task
                text="Design an interactive receipt for a historic landmark."
                date="14/10/2020"
                time="20:49"
                isDone={false}
              />

              <Task
                text="Create a design to quickly and easily view important
                information about your home from a remote location."
                date="14/10/2020"
                time="20:00"
                isDone={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
