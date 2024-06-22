import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username" },
                password: { label: "Password", type: "password" },
            },
            async authorize({ username, password }, request) {
                const user = (
                    await db
                        .select()
                        .from(users)
                        .where(eq(users.name, username as string))
                )[0];

                console.log(`auth request from: ${user ?? "user not found"}`);

                // return {
                //     name: username,
                // }

                fetch(request);

                return null;
            },
        }),
    ],
    adapter: DrizzleAdapter(db),
});
