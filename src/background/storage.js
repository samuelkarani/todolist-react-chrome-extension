export function loadState(key) {
  try {
    chrome.storage.sync.get([key], function(data) {
      const result = JSON.parse(data[key]);
      console.log(`loaded ${result.present.length} items`);
      return result;
    });
  } catch (error) {
    console.error("error loading state");
    return undefined;
  }
}

export function storeState(key, value) {
  try {
    chrome.storage.sync.set({ [key]: JSON.stringify(value) }, function() {
      console.log(`saved ${value.present.length} item`);
    });
  } catch (error) {
    console.error("error storing state");
    return undefined;
  }
}
