interface MobileNavbarProps {
    menu: React.ReactNode;
}

export default function MobileNavbar(props: MobileNavbarProps) {
    const { menu } = props;

    return (
        <div className="md:hidden absolute w-full bottom-0 left-0 h-[70px] rounded-t-[20px] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex flex-row">
            {menu}
        </div>
    )
}