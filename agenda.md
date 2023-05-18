Breakout on TCP

May 17, 2023

Questions?

# Theory

- Quick overview of server/client architecture
- Quick overview of TCP
  - It helps devices on the network i.e. internet talk to each other in a reliable way
  - It also breaks down the information into smaller parts for sending and puts them back together at the recieving end.
  - It keeps track of the order in which data is sent and makes sure it arrive correctly
  - TCP controls the speed of data transmission
  - TCP also checks for error to make sure data is not corrupted
  - Ensures to resend the data if any data loss occur during transmission

# Practical

- Practical Demo #1 - Simple 'echo' server
- Practical Demo #2 - An Information Retrieval System

1. We have data about SpaceX Rockets
2. Whenever a client connects to the server, server is going to send them numbered list of rockets
3. Client will chose a number from the list
4. Server will respond back with the description to the rocket
