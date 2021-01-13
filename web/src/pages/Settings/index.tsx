import React, { useState } from "react";

import "./styles.css";

import Modal from "../../components/Modal";

import { Timer } from "../../server/controllers/TimerController";
import { useDispatch, useSelector } from "react-redux";
import { setTimer, getTimer } from "../../store/modules/timer/action";

/* Isso aqui é da musica*/
import UIfx from "uifx";
// @ts-ignore
import beepAudio from "../../components/sounds/beep.mp3";
// @ts-ignore
import bellAudio from "../../components/sounds/bell.mp3";

interface SettingsProps {
  id: string;
}

function Settings(props: SettingsProps) {
  const dispatch = useDispatch();
  const oldtimer = useSelector((state: any) => state.timer);

  const handleTimerChange = (event: any) => {
    let value = event.target.value;
    let timer: Timer = {
      pomodoro: oldtimer.pomodoro,
      shortBreak: oldtimer.shortBreak,
      longBreak: oldtimer.longBreak,
      sound: oldtimer.sound,
      repeat: oldtimer.repeat,
    };
    if (value === "default") {
      timer = {
        pomodoro: 1500,
        shortBreak: 300,
        longBreak: 900,
        sound: oldtimer.sound,
        repeat: 4,
      };
    } else if (value === "personal") {
      timer = {
        pomodoro: 1800,
        shortBreak: 120,
        longBreak: 1500,
        sound: oldtimer.sound,
        repeat: 4,
      };
    } else if (value === "work") {
      timer = {
        pomodoro: 3000,
        shortBreak: 600,
        longBreak: 1200,
        sound: oldtimer.sound,
        repeat: 2,
      };
    }
    dispatch(setTimer(timer));
    dispatch(getTimer());
  };

  const handleSoundChange = (event: any) => {
    let value = event.target.value;
    let timer: Timer = {
      pomodoro: oldtimer.pomodoro,
      shortBreak: oldtimer.shortBreak,
      longBreak: oldtimer.longBreak,
      sound: oldtimer.sound,
      repeat: oldtimer.repeat,
    };
    if(value === "beep"){
      timer = {
        pomodoro: oldtimer.pomodoro,
      shortBreak: oldtimer.shortBreak,
      longBreak: oldtimer.longBreak,
      sound: "../../components/sounds/beep.mp3",
      repeat: oldtimer.repeat,
      };
    }
    else{
      timer = {
        pomodoro: oldtimer.pomodoro,
      shortBreak: oldtimer.shortBreak,
      longBreak: oldtimer.longBreak,
      sound: "../../components/sounds/bell.mp3",
      repeat: oldtimer.repeat,
      };
    }
    dispatch(setTimer(timer));
    dispatch(getTimer());
  }

  return (
    <Modal target={props.id}>
      <h1 className="title-settings">Settings</h1>
      <form className="w-100">
        <div className="row mb-3">
          <label htmlFor="scheme" className="col-4 col-form-label">
            Scheme
          </label>
          <div className="col-8">
            <select
              className="custom-select"
              id="scheme"
              onChange={handleTimerChange}
            >
              <option defaultValue="default">default · 25 5 15 4</option>
              <option value="personal">personal · 30 2 25 4</option>
              <option value="work">work · 50 10 20 2</option>
            </select>
          </div>
        </div>
        <div className="row">
          <label htmlFor="sound" className="col-4 col-form-label">
            Sound
          </label>
          <div className="col-8">
            <select 
            className="custom-select" 
            id="sound"
            onChange={handleSoundChange}
            >
              <option defaultValue="bell">bell</option>
              <option value="beep">beep</option>
            </select>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default Settings;
