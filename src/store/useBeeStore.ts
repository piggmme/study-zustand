import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BeeState = {
  bees: number;
  addBee: () => void;
};

export const useBeeStore = create(
  persist<BeeState>(
    (set, get) => ({
      bees: 0,
      addBee: () => set({ bees: get().bees + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
