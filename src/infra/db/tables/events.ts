import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const eventsTable = pgTable("events", {
    uuid: uuid().primaryKey(),

    dateStart: varchar({ length: 24 }).notNull(),
    dateEnd: varchar({ length: 24 }).notNull(),
    createdAt: varchar({ length: 24 }).notNull(),
    updatedAt: varchar({ length: 24 }).notNull(),

    name: varchar({ length: 50 }).notNull(),
    description: varchar(),
    color: varchar().notNull(),

    authorId: uuid().references(() => {
        return usersTable.id;
    }).notNull()
})
