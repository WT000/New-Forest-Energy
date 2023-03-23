import Head from "next/head";
import { IoHome, IoPieChart } from "react-icons/io5";
import Body from "../../../components/Body/Body";
import NavbarMenuItem from "../../../components/navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../../../components/Stats/Stats";

export default function EditHome() {
    return (
        <>
            <Head>
                <title>Edit Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Edit</p>
        </>
    );
}
