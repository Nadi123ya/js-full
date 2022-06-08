export const getTitle = () => {
  const itemTitle = document.querySelector(".title");
  return itemTitle.textContent;
};

export const getDescription = () => {
  const itemTitle = document.querySelector(".about");
  return itemTitle.innerText;
};

export const getPlans = () => {
  const itemTitle = document.querySelector(".plans");
  return itemTitle.innerHTML;
};

export const getGoal = () => {
  const itemTitle = document.querySelector(".goal");
  return itemTitle.outerHTML;
};
