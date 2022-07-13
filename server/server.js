//web server config
const express = require("express");
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send("This is the Yoog web server");
})

app.listen(PORT, () => {
  console.log(`Yoog Server running on port ${PORT}`)
})