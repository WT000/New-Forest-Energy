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
    userFinder:(email: string) => Promise<boolean>;
    isLoading?: boolean;
    triggerReset?: boolean;
    edit?: {
        onDelete: () => void;
        onDeleteLoading: boolean;
        editHome: EditHomeFormData;
    };
}

function countDecimal(num: number) {
    if (typeof num !== "number") return false;
    
    const numSplit = num.toString().split(".");
    if (numSplit.length == 1) return true;
    if (numSplit[1].length <= 2) return true;

    return false;
}

async function findUser(email: string, userFinder: (email: string) => Promise<boolean>) {
    if (typeof email !== "string") return false;
    if (!email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) return false;
    try {
        if (await userFinder(email)) return true;
    } catch (e) {
        console.log(e);
    }
    return false;
}

export default function HomeForm(props: HomeFormProps) {
    const { onSubmit, onCancel, userFinder, isLoading, triggerReset, edit } = props;

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
                    registerSettings={{
                        required: true,
                        minLength: 5,
                    }}
                    errors={errors.name}
                    errorMessage={"*Must be at least 5 characters."}
                />
            </Tile>

            {/* Look for the email as validation */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoPerson size="32px" />}
                    text={"Homeowner"}
                    type={"text"}
                    name={"owner"}
                    placeholder={"john.doe@gmail..."}
                    register={register}
                    registerSettings={{
                        required: true,
                        validate: {
                            real: user => findUser(user, userFinder)
                        }
                    }}
                    errors={errors.owner}
                    errorMessage={"*Must be a signed-up user."}
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
                    registerSettings={{
                        required: true,
                        valueAsNumber: true,
                        validate: {
                            pos: val => val > 0,
                            int: val => Number.isInteger(val)
                        },
                    }}
                    errors={errors.numBeds}
                    errorMessage={"*Must be at least 1 and whole."}
                />
            </Tile>

            {/* Instructions */}
            {/* May need a custom size set on md: breakpoint */}
            <Tile tileType={TileType.fill} customClass="row-span-3" clickable={false}>
                <InstructionsLayout
                    text=""
                    editable={true}
                    register={register}
                    registerSettings={{
                        required: true,
                    }}
                    errors={errors.energyInstructions}
                    errorMessage={"*Required"}
                />
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
                    registerSettings={{
                        required: true,
                        valueAsNumber: true,
                        validate: {
                            pos: val => val >= 0,
                            decimals: val => countDecimal(val)
                        },
                    }}
                    errors={errors.energyBuffer}
                    errorMessage={"*Must be at least £0."}
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
                    registerSettings={{
                        required: true,
                        valueAsNumber: true,
                        validate: {
                            pos: val => val >= 0,
                            decimals: val => countDecimal(val)
                        },
                    }}
                    errors={errors.energyTariff}
                    errorMessage={"*Must be at least £0.01."}
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

                {edit && <Button text="Delete" icon={<IoTrashBin className="text-white" />} warn={true} />}
            </div>
        </div>
    );
}
