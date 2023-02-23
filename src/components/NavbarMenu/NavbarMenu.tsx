interface NavbarMenuProps {
    children: React.ReactNode;
}

export default function NavbarMenu(props: NavbarMenuProps) {
    const {children} = props;

    return (
        <div className="">
            {children}
        </div>
    )

}