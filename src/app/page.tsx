import { TodoList } from "@/components/Todos";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default async function HomePage() {
    const user = await db.select()
        .from(users)
        .where(eq(users.name, "Malthael134"));

    return (
        <main>
            <h1 className="text-2xl">Todo App</h1>
            <TodoList owner_id={1} />
        </main>
    );
}
