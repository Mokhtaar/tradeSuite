import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminUsersData from "../Components/Admin/AdminUsersData";

import React from "react";

async function Admin() {
  return (
    <>
      <AdminSideBar />
      <AdminUsersData />
    </>
  );
}

export default Admin;
