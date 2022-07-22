import { useState, useEffect } from 'react';
import axios from 'axios';

import './register.css';

function Register() {
  const [registrations, setRegistrations] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [contactTool, setContactTool] = useState("");
  const registrationId = registrations.length + 1;

  const date = new Date();

  useEffect(() => {
    axios.get('api/report')
    .then(res => {
      setRegistrations(res.data)  
      console.log(registrations.length)    
    })
    
  }, [])


  const createRegistrations = (doctorName, patientName, subject, status, date, contactTool) => {
    const data = {
      registration_id: registrationId,
      doctor_name: doctorName,
      patient_name: patientName,
      subject: subject,
      status: status,
      contact_date: date,
      contact_tool: contactTool
    }
    return axios.post(`/api/report`, data);

  }

  const createMoreName = () => {
    axios.post('/api/basic')
  }

  return(
    <div>
      <p>Registre uma entrada</p>
      <form>
        <label htmlFor='doctor_name'>Doctor's Name </label>
        <input type="text" id="doctor_name" value={doctorName} onChange={(e) => setDoctorName(e.target.value)}></input>

        <label htmlFor='patient_name'>Patient's Name </label>
        <input type="text" id="patient_name" value={patientName} onChange={(e) => setPatientName(e.target.value)}></input>

        <label htmlFor='subject'>Subject </label>
        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}></input>

        <label htmlFor='status'>Status </label>
        <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)}></input>

        <label htmlFor='contact_tool'>Contact Tool </label>
        <input type="text" id="contact_tool" value={contactTool} onChange={(e) => setContactTool(e.target.value)}></input>

        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            createRegistrations(doctorName, patientName, subject, status, date, contactTool);
          }}
          
        >
          Submit
        </button>

      </form>

      <button onClick={e => {
        e.preventDefault();
        createMoreName();
      }}>+name</button>

    </div>
  )
}

export default Register;