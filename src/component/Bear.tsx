import { useBearStore } from "../store/useBearStore";

export default function Bear() {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  );
}

function BearCounter() {
  const { bears } = useBearStore();
  return <h1>{bears} 마리의 곰이 있다</h1>;
}

function Controls() {
  const { increasePopulation, removeAllBears } = useBearStore();
  return (
    <>
      <button onClick={increasePopulation}>곰 한마리 추가</button>
      <button onClick={removeAllBears}>곰 전부 제거!</button>
    </>
  );
}
