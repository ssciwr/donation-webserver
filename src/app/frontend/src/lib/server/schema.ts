import { mysqlTable, int, text } from "drizzle-orm/mysql-core"

export const donationsTable = mysqlTable('donations', {
  id: int(),
  gender: int(),
  age: int(),
  lang: int(),
  email: text(),
});

export const newsletterTable = mysqlTable('newsletter', {
  email: text(),
});