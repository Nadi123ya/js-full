export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName: function setFullName(fullName) {
    const values = fullName.split(" ");
    user.firstName = values[0];
    user.lastName = values[1];
    return user;
  },
};
const func = user.getFullName;
console.log(func.call(user));

console.log(user.setFullName("Ann Brown"));


