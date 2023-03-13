import { useBearStore } from "../store/useBearStore";
import BearState from "./BearState";
import { shallow } from "zustand/shallow";

export default function Bear() {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  );
}

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} 마리의 곰이 있다</h1>;
}

function Controls() {
  const { increasePopulation, removeAllBears } = useBearStore(
    (state) => ({
      increasePopulation: state.increasePopulation,
      removeAllBears: state.removeAllBears,
    }),
    shallow
  );
  return (
    <>
      <button onClick={increasePopulation}>곰 한마리 추가</button>
      <button onClick={removeAllBears}>곰 전부 제거!</button>
      <BearState />
    </>
  );
}
