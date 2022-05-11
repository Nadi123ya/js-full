it('17 is equal to 17',() => {
expect(17).toEqual(17);
});

it('18 is not equal to 17',() => {
    expect(18).not.toEqual(17);
    });


const getEvenNumbers = arr => {
 return arr.filter(el => el % 2 === 0);
}

it("should get even numbers only", () => {
    const result = getEvenNumbers([1, 2, 3, 4]);
  
    expect(result).toEqual([2, 4]);
  });