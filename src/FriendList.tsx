import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export function FriendList({ minAge = 1, maxAge = 200 }) {
  const friends = useLiveQuery(async () => {
    const friends = await db.friends
      .where("age")
      .between(minAge, maxAge)
      .toArray();

    return friends;
  });

  return (
    <ul>
      {friends?.map((friend) => (
        <li key={friend.id}>
          {friend.name}, {friend.age}
        </li>
      ))}
    </ul>
  );
}
