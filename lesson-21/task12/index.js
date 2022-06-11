export const squaredNumbers = () => {
  const findNumber = document.querySelectorAll(".number");
  findNumber.forEach((el) => {
    el.dataset.squaredNumber = el.dataset.number * el.dataset.number;
  });
};
squaredNumbers();
