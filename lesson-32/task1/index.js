const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNumber1 = getValueWithDelay(4, 1000);
const asyncNumber2 = getValueWithDelay(3, 2000);
const asyncNumber3 = getValueWithDelay(2, 3000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers).then((numbers) => getSum(numbers));
};

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3)
  .then((result) => console.log(result))
  .catch(() => Promise.reject(new Error(`Can\`t calculate`)));

//   asyncSum(asyncNumber1, Promise.reject(new Error("err")), asyncNumber3)
//   .then((result) => console.log(result))
//   .catch(() => Promise.reject(new Error(`Can\`t calculate`)));

// const getValueWithDelay = (value, delay) =>
//   new Promise((resolve, reject) => {
//     if (isNaN(value) === true) {
//       reject(value);
//     }
//     setTimeout(() => {
//       console.log(value);
//       resolve(value);
//     }, delay);
//   });

// const asyncNumber1 = getValueWithDelay(4, 1000);
// const asyncNumber2 = getValueWithDelay(3, 2000);
// const asyncNumber3 = getValueWithDelay(2, 3000);

// const getSum = (numbers) =>
//   numbers
//     .reduce((acc, num) => acc + Number(num), 0);

// export const asyncSum = (...asyncNumbers) => {
//   return Promise.all(asyncNumbers).then((numbers) => getSum(numbers));
// };

// asyncSum(asyncNumber1, asyncNumber2, asyncNumber3)
//   .then((result) => console.log(result))
//   .catch(() => Promise.reject(new Error(`Can\`t calculate`)));