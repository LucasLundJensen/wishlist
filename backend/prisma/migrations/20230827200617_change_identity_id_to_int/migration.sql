/*
  Warnings:

  - Changed the type of `identityId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "identityId",
ADD COLUMN     "identityId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_identityId_key" ON "User"("identityId");
