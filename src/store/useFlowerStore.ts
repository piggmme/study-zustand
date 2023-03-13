import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

type FlowerState = {
  flowers: number;
  addFlowers: (by: number) => void;
  removeFlower: () => void;
};

export const useFlowerStore = create(
  devtools(
    immer<FlowerState>((set) => ({
      flowers: 0,
      addFlowers: (by) =>
        set((state) => {
          state.flowers += by;
        }),
      removeFlower: () =>
        set((state) => {
          state.flowers -= 1;
        }),
    })),
    {
      name: "꽃",
    }
  )
);
