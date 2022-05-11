import { getMinSquaredNumber} from "./getMinSquaredNumber.js";

it("should find min squared number according to the module", () => {
    const result = getMinSquaredNumber([1, 2, 3]);
  
    expect(result).toEqual(1);
  });

  it("return null if arr is not a []", () => {
    const result = getMinSquaredNumber(98,35);
  
    expect(result).toEqual(null);
  });

  it("return null if arr is not a string", () => {
    const result = getMinSquaredNumber('string');
  
    expect(result).toEqual(null);
  });