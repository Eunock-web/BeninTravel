import Button from "../../Utils/Button";

type PanierResumeProps = {
    subTotal: number;
    taxes?: number;
};

function PanierResumCard({ subTotal, taxes = 0 }: PanierResumeProps){
    const total = subTotal + taxes;
    return (
        <div className=" grid grid-cols-1 gap-3 border border-gray-50 shadow-sm px-3 py-15  rounded-xl">
            <h1 className=" font-bold text-xl "> Résumé </h1>

            <div className=" flex flex-col gap-4 border-b border-gray-400  ">
                <div className=" flex flex-row justify-between ">
                    <p className=" font-light "> Sous total </p>
                    <p className=" font-light "> {subTotal.toLocaleString()} FCFA </p>
                </div>

                <div className=" flex flex-row justify-between mb-2 ">
                    <p className=" font-light "> Taxes & frais </p>
                    <p className=" font-light "> {taxes.toLocaleString()} FCFA </p>
                </div>
            </div>
            
            <div className=" flex flex-row justify-between mb-2.5 ">
                <h1 className=" font-bold  "> Total </h1>
                <h1 className=" font-semibold text-sm "> {total.toLocaleString()} FCFA </h1>
            </div>
            
            <div className=" flex flex-col gap-5 ">
                <Button className="text-white bg-sky-800 p-3  rounded-lg border border-sky-800 w-full " > Lancer la commande </Button>
                <Button className="text-sky-800 w-full hover:bg-sky-800 hover:p-3 hover:rounded-lg hover:text-white hover:cursor-pointer  " > Continuer mes recherches </Button>
            </div>
        </div>
    )
}

export default PanierResumCard