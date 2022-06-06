export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return { name: "", age: null };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  // eslint-disable-next-line consistent-return
  setAge(age) {
    this.age = age;
    if (this.age < 0) {
      return false;
    }
    if (this.age > 0 && this.age < 25) {
      return age;
    }
    if (this.age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
  }
}

const user1 = new User("Tom", 17);
console.log(user1);
user1.sayHi();
console.log(User.createEmpty());
user1.requestNewPhoto();
