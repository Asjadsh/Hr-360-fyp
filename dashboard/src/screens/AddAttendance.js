import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AddAttendance = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />

        <section className="content-main">
          <div className="content-header">
            <Link to="/attendance" className="btn btn-danger text-white">
              Go to Attendance
            </Link>
            <h2 className="content-title">Add Attendance</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>
        </section>
        <div className="att-header">
          <table className="table2">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Attendance (Month)</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows dynamically with employee data */}
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>
                  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>  <span className="absent">
                    <input type="radio" name="attendance" value="absent" />{" "}
                    Absent
                  </span>
                  <span>
                  <input type="radio" name="attendance" value="present" />{" "}
                  Present
                  </span></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default AddAttendance;
