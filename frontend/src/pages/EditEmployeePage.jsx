import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EditEmployeePage = ({ employeeId, setEmployees }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const { id } = useParams(); // Extract the `id` from the URL

  console.log(id);

  // useEffect(() => {
  //   const fetchEmployee = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/employees/${employeeId}`
  //       );
  //       setName(response.data.name);
  //       setPosition(response.data.position);
  //     } catch (error) {
  //       console.error("Error fetching employee data", error);
  //     }
  //   };
  //   fetchEmployee();
  // }, [employeeId]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(
  //       `${import.meta.env.VITE_API_URL}/employees/${employeeId}`,
  //       {
  //         name,
  //         position,
  //       }
  //     );
  //     setEmployees((prev) =>
  //       prev.map((emp) => (emp._id === employeeId ? response.data : emp))
  //     );
  //   } catch (error) {
  //     console.error("Error updating employee", error);
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Position"
    //     value={position}
    //     onChange={(e) => setPosition(e.target.value)}
    //   />
    //   <button type="submit">Update Employee</button>
    // </form>
    <>edit {id}</>
  );
};

export default EditEmployeePage;
