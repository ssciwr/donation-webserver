import {
  mysqlTable,
  int,
  text,
  varchar,
  uniqueIndex,
} from "drizzle-orm/mysql-core";

export const donationsTable = mysqlTable(
  "donations",
  {
    id: int().autoincrement().primaryKey(),
    uuid: varchar({ length: 36 }).notNull(),
    gender: int(),
    age: int(),
    lang: int(),
    email: text(),
    country: text(),
  },
  (table) => ({
    uuidIdx: uniqueIndex("donations_uuid_idx").on(table.uuid),
  }),
);

export const newsletterTable = mysqlTable("newsletter", {
  id: int().autoincrement().primaryKey(),
  email: text(),
});
