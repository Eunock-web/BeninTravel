import Button from "./Button";

interface CardInterface{
    voyageImage?: string,
    voyageTitre?: string,
    voyageDescription?: string,
    voyagePrix?: number
}

function Card( {voyageTitre, voyageDescription, voyageImage, voyagePrix} : CardInterface ) {
    return (
        <>
            <div className=" border border-gray-400 rounded-xl w-[25vw] ">
                <div className=" border-b  hover:cursor-pointer  ">
                    <img src={voyageImage} alt="" className=" aspect-square object-cover border border-neutral rounded-sm  " />
                </div>
                <div className=" flex flex-col gap-3 p-3  ">
                    <div className=" flex flex-col gap-2 ">
                        <h1 className=" text-xl  "> {voyageTitre} </h1>
                        <p> {voyageDescription} </p>
                    </div>

                    <div className=" flex flex-col ">
                        <div className=" flex flex-row gap-1 ">

                        </div>
                        <div className=" flex flex-row justify-between">
                            <p> <span className=""> $ {voyagePrix} </span> <span className=""> /person </span> </p>
                            <Button className="" > View Detail </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card