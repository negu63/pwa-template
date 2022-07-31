export function NotificationButton() {
  function setPermission() {
    Notification.requestPermission().then(function (result) {
      if (result === "granted") {
        randomNotification();
      }
    });
  }

  function randomNotification() {
    const games = [
      { name: "sol game", author: "sol", slug: "eii" },
      { name: "sol game 2", author: "sol", slug: "eii 2" },
    ];
    let randomItem = Math.floor(Math.random() * games.length);
    let notifTitle = games[randomItem].name;
    let notifBody = "Created by " + games[randomItem].author + ".";
    let notifImg = "./bell.png";
    let options = {
      body: notifBody,
      icon: notifImg,
    };
    let notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 1000);
  }

  return (
    <>
      <button onClick={setPermission}>Request Notification</button>
    </>
  );
}
