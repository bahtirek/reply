
chrome.contextMenus.onClicked.addListener(genericOnClick);
const appData = {}

const contextMenuItem = {
  title: "Reply",
  contexts: ["selection"],
  id: "reply"
}

// A generic onclick callback function.
function genericOnClick(clickData) {
  if(clickData.menuItemId == "reply" && clickData.selectionText ) {
    console.log(clickData.selectionText);
    if(!clickData.selectionText) return;
    chrome.storage.sync.set({'message': clickData.selectionText}, (data) => {
      chrome.windows.create({url : "index.html", type: "popup", height: 500, width: 1000, top: 100},
        (newWindow) => {
          console.log(newWindow);
          chrome.storage.sync.get('message', (data) => {
            console.log(data);
          })
        }
      );
    })
  }
}
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Reply",
    contexts: ["selection"],
    id: "reply"
  });
});
