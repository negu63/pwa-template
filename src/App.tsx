import "./App.css";
import { AddFriendForm } from "./AddFriendForm";
import { FriendContainer } from "./FriendContainer";
import { NotificationButton } from "./NotificationButton";

function App() {
  return (
    <div className="App">
      <AddFriendForm />
      <FriendContainer />
      <NotificationButton />
    </div>
  );
}

export default App;
