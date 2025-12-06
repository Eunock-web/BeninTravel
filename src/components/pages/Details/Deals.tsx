import AvisCard from "./AvisCard"
import Reservation from "./Reservation"
import { CheckCircle } from "lucide-react"; 

const ListImages = [
    { id: 1, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWniNeJVoBA-ACHZr-9YxpJxRgpkmqvTVnb__XNIKrgJsGaAobjRC1Br4VJEIPLZgw9VNFdrnSAqLKIU3etezaLcwcV73gZolBHL2M-YEwFKGRZz6I51rMdjGlKeigyW0fF7lyYdo7-1e2eyyMhNyzv5LzkLL3AZE-pufrzoiwRVHHj9yBSkbvOnqKbSdoHu16CX2_UbH38eK4a_uxvaZRqXEzM7h9uJ_H5HSqGd4ltktsPTFNYsVAkel-Wbz9FfR8kcO2aqiIG4pJ" },
    { id: 2, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtmrgRUBttg276xq9TnwdJeIpB7dFnsx4eB2l_FPiFZTFTe-SfARNCvOHXKauj3JM8Swskpop8js6gPpuhaTduMj3N0zTNXTRNk7CEIFmQVkKt6ME4IEuAYjHGRSd5grALxMWQc8GmohkTQUq1x-S2IwWPPqyZ-iDCh0LRsLCVr0sff9b39d3uSg--eU8tguQe1tKJOqw6-pUBnVGufL1E5gv1scPkLrh_Wflnnnn3DX4I4BvbX-SOvBjeUqXUkEFVVq4_KkZvQcMd" },
    { id: 3, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWU5k0YQJfmDgtny-hgX6pXVMOet5GDmi203yaZFN7tcg7QjlQbPPpjbuiUSxT0zW4W07wl-vTYOOfxa6O5vskXGytny30dlq_NThm23kT7HiZr4zoVM0BnFrDF-LF_n5Cgx5J4f2cApg2hytxgfOknjkMVsHqsCvAgQx3_k4uZTAXAZW5G87krpTdPa8qy5A9NH-3f3Ffd2h2DYb_ZcSho7nKYmaIdOmQ3PbVTthhVN6Co-uMCFaaVoX_AV78Tz_c-gJZP1ATjIDj" },
    { id: 4, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUe7dfgTEVB41sLtknWqDLA9S2MN5a5_7tMDytpQcxmDUIinH1C2TI6q072-im2jTj4RpwRLi_HMZlvs8AzqXJGceHt9eUFDdEHbpAEOaWAdR9HemGUpXiRPonmJNz5kAZONVwhWHpsfyAxIPA8ovsDNxT6EU2sNOgTqrcCmcZKesgZqURCggAlJNwVLdRtChqE4HB5R0RJkjp6QlFUK_Bv13OuP4N0BYgf8c3EUeOt5DAAvQKj-nWPDkMdy2Oxdg_SuyiJBDfc6BR" },
]

const Lists = [
    { id: 1, inclus: "Vols internationaux aller-retour" },
    { id: 2, inclus: "Hébergement en hôtels étoiles" },
    { id: 3, inclus: "Tous les transferts et transport sur place" },
    { id: 4, inclus: "Guides locaux francophones" },
    { id: 6, inclus: "Frais d'entrées pour tous sites mentionnés" },
]

function Deals() {
    return (
        <div className="max-w-[90vw] mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

                <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-3">

                    <div className="flex flex-col gap-4">
                        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900">
                            Découverte des Palais Royaux d'Abomey
                        </h1>
                        <p className="w-fit bg-red-500 text-white rounded-full px-3 py-1 text-sm font-medium"> 
                            Historique 
                        </p>

                        <div className="flex flex-col gap-4">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFvpfSU9Y7SkvcJnNVE1WfdbA08bJpao6ozSVbnDiojpSOaI_tRpOFNEwHRphLaj3fDXCWp_WcQ0us_8BhvZRDUEBq3bGafICjMWbB1yMxcyzpyIMz5WtUZpCA3B1fNEyXTDAk-4TQo6ojJN_B9icnS9qOAAG7dd_iAIpdAuWaUntGrg7pvo8WSBky_bDlP2X_AAAySnNYn615mQka5tzAM3o7LvGh4OuzF3_5P0IMMzhv5ceJbnU3FnRI6aoUZF_aXQjE0ie_-q3t" alt="Image principale du voyage" className="rounded-xl w-full object-cover aspect-video" />

                            <div className="flex flex-row justify-between gap-3 overflow-x-auto pb-2">
                                {ListImages.map((elts) =>
                                    <img src={elts.img} alt={`Aperçu ${elts.id}`} key={elts.id} 
                                         className="w-25 h-25 rounded-lg object-cover shrink-0 hover:scale-105 transition-transform cursor-pointer" />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl text-gray-800  pt-4">Description</h2>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                            Un voyage immersif au cœur de l'histoire du Bénin. Explorez les vestiges des puissants royaumes, découvrez des traditions séculaires et laissez-vous charmer par un patrimoine culturel d'une richesse exceptionnelle. Ce circuit vous mènera à travers les sites classés au patrimoine mondial de l'UNESCO, vous offrant un aperçu unique de la grandeur du royaume du Dahomey.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-2xl text-gray-800  pt-4">Ce qui est inclus</h2>
                        <ul className="flex flex-col gap-2">
                            {Lists.map((elts) =>
                                <li className="flex items-center gap-3 text-gray-600" key={elts.id}> 
                                    <CheckCircle size={20} className="text-green-500 shrink-0" />
                                    {elts.inclus}
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4  pt-4">
                        <h2 className="font-bold text-2xl text-gray-800">Avis des clients</h2>
                        <AvisCard />
                    </div>
                </div>
                <div className="md:col-span-1 lg:col-span-2">
                    <div className="sticky top-4 p-4 rounded-xl bg-white shadow-xl border border-gray-100">
                        <Reservation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals