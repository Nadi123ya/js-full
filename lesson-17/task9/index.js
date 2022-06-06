const user = {
  name: "Tom",
  age: 14,
  sayHi() {
    console.log(`Hi, ${this.name}!`);
  },
};

function bind(func, context, arg1, arg2) {
  return function likeBind(...arg) {
    return func.call(context, arg1, arg2, ...arg);
  };
}

console.log(bind(user.sayHi(), { name: "Bob" }));
