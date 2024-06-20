ALTER TABLE "app_post" RENAME TO "app_todo";--> statement-breakpoint
ALTER TABLE "app_todo" RENAME COLUMN "name" TO "title";--> statement-breakpoint
DROP INDEX IF EXISTS "name_idx";--> statement-breakpoint
ALTER TABLE "app_todo" ALTER COLUMN "title" SET DATA TYPE varchar(1024);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "app_todo" USING btree ("title");