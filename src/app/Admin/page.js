import React from "react";
import Example from '../components/AdminMenu';

import Table1 from '../components/UserTable';

import prisma from "../../../lib/prisma";
async function Admin() {

  return (
    
    <>

<Example/>
    <Table1/>
    </>
    
  );
}

export default Admin;
