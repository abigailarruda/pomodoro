import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import Task from "../../components/Task";

import EditTask from "../EditTask";
import Account from "../Account";
import Settings from "../Settings";
import Contact from "../Contact";
import AddTask from "../AddTask";

/* Isso aqui é da musica*/
import UIfx from "uifx";
// @ts-ignore
import beepAudio from "../../components/sounds/beep.mp3";
// @ts-ignore
import bellAudio from "../../components/sounds/bell.mp3";

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

import { useSelector, useDispatch } from "react-redux";
import db from "../../server/server";
import { stringify } from "querystring";
import { loginSuccess } from "../../store/modules/user/actions";

function Landing() {
  const loggedUser = useSelector((state: any) => state.user);
  const initTimer = useSelector((state: any) => state.timer);

  const [tasks, setTasks] = useState({});

  const [user, setUser] = useState({
    name: "",
    email: "",
    imgUrl: "",
    isLogged: false,
  });

  const [defaultTimer, setDefaultTimer] = useState({
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 900,
    sound: "../../components/sounds/bell.mp3",
    repeat: 4,
  });

  var estado: any;
  var estadoBreak: any;
  var estadoLongBreak: any;
  var situacao = "countDown";

  var countAux = 0;
  var countVezes = 0;
  var countShortAux = 0;
  var countLongAux = 0;

  const [countPomodoros, setPomodoros] = useState(0);
  const [countShortsBreaks, setShortsBreaks] = useState(0);
  const [countLongBreaks, setLongBreaks] = useState(0);

  const dispatch = useDispatch();

  const [sound, setSound] = useState(mdiVolumeHigh);
  const [playPause, setPlayPause] = useState(mdiPause);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    db.child("tasks").on("value", (snapshot) => {
      setTasks({
        ...snapshot.val(),
      });
    });
    setUser(loggedUser);
    setTimer(initTimer.pomodoro);
    setBreakTimer(initTimer.shortBreak);
    setBreakLongTimer(initTimer.longBreak);
    setRepeat(initTimer.repeat);
    setMusic(initTimer.sound);
    let minutos = initTimer.pomodoro / 60 || 25;
    setTimerText(`${minutos}:00`);
  }, [loggedUser, initTimer]);

  const [timer, setTimer] = useState(1500);
  const [breakTimer, setBreakTimer] = useState(300);
  const [breakLongTimer, setBreakLongTimer] = useState(900);
  const [repeat, setRepeat] = useState(4);
  const [timerText, setTimerText] = useState("25:00");
  const [music, setMusic] = useState("../../components/sounds/bell.mp3");

  function muteTimer(event: any) {
    if (sound === mdiVolumeHigh) {
      setSound(mdiVolumeOff);
    } else {
      setSound(mdiVolumeHigh);
    }
  }

  function countDown(display: any) {
    var timer2 = timer || 1500,
      minutes,
      seconds;

    var playmusic: any;

    if(music === "../../components/sounds/beep.mp3"){
      playmusic = new UIfx(beepAudio); 
    }
    else{
      playmusic = new UIfx(bellAudio); 
    }

    setStop(false);
    setStart(true);

    if (situacao === "shortBreak" || situacao === "longBreak") {
      timer2 = timer || 1500;
    }
    situacao = "countDown";

    estado = setInterval(function () {
      --timer2;

      minutes = parseInt(String(timer2 / 60), 10);
      seconds = parseInt(String(timer2 % 60), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      setTimer(timer2);

      if (timer2 <= 0) {
        playmusic.setVolume(1.0);
        playmusic.play();
        countAux++;
        countVezes++;
        setPomodoros(countAux);
        clearInterval(estado);
        if(countVezes === repeat ){
          countVezes = 0;
          breakLongTime(display);
        }else{
          breakTime(display);
        }
      }
    }, 1000);
  }

  function breakTime(display: any) {
    var timer2 = breakTimer || 300,
      minutes,
      seconds;

      var playmusic: any;

      if(music === "../../components/sounds/beep.mp3"){
        playmusic = new UIfx(beepAudio); 
      }
      else{
        playmusic = new UIfx(bellAudio); 
      }

    setStart(true);
    setStop(true);

    if (situacao === "countDown" || situacao === "longBreak") {
      timer2 = breakTimer || 300;
      situacao = "shortBreak";
    }

    estadoBreak = setInterval(function () {
      --timer2;

      minutes = parseInt(String(timer2 / 60), 10);
      seconds = parseInt(String(timer2 % 60), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      setBreakTimer(timer2);

      if (timer2 <= 0) {
        playmusic.setVolume(1.0);
        playmusic.play();
        countShortAux++;
        setShortsBreaks(countShortAux);
        clearInterval(estadoBreak);
        countDown(display);
      }
    }, 1000);
  }

  function breakLongTime(display: any) {
    var timer2 = breakLongTimer || 900,
      minutes,
      seconds;

    setStart(true);
    setStop(true);

    var playmusic: any;

    if(music === "../../components/sounds/beep.mp3"){
        playmusic = new UIfx(beepAudio); 
    }
    else{
        playmusic = new UIfx(bellAudio); 
   }

    if (situacao === "countDown" || situacao === "shortBreak") {
      timer2 = breakLongTimer || 900;
    }

    situacao = "longBreak";

    estadoLongBreak = setInterval(function () {
      --timer2;

      minutes = parseInt(String(timer2 / 60), 10);
      seconds = parseInt(String(timer2 % 60), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      setTimer(timer2);

      if (timer2 <= 0) {
        playmusic.setVolume(1.0);
        playmusic.play();
        countLongAux++;
        setLongBreaks(countLongAux);
        clearInterval(estadoLongBreak);
      }
    }, 1000);
  }

  $("#stop").click(function () {
    setStart(false);
    if (situacao === "countDown") {
      clearInterval(estado);
    }
    if (situacao === "shortBreak") {
      clearInterval(estadoBreak);
    }
    if (situacao === "longBreak") {
      clearInterval(estadoLongBreak);
    }
  });

  function startTimer() {
    var display = document.querySelector("#time");
    if (situacao === "countDown") {
      countDown(display);
    }
    if (situacao === "shortBreak") {
      breakTime(display);
    }
    if (situacao === "longBreak") {
      breakLongTime(display);
    }
  }

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
          {user.isLogged ? (
            <div className="list-group-item">
              <button
                className="btn btn-sidebar"
                type="button"
                onClick={() => {
                  setUser({ name: "", email: "", imgUrl: "", isLogged: false });
                  dispatch(
                    loginSuccess({
                      name: "",
                      email: "",
                      imgUrl: "",
                      isLogged: false,
                    })
                  );
                }}
              >
                <Icon path={mdiLogoutVariant} size={0.7} color="#e0e0e0" />
                <Link to="/">Log Out</Link>
              </button>
            </div>
          ) : (
            <></>
          )}
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
                <h1 id="time">{timerText}</h1>
              </div>

              <div className="row m-0">
                {/* Start & Stop Buttons */}
                <div className="col mb-2 mb-sm-auto pl-0 pr-2">
                  {/* Start Button */}
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    disabled={start}
                    onClick={() => startTimer()}
                  >
                    Start
                  </button>
                </div>

                <div className="col pr-0 pl-2">
                  {/* Stop Button */}
                  <button
                    type="button"
                    id="stop"
                    disabled={stop}
                    className="btn btn-secondary w-100"
                  >
                    Stop
                  </button>
                </div>
              </div>

              {/* Stats */}
              <p className="stats">
                You have completed {countPomodoros} pomodoros,{" "}
                {countShortsBreaks} short breaks and {countLongBreaks} long
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
                  <h4 className="text-truncate">
                    {user.isLogged ? `Hi, ${user.name}` : "Tasks"}
                  </h4>
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
              <EditTask id="editTask" />
              {Object.keys(tasks).map((id: string) => {
                return (
                  <Task
                    key={id}
                    id={id}
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
