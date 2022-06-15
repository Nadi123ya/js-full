const FindBtn = document.querySelector(".single-use-btn");

const clicked = () => {
  console.log("clicked");
};

FindBtn.addEventListener("click", clicked);

const removeClick = () => {
  FindBtn.removeEventListener("click", clicked);
};

FindBtn.addEventListener("click", removeClick);
