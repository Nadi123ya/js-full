export const defer = (func, ms) => {
  return function () {
    setTimeout(() => func.apply(this,arguments), ms);
  };
};
const greeting = () => {
  console.log("Hello!");
};

const deferedGreeting = defer(greeting, 1000);
deferedGreeting();

const multiply = (a, b) => {
  console.log(a * b);
};

const deferedmultiply = defer(multiply, 2000);
deferedmultiply(2,4);
