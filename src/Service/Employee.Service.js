import Axios from "axios";

const allemployee = () => {
  return Axios.get("http://dummy.restapiexample.com/api/v1/employees");
};

const addemployee = (data) => {
  return Axios.post("http://dummy.restapiexample.com/api/v1/create", data);
};

const deleteemployee = (id) => {
  let url = `http://dummy.restapiexample.com/api/v1/delete/${id}`;
  return Axios.delete(url);
};

const updateemployee = (data, id) => {
  let url = `http://dummy.restapiexample.com/api/v1/update/${id} `;
  return Axios.put(url, data);
};

export { allemployee, addemployee, deleteemployee, updateemployee };
