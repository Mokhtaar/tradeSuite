/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id,name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_companyID_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyID_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "status" TEXT;

-- DropTable
DROP TABLE "Project";

-- CreateIndex
CREATE UNIQUE INDEX "Company_id_name_key" ON "Company"("id", "name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyID_companyName_fkey" FOREIGN KEY ("companyID", "companyName") REFERENCES "Company"("id", "name") ON DELETE SET NULL ON UPDATE CASCADE;
