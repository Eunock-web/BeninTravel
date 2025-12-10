import { useMemo, useState } from "react";

export type VoyageWithMeta = {
    IdVoyage: number;
    Nom: string;
    Description: string;
    Avis: string;
    Prix: number;
    NombresDeVoyageurs: number;
    Destinations: string;
    DateDeDepart: string;
    GaleriesDImages: string[];
    Inclusions?: string;
    rating: number;
    travelType: string;
};

export type FiltersState = {
    search: string;
    price: [number, number];
    types: Set<string>;
    minRating: number;
    minTravelers: number;
};

export function useVoyageFilters(voyages: VoyageWithMeta[]) {
    const priceBounds = useMemo<[number, number]>(() => {
        const prices = voyages.map((v) => v.Prix);
        return [Math.min(...prices), Math.max(...prices)];
    }, [voyages]);

    const [filters, setFilters] = useState<FiltersState>({
        search: "",
        price: priceBounds,
        types: new Set<string>(),
        minRating: 0,
        minTravelers: 1,
    });

    const availableTypes = useMemo(() => Array.from(new Set(voyages.map((v) => v.travelType))), [voyages]);

    const filteredVoyages = useMemo(() => {
        const [minPrice, maxPrice] = filters.price;
        return voyages.filter((voyage) => {
            const matchesSearch =
                filters.search.trim().length === 0 ||
                voyage.Nom.toLowerCase().includes(filters.search.toLowerCase()) ||
                voyage.Destinations.toLowerCase().includes(filters.search.toLowerCase());

            const matchesPrice = voyage.Prix >= minPrice && voyage.Prix <= maxPrice;

            const matchesType = filters.types.size === 0 || filters.types.has(voyage.travelType);

            const matchesRating = voyage.rating >= filters.minRating;

            const matchesTravelers = voyage.NombresDeVoyageurs >= filters.minTravelers;

            return matchesSearch && matchesPrice && matchesType && matchesRating && matchesTravelers;
        });
    }, [filters, voyages]);

    const updateFilter = <K extends keyof FiltersState>(key: K, value: FiltersState[K]) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const toggleType = (type: string) => {
        setFilters((prev) => {
            const nextTypes = new Set(prev.types);
            if (nextTypes.has(type)) {
                nextTypes.delete(type);
            } else {
                nextTypes.add(type);
            }
            return { ...prev, types: nextTypes };
        });
    };

    const resetFilters = () => {
        setFilters({
            search: "",
            price: priceBounds,
            types: new Set<string>(),
            minRating: 0,
            minTravelers: 1,
        });
    };

    return {
        filters,
        filteredVoyages,
        updateFilter,
        toggleType,
        resetFilters,
        availableTypes,
        priceBounds,
    };
}





