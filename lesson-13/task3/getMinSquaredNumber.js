export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || typeof arr === "string") {
    return null;
  }
  const minSquared = arr.map((num) => Math.abs(num * num));
  const min = Math.min(...minSquared);
  return min;
};
console.log(getMinSquaredNumber([-2, 5, 4, -11, -45]));
