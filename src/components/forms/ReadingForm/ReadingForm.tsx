import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoFlash, IoSave } from "react-icons/io5";
import Button from "../../Button/Button";
import Tile, { TileType } from "../../Tile/Tile";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import { countDecimalPlaces } from "../../../lib/utils/nums";
import { useEffect, useState } from "react";
import PhotoInputLayout from "../../layouts/PhotoInputLayout/PhotoInputLayout";

export interface ReadingFormData {
    image: string;
    readingValue: number;
    homeId: string;
}

interface ReadingFormProps{
    onSubmit: SubmitHandler<ReadingFormData>;
    onCancel: () => void;
    readingValueValidator : (homeId: string, newVal: number) => Promise<boolean>;
    isLoading?: boolean;
    triggerReset?: boolean;
    homeId: string;
}

export default function ReadingForm(props: ReadingFormProps){

    const { onSubmit, onCancel, readingValueValidator, isLoading, triggerReset } = props;

    const {
        setFocus,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control
    } = useForm<ReadingFormData>();

    const [image, setImage] = useState("");


    async function isBiggerThanLastReading(newVal: number) {
        try {
            if (await readingValueValidator(props.homeId, newVal)) return true;
        } catch (e) {
            console.log(e);
        }
        return false;
    }

    useEffect(() => {
        setValue('homeId', props.homeId)
    })

    return (
        <div className="space-y-6">

            <Controller
              rules={{ required: true }}
              control={control}
              name="image"
              render={({field: {onChange}}) => (
                    <PhotoInputLayout
                        sources={['local', 'camera']}
                        text="Reading Image"
                        image={image}
                        setImage={setImage}
                        onChange={onChange}
                    />
              )}
            />
            {errors.image && (
                <span className="text-xs text-red-400">Image is Required</span>
            )}

            <Tile tileType={TileType.input} clickable={false} focus={() => setFocus("readingValue")}>
                <InputLayout
                    icon={<IoFlash size="32px" />}
                    text={"Reading Value"}
                    type={"number"}
                    name={"readingValue"}
                    placeholder={"Enter reading value"}
                    register={register}
                    registerSettings={{
                        required: true,
                        valueAsNumber: true,
                        validate: {
                            pos: (val) => val > 0,
                            int: (val) => countDecimalPlaces(val) <= 2,
                            real: (val) => isBiggerThanLastReading(val),
                        },
                    }}
                    errors={errors.readingValue}
                    errorMessage={"*Must be greater than previous reading with a maximum of 2 decimal places"}
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
    )
}