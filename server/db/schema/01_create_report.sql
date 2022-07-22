DROP TABLE IF EXISTS report CASCADE;

CREATE TABLE report (
  id SERIAL PRIMARY KEY,
  doctor_name VARCHAR(255),
  patient_name VARCHAR(255),
  subject VARCHAR(255),
  status VARCHAR(255),
  contact_date DATE,
  contact_tool VARCHAR(255)
);

CREATE TABLE basicTable (
  id SERIAL PRIMARY KEY,
  nameExample VARCHAR(255)
)