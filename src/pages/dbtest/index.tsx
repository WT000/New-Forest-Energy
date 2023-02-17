import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import { UserInterface } from "../../db/models/User";
import { HomeInterface } from "../../db/models/Home";
import getRole from "../../lib/utils/getRole";

export default function Home() {
    const { data: session } = useSession();

    console.log(session)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {session && 
                <div>
                    <p>Logged in as {session.user.name}.</p>
                    <a href="./api/auth/signout">Click here to logout.</a>
                </div>
            }

            {!session && 
                <div>
                    <p>Logged out.</p>
                    <a href="./api/auth/signin">Click here to login.</a>
                </div>
            }

            {/* Imagine this is using a user and home from the database... */}

        </>
    );
}

// Server-side session is ideal, otherwise we will have flashing components on the page
export async function getServerSideProps(context) {
    return {
        props: {
            session: await getServerSession(context.req, context.res, authOptions),
        },
    };
}