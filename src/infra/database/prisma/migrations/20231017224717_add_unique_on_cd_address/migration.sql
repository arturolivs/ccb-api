/*
  Warnings:

  - A unique constraint covering the columns `[cd_address]` on the table `churches` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "churches_cd_address_key" ON "churches"("cd_address");
