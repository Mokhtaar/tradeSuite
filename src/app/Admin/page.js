import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminUsersData from "../Components/Admin/AdminUsersData";
import { getCurrentUser } from "@/lib/session";
import AccessMessage from "../Components/Login/AccessMessage";
import React from "react";

const AdminHomePage = async () => {
  const user = await getCurrentUser();
  return (
    <>
      {!!user && user.role === "ADMIN" ? <AdminSideBar /> : <AccessMessage />}
    </>
  );
};

export default AdminHomePage;
