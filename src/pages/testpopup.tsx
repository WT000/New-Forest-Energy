
import Popup from "../components/Popup/Popup";

import ReadingPopupLayout from "../components/layouts/ReadingPopupLayout/ReadingPopupLayout";

import Reading from "../components/Reading/Reading"





export default function test() {

    const datea = new Date()


    const popupitems = [
        

    ]
    return (

        // <Popup > 
        //     <ReadingPopupLayout date={new Date()}/>
                
            
        // </Popup>
        

        // <p> hello {datea.toLocaleTimeString("en-GB", {hour12: true})}</p>

        <Reading creator={"eee"} value={0} image={""} createdAt={new Date("2023-02-25T11:19:31.608Z")} onClick={function (): void {
                throw new Error("Function not implemented.");
            } }></Reading>



    )
}