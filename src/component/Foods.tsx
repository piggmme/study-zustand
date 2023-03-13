import { useEffect } from "react";
import { useFetchStore } from "../store/useFetchStore";
import { useFishStore } from "../store/useFishStore";
import { useFoodStore } from "../store/useFoodStore";
import { useFruitStore } from "../store/useFruitStore";
import { shallow } from "zustand/shallow";

export default function Foods() {
  const { nuts, honey, increaseNuts, increaseHoney } = useFoodStore(
    (state) => ({
      nuts: state.nuts,
      honey: state.honey,
      increaseNuts: state.increaseNuts,
      increaseHoney: state.increaseHoney,
    }),
    shallow
  );
  const { salmon, tuna, deleteEverything, deleteTuna } = useFishStore(
    (state) => ({
      salmon: state.salmon,
      tuna: state.tuna,
      deleteEverything: state.deleteEverything,
      deleteTuna: state.deleteTuna,
    }),
    shallow
  );

  useEffect(() => {
    console.log({ salmon, tuna, deleteEverything, deleteTuna });
  }, [salmon, tuna, deleteEverything, deleteTuna]);

  const { fishies, fetchFish } = useFetchStore();

  return (
    <>
      <div>
        <h2>곰의 식량 창고</h2>
        <p>nuts: {nuts}</p>
        <button onClick={increaseNuts}>땅콩 한 개 추가</button>
        <p>honey: {honey}</p>
        <button onClick={increaseHoney}>꿀 한 통 추가</button>
      </div>
      <div>
        <h2>곰의 과일 창고</h2>
        <Fruits />
      </div>
      <div>
        <h2>곰의 생선 창고</h2>
        <p>salmon: {salmon}</p>
        <p>tuna: {tuna}</p>
        <button onClick={deleteTuna}>참치 삭제</button>
        <button onClick={deleteEverything}>생선 창고 비우기</button>
      </div>
      <div>
        <h2>물고기 구해오기</h2>
        <p>fishies: {JSON.stringify(fishies)}</p>
        <button onClick={fetchFish}>물고기 가져오기</button>
      </div>
    </>
  );
}

function Fruits() {
  const { fruits, addFruits, removeFruits } = useFruitStore(
    (state) => ({
      fruits: state.fruits,
      addFruits: state.addFruits,
      removeFruits: state.removeFruits,
    }),
    shallow
  );

  return (
    <>
      <button onClick={addFruits}>과일 한 개 추가</button>
      <button onClick={removeFruits}>과일 한 개 제거</button>
      <ul>
        {fruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
