import { Timer } from "../../../server/controllers/TimerController";

export function setTimer(timer: Timer) {
  return {
    type: "@timer/SET_TIMER",
    timer,
  };
}

export function getTimer() {
  let timer: Timer = {
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
    sound: "",
    repeat: 0,
  };
  return {
    type: "@timer/GET_TIMER",
    timer,
  };
}
