"use client";
import { GetUserCount as getUserCount } from "@/components/admin/Stats";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [users, setUsers] = useState(0);
    const [countArr, setCountArr] = useState<{ count: number }[]>([]);

    useEffect(() => {
        (async () => {
            const count = await getUserCount();
            setCountArr(count);
            console.log(count);
            setUsers(count[0]!.count);
        })();
    }, []);

    return (
        <main>
            <h1>Admin/Dashboard</h1>
            <div>
                <h2>Stats</h2>
                <div>Users: {users}</div>
                <ul>
                    Count Array:{" "}
                    {countArr.map((element, i) => (
                        <li key={i}>{`{count:${element.count}}`}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
