const findInput = document.querySelector(".task-status");

const returnBoolean = () => {
  // eslint-disable-next-line no-unused-expressions
  console.log(findInput.checked); 
};

findInput.addEventListener("change", returnBoolean);
