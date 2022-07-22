const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`
      SELECT *
      FROM basictable
      ORDER BY id DESC;
    `)
    .then(data => {
      res.json(data.rows);
    })
  })

  router.post('/', (req, res) => {
    db.query(`
      INSERT INTO basictable (nameExample) values ('NEW NAME');
    `)
  })

  return router;
}
