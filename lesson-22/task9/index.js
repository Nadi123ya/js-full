const findInput = document.querySelector(".task-status");

const returnBoolean = (event) => {
  console.log(event.target.checked);
};

findInput.addEventListener("change", returnBoolean);
