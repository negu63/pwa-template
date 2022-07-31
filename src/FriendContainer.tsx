import { useState } from "react";
import { FriendList } from "./FriendList";

export function FriendContainer() {
  const [minAge, setMinAge] = useState(1);
  const [maxAge, setMaxAge] = useState(200);

  return (
    <>
      <FriendList minAge={minAge} maxAge={maxAge} />
      <div>Age range</div>
      <div>
        <input
          placeholder="min"
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(Number(e.target.value))}
        />
        <input
          placeholder="max"
          type="number"
          value={maxAge}
          onChange={(e) => setMaxAge(Number(e.target.value))}
        />
      </div>
    </>
  );
}
