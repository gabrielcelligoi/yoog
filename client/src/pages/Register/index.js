import './register.css';

function Register() {
  return(
    <div>
      <p>Registre uma entrada</p>
      <form>
        <label htmlFor='doctor_name'>Doctor's Name </label>
        <input type="text" id="doctor_name"></input>

        <label htmlFor='patient_name'>Patient's Name </label>
        <input type="text" id="patient_name"></input>

        <label htmlFor='subject'>Subject </label>
        <input type="text" id="subject"></input>

        <label htmlFor='status'>Status </label>
        <input type="text" id="status"></input>

        

      </form>
    </div>
  )
}

export default Register;