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
        text: task.text,
        time: task.time,
        date: task.date,
        isDone: task.isDone,
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

  readTask() {
    let array: TaskProps[] = [];
    var urlRef = db.child("tasks");
    urlRef.once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        array.push(child.val());
      });
    });
    return array;
  }

  updateTask(id: string, newText: string) {
    let err: boolean = true;
    let task: TaskProps = this.getTask(id);
    db.child(`tasks/${id}`).set(
      {
        id: task.id,
        text: newText,
        date: task.date,
        time: task.time,
        isDone: task.isDone,
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

  markAsDone(id: string) {
    let err: boolean = true;
    let task: TaskProps = this.getTask(id);
    db.child(`tasks/${id}`).set(
      {
        id: task.id,
        text: task.text,
        date: task.date,
        time: task.time,
        isDone: true,
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
}
