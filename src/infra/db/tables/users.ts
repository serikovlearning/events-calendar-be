import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid().primaryKey(),
    username: varchar({ length: 255 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    firstName: varchar({ length: 50 }).notNull(),
    secondName: varchar({ length: 50 }).notNull(),
    imgUrl: varchar(),
});


