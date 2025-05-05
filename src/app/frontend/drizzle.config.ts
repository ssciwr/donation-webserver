import { defineConfig } from "drizzle-kit";
import 'dotenv/config';

export default defineConfig({
  dialect: 'mysql',
  out: './drizzle',
  schema: './src/lib/server/schema.ts',
  dbCredentials: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  }
  })

