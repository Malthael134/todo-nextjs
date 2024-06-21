"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { count, sql } from "drizzle-orm";

export async function GetUserCount() {
    const result = await db.select({ count: count(sql`*`) }).from(users);

    console.log(result);

    // assert the length is one
    return result;
}
