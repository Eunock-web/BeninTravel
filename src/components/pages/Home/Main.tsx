import Card from "../../Utils/Card";

function Main() {
    return (
        <div className="max-w-8xl mx-auto p-4 md:p-8 lg:grid lg:grid-cols-4 lg:gap-8">
            
            <section className="mb-6 lg:mb-0 lg:col-span-1">
                <h1 className="text-2xl font-semibold mb-4">Filtres</h1>
                <div className="p-4 bg-gray-50 rounded-lg h-32"></div> 
            </section>

            <section className="lg:col-span-3"> 
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    
                </div>
            </section>
        </div>
    );
}

export default Main;