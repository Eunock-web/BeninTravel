import { Star } from "lucide-react"

const Avis = [
    {
        id: 1,
        auteur : "Marie Dubois",
        avis : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam, eveniet placeat magni perspiciatis totam unde asperiores, nam repellat quis maiores laboriosam possimus. Nihil mollitia vitae excepturi illo, nesciunt rem!"
    },

    {
        id: 2,
        auteur : "Jean Martin",
        avis : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam, eveniet placeat magni perspiciatis totam unde asperiores, nam repellat quis maiores laboriosam possimus. Nihil mollitia vitae excepturi illo, nesciunt rem!"
    },

    {
        id: 3,
        auteur : "Light ",
        avis : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam, eveniet placeat magni perspiciatis totam unde asperiores, nam repellat quis maiores laboriosam possimus. Nihil mollitia vitae excepturi illo, nesciunt rem!"
    },
]

function AvisCard(){
    return (
        <div className=" border border-gray-200 rounded-xl p-3  ">
            <div className="flex flex-row gap-2 border-b border-gray-300 py-3 ">
                <div className=" flex flex-row ">
                    <Star size={ 20 } className=" text-amber-500" />
                    <Star size={ 20 } className=" text-amber-500" />
                    <Star size={ 20 } className=" text-amber-500 " />
                    <Star size={ 20 } className=" text-amber-500" />
                    <Star size={ 20 } className=" text-amber-500" />
                </div>
                <p> 4.2 sur 5 </p>
            </div>

            <div>
                { Avis.map((elts) =>
                    <div className=" flex flex-col gap-2 border-b border-gray-300 py-3" key={elts.id}>
                        <h1 className=" font-bold text-lg "> {elts.auteur} </h1>
                        <p className=" text-gray-400 text-sm ">  {elts.avis} </p>
                    </div>
                ) }
            </div>

        </div>
    )
}

export default AvisCard