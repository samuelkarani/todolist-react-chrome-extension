export function loadState(key) {
  return new Promise(function(resolve, reject) {
    chrome.storage.sync.get([key], function(data) {
      if (data && data[key]) {
        const result = data[key];
        resolve(JSON.parse(result));
        console.log(`loaded ${result.present.length} items from storage`);
      } else {
        reject("could not load data from storage");
      }
    });
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
