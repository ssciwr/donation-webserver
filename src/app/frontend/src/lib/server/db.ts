import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

//const db = drizzle(process.env.DATABASE_URL);

// we will use client connections since we do not expect many concurrent connections
// and connection also does not need to be maintained for long
const connection = await mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "donor",
  database: "email_donations",
});
const db = drizzle({ client: connection });

