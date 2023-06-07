import { useState } from "react";
import { usePeople } from "../store/usePeople";
import AddPerson from "./Derived/AddPerson";

export default function Derived2() {
  const people = usePeople((state) => state.people);
  const count = usePeople((state) => state.count); // 계속 2가 나옴
  const derivedCount = usePeople((state) => state.derived.count); // add person 하면 증가함

  return (
    <div>
      <h1>Derived 2</h1>
      <AddPerson />

      <p>People: {people.join(", ")}</p>
      {/* add person 해도 계속 2 */}
      <p>Count: {count}</p>
      {/* add person 하면 증가 */}
      <p>Derived Count: {derivedCount}</p>
    </div>
  );
}
