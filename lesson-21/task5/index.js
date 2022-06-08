export const setTitle = (text) => {
  const findTitle = document.querySelector(".title");
  // eslint-disable-next-line no-return-assign
  return (findTitle.textContent = text);
};
console.log(setTitle("Let`s go"));
