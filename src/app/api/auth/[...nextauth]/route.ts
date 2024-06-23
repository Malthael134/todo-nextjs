import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    // Do whatever you want here, before the request is passed down to `NextAuth`

    return await NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                credentials: {
                    username: { label: "Username" },
                    password: { label: "Password", type: "password" },
                },
                async authorize(credentials, request) {
                    if (!credentials) {
                        return null;
                    }

                    const { username, password } = credentials;
                    
                    console.log("username", username, "password", password)

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

                    return null;
                },
            }),
        ],
        // adapter: DrizzleAdapter(db),
    } satisfies AuthOptions)
}