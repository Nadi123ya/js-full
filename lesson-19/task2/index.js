const vehicle = {
  name: "Argo",
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
export const getOwnProps = (obj) => {
  const arr = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
    return arr;
  }
};
console.log(getOwnProps(vehicle));
