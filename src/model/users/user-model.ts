import { SQL } from "bun";
import "dotenv/config"


const psql = new SQL(process.env.DATABASE_URL || '')

export const getDbConnectionTested = async () => {
    const value = await psql`select * from users`.values()
    console.log(value)
}

