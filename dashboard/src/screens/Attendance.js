import React,{useEffect} from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";

const Attendance = () => {
  useEffect(() => {
    axios.get("/api/users/getusers")
    .then((res)=>{
      console.log("res",res)
    })
    .catch((err)=>{
      console.log("error",err)
    })
  }, [])
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />

        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Attendance</h2>
            <Link to="/addattendance" className="btn btn-primary">
              Create new
            </Link>
          </div>
          </section>
          <div className="att-header">
          <table className="table2">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Attendan=ce (Month)</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows dynamically with employee data */}
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>70%</td>
                </tr>
                <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>70%</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          </div>
          </main>
    </>
  );
};

export default Attendance;

