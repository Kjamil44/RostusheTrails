/*
  Warnings:

  - You are about to drop the column `age` on the `RegisteredRunner` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `RegisteredRunner` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "RegisteredRunner_email_key";

-- AlterTable
ALTER TABLE "RegisteredRunner" DROP COLUMN "age",
DROP COLUMN "email";
