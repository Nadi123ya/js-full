export const event = {
  guests: [
    { name: "John", age: 18, email: "john@gmail.com" },
    { name: "Tom", age: 16, email: "tom@gmail.com" },
    { name: "Alex", age: 32, email: "john@gmail.com" },
  ],
  message: "Welcome to the party!",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
