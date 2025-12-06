CREATE TABLE "users" (
	"uuid" uuid PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"firstName" varchar(50) NOT NULL,
	"secondName" varchar(50) NOT NULL,
	"imgUrl" varchar,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
