/*
  Warnings:

  - You are about to drop the `churchs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "churchs";

-- CreateTable
CREATE TABLE "churches" (
    "id" UUID NOT NULL,
    "locale" VARCHAR(64) NOT NULL,
    "cd_address" VARCHAR(16) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "churches_pkey" PRIMARY KEY ("id")
);
