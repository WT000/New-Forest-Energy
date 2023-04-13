import ReadingForm, { ReadingFormData } from "../../../../components/forms/ReadingForm/ReadingForm";
import axios from "axios";
import { useRouter } from 'next/router'
import { useMutation } from "react-query";
import { BodyWithoutNavbar } from "../../../../components/Body/Body";


export default function NewReading(props) {

    const router = useRouter()

    const { isLoading, mutate } = useMutation(
        (newReading: ReadingFormData) => {
            return axios.post("/api/reading", newReading);
        },
        {
            onSuccess: (data) => {
                router.back();
            },
        }
    );

    return (
        <BodyWithoutNavbar
        currentPage="New Reading"
        welcomeText="">
            <ReadingForm 
                homeId={router?.query?.id?.toString()}
                onSubmit={async (reading) => {
                    mutate(reading);
                }}
                onCancel={() => {
                    router.push("/");
                }}
                readingValueValidator={async (homeId, readingVal) => {
                    try {
                        // Attempt to find email
                        const res = await axios.get(`/api/checkreading?homeId=${homeId}&readingVal=${readingVal}`);

                        if (res.status == 200) {
                            return true;
                        }
                    } catch (e) {
                        console.log(e);
                        return false;
                    }

                    return false;
                }}
                isLoading={isLoading}
            />
        </BodyWithoutNavbar>
    )
}