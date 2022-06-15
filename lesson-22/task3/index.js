const findInputClass = document.querySelector(".text-input");
const getText = () => {
  console.log(findInputClass.value);
};

findInputClass.addEventListener("change", getText);