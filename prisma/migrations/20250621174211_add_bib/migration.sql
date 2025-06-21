/*
  Warnings:

  - Added the required column `bibNumber` to the `RegisteredRunner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RegisteredRunner" ADD COLUMN     "bibNumber" INTEGER NOT NULL;
