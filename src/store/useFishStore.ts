import { create } from "zustand";
import omit from "lodash-es/omit";

interface FishState {
  salmon: number;
  tuna: number;
  deleteEverything: () => void;
  deleteTuna: () => void;
}

export const useFishStore = create<FishState>((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // 액션을 포함한 전체 저장소 지우기, {salmon: undefined, tuna: undefined, deleteEverything: undefined}
  deleteTuna: () => set((state) => omit(state, ["tuna"]), true),
}));
