const net = require("net");
const PORT = 3000;

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Yay! Server successfully launched at ${PORT}`);
});

// define event handler for connection

server.on("connection", (connection) => {
  connection.setEncoding("utf-8");

  console.log("New Client Connected!");

  connection.write("Welcome to the server!");

  // handle incoing data from client

  connection.on("data", (data) => {
    const upperCaseMessage = data.toLocaleUpperCase();
    connection.write(upperCaseMessage);
  });
});
