import { create } from "zustand";

interface FoodState {
  nuts: number;
  honey: number;
  increaseNuts: () => void;
  increaseHoney: () => void;
}

export const useFoodStore = create<FoodState>((set) => ({
  nuts: 0,
  honey: 0,
  increaseNuts: () => set((state) => ({ nuts: state.nuts + 1 })),
  increaseHoney: () => set((state) => ({ honey: state.honey + 1 })),
}));
