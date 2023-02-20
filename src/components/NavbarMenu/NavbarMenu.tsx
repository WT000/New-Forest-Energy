interface NavbarMenuProps {
    menuItems: React.ReactNode;
}

export default function NavbarMenu(props: NavbarMenuProps) {
    const {menuItems} = props;

    return (
        <div className="flex">
            {menuItems}
        </div>
    )

}