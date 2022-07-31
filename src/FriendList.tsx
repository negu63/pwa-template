import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export function FriendList({ minAge = 1, maxAge = 200 }) {
  const friends = useLiveQuery(async () => {
    const friends = await db.friends
      .where("age")
      .between(minAge, maxAge + 1)
      .toArray();

    return friends;
  }, [minAge, maxAge]);

  const friendCount = useLiveQuery(() => db.friends.count());

  return (
    <>
      <p>
        Your have <b>{friendCount}</b> friends in total.
      </p>
      <ul>
        {friends?.map((friend) => (
          <li key={friend.id}>
            {friend.name}, {friend.age}
          </li>
        ))}
      </ul>
    </>
  );
}
