/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(({ name }) => name);
  }

  getUserIds() {
    return this._users.map(({ id }) => id);
  }

  getUserNameById(id) {
    const user = this._users.find((user) => user.id === id);
    return user ? user.id : null;
  }
}

// examples
const user = new User("1", "Tom", "session-id");

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
const users = [
  new User("1", "Mike", "2"),
  new User("2", "Jack", "3"),
  new User("3", "Mark", "4"),
  new User("4", "Elon", "15"),
];

const userRepository = new UserRepository(users);

console.log(userRepository.getUserNames());
console.log(userRepository.getUserIds());
console.log(userRepository.getUserNameById("3"));
