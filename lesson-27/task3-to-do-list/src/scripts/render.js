import { getItem } from "../scripts/storage.js";

const listElem = document.querySelector(".list");

const compareTasks = (a, b) => a.done - b.done;

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.dataset.id = Number(id);
  checkbox.checked = done;
  checkbox.classList.add("list__item-checkbox");
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  listItemElem.append(checkbox, text);
  listItemElem.dataset.id = Number(id);
  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem("tasksList") || [];
  listElem.innerHTML = "";
  const tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};

renderTasks();
