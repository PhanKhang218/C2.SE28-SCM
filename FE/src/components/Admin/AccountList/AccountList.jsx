import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useAlert } from "react-alert";
import "./Account.css";
import AdminPage from "../AdminPage/AdminPage";

function AccountList() {
  const alert = useAlert();

  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    username: "",
    email: "",
    phone: "",
    roles: [],
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [selectedAccountData, setSelectedAccountData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getAccountList(token);
        setAccounts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const getAccountList = async (token) => {
    const response = await fetch("http://localhost:9000/view/account", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch account list");
    }
  };

  const createAccount = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:9000/account/insert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount),
    });
    if (response.ok) {
      const data = await response.json();
      setAccounts([...accounts, data]);
      alert.success("Create account successfully!");
      closeModal();
    } else {
      console.log("Failed to create account");
    }
  };

  const updateAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:9000/account/put/${selectedAccountId}`,
        selectedAccountData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedAccounts = accounts.map((account) => {
          if (account.id === selectedAccountId) {
            return {
              ...account,
              ...selectedAccountData,
            };
          }
          return account;
        });

        setAccounts(updatedAccounts);
        alert.success("Update account successfully!");
        closeModal();
      } else {
        console.log("Failed to update account");
      }
    } catch (error) {
      console.error("Error updating account:", error);
      alert.error("Error updating account.");
    }
  };

  const deleteAccount = async (accountId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:9000/account/delete/${accountId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const updatedAccounts = accounts.filter(
          (account) => account.id !== accountId
        );
        setAccounts(updatedAccounts);
        alert.success("Delete account successfully!");
      } else {
        console.log("Failed to delete account");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert.error("Error deleting account.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedAccountData({ ...selectedAccountData, [name]: value });
  };

  const handleNewAccountInputChange = (event) => {
    const { name, value } = event.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedAccountId("");
    setSelectedAccountData({});
  };
  const mapRoleName = (roleName) => {
    if (roleName === "ROLE_ADMIN") {
      return "Admin";
    } else if (roleName === "ROLE_USER") {
      return "Người dùng";
    } else if (roleName === "ROLE_EMPLOYEE") {
      return "Nhân viên";
    } else {
      return roleName;
    }
  };
  return (
    <>
      <AdminPage />
      <div className="member-container">
        <div className="table-container">
          <div className="admin-management">QUẢN LÍ TÀI KHOẢN</div>
          <div className="admin-list">
            <strong>Tổng số lượng user:</strong> {accounts.length}
          </div>
          <table className="table table-bordered table-member">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Vai trò</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td>{account.username}</td>
                  <td>{account.email}</td>
                  <td>{account.phone}</td>
                  <td>
                    {account.roles.map((role) => (
                      <span key={role.id}>{mapRoleName(role.name)}</span>
                    ))}
                  </td>
                  <td>
                    <button onClick={() => updateAccount(account.id)}>
                      Update
                    </button>
                    <button
                      className="btn-delete-admin"
                      onClick={() => deleteAccount(account.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={openModal}>Add Account</button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Create/Update Account</h2>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={selectedAccountData.username || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={selectedAccountData.email || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={selectedAccountData.phone || ""}
                onChange={handleInputChange}
              />
              <button onClick={createAccount}>Create</button>
              <button onClick={updateAccount}>Update</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default AccountList;
