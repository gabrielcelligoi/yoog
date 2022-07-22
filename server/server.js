//web server config
const express = require("express");
const app = express();
const PORT = 8080;

//db connection
const db = require('./configs/db.config');
const reportRouter = require('./routes/report');
const basicRouter = require('./routes/basic')

app.use(express.json()); //=> req.body


//ROUTES
app.get('/', (req, res) => {
  res.send("This is the Yoog web server");
})

app.use('/api/report', reportRouter(db));
app.use('/api/basic', basicRouter(db));

app.listen(PORT, () => {
  console.log(`Yoog Server running on port ${PORT}`)
})