const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

function getRandomId(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// eslint-disable-next-line no-return-assign
tasks.forEach((el) => (el.id = getRandomId(1, 100)));

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  // очистити html та заново зарендерити список елементів
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
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
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// change;
const listTasks = document.querySelectorAll(".list__item");
const newListIteam = (event) => event.target.closest(".list__item");

const handleToggleTask = (event) => {
  const isCheckBox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }
  const taskData = tasks.find((task) => task.id === +event.target.dataset.id);
  Object.assign(taskData, { done: event.target.checked });
  renderTasks(tasks);
};

listElem.addEventListener("click", handleToggleTask);

// add new

const findCreateButton = document.querySelector(".create-task-btn");

const createNewTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;
  console.log(text);

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";

  tasks.push({
    text,
    done: false,
    id: getRandomId(1, 100),
  });
  renderTasks(tasks);
  console.log(tasks);
};

findCreateButton.addEventListener("click", createNewTask);
