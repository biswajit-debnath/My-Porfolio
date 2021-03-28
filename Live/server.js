const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("C:/Users/ranjay kumar/Desktop/TLAb/My/index.html");
});

app.listen(3000, () => {
  console.log("Server is listening");
});
