-- CreateTable
CREATE TABLE "RegisteredRunner" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "trail" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegisteredRunner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RegisteredRunner_email_key" ON "RegisteredRunner"("email");
