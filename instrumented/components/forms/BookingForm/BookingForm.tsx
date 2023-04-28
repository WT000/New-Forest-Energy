import { IoSave, IoTrashBin, IoHome, IoCalendar, IoPerson } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Button/Button";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import Tile, { TileType } from "../../Tile/Tile";
import { useEffect } from "react";
import { HomeInterface } from "../../../db/models/Home";

export interface BookingFormData {
    surname: string;
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
    bookingFinder: (startDateTime: string, endDateTime: string) => Promise<boolean>;
    isLoading?: boolean;
    triggerReset?: boolean;
    edit?: {
        onDelete: () => void;
        onDeleteLoading: boolean;
        editBooking: EditBookingFormData;
    };
}

export function countDecimal(num: number) {
    if (typeof num !== "number") return false;

    const numSplit = num.toString().split(".");
    if (numSplit.length == 1) return true;
    if (numSplit[1].length <= 2) return true;

    return false;
}

async function findBookingConflict(
    dateTimeStart: Date,
    dateTimeEnd: Date,
    bookingFinder: (dateTimeStart: string, dateTimeEnd: string) => Promise<boolean>
) {
    try {
        if (typeof dateTimeStart.toISOString !== "function") return false;
        if (typeof dateTimeEnd.toISOString !== "function") return false;
        if (await bookingFinder(dateTimeStart.toISOString(), dateTimeEnd.toISOString())) return true;
    } catch (e) {
        console.log(e);
    }
    return false;
}

export default function BookingForm(props: BookingFormProps) {
    const { onSubmit, onCancel, bookingFinder, isLoading, triggerReset, edit, home } = props;

    let startStr;
    let endStr;

    if (edit) {
        const start = new Date(edit.editBooking.startDateTime);
        const startDate = start.toLocaleDateString().split("/");
        const startTime = start.toLocaleTimeString();
    
        const end = new Date(edit.editBooking.endDateTime);
        const endDate = end.toLocaleDateString().split("/");
        const endTime = end.toLocaleTimeString();
    
        startStr = `${startDate[2]}-${startDate[1]}-${startDate[0]}T${startTime}`;
        endStr = `${endDate[2]}-${endDate[1]}-${endDate[0]}T${endTime}`;
    }

    const {
        setFocus,
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        getValues,
    } = useForm<BookingFormData>({
        defaultValues: {
            ...edit?.editBooking,
            ...{
                startDateTime: edit && startStr,
            },
            ...{ endDateTime: edit && endStr },
        },
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
                    placeholder={home.name ? home.name : "Not known"}
                    disabled={true}
                />
            </Tile>

            {/* Surname */}
            <Tile tileType={TileType.input} clickable={false} focus={() => setFocus("surname")}>
                <InputLayout
                    icon={<IoPerson size="32px" />}
                    text={"Guest Surname"}
                    type={"text"}
                    name={"surname"}
                    placeholder={"Doe..."}
                    register={register}
                    registerSettings={{
                        required: true,
                    }}
                    errors={errors.surname}
                    errorMessage={"*Required"}
                />
            </Tile>

            {/* Start */}
            <Tile tileType={TileType.input} clickable={false} focus={() => setFocus("startDateTime")}>
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
                            // @ts-ignore
                            noConflict: (date) => findBookingConflict(date, getValues("endDateTime"), bookingFinder),
                        },
                    }}
                    errors={errors.startDateTime}
                    errorMessage={"*Must be beyond now and not conflict."}
                />
            </Tile>

            {/* End */}
            <Tile tileType={TileType.input} clickable={false} focus={() => setFocus("endDateTime")}>
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
                            // @ts-ignore
                            noConflict: (date) => findBookingConflict(getValues("startDateTime"), date, bookingFinder),
                        },
                    }}
                    errors={errors.endDateTime}
                    errorMessage={"*Must be beyond start and not conflict."}
                />
            </Tile>

            <div className="flex flex-row justify-around w-100 md:w-[368px]">
                <Button
                    text="Submit"
                    icon={<IoSave className="text-white" />}
                    onClick={handleSubmit((data) => {
                        onSubmit({
                            ...data,
                            ...{ homeId: home._id },
                        });
                    })}
                    disabled={isLoading}
                />

                {edit && (
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
