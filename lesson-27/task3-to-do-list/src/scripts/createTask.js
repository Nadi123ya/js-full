import { renderTasks } from "../scripts/render.js";
import { setItem, getItem } from "../scripts/storage.js";

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
  const tasksList = getItem("tasksList") || [];
  console.log(tasksList);
  const newTasksList = tasksList.concat({
    text,
    done: false,
    id: getRandomId(1, 100),
  });
  console.log(newTasksList);

  setItem("tasksList", newTasksList);

  renderTasks();
};

