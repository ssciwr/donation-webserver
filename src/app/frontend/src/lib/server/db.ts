import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();
//const db = drizzle(process.env.DATABASE_URL);

// we will use client connections since we do not expect many concurrent connections
// and connection also does not need to be maintained for long
const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export const db = drizzle(connection);

