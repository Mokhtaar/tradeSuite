import EditProfile from "../../Components/User/EditProfile";
import { getCurrentUser } from "@/lib/session";
import React from "react";
// import AccessMessage from "../Components/Login/AccessMessage";

const EditProfile2 = async () => {
  const user = await getCurrentUser();
  return (
    <>
      {/* {!!user && user.role === "USER" ? <EditProfile/> : <AccessMessage />} */}
      <EditProfile/>
    </>
  );
};

export default EditProfile2;