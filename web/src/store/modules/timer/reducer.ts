import TimerController from "../../../server/controllers/TimerController";

export default function task(state = [], action: any) {
  let controller = new TimerController();
  switch (action.type) {
    case "@timer/SET_TIMER":
      return controller.setTimer(action.timer);
    case "@timer/GET_TIMER":
      action.timer = controller.getTimer();
      return action.timer;
    default:
      return state;
  }
}
