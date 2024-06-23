import { getRowCount } from "@/server/db/utils";
import { db } from "@/server/db";
import { users as usersTable } from "@/server/db/schema";

export default async function AdminDashboard() {
    const count = await getRowCount(usersTable);

    const users = db
        .select({
            id: usersTable.id,
            name: usersTable.name,
        })
        .from(usersTable);

    return (
        <>
            <h1>Admin/Dashboard</h1>
            <div>
                <h2>Stats</h2>
                <div>Users: {count}</div>
            </div>
        </>
    );
}
