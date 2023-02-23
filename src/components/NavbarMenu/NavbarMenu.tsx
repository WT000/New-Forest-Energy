interface NavbarMenuProps {
    children: React.ReactNode;
}

export default function NavbarMenu(props: NavbarMenuProps) {
    const {children} = props;

    const mobile = "flex justify-between w-full m-auto mx-6"
    const desktop = "md:inline-block md:mx-0"

    return (
        <div className={`${mobile} ${desktop}`}>
            {children}
        </div>
    )

}