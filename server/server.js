//web server config
const express = require("express");
const app = express();
const PORT = 8080;

//db connection
const db = require('./configs/db.config');

app.use(express.json()); //=> req.body


//ROUTES
app.get('/', (req, res) => {
  res.send("This is the Yoog web server");
})


app.get('/report', (req, res) => {
  db.query(`
  select * from report;
  `)
  .then(data => {
    res.json(data.rows);
  })
})

app.listen(PORT, () => {
  console.log(`Yoog Server running on port ${PORT}`)
})