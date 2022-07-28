import { initTodoListHandlers } from "../scripts/toDolist.js";
import { renderTasks } from "../scripts/render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});
