import { TaskProps } from "../../components/Task";

import db from "../server";

export default class TaskController {
  createTask(task: TaskProps) {
    let err: boolean = true;
    let k = db.child("tasks").push(task, (error: any) => {
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
    db.child(`tasks/${k.key}`).set(
      {
        id: k.key,
        ...task,
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

  updateTask(task: TaskProps) {
    let err: boolean = true;
    db.child(`tasks/${task.id}`).set(task, (error: any) => {
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
    return err;
  }

  getTask(id: string) {
    let task: TaskProps = {
      id: "",
      text: "",
      date: "",
      time: "",
      isDone: false,
    };
    db.child(`tasks/${id}`).on(
      "value",
      (snapshot: any) => {
        task = snapshot.val();
      },
      (error: any) => {}
    );
    return task;
  }

  deleteTask(id: string) {
    let err: boolean = true;
    db.child(`tasks/${id}`).remove((error: any) => {
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
    return err;
  }
}
