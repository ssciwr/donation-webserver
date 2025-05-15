import { mysqlTable, int, text } from "drizzle-orm/mysql-core"

export const donationsTable = mysqlTable('donations', {
  id: int().autoincrement().primaryKey(),
  gender: int(),
  age: int(),
  lang: int(),
  email: text(),
});

export const newsletterTable = mysqlTable('newsletter', {
  id: int().autoincrement().primaryKey(),
  email: text(),
});