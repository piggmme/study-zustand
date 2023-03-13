import { create } from "zustand";

type BearState = {
  paw: boolean;
  snout: boolean;
  fur: boolean;
};

const useStore = create<BearState>(() => ({
  paw: true,
  snout: true,
  fur: true,
}));

const paw = useStore.getState().paw;

const unsub = useStore.subscribe((state, prevState) => {
  console.log("구독! ", { state, prevState });
});

export default function BearState() {
  const { paw, snout, fur } = useStore((state) => ({
    paw: state.paw,
    snout: state.snout,
    fur: state.fur,
  }));

  return (
    <>
      <div>paw :{+paw}</div>
      <div>snout :{+snout}</div>
      <div>fur :{+fur}</div>
      <button
        onClick={() => {
          useStore.setState((state) => ({ paw: !state.paw }));
        }}
      >
        paw 토글
      </button>
      <button
        onClick={() => {
          useStore.setState((state) => ({ snout: !state.snout }));
        }}
      >
        snout 토글
      </button>
      <button
        onClick={() => {
          useStore.setState((state) => ({ fur: !state.fur }));
        }}
      >
        fur 토글
      </button>
      <button onClick={unsub}>구독 취소</button>
    </>
  );
}
