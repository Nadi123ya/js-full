export const getTitleElement = () => {
  const titleElem = document.querySelector(".title");
  console.dir(titleElem);
  return titleElem;
};
getTitleElement();

export const getInputElement = () => {
  const inputElem = document.querySelector("[type='text']");
  console.dir(inputElem);
  return inputElem;
};
getInputElement();
