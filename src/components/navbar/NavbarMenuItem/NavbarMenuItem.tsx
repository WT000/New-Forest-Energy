interface NavbarMenuItemProps {
    icon: React.ReactElement;
    text: string;
    onClick: () => void;
    activePage: boolean;
}


export default function NavbarMenuItem(props: NavbarMenuItemProps) {
    const {icon, text, onClick, activePage} = props

    let textFormat = "text-[#77767A] hover:text-[#242425]"
    if(activePage) { textFormat = "text-black" }

    const desktop = "md:grid md:grid-cols-3 md:mt-8 md:mb-8 md:w-full md:justify-center"

    return (
        <div 
            className={`${textFormat} ${desktop} cursor-pointer `}
            onClick={onClick} 
        >
            <div className="md:col-span-1 md:m-auto md:pr-4">{icon}</div>
            <div className="hidden md:block md:col-span-2">{text}</div>
        </div>
    )

}