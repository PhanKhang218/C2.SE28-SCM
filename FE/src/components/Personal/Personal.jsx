import React, { useEffect, useState } from "react";
import isValidBirthdate from "is-valid-birthdate";
import NavBar from "../NavBar/NavBar";
import { useAlert } from "react-alert";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./Personal.css";
export default function Personnal() {
  const alert = useAlert();
  const [account, setAccount] = useState({});
  const [dataUpdate, setDataUpdate] = useState({
    Names: "",
    BirthDay: "",
    Phone: "",
    oldPassword: "",
    newPassword: "",
    verifyPassword: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDataUpdate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    // ... Code for handling form submission ...

    const newAccount = {
      ...account,
      ...dataUpdate,
    };

    localStorage.setItem("userData", JSON.stringify(newAccount));
    setAccount(newAccount);
  };

  const handleUpdate = () => {
    setDataUpdate({
      Names: account?.Names,
      BirthDay: account?.BirthDay,
      Phone: account?.Phone,
    });
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setAccount(userData);
    }
  }, []);

  return (
    <div className="personal-container">
      <NavBar />
      <Sidebar />
      <div className="Personnal">
        <div className="func-title-user">
          <span>THÔNG TIN CÁ NHÂN</span>
        </div>
        <div className="info-basic">
          <div className="info">
            <div className="personal-root">
              <div className="txtcel1">Tên đăng nhập:</div>
              <div className="txtcel2">{account?.username}</div>
            </div>
            <div className="personal-root">
              <div className="txtcel1">Email:</div>
              <div className="txtcel2">{account?.email}</div>
            </div>
            <div className="personal-root">
              <div className="txtcel1">Vai trò:</div>
              <div className="txtcel2">
                {account?.roles && account.roles.length > 0
                  ? account.roles[0].name
                  : ""}
              </div>
            </div>

            <div className="personal-root">
              <div className="txtcel1">Số điện thoại:</div>
              <div className="txtcel2">{account.phone}</div>
            </div>

            {/*  */}
            <div className="info-basic">
              <div className="info">
                <button
                  type="button"
                  className="btn-add-cost"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  value={account.UserName}
                  style={{
                    marginTop: "20px",
                    marginLeft: "200px",
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleUpdate(account)}
                >
                  UPDATE
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <form action="" method="PUT" role="form">
                          <div className="form-group">
                            <label htmlFor="">Tên</label>
                            <input
                              type="text"
                              className="form-control"
                              name="Names"
                              placeholder="Nhập tên của bạn"
                              value={dataUpdate?.Names}
                              onChange={handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Ngày sinh</label>
                            <input
                              type="date"
                              className="form-control"
                              name="BirthDay"
                              value={dataUpdate?.BirthDay}
                              onChange={handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Số điện thoại</label>
                            <input
                              type="number"
                              className="form-control"
                              name="Phone"
                              placeholder="Nhập số điện thoại của bạn"
                              value={dataUpdate?.Phone}
                              onChange={handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Mật khẩu cũ</label>
                            <input
                              type="password"
                              className="form-control"
                              name="oldPassword"
                              placeholder="Nhập mật khẩu cũ"
                              onChange={handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Mật khẩu mới</label>
                            <input
                              type="password"
                              className="form-control"
                              name="newPassword"
                              placeholder="Nhập mật khẩu mới"
                              onChange={handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Nhập lại mật khẩu mới</label>
                            <input
                              type="password"
                              className="form-control"
                              name="verifyPassword"
                              placeholder="Nhập lại mật khẩu mới"
                              onChange={handleOnChange}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          style={{ fontSize: 14 }}
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Đóng
                        </button>
                        <button
                          style={{ fontSize: 14 }}
                          type="button"
                          className="btn btn-primary"
                          value={account.UserName}
                          onClick={handleSubmit}
                        >
                          Cập nhập
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
