const express = require("express");
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.post("/createEmployee", createEmployee); // Create an employee
router.get("/getEmployees", getEmployees); // Get all employees
router.get("/getEmployeeById/:id", getEmployeeById); // Get employee by ID
router.put("/updateEmployee/:id", updateEmployee); // Update employee by ID
router.delete("/deleteEmployee/:id", deleteEmployee); // Delete employee by ID

module.exports = router;
