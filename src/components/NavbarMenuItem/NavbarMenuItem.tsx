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

    return (
        <div 
            className={`${textFormat} grid grid-cols-3 justify-center cursor-pointer mt-8 mb-8 w-full`}
            onClick={onClick} 
        >
            <div className="col-span-1 m-auto pr-4">{icon}</div>
            <div className="hidden md:block col-span-2">{text}</div>
        </div>
    )

}