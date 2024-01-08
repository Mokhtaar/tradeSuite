"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUsers } from "../../Actions/userActions";
import { useSession } from "next-auth/react";
import "../../styles/edit.css";
export default function EditProfile() {
  // const [users, setUsers] = useState();
  const { data, update } = useSession();

  const EditUsers = async () => {
    const result = await EditProfile(data?.user.companyID);
    setUsers(result?.users);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    EditUsers();
  };

  return (
    <div>
      <div className="container bootstrap snippets bootdey">
        <h1 className="text-primary">Edit Profile</h1>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload your photo</h6>

              <input type="file" className="form-control" />
            </div>
          </div>

          <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
              <a className="panel-close close" data-dismiss="alert">
                ×
              </a>
              <i className="fa fa-coffee"></i>
              This is an <strong>.alert</strong>. Use this to show important
              messages to the user.
            </div>
            <h3>Personal info</h3>

            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label className="col-lg-3 control-label">user name </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={data?.user.name}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={data?.user.email}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">
                  Change Password
                </label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" value="" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10 col-sm-offset-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-default">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
