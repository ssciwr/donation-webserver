import { mysqlTable, int } from "drizzle-orm/mysql-core"

export const donationsTable = mysqlTable('donations', {
  id: int()
});