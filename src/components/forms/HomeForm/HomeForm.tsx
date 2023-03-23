import { IoBed, IoFlash, IoFootsteps, IoImages, IoSave, IoText, IoWallet } from "react-icons/io5";
import Button from "../../Button/Button";
import InputLayout from "../../layouts/InputLayout/InputLayout";
import Tile, { TileType } from "../../Tile/Tile";

export default function HomeForm() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-5">
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
                <p>Image Preview</p>
            </Tile>

            {/* Name */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout icon={<IoText size="32px" />} text={"Home Name"} type={"text"} name={"name"} placeholder={"My New Home..."} />
            </Tile>

            {/* Beds */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout icon={<IoBed size="32px" />} text={"Number of Beds"} type={"number"} name={"beds"} placeholder={"4"} />
            </Tile>

            {/* Cost Buffer */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoWallet size="32px" />}
                    text={"Cost Buffer"}
                    type={"number"}
                    name={"costbuffer"}
                    placeholder={"2.23"}
                    currency={true}
                />
            </Tile>

            {/* Instructions */}
            {/* May need a custom size set on md: breakpoint */}
            <Tile tileType={TileType.fill} customClass="row-span-2" clickable={false}>
                <InputLayout
                    icon={<IoFootsteps size="32px" />}
                    text={"Instructions"}
                    type={"textarea"}
                    name={"instructions"}
                    placeholder={"Enter the room to.."}
                />
            </Tile>

            {/* Energy Tariff (per kWh) */}
            <Tile tileType={TileType.input} clickable={false}>
                <InputLayout
                    icon={<IoFlash size="32px" />}
                    text={"Energy Tariff (per Kwh)"}
                    type={"number"}
                    name={"energytariff"}
                    placeholder={"2.23"}
                    currency={true}
                />
            </Tile>

            <Button text="Submit" icon={<IoSave className="text-white" />} />
        </div>
    );
}
