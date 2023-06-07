import { useState } from "react";
import { usePeople } from "../../store/usePeople";

export default function AddPerson() {
  const [state, setState] = useState(1);

  const { addPerson } = usePeople((state) => state.actions);

  return (
    <button
      onClick={() => {
        addPerson(`민지 ${state}`);
        setState(state + 1);
      }}
    >
      add person
    </button>
  );
}
