// eslint-disable-next-line consistent-return
// export const createArrayOfFunctions = (num = 0) => {
//   if (typeof num !== "number") {
//     return null;
//   }

//   let arr = [];

//   for (let i = 0; i < num; i++) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
// };
// console.log(createArrayOfFunctions([]));
// console.log(createArrayOfFunctions('hello'));
// console.log(createArrayOfFunctions(9)[5]());

export const createArrayOfFunctions = (num = 0) => {
  if (typeof num !== "number") {
    return null;
  }

  return Array(num)
    .fill()
    .map((el, index) => {
      el = function () {
        return index;
      };
      return el;
    });
};
console.log(createArrayOfFunctions([]));
console.log(createArrayOfFunctions("hello"));
console.log(createArrayOfFunctions(9)[4]());

// export const createArrayOfFunctions = (num) => {
//   if (typeof num === "undefined") return [];
//   if (typeof num !== "number") return null;

//   let arr = [];

//   for (let i = 0; i < num; i++) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
// };
// console.log(createArrayOfFunctions([]));
// console.log(createArrayOfFunctions("hello"));
// console.log(createArrayOfFunctions(3)[5]());
