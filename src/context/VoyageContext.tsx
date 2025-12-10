import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import voyagesData from "../VoyagesData";
import { useVoyageFilters } from "../hooks/useVoyageFilters";
import type { VoyageWithMeta } from "../hooks/useVoyageFilters";

type ReservationPayload = {
    departDate: string;
    returnDate: string;
    travelers: number;
    voyage?: VoyageWithMeta | null;
};

type CartItem = {
    id: number;
    title: string;
    unitPrice: number;
    travelers: number;
    departDate?: string;
    returnDate?: string;
    image?: string;
};

type ReservationState = ReservationPayload & {
    confirmed: boolean;
    total: number;
    voyage: VoyageWithMeta | null;
};

type VoyageContextType = {
    voyages: VoyageWithMeta[];
    filteredVoyages: VoyageWithMeta[];
    filters: ReturnType<typeof useVoyageFilters>["filters"];
    priceBounds: ReturnType<typeof useVoyageFilters>["priceBounds"];
    availableTypes: ReturnType<typeof useVoyageFilters>["availableTypes"];
    toggleType: ReturnType<typeof useVoyageFilters>["toggleType"];
    updateFilter: ReturnType<typeof useVoyageFilters>["updateFilter"];
    resetFilters: ReturnType<typeof useVoyageFilters>["resetFilters"];
    selectedVoyage: VoyageWithMeta | null;
    selectVoyage: (id: number) => void;
    reservation: ReservationState;
    confirmReservation: (payload: ReservationPayload) => void;
    cartItems: CartItem[];
    isShopOpen: boolean;
    closeShop: () => void;
};

const VoyageContext = createContext<VoyageContextType | undefined>(undefined);

const voyageTypes: Record<number, string> = {
    1: "Plage",
    2: "Aventure",
    3: "Historique",
    4: "Détente",
    5: "Safari",
    6: "Culture",
    7: "Mémoire",
    8: "Cuisine",
    9: "Événement",
    10: "Nature",
    11: "Éco",
    12: "Découverte",
    13: "Spirituel",
    14: "Sport",
    15: "Plage",
    16: "Spirituel",
    17: "Culture",
    18: "Détente",
    19: "Artisanat",
    20: "Nature",
};

const normalizeVoyages = (): VoyageWithMeta[] => {
    return voyagesData.map((voyage: VoyageWithMeta) => {
        const rating = Number.parseFloat(voyage.Avis?.split("/")[0] || "0") || 0;
        const travelType = voyageTypes[voyage.IdVoyage] ?? "Autre";
        return { ...voyage, rating, travelType };
    });
};

export function VoyageProvider({ children }: { children: ReactNode }) {
    const voyages = useMemo(() => normalizeVoyages(), []);
    const filtersApi = useVoyageFilters(voyages);
    const [selectedVoyageId, setSelectedVoyageId] = useState<number | null>(
        voyages[0]?.IdVoyage ?? null,
    );
    const selectedVoyage = useMemo(
        () => voyages.find((v) => v.IdVoyage === selectedVoyageId) ?? voyages[0] ?? null,
        [selectedVoyageId, voyages],
    );

    const [reservation, setReservation] = useState<ReservationState>({
        departDate: "",
        returnDate: "",
        travelers: 1,
        voyage: selectedVoyage ?? null,
        confirmed: false,
        total: selectedVoyage?.Prix ?? 0,
    });

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isShopOpen, setIsShopOpen] = useState(false);

    const selectVoyage = (id: number) => {
        setSelectedVoyageId(id);
    };

    const confirmReservation = (payload: ReservationPayload) => {
        const voyage = payload.voyage ?? selectedVoyage ?? voyages[0] ?? null;
        if (!voyage) return;

        const travelers = payload.travelers || 1;
        const total = voyage.Prix * travelers;

        setReservation({
            ...payload,
            voyage,
            travelers,
            confirmed: true,
            total,
        });

        setCartItems([
            {
                id: voyage.IdVoyage,
                title: voyage.Nom,
                unitPrice: voyage.Prix,
                travelers,
                departDate: payload.departDate,
                returnDate: payload.returnDate,
                image: voyage.GaleriesDImages?.[0],
            },
        ]);
        setIsShopOpen(true);
    };

    const value: VoyageContextType = {
        voyages,
        filteredVoyages: filtersApi.filteredVoyages,
        filters: filtersApi.filters,
        priceBounds: filtersApi.priceBounds,
        availableTypes: filtersApi.availableTypes,
        toggleType: filtersApi.toggleType,
        updateFilter: filtersApi.updateFilter,
        resetFilters: filtersApi.resetFilters,
        selectedVoyage,
        selectVoyage,
        reservation,
        confirmReservation,
        cartItems,
        isShopOpen,
        closeShop: () => setIsShopOpen(false),
    };

    return <VoyageContext.Provider value={value}>{children}</VoyageContext.Provider>;
}

export function useVoyageContext() {
    const ctx = useContext(VoyageContext);
    if (!ctx) {
        throw new Error("useVoyageContext doit être utilisé dans VoyageProvider");
    }
    return ctx;
}





