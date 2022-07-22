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

  router.get('/:id', (req, res) => {
    const id = req.params.id
    db.query(`
      SELECT *
      FROM report
      WHERE id = ${id};
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  router.post('/', (req, res) => {
    console.log('req.body', req.body)
    const id = req.body.registration_id;
    const doctorName = req.body.doctor_name;
    const patientName = req.body.patient_name;
    const subject = req.body.subject;
    const status = req.body.status;
    const date = req.body.contact_date;
    const contactTool = req.body.contact_tool;

    db.query(`
      INSERT INTO report (
        id,
        doctor_name,
        patient_name,
        subject,
        status,
        contact_date,
        contact_tool)
      VALUES (
        ${id},
        '${doctorName}',
        '${patientName}',
        '${subject}',
        '${status}',
        '${date}',
        '${contactTool}');
    `)
    .then(data => {
      console.log('data.rows', data.rows)
    })
    .catch(error => console.log(error))
  })
  return router;
}

