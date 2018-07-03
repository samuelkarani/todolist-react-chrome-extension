export default function createNotification({ text, total, left }) {
  chrome.notifications.clear("addTodo", function() {
    chrome.notifications.create(
      "addTodo",
      {
        type: "basic",
        title: "New Todo",
        message: `Added "${text}"`,
        iconUrl: "../favicon.png",
        contextMessage: `${left} incomplete out of ${total}`,
        buttons: [
          {
            title: "open",
            iconUrl: "../favicon.png"
          }
        ]
      },
      function() {
        console.log("displayed notification successfully");
      }
    );
  });
}
