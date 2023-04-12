import Image from "next/image";
import { ReactNode } from "react";
import ReadingPopupLayout from "../layouts/ReadingPopupLayout/ReadingPopupLayout";
import "flowbite";

interface PopupProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Popup(props: PopupProps) {
    const { onClick, children } = props;

    return (
        <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="flex items-center justify-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full bg-opacity-10 bg-darkblue-900/90 "
        >
            <div className="relative w-full h-full max-w-2xl md:h-auto ">
                <div className="text-right ">
                    <button
                        type="button"
                        className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-grey"
                        data-modal-target="defaultModal"
                        data-modal-hide="defaultModal"
                        onClick={() => onClick()}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-10 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}
