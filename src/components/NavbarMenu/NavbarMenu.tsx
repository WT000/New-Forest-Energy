interface NavbarMenuProps {
    children: React.ReactNode;
}

export default function NavbarMenu(props: NavbarMenuProps) {
    const {children} = props;

    const mobile = "flex place-content-evenly w-full m-auto"
    const desktop = "md:inline-block"

    return (
        <div className={`${mobile} ${desktop}`}>
            {children}
        </div>
    )

}