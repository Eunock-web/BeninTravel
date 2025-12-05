import { Check } from "lucide-react"

function ConfirmCommande(){
    return (
        <div>
            <div className=" flex flex-col gap-3 items-center justify-center ">
                <Check size={ 30 } className=" border border-red-500 bg-red-500 text-white p-10 rounded-full  "/>
                <h1 className=" font-bold text-3xl text-sky-600  "> Booking Confirmed! </h1>
                <p className=" text-gray-500 font-light text-lg text-center "> Your Trip to Cotonou is booked! A confirmation email with all the details has been sent to your inbox </p>
            </div>

            <div>
                <h1 className=" font-bold text-gray-600 text-2lg "> RESERVATION NUMBER </h1>
                <h1> </h1>
            </div>
        </div>
    )
}

export default ConfirmCommande