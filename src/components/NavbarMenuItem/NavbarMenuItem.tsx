interface NavbarMenuItemProps {
    icon: React.ReactElement;
    text: string;
    onClick: () => unknown;

}


export default function NavbarMenuItem(props: NavbarMenuItemProps) {
    const {icon, text, onClick} = props

    return (
        <div 
            className="grid grid-cols-3 text-[#77767A] justify-center hover:text-black cursor-pointer m-4" 
            onClick={onClick} 
        >
            <div className="grid-span-1">{icon}</div>
            <div className="grid-span-2">{text}</div>
        </div>
    )

}