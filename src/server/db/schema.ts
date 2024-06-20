// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `app_${name}`);

export const todos = createTable(
  "todo",
  {
    id: serial("id").primaryKey().notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    description: varchar("title", { length: 1024 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    completedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    titleIndex: index("title_idx").on(example.title),
  })
);
