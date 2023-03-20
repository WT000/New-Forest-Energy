import Image from "next/image";

interface PopupProps {
    text1: string;
    text2: string;
    num1: number;
    num2: number;
    image: string;
    name: string;
  }

  
  
  export default function Popup(props: PopupProps) {
    const { text1, text2, num1, num2, image, name } = props;

  
    return (


        
        <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div className="relative w-full h-full max-w-2xl md:h-auto">


        <div className="text-right ">

            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-grey" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                </button>

        </div>

    
        

        <div className="relative bg-white rounded-lg dark:bg-gray-700 ">

        
            

        

        <h3 className="text-xl font-semibold text-gray-900 dark:text-black pl-6">
                    Josh (Gardener)
                </h3>
                

            

            <div className="flex items-start justify-between rounded-t dark:border-gray-600">

            <p className="text-s font-semibold text-gray-900 dark:text-black pt-1 pl-6">
                    14th Feb 2023 at 15:01pm
                </p>

                <p className="text-s font-semibold text-gray-900 dark:text-black pt-1 pr-6">
                    77,426.5 kWh
                </p>

                
                
             
            </div>

            <div className="p-6 space-y-6">
            <Image
                        className="rounded-[20px]"
                        src={image}
                        alt={name}
                        width="783"
                        height="636"
                        unoptimized={true}
                    />

            </div>

            
        </div>
    </div>
</div>

    );
  }
  