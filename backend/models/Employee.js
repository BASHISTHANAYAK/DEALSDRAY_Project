const mongoose = require("mongoose");

// Define a function to get the formatted date
const getFormattedDate = () => {
  const today = new Date();
  const date = today.getDate(); // Day of the month
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[today.getMonth()]; // Month as abbreviated name
  const year = today.getFullYear().toString().slice(-2); // Last two digits of the year
  return `${date}-${month}-${year}`;
};

// Define the schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  gender: { type: String, required: true },
  designation: { type: String, required: true },
  course: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, default: getFormattedDate }, // Automatically set the formatted date
});

module.exports = mongoose.model("Employee", employeeSchema);
