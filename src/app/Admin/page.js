import AdminSidebar from "../Components/Admin/AdminSidebar";
import { getCurrentUser } from "@/lib/session";
import AccessMessage from "../Components/Login/AccessMessage";
import React from "react";

const AdminHomePage = async () => {
  const user = await getCurrentUser();
  return (
    <>
      {!!user && user.role === "ADMIN" ? <AdminSidebar /> : <AccessMessage />}
    </>
  );
};

export default AdminHomePage;
