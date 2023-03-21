-- CreateTable
CREATE TABLE "Favorited" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "advertId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Favorited_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Favorited_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "totalRatingpoints" INTEGER NOT NULL DEFAULT 0,
    "totalRatings" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("address", "city", "email", "emailVerified", "id", "image", "name", "phone") SELECT "address", "city", "email", "emailVerified", "id", "image", "name", "phone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
