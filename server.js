const net = require("net");
const PORT = 3000;
const rocketsData = require("./mockData.json");

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Yay! Server successfully launched at ${PORT}`);
});

// define event handler for connection

server.on("connection", (connection) => {
  connection.setEncoding("utf8");

  console.log("New Client Connected!");

  connection.write("Please chose a rocket from below list:\n");

  let rocketList = "";

  rocketsData.forEach((rocket, index) => {
    rocketList += `${index + 1}. ${rocket.name}\n`;
  });

  connection.write(rocketList);

  // handle incoing data from client

  connection.on("data", (data) => {
    const rocketIndex = Number(data) - 1;

    const selectedRocket = rocketsData[rocketIndex];

    if (rocketIndex >= 0 && rocketIndex < rocketsData.length) {
      connection.write(selectedRocket.description);
    } else {
      connection.write("Invalud rocket number. Please try again");
    }
  });
});
