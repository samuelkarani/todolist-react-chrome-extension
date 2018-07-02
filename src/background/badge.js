export default function performUpdateBadge(count) {
  chrome.browserAction.setBadgeText({
    text: count.toString()
  });
}
