import { TaskProps } from "../../../components/Task";

export function createTask(task: TaskProps) {
  return {
    type: "@task/CREATE_TASK",
    payload: task,
  };
}

export function updateTask(id: string, newText: string) {
  return {
    type: "@task/UPDATE_TASK",
    id,
    newText,
  };
}

export function deleteTask(id: string) {
  return {
    type: "@task/DELETE_TASK",
    payload: id,
  };
}

export function getTask(id: string) {
  return {
    type: "@task/GET_TASK",
    id,
  };
}

export function markAsDone(id: string) {
  return {
    type: "@task/MARK_AS_DONE",
    id,
  };
}
