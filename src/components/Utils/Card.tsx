import Button from "./Button";

interface CardInterface{
    voyageImage: string,
    voyageTitre: string,
    voyageDescription: string,
    voyagePrix: number
}

function Card( {voyageTitre, voyageDescription, voyageImage, voyagePrix} : CardInterface ) {
    return (
        <>
            <div>
                <img src={ voyageImage } alt="" />
            </div>
            <div className=" flex flex-col gap-3 ">
                <div className=" flex flex-col gap-2 ">
                    <h1> { voyageTitre } </h1>
                    <p> { voyageDescription } </p>
                </div>

                <div className=" flex flex-col ">
                    <div className=" flex flex-row gap-1 ">

                    </div>
                    <div className=" flex flex-row justify-between">
                        <p> <span className=""> $ { voyagePrix } </span> <span className=""> /person </span> </p>
                        <Button className={ "bg-blue-500 p-2 " } > View Details </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card