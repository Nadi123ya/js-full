"use strict";

export const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const listElem = document.querySelector(".list");

  const listItemsElems = tasksList.map(({ text, done }) => {
    const listItemElems = document.createElement("li");
    listItemElems.classList.add("list__item");
    if (done) {
      listItemElems.classList.add("list__item_done");
    }
    const checkBoxElem = document.createElement("input");
    checkBoxElem.setAttribute("type", "checkbox");
    checkBoxElem.checked = done;
    checkBoxElem.classList.add("list__item-checkbox");
    listItemElems.append(checkBoxElem, text);

    return listItemElems;
  });
  listElem.append(...listItemsElems);
};
renderTasks(tasks);
