import  { Flower2, Heart, ShieldCheck,  } from "lucide-react"
import Button from "../../Utils/Button"
import NavBar from "../../Utils/NavBar"
import Footer from "../Home/Footer"

const Valeurs  = [
    {
        id:1,
        icone: <Flower2 className=" border border-sky-200 bg-sky-200 p-3 w-15 h-15 rounded-full text-sky-700 " />,
        titre: "Authenticité",
        description : "Nous privilégions les experiences locales et authentiques pour une immersion totale."
    },

    {
        id:2,
        icone:<ShieldCheck className=" border border-sky-200 bg-sky-200 p-3 w-15 h-15 rounded-full text-sky-700 " />,
        titre: "Confiance",
        description : "Nous garantissons la sécurité et la fiabilité de toutes nos offres de voyage."
    },

    {
        id:3,
        icone: <Heart className=" border border-sky-200 bg-sky-200 p-3 w-15 h-15 rounded-full text-sky-700 " />,
        titre: "Passion",
        description : "Notre amour est le moteur de out ce que nous faisons."
    }
]

function About(){
    return (
        <div className=" flex flex-col gap-2 ">

            <NavBar />

                <div className=" bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCONUNm68IgHvwYrCmYS5DFm3AmHDIJOludYMiCick7jd3_adtULJ7ARW-VHWDh_OCEDIR3N8EPwee1X_-3MOk0_35ufhpAayQLJFIf4C_NfTfjZWDYw-OYSKt1qaUY3LrDaiiGqIeLuyoDJ1Qg8c3AgvRLumhmX2RHnKg2x5VeXI_JM0P905derKk9RbMCxU5CrcfxAyUyrRjNRVwciiQUTJsJ284AsLExhE1grqM9gSYzZSsVtIpMLzITe2sDL780x9mo03qtz5dh)]  flex min-h-[480px] flex-col items-cente justify-center bg-cover bg-center bg-no-repeat p-4 mb-5" >
                    <h1 className=" font-bold text-3xl text-white text-center "> A propos de Nous </h1>
                    <p className=" text-white text-light text-center text-lg  "> Votre porte d'entrée pour découvrir les merveilles authentiques et inoubliables du Bénin. </p>
                </div>

            <div className=" flex flex-col justify-center items-center gap-10 mx-2.5 ">
                

                <div className=" flex flex-col justify-center items-center gap-3">
                    <h1 className=" text-sky-700 font-bold text-2xl "> Notre Mission </h1>
                    <p className=" text-gray-500 text-base text-center "> Nous nous engageons à vous offir une experience de voyage authentique et inouliable au Benin. Notre mission est de simplifier la recherche et la reservation de voyages, tout en promouvant le riche patrimoine culturel et naturel du pays, en connectant les voyageurs curieux avec la véritable essence du Bénin.</p>
                </div>

                <div className=" flex flex-col gap-3 justify-center items-center ">
                    <h1 className=" text-sky-700 font-bold text-2xl "> Notre Histoire </h1>
                    <p className=" text-gray-500 text-base text-center "> Fondé par une équipe de passionnés du voyage et fiers de leurs racines béninoises, Bénin Travel est né d'un désir simple: partager la beauté, l'histoire et la chaleur du Bénin avec le monde. Nous avons constaté qu'il était souvent difficile de trouver des informations fiables et de planifier des voyages uniques. C'est pourquoi nous avons créé ce portail, un pont entre les trésors cachés du Bénin et les voyageurs en quête d'aventures significatives.</p>
                </div>


<div className="flex flex-col gap-8 p-4 md:p-8">
    
    <h1 className="text-sky-700 font-extrabold text-3xl md:text-4xl text-center"> Nos Valeurs </h1>
    
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {
            Valeurs.map((elts, index) =>
                <div key={index} className="flex flex-col items-center ">
                    
                    <div className="mb-4 text-sky-600">
                        {elts.icone}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-xl text-center text-gray-800" > 
                            {elts.titre} 
                        </h2>
                        <p className="text-center text-sm font-normal text-gray-600"> 
                            {elts.description} 
                        </p>
                    </div>
                </div>
            )
        }
    </div>
</div>
                <div className=" flex flex-col space-y-5 justify-center items-center  ">
                    <h1 className=" font-bold text-2xl text-sky-700 "> Rencontrez l'Equipe </h1>
                    
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-50 ">
                        <div className=" flex flex-col gap-2 ">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDQUyfzTF6Z8Mh-T_bvRe_v5DS742rAuXl1LUttuLJpn3yl_3OyxbFYZ-MbYdvFgoeZ2nN8g6d5pACmhpllhwESvXZx9yT8MoaHI5Vvb2lbXVX4oarcs46c7r8OBaOUwdSss1PcZsaFPKLunNF4PGkEzPU9UllEzQfgUsdW7BgxvX48ZYsWl0MI_k7F_ghVJXZv5cFf_t6DNUUQkWVp9MEMZ3ITiFdsuh2gy5Vl69-fvPpa6PNgNakQ9ZrTk44aLjQ-WLHmjuB4Phu" alt=""  className=" rounded-full w-30 h-30 "/>
                            <div className= " grid grid-cols-1  gap-1 ">
                                <h1 className=" font-semibold text-lg text-center "> Kagami SENJOU </h1>
                                <p className=" text-light  text-sky-700 text-center "> Vice President </p>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-2 ">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASd-tv4NSWYI3Kr35amQ7Vme8sD0Tymd7-D-nGZ0_6CcM_6l4vEQUHF5aake2TXYUHuaxrDPu3upOuk08PJT_5zVtWscrEZRngbytfPMJlvDtg_D4uziuPng-pNaEwBgpG_NPqf0Xij7k7sd2sXzaz6yGUj-ugi6Gjt1wjAPYuxjYmeCNK_xKNU_hZ5vlF14qC4IAtCPBhYhKSCYNF0mtdTpgqMBHujmyZYS7N24Oew4tZ1NcCzl4lBsJhlwwhr65j1KYS6MFq03ZI" alt=""  className=" rounded-full w-30 h-30 "/>
                            <div className= " grid grid-cols-1  gap-1 ">
                                <h1 className=" font-semibold text-lg text-center "> Gojo SATORU </h1>
                                <p className=" text-light  text-sky-700 text-center ">Securité </p>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-2 ">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLbEh4Dj4-hCVsyDsCMFsBPPgD6SY2heY-YX7cZHr3GB4YKP1v5wisOFfAZiCSP0E8Txahq2fmJWxFvfLKyWITRWRJUvu68zjkkh97eMZh-e5fwpagWwOpgeeBtjs2MnTyWdz-y3UqKmf0tieoMeEdBFY2O0uHcYirT231cygwsNuFnW8J9J0qOaDmUSv0FqGht_JJdrimRQS5MHtvgETVhZxjBj-am3ZbLGtrLjetuppqPpaEQtRSBdKuL9nD9KrS92kWayjr37PX" alt=""  className=" rounded-full w-30 h-30 "/>
                            <div className= " grid grid-cols-1  gap-1 ">
                                <h1 className=" font-semibold text-lg text-center "> Light YAGAMI </h1>
                                <p className=" text-light  text-sky-700 text-center "> Fondateur et CEO </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className=" flex flex-col gap-4 justify-center items-center border border-gray-100 p-2 bg-gray-100 rounded-xl  ">
                    <h1 className=" font-bold text-sky-800 text-2xl text-center "> Ce que nos voyageurs disent </h1>
                    <p className=" text-center font-light  "> Un voyage inoubliable ! Benin Travel a parfaitement organisé notre séjour, nous permettant de découvrir la culture riche et les paysages magnifiques du Benin en toute sécurité. Je recommande vivement ! </p>
                    <h2 className=" font-ligth ">  -Sophie L. </h2>
                </div>

                <div className=" flex flex-col gap-2 justify-center items-center mb-30">
                    <h1 className=" font-bold text-sky-700 text-2xl "> Prêt pour votre aventure? </h1>
                    <p className=" font-light  text-base text-center "> Commencez à explorer les trésors du Benin dès audjourd'hui. </p>
                    <Button className= " text-white bg-red-400 p-2 rounded-sm "> Découvrez nos offres </Button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About