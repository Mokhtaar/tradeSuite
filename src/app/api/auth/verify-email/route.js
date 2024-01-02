import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function GET(req) {
  const token = req.nextUrl.searchParams.get("token");
  try {
    const { id, email } = jwt.verify(token, process.env.JWT_SECRET);
    await prisma.company.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  redirect("/Login");
}




// const handler = async function (req) {
// export { handler as GET, handler as PUT };
