export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};
console.log(reverseArray([1, 2, 3]));

export const withdraw = (clients, balances, client, amount) => {

  const index = clients.indexOf(client);
  if (balances[index] < amount) {
    return -1;
  }
  // eslint-disable-next-line no-param-reassign
  balances[index] -= amount;
  return balances[index];
};
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 4));

export const getAdults = (obj) => {
  const newObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj[key] >= 18) newObj[key] = obj[key];
  }
  return newObj;
};
