import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";

export const handleToggleTask = (event) => {
  const isCheckBox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }
  const tasksList = getItem("tasksList");
  console.log(tasksList);
  const taskData = tasksList.find(
    (task) => task.id === +event.target.dataset.id
  );

  const cnangedTask = Object.assign(taskData, { done: event.target.checked });

  const newTaskdata = tasksList.filter(
    (task) => task.id !== +event.target.dataset.id
  );

  const newTasksList = newTaskdata.concat(cnangedTask);

  setItem("tasksList", newTasksList);
  renderTasks();
};
