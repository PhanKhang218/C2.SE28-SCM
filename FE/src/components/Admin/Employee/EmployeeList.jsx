import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./EmployeeList.css";
import AdminPage from "../AdminPage/AdminPage";
import { useAlert } from "react-alert";

function EmployeeList() {
  const alert = useAlert();

  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    dayOfBirth: "",
    accountId: "",
    image: "",
    experience: "",
    degree: "",
    email: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false); // modal for create employee
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false); // modal for update employee
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [selectedEmployeeData, setSelectedEmployeeData] = useState({});
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setCreateModalIsOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getEmployeeList(token);
        setEmployees(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const getEmployeeList = async (token) => {
    const response = await fetch("http://localhost:9000/employee", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch employee list");
    }
  };

  const getEmployeeById = async (employeeId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:9000/employee/${employeeId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const employee = response.data;
        console.log("Employee:", employee);
      } else {
        console.log("Failed to get employee by ID");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Update
  const updateEmployee = async (employeeId) => {
    const selectedEmployee = employees.find(
      (employee) => employee.employeeId === employeeId
    );
    if (selectedEmployee) {
      setSelectedEmployeeId(employeeId);
      setSelectedEmployeeData(selectedEmployee);
      setCreateModalIsOpen(true);
    }
  };

  const handleUpdateEmployee = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:9000/employee/put/${selectedEmployeeId}`,
        selectedEmployeeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedEmployees = employees.map((employee) => {
          if (employee.employeeId === selectedEmployeeId) {
            return {
              ...employee,
              ...selectedEmployeeData,
            };
          }
          return employee;
        });

        setEmployees(updatedEmployees);
        alert.success("Update employee successfully!");
        console.log("Update employee successfully!");
        setCreateModalIsOpen(false);
      } else {
        console.log("Failed to update employee");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      alert.error("Error updating employee.");
    }
  };
  //   POST /employees
  const createEmployee = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:9000/employee/insert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
    if (response.ok) {
      const data = await response.json();
      setEmployees([...employees, data]);
      alert.success("Insert Employee successfully!");
      window.location.reload();
      console.log("Insert Employee successfully!");
    } else {
      console.log("Failed to create Employee");
    }
  };

  // Delete
  const deleteEmployee = async (employeeId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:9000/employee/delete/${employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const updatedEmployees = employees.filter(
          (employee) => employee.employeeId !== employeeId
        );
        setEmployees(updatedEmployees);
        alert.success("Deleted employee successfully!");
        console.log("Deleted employee successfully!");
      } else {
        console.log("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert.error("Error deleting employee.");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedEmployeeData({ ...selectedEmployeeData, [name]: value }); // Thay đổi thành setSelectedMemberData
  };

  // Render
  return (
    <>
      <AdminPage />
      <div className="table-container">
        <table className="table table-bordered table-member">
          <thead>
            <tr>
              {employees.length > 0 &&
                Object.keys(employees[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                {Object.entries(employee).map(([key, value], index) => (
                  <td key={index}>
                    {key === "image" ? (
                      <img
                        src={value}
                        className="image-member"
                        // alt="Hình ảnh"
                      />
                    ) : (
                      value
                    )}
                  </td>
                ))}
                <td>
                  <button onClick={() => updateEmployee(employee.employeeId)}>
                    Update
                  </button>
                  <button onClick={() => deleteEmployee(employee.employeeId)}>
                    Delete
                  </button>
                  <button onClick={() => getEmployeeById(employee.employeeId)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
          <button className="button-add-employee" onClick={openModal}>
            Add Employee
          </button>
        </div>
        {/* Modal for create employee */}
        <Modal
          className="custom-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create Employee"
        >
          <h2>Create Employee</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={newEmployee.gender}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={newEmployee.age}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={newEmployee.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="dayOfBirth"
              placeholder="Day of Birth"
              value={newEmployee.dayOfBirth}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="accountId"
              placeholder="Account ID"
              value={newEmployee.accountId}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newEmployee.image}
              onChange={handleInputChange}
            />
            <button onClick={createEmployee}>Create</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </Modal>
      </div>
      {/* Modal for update employee */}
      <Modal
        className="custom-modal"
        isOpen={createModalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update Employee"
      >
        <h2>Update Employee</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={selectedEmployeeData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={selectedEmployeeData.gender}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={selectedEmployeeData.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={selectedEmployeeData.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="dayOfBirth"
            placeholder="Day of Birth"
            value={selectedEmployeeData.dayOfBirth}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="accountId"
            placeholder="Account ID"
            value={selectedEmployeeData.accountId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={selectedEmployeeData.image}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdateEmployee}>Update</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </Modal>
    </>
  );
}

export default EmployeeList;
