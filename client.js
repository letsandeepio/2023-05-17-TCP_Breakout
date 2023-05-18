const net = require("net");

const config = {
  port: 3000,
  host: "127.0.0.1", // address localhost
};

// initiating connection from client to the server

const client = net.createConnection(config);

// set the encoding

client.setEncoding("utf-8");

// handle incoming data

client.on("data", (data) => {
  console.log(`Server Says: \n${data}`);
});

// listen for keyboard input and send that to server

process.stdin.on("data", (key) => {
  const message = String(key).trim();
  client.write(message);
});
