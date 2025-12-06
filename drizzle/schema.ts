import { pgTable, unique, uuid, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	uuid: uuid().primaryKey().notNull(),
	username: varchar({ length: 255 }).notNull(),
	password: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	firstName: varchar({ length: 50 }).notNull(),
	secondName: varchar({ length: 50 }).notNull(),
	imgUrl: varchar(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);
