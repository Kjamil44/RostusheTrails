/*
  Warnings:

  - Added the required column `fullName` to the `RegisteredRunner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RegisteredRunner" ADD COLUMN     "fullName" TEXT NOT NULL;
