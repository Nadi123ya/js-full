const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

function getRandomId(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// eslint-disable-next-line no-return-assign
tasks.forEach((el) => (el.id = getRandomId(1, 100)));

export const setItem = (key, value) => {
  localStorage.clear();
  localStorage.setItem(key, JSON.stringify(value));
};
setItem("tasks", tasks);
console.log(localStorage);
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
