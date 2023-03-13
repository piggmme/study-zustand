import { useLushStore } from "../store/useLushStore";

export default function Lush() {
  const { lush, clearForest, clearForestNotImmer } = useLushStore((state) => ({
    lush: state.lush,
    clearForest: state.clearForest,
    clearForestNotImmer: state.clearForestNotImmer,
  }));

  return (
    <>
      <h1>Immer 사용해 불변성 지키기</h1>
      <div>lush: {JSON.stringify(lush)}</div>
      <button onClick={clearForest}>clearForest</button>
      <button onClick={clearForestNotImmer}>clearForestNotImmer</button>
    </>
  );
}
