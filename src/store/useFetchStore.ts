import { create } from "zustand";

interface FetchState {
  fishies: any;
  fetchFish: () => void;
}

export const useFetchStore = create<FetchState>((set) => ({
  fishies: {},
  fetchFish: () => {
    setTimeout(() => {
      set({ fishies: { tuna: 1, salmon: 2, date: new Date().toTimeString() } });
    }, 100);
  },
}));
