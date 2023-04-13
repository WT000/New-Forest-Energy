import { SubmitHandler, useForm } from "react-hook-form";
import { IoLockClosed, IoSave } from "react-icons/io5";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import Tile, { TileType } from "../../Tile/Tile";
import Button from "../../Button/Button";

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

export default function GuestLoginForm(props: GuestLoginFormProps) {
    const { onSubmit, bookingFinder } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GuestLoginFormData>();

    return (
        <div className="space-y-6">
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
                            real: (friendlyId) => findBooking(friendlyId, bookingFinder),
                        },
                        minLength: 3,
                        maxLength: 7,
                    }}
                    errors={errors.friendlyId}
                    errorMessage={"*Must be a valid booking ID (7 characters - case-sensitive)"}
                />
            </Tile>

            <Button
                    text="Confirm"
                    icon={<IoSave className="text-white" />}
                    onClick={handleSubmit((data) => {
                        onSubmit({
                            ...data,
                        });
                    })}
                />
        </div>
    );
}
