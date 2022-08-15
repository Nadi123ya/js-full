import { getItem } from "../scripts/storage.js";

const listElem = document.querySelector(".list");

const compareTasks = (a, b) => a.done - b.done;

// list__item-checkbox
// line15

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list-item");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.dataset.id = Number(id);
  checkbox.checked = done;
  checkbox.classList.add("list-item__checkbox");
  if (done) {
    listItemElem.classList.add("list-item_done");
  }

  const createText = document.createElement("span");
  createText.classList.add("list-item__text");
  createText.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("list-item__delete-btn");

  listItemElem.append(checkbox, createText, deleteBtn);
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
