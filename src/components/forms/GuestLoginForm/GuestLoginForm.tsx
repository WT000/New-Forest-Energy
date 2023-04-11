import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoLockClosed } from "react-icons/io5";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import Tile, { TileType } from "../../Tile/Tile";

export interface GuestLoginFormData {
    friendlyId: string;
}

interface GuestLoginFormProps {
    onSubmit: SubmitHandler<GuestLoginFormData>;
    onCancel: () => void;
    bookingFinder: (friendlyId: string) => Promise<boolean>;
    isLoading?: boolean;
    triggerReset?: boolean;
}

async function findBooking(friendlyId: string, bookingFinder: (friendlyId: string) => Promise<boolean>) {
    try {
        if (await bookingFinder(friendlyId)) return true;
    } catch (e) {
        console.log(e);
    }
    return false;
}

export default function HomeForm(props: GuestLoginFormProps) {
    const { onSubmit, bookingFinder } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<GuestLoginFormData>();

    return (
        <div>
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoLockClosed size="32px" />}
                    text={"Booking ID"}
                    type={"text"}
                    name={"friendlyId"}
                    placeholder={"7 Character Booking ID"}
                    register={register}
                    registerSettings={{
                        required: true,
                        validate: {
                            length: (friendlyId) => friendlyId.length == 7,
                            real: (friendlyId) => findBooking(friendlyId, bookingFinder),
                        },
                        minLength: 7,
                        maxLength: 7,
                    }}
                    errors={errors.friendlyId}
                    errorMessage={"*Must exist (case-sensitive)"}
                />
            </Tile>
            <button
                onClick={handleSubmit((data) => {
                    onSubmit({
                        ...data,
                    });
                })}
            >
                Go to my booking
            </button>
        </div>
    );
}
