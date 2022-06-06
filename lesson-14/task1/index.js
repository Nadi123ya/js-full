let message = "Just learn it";

export function sendMessage(name) {
  const sender = "Gromcode";

  console.log(`${name}, ${message}! Your ${sender}`);
}

export function setMessage(text) {
  message = text;
}

sendMessage("Tom");
setMessage("Hello");
sendMessage("Ann");
message = "Hi";
sendMessage("Tummy");

// another.js

// import{sendMessage} from 'index.js'
// let message = "Bye!"
// sendMessage('Bob') - will take message from index.js - Bob, Just lern it! Your Gromcode
