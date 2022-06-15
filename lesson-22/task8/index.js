const findInput = document.querySelector(".text-input");

const getText = (event) => {
  console.log(event.target.value);
};
findInput.addEventListener("change", getText);
