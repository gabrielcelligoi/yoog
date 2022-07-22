import { useState, useEffect } from "react";
import axios from 'axios';

function Registrations() {

  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios.get('api/report')
    .then(res => {
      setRegistrations(res.data)
      console.log(res.data) 
    })
    
  }, [])

  return(
    <div>
      {registrations.map(item => {
        return (
          <p>{item.doctor_name}</p>
        )
      })}
    </div>
  )
}

export default Registrations;