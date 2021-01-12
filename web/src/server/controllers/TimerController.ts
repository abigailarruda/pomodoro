import db from "../server";

/* Isso aqui é da musica*/
import UIfx from "uifx";
// @ts-ignore
import beepAudio from "../../components/sounds/beep.mp3";
// @ts-ignore
import bellAudio from "../../components/sounds/bell.mp3";



export interface Timer {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  repeat: number;
  sound: any;
}

export default class TimerController {
  setTimer(timer: Timer) {
    let err: boolean = true;
    let k = db.child("user/timer").push(timer, (error: any) => {
      if (error) {
        return function () {
          err = false;
        };
      } else {
        return function () {
          err = true;
        };
      }
    });
    db.child(`user/timer`).set(
      {
        id: k.key,
        pomodoro: timer.pomodoro,
        shortBreak: timer.shortBreak,
        longBreak: timer.longBreak,
        repeat: timer.repeat,
        sound: timer.sound,
      },
      (error: any) => {
        if (error) {
          return function () {
            err = false;
          };
        } else {
          return function () {
            err = true;
          };
        }
      }
    );
    return err;
  }

  getTimer() {
    let timer: Timer = {
      pomodoro: 1500,
      shortBreak: 300,
      longBreak: 900,
      sound: "../../components/sounds/bell.mp3",
      repeat: 4,
    };
    db.child(`user/timer`).on(
      "value",
      (snapshot: any) => {
        timer = snapshot.val();
      },
      (error: any) => {}
    );
    return timer;
  }
}
