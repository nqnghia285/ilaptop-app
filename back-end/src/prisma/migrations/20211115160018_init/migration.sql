/*
  Warnings:

  - You are about to drop the column `authorId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `commentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `isStaff` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `laptopId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Discount` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Discount` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `dimensionsAndWeight` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `discountId` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `graphicCard` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `priceMapId` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `specialFeatures` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Laptop` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Passage` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PriceMap` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PriceMap` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `laptop_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Discount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensions_and_weight` to the `Laptop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Laptop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Passage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `PriceMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_laptopId_fkey";

-- DropForeignKey
ALTER TABLE "Laptop" DROP CONSTRAINT "Laptop_discountId_fkey";

-- DropForeignKey
ALTER TABLE "Laptop" DROP CONSTRAINT "Laptop_priceMapId_fkey";

-- DropForeignKey
ALTER TABLE "Passage" DROP CONSTRAINT "Passage_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_customerId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "authorId",
DROP COLUMN "commentId",
DROP COLUMN "createdAt",
DROP COLUMN "isStaff",
DROP COLUMN "laptopId",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" UUID NOT NULL,
ADD COLUMN     "comment_id" SMALLINT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_staff" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "laptop_id" SMALLINT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Discount" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Laptop" DROP COLUMN "createdAt",
DROP COLUMN "dimensionsAndWeight",
DROP COLUMN "discountId",
DROP COLUMN "graphicCard",
DROP COLUMN "priceMapId",
DROP COLUMN "releaseDate",
DROP COLUMN "specialFeatures",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dimensions_and_weight" VARCHAR(255) NOT NULL,
ADD COLUMN     "discount_id" SMALLINT,
ADD COLUMN     "graphic_card" VARCHAR(255) NOT NULL DEFAULT E'None',
ADD COLUMN     "price_map_id" SMALLINT,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "special_features" VARCHAR(255) NOT NULL DEFAULT E'None',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Passage" DROP COLUMN "postId",
ADD COLUMN     "post_id" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "PriceMap" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "createdAt",
DROP COLUMN "customerId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customer_id" UUID NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Laptop" ADD CONSTRAINT "Laptop_price_map_id_fkey" FOREIGN KEY ("price_map_id") REFERENCES "PriceMap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laptop" ADD CONSTRAINT "Laptop_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_laptop_id_fkey" FOREIGN KEY ("laptop_id") REFERENCES "Laptop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passage" ADD CONSTRAINT "Passage_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
