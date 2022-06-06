export const user = {
  firstName: "John",
  lastName: "Doe",
};

user.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(user.getFullName());
