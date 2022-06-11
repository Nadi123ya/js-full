export const setButton = (buttonText) => {
  const buttonHtml = `<button>${buttonText}</button>`;
  const buttonString = document.querySelector("body");
  buttonString.innerHTML = buttonHtml;
};
setButton("I was born!");
