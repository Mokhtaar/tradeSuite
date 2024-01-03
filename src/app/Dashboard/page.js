import UserDashboard from "../Components/User/UserDashboard";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import AccessMessage from "../Components/Login/AccessMessage";

const UserHomePage = async () => {
  const user = await getCurrentUser();
  return (
    <>
      {!!user && user.role === "USER" ? <UserDashboard /> : <AccessMessage />}
    </>
  );
};

export default UserHomePage;
