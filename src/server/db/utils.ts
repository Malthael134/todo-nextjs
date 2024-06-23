"use server";
import { db } from "@/server/db";
import { count, sql } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export async function getRowCount(table: Readonly<PgTableWithColumns<any>>) {
    // assert the length is one
    return (await db.select({ count: count(sql`*`) }).from(table))[0]!.count;
}
