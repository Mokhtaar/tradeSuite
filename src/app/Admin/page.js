import React from 'react'

import { getCurrentUser } from "../../../lib/session";
async function Admin  ()  {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      </main>
  )
}

export default Admin
