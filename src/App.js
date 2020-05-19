import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddEmployee from "./Components/Employee/AddEmployee";
import Header from "./Components/Header/Header";
import UpdateEmployee from "./Components/Employee/UpdateEmployee";
import {
  allemployee,
  addemployee,
  deleteemployee,
  updateemployee,
} from "./Service/Employee.Service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeArray: [],
      UpdateEmployeObject: {},
      EmployeID: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
    allemployee()
      .then((response) => {
        this.setState({
          EmployeArray: response.data.data,
          loading: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  addemployedata = (obj) => {
    addemployee(obj)
      .then((response) => {
        console.log(response);
        let myarray = this.state.EmployeArray;
        myarray.push(obj);
        this.setState({
          EmployeArray: myarray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteemployedata = (empindex) => {
    deleteemployee(empindex + 1)
      .then((response) => {
        console.log(response);
        let deletearray = this.state.EmployeArray;
        deletearray.splice(empindex, 1);
        this.setState({
          EmployeArray: deletearray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateemployedata = (userobj, index) => {
    this.setState({
      UpdateEmployeObject: userobj,
      EmployeID: index,
    });
  };

  saveupdateemployeinformation = (obj) => {
    updateemployee(obj, this.state.EmployeID + 1)
      .then((response) => {
        console.log(response);
        let myupdateArray = this.state.EmployeArray;
        myupdateArray[this.state.EmployeID] = obj;
        this.setState({
          EmployeArray: myupdateArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Header></Header>
          </Route>
        </Switch>

        <Route path="/addemployeeinfo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center py-3">Add Employees Information </h2>
              </div>
            </div>
          </div>
          <AddEmployee addemp={this.addemployedata}></AddEmployee>
          <div className="container py-3">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center"> Display Employee Data</h2>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>SR</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Salary</th>
                      <th>Option</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.EmployeArray.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{user.id}</td>
                          <td>{user.employee_name}</td>
                          <td>{user.employee_age}</td>
                          <td>{user.employee_salary}</td>
                          <td>
                            <Button
                              className="mx-2"
                              variant="danger"
                              onClick={() => {
                                this.deleteemployedata(index);
                              }}
                            >
                              Delete
                            </Button>

                            <Button
                              className="mx-2"
                              variant="success"
                              onClick={() => {
                                this.updateemployedata(user, index);
                              }}
                            >
                              <Link to={`upateemployeinfo/${index}`}>
                                Update
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Route>

        <Route path="/upateemployeinfo">
          <UpdateEmployee
            updateemp={this.state.UpdateEmployeObject}
            saveupdateemp={this.saveupdateemployeinformation}
          ></UpdateEmployee>
        </Route>
      </React.Fragment>
    );
  }
}

export default App;
