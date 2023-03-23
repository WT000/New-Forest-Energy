interface InputLayoutProps {
    icon: React.ReactElement;
    text: string;
    type: string;
    name: string;
    placeholder: string;
    currency?: boolean;
}

export default function InputLayout(props: InputLayoutProps) {
    const { icon, text, type, name, placeholder, currency } = props;

    return (
        <div className="grid grid-cols-5 m-auto w-full">
            <div className="col-span-1 m-auto">{icon}</div>
            <div className="col-span-4 pl-1">
                <p className="text-black-500 text-xs">{text}</p>
                <p className="">
                    {currency ? <span className="text-lg font-bold bg-transparent w-[95%] ">£</span> : <></>}
                    <input
                        className="text-lg placeholder:text-black font-bold bg-transparent w-[95%] 
                            file:border-none file:bg-transparent file:cursor-pointer :"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                    />
                </p>
            </div>
        </div>
    );
}
