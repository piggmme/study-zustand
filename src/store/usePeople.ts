import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type People = {
  people: string[];
  count: number;
  derived: {
    count: number;
  };
  actions: {
    addPerson: (person: string) => void;
    removePerson: (person: string) => void;
  };
};

export const usePeople = create(
  devtools(
    immer<People>((set, get) => ({
      people: ["해인", "하니"],
      get count() {
        if (!get()?.people) return 0;
        return get().people.length;
      },
      derived: {
        get count() {
          if (!get()?.people) return 0;
          return get().people.length;
        },
      },
      actions: {
        addPerson: (person: string) =>
          set((state) => ({ people: [...state.people, person] })),
        removePerson: (person: string) =>
          set((state) => ({
            people: state.people.filter((p) => p !== person),
          })),
      },
    }))
  )
);
