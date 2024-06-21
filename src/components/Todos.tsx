"use server";
import { db } from "@/server/db";
import { todos, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { todo } from "node:test";
import { useEffect, useState } from "react";

export interface TodoListProps {
    username: string;
}

export async function TodoList({ username }: TodoListProps) {

    const [todoList, setTodoList] = useState<typeof todos.$inferSelect[]>([])

    useEffect(() => {
        (async () => {
            const user = (
                await db.select().from(users).where(eq(users.name, username))
            )[0];

            if (!user) {
                return (
                    <div>User {username} not found!</div>
                )
            }

            const result = await db
                .select()
                .from(todos)
                .where(eq(todos.owner_id, user.id));

            setTodoList(result)
        })()
    }, [])

    return (
        <>
            {todoList.length > 0 ? (
                <ul>
                    {todoList.map((todo) => (
                        <li key={todo.id}>
                            <h1 className="text-lg">Title: {todo.title}</h1>
                            <div>
                                Description: {todo.description ?? "Description missing..."}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No todo items found</div>
            )}
        </>
    );
}