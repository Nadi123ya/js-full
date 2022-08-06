export const calc = (initValue) => {
  let result = initValue;
  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

// const result = calc(3).mult(4).add(2).div(10).subtract(5).result();
// console.log(result);

const favorites = ["id-2"];
const tree = {
  id: "id-1",
  name: "Products",
  nodes: [
    {
      id: "id-2",
      name: "Food",
      nodes: [],
    },
  ],
};

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};

// const result = markFavorites(tree, favorites);
// console.log(result);

export const mult = (a) => (b) => a * b;
export const twice = mult(2);
export const triple = mult(3);
// console.log(twice(7));
// console.log(triple(9));

const add2 = (value) => value + 2;
const square = (value) => value * value;
const half = (value) => value / 2;

export const compose =
  (...func) =>
  (value) => {
    return func.reduce((acc, func) => func(acc), value);
  };

const superFunc = compose(add2, square, half);
// console.log(superFunc(2));
