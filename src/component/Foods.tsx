import { useFoodStore } from "../store/useFoodStore";
import { useFruitStore } from "../store/useFruitStore";

export default function Foods() {
  const { nuts, honey, increaseNuts, increaseHoney } = useFoodStore();

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
    </>
  );
}

function Fruits() {
  const { fruits, addFruits, removeFruits } = useFruitStore();

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
