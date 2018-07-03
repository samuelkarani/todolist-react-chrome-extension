export default function createNotification({ text, total, left }) {
  chrome.notifications.clear("addTodo", function() {
    chrome.notifications.create(
      "addTodo",
      {
        type: "basic",
        title: "Todo added",
        message: `added "${text}"`,
        iconUrl: "../favicon.png",
        contextMessage: `${left} incomplete out of ${total}`
      },
      function() {
        console.log("displayed notification successfully");
      }
    );
  });
}
