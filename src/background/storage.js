export function loadState(key) {
  return new Promise(function(resolve, reject) {
    try {
      chrome.storage.sync.get([key], function(data) {
        const result = JSON.parse(data[key]);
        resolve(result);
        console.log(`loaded ${result.present.length} items from storage`);
      });
    } catch (error) {
      reject("could not load data from storage");
    }
  });
}

export function storeState(key, value) {
  return new Promise(function(resolve, reject) {
    try {
      const stringValue = JSON.stringify(value);
      chrome.storage.sync.set({ [key]: stringValue }, function() {
        resolve(`saved ${value.present.length} items`);
      });
    } catch (error) {
      reject("error storing items");
    }
  });
}
