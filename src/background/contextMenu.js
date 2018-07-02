const CM = chrome.contextMenus;

const ID = "todoList"
const menuItem = {
    id: "todoList",
    title: "Add as Todo",
    contexts: ["selection"]
};

CM.create(menuItem);

CM.onClicked.addListener(function (selection) {
    if (selection.id === ID && selection.selectionText) {
        console.log(`selected: ${selection.selectionText}`)
    }
})