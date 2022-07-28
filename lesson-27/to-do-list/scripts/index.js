import { initTodoListHandlers } from "../scripts/toDolist.js";
import { renderTasks } from "../scripts/render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasks") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);
