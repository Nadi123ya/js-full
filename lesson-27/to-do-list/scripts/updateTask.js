import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";

// const listTasks = document.querySelectorAll(".list__item");

// const newListIteam = (event) => event.target.closest(".list__item");

export const handleToggleTask = (event) => {
  const isCheckBox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }
  const tasksList = getItem("tasks");
  const taskData = tasksList.find(
    (task) => task.id === +event.target.dataset.id
  );
  const newTasksList = Object.assign(taskData, { done: event.target.checked });
  setItem("tasks", newTasksList);
  renderTasks();
};

// listElem.addEventListener("click", handleToggleTask);
