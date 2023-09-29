-- CreateTable
CREATE TABLE "churchs" (
    "id" UUID NOT NULL,
    "locale" VARCHAR(64) NOT NULL,
    "cd_address" VARCHAR(16) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "churchs_pkey" PRIMARY KEY ("id")
);
