-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STAFF');

-- CreateEnum
CREATE TYPE "OS" AS ENUM ('FREEDOS', 'WINDOWS', 'MACOS', 'LINUX', 'ANDROID');

-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateTable
CREATE TABLE "Person" (
    "id" UUID NOT NULL,
    "fullname" VARCHAR(60) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT E'MALE',
    "phone" CHAR(20) NOT NULL,
    "email" VARCHAR(30),
    "address" VARCHAR(255) NOT NULL DEFAULT E'None',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'STAFF',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laptop" (
    "id" SMALLSERIAL NOT NULL,
    "brand" VARCHAR(255) NOT NULL DEFAULT E'None',
    "model" VARCHAR(255) NOT NULL DEFAULT E'None',
    "material" VARCHAR(255) NOT NULL DEFAULT E'None',
    "display" VARCHAR(255) NOT NULL DEFAULT E'None',
    "cpu" VARCHAR(255) NOT NULL DEFAULT E'None',
    "ram" VARCHAR(255) NOT NULL DEFAULT E'None',
    "graphicCard" VARCHAR(255) NOT NULL DEFAULT E'None',
    "ports" VARCHAR(255) NOT NULL DEFAULT E'None',
    "wifi" VARCHAR(255) NOT NULL DEFAULT E'None',
    "storage" VARCHAR(255) NOT NULL DEFAULT E'None',
    "webcam" VARCHAR(255) NOT NULL DEFAULT E'None',
    "fans" VARCHAR(255) NOT NULL DEFAULT E'None',
    "speakers" VARCHAR(255) NOT NULL DEFAULT E'None',
    "keyboard" VARCHAR(255) NOT NULL DEFAULT E'None',
    "security" VARCHAR(255) NOT NULL DEFAULT E'None',
    "adapter" VARCHAR(255) NOT NULL DEFAULT E'None',
    "specialFeatures" VARCHAR(255) NOT NULL DEFAULT E'None',
    "os" "OS" NOT NULL DEFAULT E'WINDOWS',
    "dimensionsAndWeight" VARCHAR(255) NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "priceMapId" SMALLINT,
    "discountId" SMALLINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Laptop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SMALLSERIAL NOT NULL,
    "rank" "Rank" NOT NULL DEFAULT E'FIVE',
    "content" VARCHAR(400) NOT NULL,
    "authorId" UUID NOT NULL,
    "isStaff" BOOLEAN NOT NULL DEFAULT false,
    "laptopId" SMALLINT NOT NULL,
    "commentId" SMALLINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceMap" (
    "id" SMALLSERIAL NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" SMALLSERIAL NOT NULL,
    "value" REAL NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" SMALLSERIAL NOT NULL,
    "customerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passage" (
    "id" SMALLSERIAL NOT NULL,
    "header" VARCHAR(150) NOT NULL,
    "content" TEXT NOT NULL,
    "postId" SMALLINT NOT NULL,

    CONSTRAINT "Passage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SMALLSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LaptopToPurchase" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL
);

-- CreateTable
CREATE TABLE "_LaptopToPost" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_phone_key" ON "Person"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PriceMap_price_key" ON "PriceMap"("price");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_value_key" ON "Discount"("value");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToPurchase_AB_unique" ON "_LaptopToPurchase"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToPurchase_B_index" ON "_LaptopToPurchase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LaptopToPost_AB_unique" ON "_LaptopToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_LaptopToPost_B_index" ON "_LaptopToPost"("B");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_id_fkey" FOREIGN KEY ("id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laptop" ADD CONSTRAINT "Laptop_priceMapId_fkey" FOREIGN KEY ("priceMapId") REFERENCES "PriceMap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laptop" ADD CONSTRAINT "Laptop_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_laptopId_fkey" FOREIGN KEY ("laptopId") REFERENCES "Laptop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passage" ADD CONSTRAINT "Passage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPurchase" ADD FOREIGN KEY ("A") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPurchase" ADD FOREIGN KEY ("B") REFERENCES "Purchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPost" ADD FOREIGN KEY ("A") REFERENCES "Laptop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaptopToPost" ADD FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
