export const createButton = (buttonText) => {
  const findBody = document.querySelector("body");
  const createButton = document.createElement("button");
  findBody.append(createButton);
  createButton.textContent = buttonText;
};
console.log(createButton("Hello"));
