export function loadState(key) {
  try {
    chrome.storage.sync.get([key], function(data) {
      return JSON.parse(data[key]);
    });
  } catch (error) {
    console.error("error loading state");
    return undefined;
  }
}

export function storeState(key, value) {
  try {
    chrome.storage.sync.set({ [key]: JSON.stringify(value) }, function() {
      console.log("value stored");
    });
  } catch (error) {
    console.error("error storing state");
    return undefined;
  }
}
