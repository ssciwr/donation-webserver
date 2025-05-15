import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

let db: ReturnType<typeof drizzle.mock> | ReturnType<typeof drizzle>;

if (process.env.BUILD_MODE === 'true') {
    console.log('Skipping database connection during build');

    // Mock the `db` object to avoid actual database connections
    db = drizzle.mock();
    console.log('Mock database connection created');
} else {
// we will use client connections since we do not expect many concurrent connections
    // and connection also does not need to be maintained for long
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });
    db = drizzle(connection);
}

const exportedDb = db;
export { exportedDb as db };
