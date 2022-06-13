const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const logTarget = (text, color) => {
  const eventsListelem = document.querySelector(".events-list");
  eventsListelem.innerHTML += `<span style= "color:${color}; margin-left: 8px" >${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const attachHandlersBtnElem = document.querySelector(".attach-handlers-btn");
attachHandlersBtnElem.addEventListener("click", attachHandlers);

const removeHandlers = () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);

  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);

  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
};

const removeHandlersBtnElem = document.querySelector(".remove-handlers-btn");
attachHandlersBtnElem.removeEventListener("click", removeHandlers);

const clear = () => {
  const eventsListelem = document.querySelector(".events-list");
  eventsListelem.innerHTML = "";
};
const clearButton = document.querySelector(".clear-btn");
clear.addEventListener("click", clearButton);
