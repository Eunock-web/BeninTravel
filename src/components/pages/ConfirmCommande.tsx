import { Check } from "lucide-react"
import Button from "../Utils/Button"

function ConfirmCommande(){
    return (
        <div className=" flex flex-col gap-8  rounded-xl p-10 md:justify-items-center-safe md:w-2xl min-h-screen ">
            <div className=" flex flex-col gap-3 items-center justify-center ">
                <Check size={ 80 } className=" border border-red-400 bg-red-400 text-white p-3 rounded-full  "/>
                <h1 className=" font-bold text-3xl text-sky-600  "> Booking Confirmed! </h1>
                <p className=" text-gray-500 font-light text-lg text-center "> Your Trip to Cotonou is booked! A confirmation email with all the details has been sent to your inbox </p>
            </div>

            <div className=" flex flex-col justify-center items-center border border-gray-100 bg-gray-100 p-5 rounded-xl ">
                <h1 className=" font-medium text-gray-600 text-2lg "> RESERVATION NUMBER </h1>
                <h1 className=" font-bold text-3xl ">BN-8675309 </h1>
            </div>

            <div>
                <Button className=" bg-blue-500 text-white items-center w-full p-4 rounded-sm " > Return to HomePage </Button>
            </div>
        </div>
    )
}

export default ConfirmCommande