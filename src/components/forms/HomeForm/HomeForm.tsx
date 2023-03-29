import { IoBed, IoFlash, IoFootsteps, IoImages, IoPerson, IoSave, IoText, IoWallet, IoTrashBin } from "react-icons/io5";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Button/Button";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import InstructionsLayout from "../../layouts/InstructionsLayout/InstructionsLayout";
import Tile, { TileType } from "../../Tile/Tile";
import { useEffect } from "react";

export interface HomeFormData {
    name: string;
    owner: string;
    description?: string;
    image?: string;
    numBeds: number;
    energyInstructions: string;
    energyTariff: number;
    energyBuffer: number;
}

export interface EditHomeFormData extends HomeFormData {
    _id?: string;
}

interface HomeFormProps {
    onSubmit: SubmitHandler<HomeFormData>;
    onCancel: () => void;
    isLoading?: boolean;
    triggerReset?: boolean;

    edit?: {
        onDelete: () => void;
        onDeleteLoading: boolean;
        editHome: EditHomeFormData;
    };
}

export default function HomeForm(props: HomeFormProps) {
    const { onSubmit, onCancel, isLoading, triggerReset, edit } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        getValues,
    } = useForm<HomeFormData>({
        defaultValues: { ...edit?.editHome },
    });

    // Handle Reset (useEffect so this only applies after load)
    useEffect(() => {
        if (triggerReset) {
            reset();
        }
    }, [triggerReset, reset]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-3 mb-14 md:mb-0">
            {/* Image */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoImages size="32px" />}
                    text={"Home Image"}
                    type={"file"}
                    name={"image"}
                    placeholder={"Select Image"}
                />
            </Tile>

            {/* Image Preview */}
            {/* May need a custom size set on md: breakpoint */}
            <Tile tileType={TileType.fill} customClass="row-span-3 p-2" clickable={false}>
                <p>Image Preview (invisible if none submitted, be sure to add appropriate validation to images)</p>
            </Tile>

            {/* Name */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoText size="32px" />}
                    text={"Home Name"}
                    type={"text"}
                    name={"name"}
                    placeholder={"My New Home..."}
                    register={register}
                />
            </Tile>

            {/* Look for the email after a short period, checking if it actually exists */}
            {/* Pass optional function to InputLayout */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoPerson size="32px" />}
                    text={"Homeowner"}
                    type={"text"}
                    name={"owner"}
                    placeholder={"john.doe@gmail..."}
                    register={register}
                />
            </Tile>

            {/* Beds */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoBed size="32px" />}
                    text={"Total Beds"}
                    type={"number"}
                    name={"numBeds"}
                    placeholder={"4"}
                    register={register}
                />
            </Tile>

            {/* Instructions */}
            {/* May need a custom size set on md: breakpoint */}
            <Tile tileType={TileType.fill} customClass="row-span-3" clickable={false}>
                <InstructionsLayout text="" editable={true} register={register} />
            </Tile>

            {/* Cost Buffer */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoWallet size="32px" />}
                    text={"Cost Buffer"}
                    type={"number"}
                    name={"energyBuffer"}
                    placeholder={"0.50"}
                    currency={true}
                    register={register}
                />
            </Tile>

            {/* Energy Tariff (per kWh) */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoFlash size="32px" />}
                    text={"Energy Tariff (per Kwh)"}
                    type={"number"}
                    name={"energyTariff"}
                    placeholder={"0.50"}
                    currency={true}
                    register={register}
                />
            </Tile>

            <div className="flex flex-row justify-around w-100 md:w-[368px]">
                <Button
                    text="Submit"
                    icon={<IoSave className="text-white" />}
                    onClick={handleSubmit((data) => {
                        console.log(data);
                    })}
                />

                {edit && <Button text="Delete" icon={<IoTrashBin className="text-white" />} />}
            </div>
        </div>
    );
}
