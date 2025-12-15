import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// Try to load db.env if it exists, but don't fail if it doesn't
try {
  config({ path: ".env" });
} catch (e) {
  // Use env vars from docker-compose instead
}

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

