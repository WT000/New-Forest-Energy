import { UseFormRegister } from "react-hook-form";
import { IoFootsteps } from "react-icons/io5";
import { HomeFormData } from "../../forms/HomeForm/HomeForm";

interface InstructionsLayoutProps {
    text: string;
    editable: boolean;
    // Add HomeFormData | xFormData | yFormData in the future
    register?: UseFormRegister<HomeFormData>;
    registerSettings?: object;
    errors?: object;
    errorMessage?: string;
}

function display(text: string, editable: boolean, register?: UseFormRegister<HomeFormData>, registerSettings?: object) {
    if (editable) {
        let placeholder = text;
        if (text == "") {
            placeholder = "Enter instructions";
        }
        return (
            <textarea
                className="h-32 placeholder:text-black text-xs w-full md:text-base bg-transparent
                    file:border-none file:bg-transparent file:cursor-pointer resize-none"
                name="energyInstructions"
                placeholder={placeholder}
                rows={4}
                {...(register && { ...register("energyInstructions", registerSettings) })}
            />
        );
    } else {
        return text;
    }
}

export default function InstructionsLayout(props: InstructionsLayoutProps) {
    const { text, editable, register, registerSettings, errors, errorMessage } = props;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-[94%] h-[90%] p-2">
                <div className="flex flex-row">
                    <div className="py-1 md:py-2 pr-6">
                        <IoFootsteps size="32" />
                    </div>
                    <div className="py-2 md:py-3 text-lg font-bold">
                        Meter Instructions {errors && <span className="text-xs text-red-400 font-normal">{errorMessage}</span>}
                    </div>
                </div>
                <div className="">{display(text, editable, register, registerSettings)}</div>
            </div>
        </div>
    );
}
