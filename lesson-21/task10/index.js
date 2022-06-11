export const finishForm = () => {
  const findForm = document.querySelector("form");
  const createInput = document.createElement("input");
  findForm.append(createInput);
  createInput.setAttribute("type", "text");
  createInput.setAttribute("name", "login");
  findForm.prepend(createInput);
  const findInput = document.querySelector("[name='password']");
  findInput.setAttribute("type", "password");
};
console.log(finishForm());
