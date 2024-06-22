import { TodoList } from "@/components/Todos";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default function HomePage() {
    return <div>Hello</div>;

    // return <TodoList username={"Malthael134"} />
}
