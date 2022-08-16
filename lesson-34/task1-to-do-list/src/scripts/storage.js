// export const setItem = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// export const getItem = (key) => JSON.parse(localStorage.getItem(key));
const storage = {};

export const setItem = (key, value) => {
  return Object.assign(storage, { [key]: value });
};

export const getItem = (key) => storage[key];
