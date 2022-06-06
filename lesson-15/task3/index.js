export const createLogger = () => {
  const records = [];

  function warn(message) {
    records.unshift({
      message,
      dateTime: new Date(),
      type: "warn",
    });
  }
  function error(message) {
    records.unshift({
      message,
      dateTime: new Date(),
      type: "error",
    });
  }
  function log(message) {
    records.unshift({
      message,
      dateTime: new Date(),
      type: "log",
    });
  }

  function getRecords(type) {
    if (type) {
      return records.filter((el) => el.type === type);
    }
    return records;
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords("log")); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords("error")); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords("warn")); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn("Opps, something is happenning");
console.log(logger2.getRecords("error")); // ===> []
console.log(logger2.getRecords("warn")); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords("error")); // ===> []
console.log(logger3.getRecords()); // ===> []
// push
// getRecords(type) {
//   return (type ? records.filter(el => el.type === type) : records).sort(
//     (a, b) => b.dateTime - a.dateTime,
//   );
// },

// getRecords(type) {
//   if (type) {
//     return records.filter(el => el.type === type).sort(
//         (a, b) => b.dateTime - a.dateTime,
//       );
//   }

//   return records.sort(
//         (a, b) => b.dateTime - a.dateTime,
//       );
// }
