import { IoSave, IoText, IoTrashBin, IoHome, IoCalendar } from "react-icons/io5";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Button/Button";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import InstructionsLayout from "../../layouts/InstructionsLayout/InstructionsLayout";
import Tile, { TileType } from "../../Tile/Tile";
import { useEffect, useState } from "react";
import Role from "../../../lib/utils/roles";
import PhotoInputLayout from "../../layouts/PhotoInputLayout/PhotoInputLayout";
import ImageLayout from "../../layouts/ImageLayout/ImageLayout";
import { HomeInterface } from "../../../db/models/Home";

export interface BookingFormData {
    startDateTime: string;
    endDateTime: string;
}

export interface EditBookingFormData extends BookingFormData {
    _id?: string;
}

interface BookingFormProps {
    onSubmit: SubmitHandler<BookingFormData>;
    onCancel: () => void;
    home: HomeInterface;
    bookingFinder: (dateTime: string) => Promise<boolean>;
    isLoading?: boolean;
    triggerReset?: boolean;
    edit?: {
        onDelete: () => void;
        onDeleteLoading: boolean;
        editBooking: EditBookingFormData;
        role?: Role
    };
}

export function countDecimal(num: number) {
    if (typeof num !== "number") return false;

    const numSplit = num.toString().split(".");
    if (numSplit.length == 1) return true;
    if (numSplit[1].length <= 2) return true;

    return false;
}

async function findBookingConflict(dateTime: Date, bookingFinder: (dateTime: string) => Promise<boolean>) {
    try {
        if (typeof dateTime.toISOString !== "function") return false;
        if (await bookingFinder(dateTime.toISOString())) return true;
    } catch (e) {
        console.log(e);
    }
    return false;
}

export default function BookingForm(props: BookingFormProps) {
    const { onSubmit, onCancel, bookingFinder, isLoading, triggerReset, edit, home } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        getValues,
    } = useForm<BookingFormData>({
        defaultValues: { ...edit?.editBooking },
    });

    // Handle Reset (useEffect so this only applies after load)
    useEffect(() => {
        if (triggerReset) {
            reset();
        }
    }, [triggerReset, reset]);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-x-24 gap-y-9 mb-14 md:mb-0 mt-10 ">
            {/* Home Name (not part of form) */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoHome size="32px" />}
                    text={"Home"}
                    type={"text"}
                    name={"name"}
                    placeholder={home.name ? home.name  : "Not known"}
                    disabled={true}
                />
            </Tile>

            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoCalendar size="32px" />}
                    text={"Start Date"}
                    type={"datetime-local"}
                    name={"startDateTime"}
                    placeholder={"Start Date"}
                    register={register}
                    registerSettings={{
                        required: true,
                        valueAsDate: true,
                        validate: {
                            future: (date) => date > new Date(),
                            noConflict: (date) => findBookingConflict(date, bookingFinder),
                        },
                    }}
                    errors={errors.startDateTime}
                    errorMessage={"*Must be beyond now and not conflict."}
                />
            </Tile>

            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoCalendar size="32px" />}
                    text={"End Date"}
                    type={"datetime-local"}
                    name={"endDateTime"}
                    placeholder={"End Date"}
                    register={register}
                    registerSettings={{
                        required: true,
                        valueAsDate: true,
                        validate: {
                            beyondStart: (date) => date > getValues("startDateTime"),
                            noConflict: (date) => findBookingConflict(date, bookingFinder),
                        },
                    }}
                    errors={errors.endDateTime}
                    errorMessage={"*Must be beyond start and not conflict."}
                />
            </Tile>

            {/* Beds */}
            {/* <Tile tileType={TileType.input} clickable={false}>
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
                            pos: (val) => val > 0,
                            int: (val) => Number.isInteger(val),
                        },
                    }}
                    errors={errors.numBeds}
                    errorMessage={"*Must be at least 1 and whole."}
                />
            </Tile> */}

            {/* Cost Buffer */}
            {/* <Tile tileType={TileType.input} clickable={false}>
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
                            pos: (val) => val >= 0,
                            decimals: (val) => countDecimal(val),
                        },
                    }}
                    errors={errors.energyBuffer}
                    errorMessage={"*Must be at least £0."}
                />
            </Tile> */}

            <div className="flex flex-row justify-around w-100 md:w-[368px]">
                <Button
                    text="Submit"
                    icon={<IoSave className="text-white" />}
                    onClick={handleSubmit((data) => {
                        onSubmit({
                            ...data,
                        });
                    })}
                    disabled={isLoading}
                />

                {edit && edit.role == Role.Agency && (
                    <Button
                        text="Delete"
                        icon={<IoTrashBin className="text-white" />}
                        warn={true}
                        onClick={edit?.onDelete}
                        disabled={edit?.onDeleteLoading}
                    />
                )}
            </div>
        </div>
    );
}
