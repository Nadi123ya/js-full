export const createCalculator = () => {
  let memo = 0;
  return {
    add: function add(num) {
      memo += num;
      return memo;
    },

    decrease: function decrease(num) {
      memo -= num;
      return memo;
    },

    reset: function reset() {
      memo = 0;
      return memo;
    },
    getMemo: function getMemo() {
      return memo;
    },
  };
};
const add = createCalculator().add(9);
console.log(add);
const decrease = createCalculator().decrease(9);
console.log(decrease);
const reset = createCalculator().reset(9);
console.log(reset);
const getMemo = createCalculator().getMemo(9);
console.log(getMemo);
