import { createNewTask } from "../scripts/createTask.js";
import { onListClick } from "../scripts/updateTask.js";

export const initTodoListHandlers = () => {
  const findCreateButton = document.querySelector(".create-task-btn");
  findCreateButton.addEventListener("click", createNewTask);

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onListClick);
};
