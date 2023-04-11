import { UseFormRegister } from "react-hook-form";
import { BookingFormData } from "../../forms/BookingForm/BookingForm";
import { HomeFormData } from "../../forms/HomeForm/HomeForm";

interface InputLayoutProps {
    icon: React.ReactElement;
    text: string;
    type: string;
    name: string;
    placeholder: string;
    currency?: boolean;
    // Add HomeFormData | xFormData | yFormData in the future
    register?: UseFormRegister<HomeFormData> | UseFormRegister<BookingFormData>;
    registerSettings?: object;
    errors?: object;
    errorMessage?: string;
    onChange?: (e) => void;
    disabled?: boolean;
}

export default function InputLayout(props: InputLayoutProps) {
    const { icon, text, type, name, placeholder, currency, register, registerSettings, errors, errorMessage, disabled } = props;

    return (
        <div className="grid grid-cols-5 m-auto w-full">
            <div className="col-span-1 m-auto">{icon}</div>
            <div className="col-span-4 pl-1">
                <p className="text-black-500 text-xs">
                    {text} {errors && <span className="text-xs text-red-400">{errorMessage}</span>}
                </p>
                <p className="">
                    {currency ? <span className="text-lg font-bold bg-transparent w-[95%] ">£</span> : <></>}
                    <input
                        onChange={(e) => {
                            props?.onChange && props.onChange(e);
                        }}
                        className="text-lg placeholder:text-black font-bold bg-transparent w-[95%] disabled:bg-white
                            file:border-none file:bg-transparent file:cursor-pointer focus:outline-none focus:placeholder:text-black-500"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        //@ts-ignore
                        {...(register && { ...register(name, registerSettings) })}
                        disabled={disabled ? true : false}
                    />
                </p>
            </div>
        </div>
    );
}
