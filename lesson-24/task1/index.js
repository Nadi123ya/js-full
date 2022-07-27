const daysOfweek = ["Su", "Mo", "Tu", "Wed", "Th", "Fr", "St"];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);
  const dateInFuture = new Date(date).setDate(day + days);
  return daysOfweek[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
