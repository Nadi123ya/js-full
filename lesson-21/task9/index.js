export const finishList = () => {
  const findList = document.querySelector("ul");
  const createListElem1 = document.createElement("li");
  createListElem1.textContent = "1";
  const createListElem4 = document.createElement("li");
  createListElem4.textContent = "4";
  const createListElem6 = document.createElement("li");
  createListElem6.textContent = "6";
  const createListElem8 = document.createElement("li");
  createListElem8.textContent = "8";
  findList.prepend(createListElem1);
  const findSpecial = document.querySelector(".special");
  findSpecial.before(createListElem4);
  findSpecial.after(createListElem6);
  findList.append(createListElem8);
};
console.log(finishList());
