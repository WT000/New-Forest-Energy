interface ProgressBarProps {
    text1: string;
    text2: string;
    smallnum: number;
    largenum: number;
}

import './ProgressBar.css';


export default function NavbarStats(props: ProgressBarProps) {
     const {text1, text2, smallnum, largenum} = props
    let textFormat = "text-[#77767A] hover:text-[#242425]"









    return (

        <div className={`${textFormat} grid grid-cols-3 justify-center cursor-pointer mt-8 mb-8 w-full`}>

                <div>

                    <div className="grid grid-cols-3 justify-center cursor-pointer mt-8 mb-8 w-full">


                
                    </div>



                <div id="bar">
                
                <div id="progressBar"></div>

            </div>
            </div>

        </div>


            )

}

