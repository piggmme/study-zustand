import { useBearFishStore } from "../store/useBearFishStore";

export default function BearFish() {
  const bears = useBearFishStore((state) => state.bears);
  const addBear = useBearFishStore((state) => state.addBear);
  const eatFish = useBearFishStore((state) => state.eatFish);
  const fishes = useBearFishStore((state) => state.fishes);

  //   const { bears, addBear, eatFish, fishes } = useBearFishStore();

  return (
    <div>
      <h1>곰과 물고기</h1>
      <p>곰: {bears}</p>
      <p>물고기: {fishes}</p>
      <button onClick={addBear}>곰 추가</button>
      <button onClick={eatFish}>물고기 먹기</button>
    </div>
  );
}
