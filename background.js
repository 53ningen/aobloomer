
function onClickHandler(info, tab) {
  switch (info.menuItemId) {
    case "copy-page-with-md":
      copyToClipboard("[" + tab.title + "]" + "(" + JSON.stringify(tab.url) + ")");
      break;
    case "copy-image-with-md":
      copyToClipboard("[![]" + "(" + info.srcUrl + ")](" + info.srcUrl + ")");
      break;
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["page", "image"];
  for (var i = 0; i < contexts.length; i++) {
    const context = contexts[i];
    const title = "Copy " + context + "-link to clipboard with Markdown";
    const id = chrome.contextMenus.create({"title": title, "contexts": [context], "id": "copy-" + context + "-with-md"});
    console.log("'" + context + "' item:" + id);
  }
});
