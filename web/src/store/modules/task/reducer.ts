import TaskController from "../../../server/controllers/TaskController";

export default function task(state = {}, action: any) {
  let controller = new TaskController();
  switch (action.type) {
    case "@task/CREATE_TASK":
      return controller.createTask(action.payload);
    //case "@task/READ_TASK":
    //return;
    case "@task/UPDATE_TASK":
      return controller.updateTask(action.id, action.newText);
    case "@task/DELETE_TASK":
      return controller.deleteTask(action.payload);
    case "@task/GET_TASK":
      return controller.getTask(action.id);
    case "@task/MARK_AS_DONE":
      return controller.markAsDone(action.id);
    default:
      return state;
  }
}
