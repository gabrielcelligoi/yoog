const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`
      SELECT *
      FROM report
      ORDER BY id DESC;
    `)
    .then(data => {
      res.json(data.rows);
    })
  })
  return router;
}