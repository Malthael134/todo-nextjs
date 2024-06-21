"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { count } from "drizzle-orm";

export async function GetUserCount() {
    const result = await db.select({ count: count() }).from(users);

    console.log(result);

    // assert the length is one
    return result[0]!.count;
}
