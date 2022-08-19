import { initTodoListHandlers } from "../scripts/toDolist.js";
import { renderTasks } from "../scripts/render.js";
import { getTasksList } from "./taskGateway.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then(() => {
    renderTasks();
  });
  initTodoListHandlers();
});

// 1.Get data from server
// 2. Save data to front-end storage
