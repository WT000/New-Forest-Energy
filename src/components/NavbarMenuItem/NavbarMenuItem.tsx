interface NavbarMenuItemProps {
    icon: React.ReactElement;
    text: string;
    onClick: () => void;
}


export default function NavbarMenuItem(props: NavbarMenuItemProps) {
    const {icon, text, onClick} = props

    return (
        <div 
            className="grid grid-cols-3 text-[#77767A] justify-center hover:text-black cursor-pointer mt-8 mb-8 w-full" 
            onClick={onClick} 
        >
            <div className="col-span-1 m-auto pr-4">{icon}</div>
            <div className="col-span-2">{text}</div>
        </div>
    )

}