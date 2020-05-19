import React from "react";
import { Form, Button } from "react-bootstrap";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empID: "",
      empName: "",
      empAge: "",
      empSalary: "",
    };
  }

  OnInputTextChanging = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  ShowEmployeeInformation = (event) => {
    event.preventDefault();
    let id = this.state.empID;
    let employee_name = this.state.empName;
    let employee_age = this.state.empAge;
    let employee_salary = this.state.empSalary;

    let EmployeObject = {
      id: id,
      employee_name: employee_name,
      employee_age: employee_age,
      employee_salary: employee_salary,
    };

    this.props.addemp(EmployeObject);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-7 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
              <Form onSubmit={this.ShowEmployeeInformation}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Employee ID"
                      name="empID"
                      onChange={this.OnInputTextChanging}
                      value={this.state.empID}
                    />
                  </Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Employee Name"
                    name="empName"
                    onChange={this.OnInputTextChanging}
                    value={this.state.empName}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="empAge"
                    placeholder="Enter Employee Age"
                    onChange={this.OnInputTextChanging}
                    value={this.state.empAge}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Employee Salary"
                    name="empSalary"
                    onChange={this.OnInputTextChanging}
                    value={this.state.empSalary}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button type="submit" value="Add" className="btn-success">
                    {" "}
                    Add Info
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddEmployee;
