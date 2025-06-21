/*
  Warnings:

  - Added the required column `club` to the `RegisteredRunner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RegisteredRunner" ADD COLUMN     "club" TEXT NOT NULL;
