import create, { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

// https://itchallenger.tistory.com/606
// 의존 슬라이스 패턴
// 상태가 서로의 데이터를 참조

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}
const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - state.bears })),
});

interface FishSlice {
  fishes: number;
  addFish: () => void;
}
const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 100,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export const useBearFishStore = create<BearSlice & FishSlice>()(
  devtools(
    (...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    }),
    {
      name: "곰과 물고기",
    }
  )
);
