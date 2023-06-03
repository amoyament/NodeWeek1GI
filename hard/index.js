// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

// Import Modules/json file
const express = require("express");
const app = express();
const employees = require("./employees.json");
//HTTP methods...
// app.get()
// app.post()
// app.put()
// app.delete()

// Set up get request for main page
app.get("/", (req, res) => {
  res.send("Welcome to our employee database!");
});

// Set up get request for all employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Set up get request for employee by id #
app.get("/employees/:id", (req, res) => {
  // Get id w/ params
  const id = req.params.id;
  // To pull all employee info, use .find and store in variable
  const employee = employees.find((e) => e.id === parseInt(id));

  // If/else statement for errors
  if (!employee) {
    res.status(404).send("I'm sorry, no employee was found with this ID");
  } else {
    res.send(employee);
  }
});

// Create server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
