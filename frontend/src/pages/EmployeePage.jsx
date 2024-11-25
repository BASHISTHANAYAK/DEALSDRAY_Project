import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style/employeeList.css";
const EmployeePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [allEmployees, setAllEmployees] = useState([]);

  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_EMPLOYEE_BASE_URL}/getEmployees`
        );
        setAllEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };
    fetchEmployees();
  }, []); // Dependency array ensures the effect runs when these values change

  //getEmployeeById editEmployee
  function editEmployee(id) {
    console.log(id);
    navigate(`/editEmployee/${id}`);
  }

  return (
    <>
      <hr />
      {isAuthenticated ? (
        <div>
          {allEmployees.map((obj) => (
            <div key={obj._id} className="aEmployeeDiv">
              <p> Unique id: {obj._id}</p>
              <p> name: {obj.name}</p>
              <p> email: {obj.email}</p>
              <p> mobile: {obj.mobile}</p>
              <p> gender: {obj.gender}</p>
              <p> designation: {obj.designation}</p>
              <p> course: {obj.course}</p>
              <p> date: {obj.date}</p>
              <p> image: {obj.image}</p>
              <button onClick={() => editEmployee(obj._id)}>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </>
  );
};

export default EmployeePage;
