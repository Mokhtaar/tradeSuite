/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use server";

import Link from "next/link";
import prisma from "../../../lib/prisma";
import MyComponent from '../components/Dashboard';

  
const Mypage = (props) => {
  return <MyComponent 
   />;
};

export default Mypage;