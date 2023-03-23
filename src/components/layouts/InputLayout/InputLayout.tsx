interface InputLayoutProps {
    icon: React.ReactElement;
    text: string;
    type: string;
    name: string;
    placeholder: string;
    onChange?: (e) => void;
}

export default function InputLayout(props: InputLayoutProps) {
    const { icon, text, type, name, placeholder } = props;

    return (
        <div className="grid grid-cols-5 m-auto w-full">
            
            <div className="col-span-1 m-auto">
                {icon}
            </div>
            <div className="col-span-4 pl-1">
                <p className="text-black-500 text-xs">{text}</p>
                <p className="">
                    <input 
                        onChange={(e) => props?.onChange(e)}
                        className="text-lg placeholder:text-black font-bold bg-transparent w-[95%] 
                            file:border-none file:bg-transparent file:cursor-pointer focus:outline-none focus:placeholder:text-black-500" 
                        type={type} 
                        name={name} 
                        placeholder={placeholder}
                    />
                    </p>
            </div>
        </div>
    )
}