# Zustand 공부하기

> [Zustand 공식문서](https://github.com/pmndrs/zustand)

## 환경 설정

### 설치

`npm install zustand`

zustand는 타입스크립트여서 별도의 타입을 설치할 필요가 없다.

## 주의사항

### 디스트럭쳐링 할당은 불필요한 리렌더링을 발생시킨다

- [zustand 스토어에서 여러개 상태 가져오기 이슈](https://stackoverflow.com/questions/68609189/fetching-multiple-states-with-zustand-react-shorthand-syntax)
- [공식문서](https://github.com/pmndrs/zustand#fetching-everything)

- [유튜브 - zustand에서 리렌더링 방지하기](https://youtu.be/aOt4Hz3ze3Q?t=1241)
- [github - zustand에서 리렌더링 방지하기](https://github.com/jherr/efficient-selectors/tree/main/zustand-selectors)

```ts
// bad
const { nuts, honey } = useStore();
```

```ts
// good 1
const nuts = useStore((state) => state.nuts);
const honey = useStore((state) => state.honey);

// good 2
import shallow from "zustand/shallow";

const { nuts, honey } = useStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
);

// good 3
const treats = useStore((state) => Object.keys(state.treats), shallow);
```
