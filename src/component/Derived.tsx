import { useState } from "react";
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

const usePeople = create(
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

export default function Derived() {
  const [state, setState] = useState(1);

  const { addPerson } = usePeople((state) => state.actions);
  const people = usePeople((state) => state.people);
  const count = usePeople((state) => state.count); // 계속 2가 나옴
  const derivedCount = usePeople((state) => state.derived.count); // add person 하면 증가함

  return (
    <div>
      <h1>Derived</h1>
      <button
        onClick={() => {
          addPerson(`민지 ${state}`);
          setState(state + 1);
        }}
      >
        add person
      </button>

      <p>People: {people.join(", ")}</p>
      {/* add person 해도 계속 2 */}
      <p>Count: {count}</p>
      {/* add person 하면 증가 */}
      <p>Derived Count: {derivedCount}</p>
    </div>
  );
}
