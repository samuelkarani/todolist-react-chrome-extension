// buggy storage clearing - clears out undo/redo history when full
const QUOTA_BYTES_PER_ITEM = 8192;
const storeName = chrome.extension.getBackgroundPage().storeName;

chrome.storage.onChanged.addListener(function(store, area) {
  if (area === "sync") {
    chrome.storage.sync.getBytesInUse(storeName, function(bytes) {
      if (bytes > QUOTA_BYTES_PER_ITEM - 1024) {
        chrome.storage.sync.remove(storeName, function() {
          console.log(`refreshing storage`);
        });
      }
      console.log(`bytes so far ${bytes}`);
    });
  }
});
