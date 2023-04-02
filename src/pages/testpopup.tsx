
import Popup from "../components/Popup/Popup";

import ReadingPopupLayout from "../components/layouts/ReadingPopupLayout/ReadingPopupLayout";

import Role from "../lib/utils/roles"







export default function test() {


    return (

        <Popup > 
            <ReadingPopupLayout date={new Date()} name={"Jack"} role={Role.Delegate} distance={0} image={"/stories/popup1.jpg"} imgname={"he"}/>
                
            
        </Popup>
        






    )
}