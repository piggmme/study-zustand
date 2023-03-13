import { shallow } from "zustand/shallow";
import { useBeeStore } from "../store/useBeeStore";
import { useFlowerStore } from "../store/useFlowerStore";

export default function Bees() {
  return (
    <>
      <BeeItem />
      <Flower />
    </>
  );
}

function BeeItem() {
  const { bees, addBee } = useBeeStore(
    (state) => ({
      bees: state.bees,
      addBee: state.addBee,
    }),
    shallow
  );

  return (
    <>
      <h1>Persist Middleware</h1>
      <div>bees: {bees}</div>
      <button onClick={addBee}>addBee</button>
    </>
  );
}

function Flower() {
  const { flowers, addFlowers, removeFlower } = useFlowerStore(
    (state) => ({
      flowers: state.flowers,
      addFlowers: state.addFlowers,
      removeFlower: state.removeFlower,
    }),
    shallow
  );

  return (
    <>
      <h2>Immer middleware</h2>
      <div>flowers: {flowers}</div>
      <button onClick={() => addFlowers(1)}>addFlowers</button>
      <button onClick={removeFlower}>removeFlower</button>
    </>
  );
}
