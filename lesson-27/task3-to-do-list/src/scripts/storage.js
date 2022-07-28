export const setItem = (key, value) => {
  localStorage.clear();
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
