const user = {
  firstName: "John",
  lastName: "Brown",
  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set FullName(values) {
    const [firstName, lastName] = values.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
user.FullName = "Tom Hardy";
console.log(user.FullName);
export default user;
