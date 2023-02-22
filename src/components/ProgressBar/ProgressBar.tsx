interface ProgressBarProps {
    text1: string;
    text2: string;
    smallnum: number;
    largenum: number;
}

import './ProgressBar.css';
import CSS from 'csstype';



export default function NavbarStats(props: ProgressBarProps) {
     const {text1, text2, smallnum, largenum} = props
    let textFormat = "text-[#77767A] hover:text-[#242425]"


    let onepercent = largenum / 100
    let prcnt = smallnum / onepercent

    const progressStyle: CSS.Properties = {
        width: `${prcnt}%`
      };




    return (

        <div className={`${textFormat} grid grid-cols-3 justify-center cursor-pointer mt-8 mb-8 w-full`}>

                <div>

                    <div className="grid grid-cols-3 justify-center cursor-pointer mt-8 mb-8 w-full">

                
                    </div>



                <div id="bar">
                
                <div id="progressBar" style={progressStyle}></div>

            </div>
            </div>

        </div>


            )

}

