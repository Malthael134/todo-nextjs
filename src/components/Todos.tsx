import { db } from "@/server/db";
import { todos, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";


export async function TodoList(user: typeof users) {
    const todoList = await db.select()
        .from(todos)
        .where(eq(todos.owner_id, user.id));

    return (
        <ul>
            {todoList.map((todo) => (
                <li>
                    <h1 className="text-lg">{todo.title}</h1>
                    {todo.description ? <div>{todo.description}</div> : <div>Description missing...</div>}
                </li>
            ))}
        </ul>
    )
}