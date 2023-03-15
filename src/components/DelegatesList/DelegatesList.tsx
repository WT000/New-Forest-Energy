import { IoAdd } from "react-icons/io5";

interface DelegatesListProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function DelegatesList(props: DelegatesListProps) {
    const { onClick, children } = props;
    
    // TO DO - ADD HORIZONTAL INFINITE SCROLL
    return (
        <div className="w-full flex">
            <div 
                className="h-11 w-12 md:h-12 md:w-12 rounded-full bg-black cursor-pointer flex justify-center items-center"
                onClick={onClick}
                >
                <IoAdd className="text-white-100" size="20px"/>
            </div>
            <div className="pl-6 space-x-6 w-full flex md:pl-6 md:space-x-6">
                {children}
            </div>

        </div>
    )
}