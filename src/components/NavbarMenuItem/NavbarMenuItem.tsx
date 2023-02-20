interface NavbarMenuItemProps {
    icon: React.ReactElement;
    text: string;
    onClick: () => unknown;

}


export default function NavbarMenuItem(props: NavbarMenuItemProps) {
    const {icon, text, onClick} = props

    return (
        <div 
            className="grid grid-cols-2 text-[#77767A] justify-center hover:text-black cursor-pointer" 
            onClick={onClick} 
        >
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    )

}