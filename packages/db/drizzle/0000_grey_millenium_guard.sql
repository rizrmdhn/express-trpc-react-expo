CREATE TABLE "express-trpc-next-expo_users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	"password" varchar(150) NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE INDEX "username_idx" ON "express-trpc-next-expo_users" USING btree ("username");--> statement-breakpoint
CREATE INDEX "user_idx" ON "express-trpc-next-expo_users" USING btree ("id");