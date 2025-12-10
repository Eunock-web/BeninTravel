import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Card from "../../Utils/Card";
import { useVoyageContext } from "../../../context/VoyageContext";

function Main() {
    const navigate = useNavigate();
    const {
        filteredVoyages,
        filters,
        priceBounds,
        availableTypes,
        toggleType,
        updateFilter,
        selectVoyage,
        resetFilters,
    } = useVoyageContext();

    const handleSelect = (id: number) => {
        selectVoyage(id);
        navigate("/deals");
    };

    return (
        <div className="max-w-8xl mx-auto p-4 md:p-8 lg:grid lg:grid-cols-4 lg:gap-8 mb-30">
            <section className="mb-6 lg:mb-0 lg:col-span-1 space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Filtres</h1>
                    <button
                        className="text-sm text-blue-700 underline"
                        onClick={resetFilters}
                    >
                        Réinitialiser
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-bold">Destination / Mot-clé</label>
                        <input
                            type="search"
                            value={filters.search}
                            onChange={(e) => updateFilter("search", e.target.value)}
                            placeholder="Ouidah, plage, safari..."
                            className="p-3 rounded-lg border border-gray-200"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-bold">Budget (FCFA)</label>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    min={priceBounds[0]}
                                    max={filters.price[1]}
                                    value={filters.price[0]}
                                    onChange={(e) =>
                                        updateFilter("price", [
                                            Number(e.target.value),
                                            filters.price[1],
                                        ])
                                    }
                                    className="w-1/2 p-2 rounded border border-gray-200"
                                />
                                <input
                                    type="number"
                                    min={filters.price[0]}
                                    max={priceBounds[1]}
                                    value={filters.price[1]}
                                    onChange={(e) =>
                                        updateFilter("price", [
                                            filters.price[0],
                                            Number(e.target.value),
                                        ])
                                    }
                                    className="w-1/2 p-2 rounded border border-gray-200"
                                />
                            </div>
                            <input
                                type="range"
                                min={priceBounds[0]}
                                max={priceBounds[1]}
                                value={filters.price[1]}
                                onChange={(e) =>
                                    updateFilter("price", [
                                        filters.price[0],
                                        Number(e.target.value),
                                    ])
                                }
                                className="w-full"
                            />
                            <p className="text-sm text-gray-500">
                                {filters.price[0].toLocaleString()} - {filters.price[1].toLocaleString()} FCFA
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-bold">Type de voyage</label>
                        <div className="flex flex-col gap-2">
                            {availableTypes.map((type) => (
                                <label key={type} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filters.types.has(type)}
                                        onChange={() => toggleType(type)}
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-lg font-bold">Note minimale</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="range"
                                min={0}
                                max={5}
                                step={0.5}
                                value={filters.minRating}
                                onChange={(e) => updateFilter("minRating", Number(e.target.value))}
                                className="w-full"
                            />
                            <span className="text-sm font-medium">{filters.minRating.toFixed(1)}+</span>
                        </div>
                        <div className="flex flex-row">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <Star
                                    key={idx}
                                    size={20}
                                    className={idx < Math.round(filters.minRating) ? "text-blue-800" : "text-gray-300"}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-bold">Voyageurs minimum</label>
                        <input
                            type="number"
                            min={1}
                            value={filters.minTravelers}
                            onChange={(e) => updateFilter("minTravelers", Number(e.target.value))}
                            className="p-3 rounded-lg border border-gray-200"
                        />
                    </div>
                </div>
            </section>

            <section className="lg:col-span-3">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-600">
                        {filteredVoyages.length} offre(s) correspondent à vos filtres
                    </p>
                    <button
                        className="text-sm text-blue-700 underline"
                        onClick={() => selectVoyage(filteredVoyages[0]?.IdVoyage ?? 0)}
                    >
                        Prévisualiser la première offre
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {filteredVoyages.map((elts) => (
                        <Card
                            voyageTitre={elts.Nom}
                            voyageDescription={elts.Description}
                            voyagePrix={elts.Prix}
                            voyageImage={elts.GaleriesDImages[0]}
                            key={elts.IdVoyage}
                            onSelect={() => handleSelect(elts.IdVoyage)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Main;