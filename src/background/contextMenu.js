export default function setupContextMenus({ store, addTodo, id }) {
  const ID = "todoList";
  const menuItem = {
    id: ID,
    title: "Add as Todo",
    contexts: ["selection"]
  };

  chrome.contextMenus.create(menuItem);

  chrome.contextMenus.onClicked.addListener(function(selection) {
    if (selection.menuItemId === ID && selection.selectionText) {
      store.dispatch(addTodo({ id, title: selection.selectionText }));
    }
  });
}
