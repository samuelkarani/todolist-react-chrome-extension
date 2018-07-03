import createNotification from "./notification";
export default function setupContextMenus({ store, addTodo, ID_GENERATOR }) {
  const ID = "todoList";
  const menuItem = {
    id: ID,
    title: "Add as Todo",
    contexts: ["selection"]
  };

  chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create(menuItem);
  });
  chrome.contextMenus.onClicked.addListener(function(selection) {
    const text = selection.selectionText;
    if (selection.menuItemId === ID && text) {
      store.dispatch(addTodo({ id: ID_GENERATOR(), title: text }));
      createNotification(text, store.getState().todoList.present.length);
    }
  });
}
