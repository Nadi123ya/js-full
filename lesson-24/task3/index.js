// export const getDiff = (startDate, endDate) => {
//   const result = Math.abs(
//     new Date(endDate).getTime() - new Date(startDate).getTime()
//   );
//   console.log(result);
//   const days = Math.floor(result / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((result / (1000 * 60 * 60)) % 60);
//   const minutes = Math.floor((result / (1000 * 60)) % 60);
//   const seconds = Math.floor((result / 1000) % 60);
//   return `${days}d ${hours}h ${minutes}m ${seconds}s `;
// };

// const startDate = Date.UTC(2018, 3, 1, 11, 45, 6);
// const endDate = Date.UTC(2019, 0, 1, 5, 23, 12);
// console.log(getDiff(startDate, endDate));

export const getDiff = (startDate, endDate) => {
  const result = Math.abs(endDate - startDate);
  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = new Date(result).getUTCHours();
  const minutes = new Date(result).getUTCMinutes();
  const seconds = new Date(result).getUTCSeconds();
  return `${days}d ${hours}h ${minutes}m ${seconds}s `;
};

const startDate = Date.UTC(2018, 3, 1, 11, 45, 6);
const endDate = Date.UTC(2019, 0, 1, 5, 23, 12);
console.log(getDiff(startDate, endDate));
