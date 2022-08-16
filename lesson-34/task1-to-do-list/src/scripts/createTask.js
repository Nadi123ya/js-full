import { renderTasks } from "../scripts/render.js";
import { setItem, getItem } from "../scripts/storage.js";
import { createTask, getTasksList } from "./taskGateway.js";

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

  const newTasks = {
    text,
    done: false,
    id: getRandomId(1, 100),
  };

  createTask(newTasks)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1. Prepare the data
// 2. Add data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
