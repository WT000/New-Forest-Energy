interface MobileNavbarProps {
    children: React.ReactNode;
}

export default function MobileNavbar(props: MobileNavbarProps) {
    const { children } = props;

    return (
        <div className="absolute w-full bottom-0 left-0 h-[70px] rounded-t-[20px] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            {children}
        </div>
    )
}