export default function setupContextMenus() {
  const ID = "todoList";
  const menuItem = {
    id: ID,
    title: "Add as Todo",
    contexts: ["selection"]
  };

  contextMenus.create(menuItem);

  contextMenus.onClicked.addListener(function(selection) {
    if (selection.id === ID && selection.selectionText) {
      console.log(`selected: ${selection.selectionText}`);
    }
  });
}
