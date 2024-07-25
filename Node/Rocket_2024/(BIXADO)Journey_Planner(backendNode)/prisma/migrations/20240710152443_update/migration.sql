/*
  Warnings:

  - You are about to drop the column `occours_at` on the `activities` table. All the data in the column will be lost.
  - Added the required column `occurs_at` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "occurs_at" DATETIME NOT NULL,
    "trip_Id" TEXT NOT NULL,
    CONSTRAINT "activities_trip_Id_fkey" FOREIGN KEY ("trip_Id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_activities" ("id", "title", "trip_Id") SELECT "id", "title", "trip_Id" FROM "activities";
DROP TABLE "activities";
ALTER TABLE "new_activities" RENAME TO "activities";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
