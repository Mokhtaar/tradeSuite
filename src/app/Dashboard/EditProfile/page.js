import UserDashboard from "../Components/User/EditProfile";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import AccessMessage from "../Components/Login/AccessMessage";

const EditProfile = async () => {
  const user = await getCurrentUser();
  return (
    <>
      {!!user && user.role === "USER" ? <EditProfile /> : <AccessMessage />}
    </>
  );
};

export default EditProfile;