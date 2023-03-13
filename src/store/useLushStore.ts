import { create } from "zustand";
import produce from "immer";

type LushState = {
  lush: {
    forest: {
      contains: { [key: string]: string } | null;
    };
    animal: string[];
  };
  clearForest: () => void;
  clearForestNotImmer: () => void;
};

export const useLushStore = create<LushState>((set) => ({
  lush: {
    forest: { contains: { a: "bear" } },
    animal: ["사자", "호랑이", "토끼"],
  },
  clearForest: () => {
    set(
      produce<LushState>((state) => {
        state.lush.forest.contains = null;
      })
    );
  },
  clearForestNotImmer: () => {
    set((state) => ({
      lush: {
        ...state.lush,
        forest: {
          contains: null,
        },
      },
    }));
  },
}));
