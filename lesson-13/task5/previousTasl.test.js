import { reverseArray, withdraw, getAdults } from "./previousTask.js";
// first
it("should reverse the array ", () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it("should check if array is array", () => {
  const result = reverseArray(1);
  expect(result).toEqual(null);
});

it("should check if array is array", () => {
  const result = reverseArray("string");
  expect(result).toEqual(null);
});
// second
it("withdraw an amount of money from the choosen user`s bank account", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("return -1 if there is not enough money on user`s account", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 89);
  expect(result).toEqual(-1);
});
// third
it("add ppl 18+ to the new object", () => {
  const result = getAdults({ Ann: 17, John: 18, Kate: 87 });
  expect(result).toEqual({ John: 18, Kate: 87 });
});

it("exclude ppl under 18 from the new object", () => {
  const result = getAdults({ Ann: 17, John: 5, Kate: 6 });
  expect(result).toEqual({});
});
