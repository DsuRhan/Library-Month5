/*
  Warnings:

  - Added the required column `dueDate` to the `Borrow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Borrow" ADD COLUMN     "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fine" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "returnedAt" TIMESTAMP(3);
