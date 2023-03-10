import { create } from "zustand";

const fruits = ["사과", "오렌지", "체리", "딸기", "수박"];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

interface FruitsState {
  fruits: string[];
  addFruits: () => void;
  removeFruits: () => void;
}

export const useFruitStore = create<FruitsState>((set) => ({
  fruits: [],
  addFruits: () =>
    set((state) => ({
      fruits: [...state.fruits, fruits[getRandomInt(0, fruits.length)]],
    })),
  removeFruits: () =>
    set((state) => {
      state.fruits.pop();
      return { fruits: state.fruits };
    }),
}));
