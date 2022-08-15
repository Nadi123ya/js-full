import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { getTasksList, updateTasksList } from "./taskGateway.js";

export const handleToggleTask = (event) => {
  const isCheckBox = event.target.classList.contains("list-item__checkbox");

  if (!isCheckBox) {
    return;
  }
  const taskId = event.target.dataset.id;
  const tasksList = getItem("tasksList");

  const { text } = tasksList.find(
    (task) => task.id === +event.target.dataset.id
  );
  const done = event.target.checked;
  const updatedTask = {
    text,
    done,
  };

  updateTasksList(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });

  // const cnangedTask = Object.assign(taskData, { done: event.target.checked });

  // const newTaskdata = tasksList.filter(
  //   (task) => task.id !== +event.target.dataset.id
  // );

  // const newTasksList = newTaskdata.concat(cnangedTask);

  // setItem("tasksList", newTasksList);
  // renderTasks();
};

// 1. Prepare the data
// 2. Update data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
