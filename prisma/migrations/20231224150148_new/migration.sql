/*
  Warnings:

  - You are about to drop the column `companyName` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyID_companyName_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "companyName";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
