export function NotificationButton() {
  function setPermission() {
    Notification.requestPermission().then(function (result) {
      if (result === "granted") {
        randomNotification();
      }
    });
  }

  async function randomNotification() {
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
    navigator.serviceWorker
      .getRegistration("/service-worker.js")
      .then((reg) => {
        console.log(reg);
        reg?.showNotification(notifTitle, options);
      });
  }

  return (
    <>
      <button id="" onClick={setPermission}>
        Request Notification
      </button>
    </>
  );
}
