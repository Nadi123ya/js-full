import { calc } from "./calculator.js";

it("should find the sum", () => {
  const result = calc(+2 + +1);
  expect(result).toEqual(3);
});
it("should deduct a from b", () => {
  const result = calc(+2 - +1);

  expect(result).toEqual(1);
});
it("should multiply", () => {
  const result = calc(+2 * +1);

  expect(result).toEqual(2);
});
it("should divide ", () => {
  const result = calc(+4 / +2);

  expect(result).toEqual(2);
});
