export default function createNotification(text, count) {
  chrome.notifications.create("basic", {
    type: "basic",
    title: "New Todo",
    message: `added ${text}`,
    iconUrl: "../favicon.png",
    contextMessage: `${count} todos`,
    buttons: [
      {
        title: "open",
        iconUrl: "../favicon.png"
      }
    ]
  });
}
