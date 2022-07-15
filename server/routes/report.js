const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`
      select * from report;
    `)
    .then(data => {
      res.json(data.rows);
    })
  })
  return router;
}