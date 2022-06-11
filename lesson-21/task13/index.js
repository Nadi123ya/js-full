export const getSection = (num) => {
  const findEl = document.querySelector(`span[data-number="${num}"]`);
  const findParent = findEl.closest("[class ='box']");
  return findParent.dataset.section;
};
console.log(getSection(String(1)));
