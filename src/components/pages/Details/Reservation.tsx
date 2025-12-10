import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Utils/Button";
import { useVoyageContext } from "../../../context/VoyageContext";

function Reservation(){
    const { selectedVoyage, confirmReservation } = useVoyageContext();
    const navigate = useNavigate();
    const [departDate, setDepartDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [travelers, setTravelers] = useState(1);

    const total = useMemo(() => {
        if (!selectedVoyage) return 0;
        return selectedVoyage.Prix * travelers;
    }, [selectedVoyage, travelers]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        confirmReservation({
            departDate,
            returnDate,
            travelers,
            voyage: selectedVoyage,
        });
        navigate("/confirm");
    };

    return (
        <div className=" p-5  ">
            <div className=" flex flex-col gap-2 justify-center items-center ">
                <h1 className=" font-bold text-2xl "> Réserver votre aventure </h1>
                <p className=" text-gray-400 "> À partir de <span> {selectedVoyage?.Prix?.toLocaleString()} FCFA / </span> personne </p>
            </div>

            <div>
                <form className=" flex flex-col gap-3 " onSubmit={handleSubmit}>

                    <div className=" flex flex-col gap-4 ">
                        <div className=" flex flex-col gap-2 ">
                            <label htmlFor="depart"> Départ </label>
                            <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} className=" bg-gray-200 p-3 rounded-lg " required />
                        </div>

                        <div className=" flex flex-col gap-2 ">
                            <label htmlFor="depart"> Retour </label>
                            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className=" bg-gray-200 p-3 rounded-lg " required />
                        </div>
                    </div>

                    <div className=" flex flex-col gap-2 ">
                        <label htmlFor="voyageurs"> Voyageurs </label>
                        <input type="number" min={1} value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className=" bg-gray-200 p-3 rounded-lg " />
                    </div>

                    <div className=" flex flex-row justify-between ">
                        <h1 className=" font-extralight "> Prix Total </h1>
                        <h1 className=" font-bold "> {total.toLocaleString()} FCFA </h1>
                    </div>

                    <div className="">
                        <Button className= " bg-sky-800 text-white p-3 border border-blue-800 rounded-xl w-full " > Réserver </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Reservation