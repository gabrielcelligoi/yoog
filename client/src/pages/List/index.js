import { useState, useEffect } from "react";
import axios from 'axios';

function List() {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('api/report')
    .then(res => {
      setList(res.data)
      console.log(res.data) 
    })
    
  }, [])

  return(
    <div>
      {list.map(item => {
        return (
          <p>{item.doctor_name}</p>
        )
      })}
    </div>
  )
}

export default List;