interface NavbarMenuItemProps {
    icon: React.ReactElement;
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}


export default function NavbarMenuItem(props: NavbarMenuItemProps) {
    const {icon, text, onClick} = props

    return (
        <div className="grid-cols-2 text-[77767A]">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    )

}