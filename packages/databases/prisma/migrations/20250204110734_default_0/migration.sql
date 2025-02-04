/*
  Warnings:

  - Made the column `locked` on table `Balance` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Balance" ALTER COLUMN "amount" SET DEFAULT 0,
ALTER COLUMN "locked" SET NOT NULL,
ALTER COLUMN "locked" SET DEFAULT 0;
