const findInput = document.querySelector(".search__input");
const findBtn = document.querySelector(".search__btn");

const getText = () => {
  console.log(findInput.value);
};

findBtn.addEventListener("click", getText);
