export const getTitle = () => {
  const itemTitle = document.querySelector(".title");
  return itemTitle.textContent;
};
console.log(getTitle());

export const getDescription = () => {
  const itemTitle = document.querySelector(".about");
  return itemTitle.innerText;
};
console.log(getDescription());

export const getPlans = () => {
  const itemTitle = document.querySelector(".plans");
  return itemTitle.innerHTML;
};
console.log(getPlans());

export const getGoal = () => {
  const itemTitle = document.querySelector(".goal");
  return itemTitle.outerHTML;
};
console.log(getGoal());
