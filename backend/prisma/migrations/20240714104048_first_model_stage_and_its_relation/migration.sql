-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('Normal', 'Challange');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('Guaranteed', 'Common', 'Uncommon', 'Rare', 'Very_Rare', 'First_Clear');

-- CreateTable
CREATE TABLE "Stage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" SERIAL NOT NULL,
    "stageCode" TEXT NOT NULL,
    "mode" "Mode" NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rewardId" INTEGER NOT NULL,
    "rarity" "Rarity" NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "mode" "Mode" NOT NULL,
    "stageCode" TEXT NOT NULL,
    "content" TEXT[],

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stage_code_key" ON "Stage"("code");

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_stageCode_fkey" FOREIGN KEY ("stageCode") REFERENCES "Stage"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Condition" ADD CONSTRAINT "Condition_stageCode_fkey" FOREIGN KEY ("stageCode") REFERENCES "Stage"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
