"use server";
import { db } from "@/server/db";
import { todos } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export interface TodoListProps {
    owner_id: number;
}

export async function TodoList({ owner_id }: TodoListProps) {
    const todoList = await db
        .select()
        .from(todos)
        .where(eq(todos.owner_id, owner_id));

    return (
        <ul>
            {todoList.map((todo) => (
                <li key={todo.id}>
                    <h1 className="text-lg">Title: {todo.title}</h1>
                    <div>
                        Description:{" "}
                        {todo.description
                            ? todo.description
                            : "Description missing..."}
                    </div>
                </li>
            ))}
        </ul>
    );
}
