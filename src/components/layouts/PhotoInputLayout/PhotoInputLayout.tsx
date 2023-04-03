import { UseFormRegister } from "react-hook-form";
import { HomeFormData } from "../../forms/HomeForm/HomeForm";
import {useState} from "react";
import useCloudinary from "../../../hooks/useCloudinary";
import { IoImages } from "react-icons/io5";

interface PhotoInputLayoutProps {
    image: string;
    setImage: (value: string) => void;
    onChange?: (value: string) => void;
    // Add HomeFormData | xFormData | yFormData in the future
    register?: UseFormRegister<HomeFormData>;
    registerSettings?: object;
    errors?: object;
    errorMessage?: string;
    disabled?: boolean;
}

export default function InputLayout(props: PhotoInputLayoutProps) {
    const { register, registerSettings, errors, errorMessage, disabled } = props;
    const [image, setImage] = useState(props.image);
    const {Cloudinary} = useCloudinary();

    const handleUpload = () => {

        // @ts-ignore
        const imageWidget = cloudinary.createUploadWidget(
        {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET,
            folder:
            process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER +  "/",
            sources: ["local", "camera"],
            multiple: false,
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
            setImage(result.info.public_id);
            props.onChange(result.info.public_id);
            }
        }
        );

        imageWidget.open();
    };

    return (
        <div className="grid grid-cols-5 m-auto w-full">
            <div className="col-span-1 m-auto">
                <IoImages size="32px" />
            </div>
            <div className="col-span-4 pl-1">
                <p className="text-black-500 text-xs">
                    Home Image {errors && <span className="text-xs text-red-400">{errorMessage}</span>}
                </p>
                <p className="text-lg font-bold bg-transparent w-[95%] disabled:bg-white
                            cursor-pointer focus:outline-none"
                            onClick={() => handleUpload()}>
                </p>
            </div>
        </div>
    );
}
