import { create } from "zustand";

export type SortBy = "asc" | "desc";

interface InitialFilterState {
  category: string;
  sortValue: SortBy;
  filterByCategory: (cat: string) => void;
  sort: (sortBy: SortBy) => void;
}

export const useFilter = create<InitialFilterState>((set) => ({
  category: "",
  sortValue: "asc",
  filterByCategory: (cat) => {
    set((state) => {
      return {
        category: cat === state.category ? "" : cat,
      };
    });
  },
  sort: (sortBy) => {
    set((state) => {
      return {
        sortValue: sortBy,
      };
    });
  },
}));
