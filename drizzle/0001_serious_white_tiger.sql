CREATE TABLE "events" (
	"uuid" uuid PRIMARY KEY NOT NULL,
	"dateStart" varchar(24) NOT NULL,
	"dateEnd" varchar(24) NOT NULL,
	"createdAt" varchar(24) NOT NULL,
	"updatedAt" varchar(24) NOT NULL,
	"name" varchar(50) NOT NULL,
	"description" varchar,
	"color" varchar NOT NULL,
	"authorId" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "uuid" TO "id";--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_authorId_users_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;