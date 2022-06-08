export const getTitle = () => {
  const itemTitle = document.querySelector(".title").textContent;
  return itemTitle;
};
console.log(getTitle());

export const getDescription = () => {
  const itemTitle = document.querySelector(".about").innerText;
  return itemTitle;
};
console.log(getDescription());

export const getPlans = () => {
  const itemTitle = document.querySelector(".plans").innerHTML;
  return itemTitle;
};
console.log(getPlans());

export const getGoal = () => {
  const itemTitle = document.querySelector(".goal").outerHTML;
  return itemTitle;
};
console.log(getGoal());
