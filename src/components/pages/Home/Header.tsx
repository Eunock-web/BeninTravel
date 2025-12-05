import Button from "../../Utils/Button"
import NavBar from "../../Utils/NavBar"


function Header(){
    return (
        <div className=" mx-auto flex flex-col  gap-4 ">
            <NavBar  />

        <div className=" bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuB7Zsk12TycK06936zbD1tp0U_cMxdyTifnM8UTwgasOjMNYS17Lc0oK9-Mrg0oN6gAHV7ea7j7f2732lV7jbmP_5QHwyH-xx62rik85IJIJCHE7DH4DPsQQQsX2OkfAFHdZ87pK2d-dfgnb-j7TQOSo0MYnHFP3bp9ZsKpX8NIaLLmhyLAgAzC_RD9RLkbv1hv5USHmqgRTnW1FpxScJqCQ6Ljam559hyHv_4jwMZP2YBPhy1Fy0sOJJfRTSZp7D-UCB-1XXtOTkth)] w-full bg-cover  lg:h-[60vh] flex flex-col justify-center items-center gap-3">
            <div className=" flex flex-col justify-center items-center p-2 gap-6 mx-4 md:mx-2 w-[85vw]  ">
                <div className=" flex flex-col gap-4 ">
                    <h1 className=" font-display text-4xl font-bold md:text-5xl text-center text-white "> Find Your Perfect Benin Adventure </h1>
                    <h2 className=" font-body text-base md:text-lg text-center text-white "> Explore ancient kingdoms, vibrant markets, and stunning coastlines.</h2>
                </div>

                <div className=" border border-white/10 bg-white/10 rounded-xl p-13 lg:w-full   ">
                    <form  className=" grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        <div className=" flex flex-col gap-2 ">
                            <label htmlFor="destination" className=" text-white "> Destination </label>
                            <input type="search" placeholder=" Enter your destination e.g. Ouidah " className=" p-3 text-white rounded-lg ring ring-white " />
                        </div>

                        <div className=" flex flex-col gap-2 ">
                            <label htmlFor="depart" className=" text-white "> Date Depart  </label>
                            <input type="date" className=" p-3 text-white rounded-lg ring ring-white " />                    
                        </div>

                        <div className=" flex flex-col gap-2 "> 
                            <label htmlFor="nbrVoyageur" className=" text-white "> Travelers </label>
                            <input type="number" placeholder=" e.g.2 " className=" p-3 text-white rounded-lg ring ring-white " />
                        </div>

                        <div className=" md:col-span-2 lg:col-span-3 ">   
                            <Button className={ "text-white text-lg p-3 items-center justify-center  font-mediun bg-blue-600 rounded-xl w-full  " }  > Search </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header