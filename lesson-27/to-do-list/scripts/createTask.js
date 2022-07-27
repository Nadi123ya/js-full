import { renderTasks } from "../scripts/render.js";
import { setItem, getItem } from "../scripts/storage.js";

// const findCreateButton = document.querySelector(".create-task-btn");
function getRandomId(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export const createNewTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  const tasksList = getItem("tasks") || [];
  console.log(tasksList);
  const newTasksList = tasksList.push({
    text,
    done: false,
    id: getRandomId(1, 100),
  });

  setItem("tasks", newTasksList);

  renderTasks();
};

// findCreateButton.addEventListener("click", createNewTask);
