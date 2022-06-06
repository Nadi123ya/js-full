let memo = 0;
export function add(num) {
  memo += num;
  console.log(memo);
}

export function decrease(num) {
  memo -= num;
  console.log(memo);
}

export function reset() {
  memo = 0;
  console.log(memo);
}

export function getMemo() {
  return memo;
}
