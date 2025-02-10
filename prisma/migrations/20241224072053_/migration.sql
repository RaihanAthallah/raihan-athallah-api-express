/*
  Warnings:

  - You are about to drop the column `projectId` on the `TechStack` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_projectId_fkey";

-- AlterTable
ALTER TABLE "TechStack" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_ProjectTechStack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectTechStack_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectTechStack_B_index" ON "_ProjectTechStack"("B");

-- AddForeignKey
ALTER TABLE "_ProjectTechStack" ADD CONSTRAINT "_ProjectTechStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTechStack" ADD CONSTRAINT "_ProjectTechStack_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
