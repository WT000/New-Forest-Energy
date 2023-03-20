import Link from "next/link";

interface NavbarMenuItemProps {
    icon: React.ReactElement;
    text: string;
    path: string;
    activePage: boolean;
}


export default function NavbarMenuItem(props: NavbarMenuItemProps) {
    const {icon, text, path, activePage} = props

    let textFormat = "text-black-500"
    if(activePage) { textFormat = "text-black" }

    const desktop = "md:grid md:grid-cols-3 md:mt-8 md:w-full md:justify-center md:pl-4"

    return (
        <Link href={path}
            className={`${textFormat} ${desktop} hover:text-black cursor-pointer transition ease-in-out hover:scale-105`}
            id={text}
        >
            <div className="md:col-span-1 md:m-auto md:pr-4">{icon}</div>
            <div className="hidden md:block md:col-span-2">{text}</div>
        </Link>
    )

}