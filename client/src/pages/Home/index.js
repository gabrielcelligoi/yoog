import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <Link className="link-report" to="/report">Create a Report</Link>
      <Link className="link-new-entry" to="/register">Register a new entry</Link>
      <Link className="link-list" to="/registrations">Check your lists</Link>
    </div>
  )
}

export default Home;