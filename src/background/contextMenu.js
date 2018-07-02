// make independent
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
    if (selection.menuItemId === ID && selection.selectionText) {
      store.dispatch(
        addTodo({ id: ID_GENERATOR(), title: selection.selectionText })
      );
    }
  });
}