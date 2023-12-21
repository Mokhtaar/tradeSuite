import React from "react";


import prisma from "../../../lib/prisma";
async function Admin() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between"></main>
  );
}

export default Admin;
