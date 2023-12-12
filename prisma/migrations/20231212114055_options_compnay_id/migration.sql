-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyID_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "companyID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
