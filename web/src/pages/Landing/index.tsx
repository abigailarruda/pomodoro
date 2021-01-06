import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import Task from "../../components/Task";

import Account from "../Account";
import Settings from "../Settings";
import Contact from "../Contact";
import AddTask from "../AddTask";

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
import box from "../../assets/images/box.svg";

import db from "../../server/server";

function Landing() {
  const [sound, setSound] = useState(mdiVolumeHigh);
  const [playPause, setPlayPause] = useState(mdiPause);
  const [timer, setTimer] = useState(1500);
  const [tasks, setTasks] = useState({});

  function muteTimer(event: any) {
    if (sound === mdiVolumeHigh) {
      setSound(mdiVolumeOff);
    } else {
      setSound(mdiVolumeHigh);
    }
  }

  function countDown(display: any, operation: any) {
    var timer2 = timer,
      minutes,
      seconds;
    if (operation === 2) {
      console.log(timer);
      clearInterval(display);
    } else {
      setInterval(function () {
        setTimer(timer - 1);
        minutes = parseInt(String(timer2 / 60), 10);
        seconds = parseInt(String(timer2 % 60), 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        --timer2;
        setTimer(timer2);
        if (timer < 0) {
          setTimer(0);
        }
      }, 1000);
    }
  }

  function startTimer(operation: any) {
    var display = document.querySelector("#time");
    countDown(display, operation);
  }

  function playTimer(event: any) {
    if (playPause === mdiPause) {
      setPlayPause(mdiPlay);
    } else {
      setPlayPause(mdiPause);
    }
  }

  useEffect(() => {
    db.child("tasks").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setTasks({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  return (
    <div className="d-flex toggled" id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <div className="sidebar-heading">
          {/* Tomato Emoji */}
          <div className="brand">
            <Link to="/">
              <img src={tomato} width="40" alt="Pomodoro Tracker" />
            </Link>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="list-group list-group-flush">
          {/* Tracker */}
          <div className="list-group-item">
            <button className="btn btn-sidebar-active" type="button">
              <Icon path={mdiTimer} size={0.7} color="#FAFAFA" />
              <Link to="/">Tracker</Link>
            </button>
          </div>

          {/* Account */}
          <div className="list-group-item">
            <button
              className="btn btn-sidebar"
              type="button"
              data-toggle="modal"
              data-target="#account"
            >
              <Icon path={mdiAccount} size={0.7} color="#e0e0e0" />
              <span>Account</span>
            </button>
          </div>
          <Account id="account" />

          {/* Settings */}
          <div className="list-group-item">
            <button
              className="btn btn-sidebar"
              type="button"
              data-toggle="modal"
              data-target="#settings"
            >
              <Icon path={mdiCog} size={0.7} color="#e0e0e0" />
              <span>Settings</span>
            </button>
          </div>
          <Settings id="settings" />

          {/* Contact */}
          <div className="list-group-item">
            <button
              className="btn btn-sidebar"
              type="button"
              data-toggle="modal"
              data-target="#contact"
            >
              <Icon path={mdiEmail} size={0.7} color="#e0e0e0" />
              <span>Contact</span>
            </button>
          </div>
          <Contact id="contact" />

          {/* Log Out */}
          <div className="list-group-item">
            <button className="btn btn-sidebar" type="button">
              <Icon path={mdiLogoutVariant} size={0.7} color="#e0e0e0" />
              <Link to="/">Log Out</Link>
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
                <h1 id="time">25:00</h1>
              </div>

              <div className="row m-0">
                {/* Start & Stop Buttons */}
                <div className="col mb-2 mb-sm-auto pl-0 pr-2">
                  {/* Start Button */}
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => startTimer(1)}
                  >
                    Start
                  </button>
                </div>

                <div className="col pr-0 pl-2">
                  {/* Stop Button */}
                  <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={() => startTimer(2)}
                  >
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
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#addTask"
                  className="btn btn-plus"
                >
                  <Icon path={mdiPlus} size={1} color="#e1e1e1" />
                </button>
              </div>
              <AddTask id="addTask" />
              {Object.keys(tasks).map((id: string) => {
                return (
                  <Task
                    key={id}
                    text={(tasks as any)[id].text}
                    date={(tasks as any)[id].date}
                    time={(tasks as any)[id].time}
                    isDone={(tasks as any)[id].isDone}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
