import { useState } from "react";
import axios from "axios";

const CreateEmployeePage = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    designation: "",
    course: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_EMPLOYEE_BASE_URL}/createEmployee`,
        employeeDetails
      );
      console.log("response-", response);
      if (response.data.message) {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Error creating employee");
      console.error("Error creating employee", error);
    }
  };

  //enterDetails
  function enterDetails(e) {
    const { name, value } = e.target;
    setEmployeeDetails((pre) => ({ ...pre, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employeeDetails.name}
        onChange={enterDetails}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={employeeDetails.email}
        onChange={enterDetails}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={employeeDetails.mobile}
        onChange={enterDetails}
      />
      <select name="designation" id="" onChange={enterDetails}>
        <option value="">--select Designation--</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>

      <input
        type="text"
        placeholder="gender"
        name="gender"
        value={employeeDetails.gender}
        onChange={enterDetails}
      />
      <input
        type="text"
        placeholder="course"
        name="course"
        value={employeeDetails.course}
        onChange={enterDetails}
      />

      <input
        type="text"
        placeholder="image link"
        name="image"
        value={employeeDetails.image}
        onChange={enterDetails}
      />
      <button type="submit">Create Employee</button>
    </form>
  );
};

export default CreateEmployeePage;
