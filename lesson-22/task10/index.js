const findBtn = [...document.querySelectorAll(".pagination__page")];

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

findBtn.forEach((el) => el.addEventListener("click", handleClick));
// getAttribute("data-page-number")