import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Effect } from 'effect';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || '',
});

export const initDb = () => {
    return drizzle({ client: pool });
};

export class DbConnection extends Effect.Service<DbConnection>()(
    'DbConnection',
    {
        succeed: initDb(),
    },
) {}

