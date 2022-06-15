// const findBtn = document.querySelector(".btn-container");

// const handleClick = (event) => {
//   if (event.target !== event.currentTarget) {
//     console.log(event.target.textContent);
//   }
//   event.stopPropagation();
// };

// findBtn.addEventListener("click", handleClick);
// The target of the event is represented by e.target, and the target element the event listener is attached to is represented by e.currentTarget. By simply checking that these values not be equal, you can ensure that the event handler doesn't react to events fired from the parent element that you don't care about.
const findBtn = [...document.querySelectorAll(".btn")];

const handleClick = (event) => {
  console.log(event.target.textContent);
};
findBtn.forEach((el) => el.addEventListener("click", handleClick));
