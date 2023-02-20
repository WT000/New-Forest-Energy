interface NavbarMenuProps {
    menuItems: React.ReactNode;
}

export default function NavbarMenu(props: NavbarMenuProps) {
    const {menuItems} = props;

    return (
        <div className="flex w-80%">
            {menuItems}
        </div>
    )

}