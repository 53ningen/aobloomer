
function onClickHandler(info, tab) {
  switch (info.menuItemId) {
    case "copy-title-url":
      copyToClipboard(tab.title + "\n" + tab.url);
      break;
    case "copy-page-with-md":
      copyToClipboard("[" + tab.title + "]" + "(" + tab.url + ")");
      break;
    case "copy-image-with-md":
      copyToClipboard("[![]" + "(" + info.srcUrl + ")](" + info.srcUrl + ")");
      break;
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Copy title and url", "id": "copy-title-url"});

  var contexts = ["page", "image"];
  for (var i = 0; i < contexts.length; i++) {
    const context = contexts[i];
    const title = "Copy " + context + "-link to clipboard with Markdown";
    chrome.contextMenus.create({"title": title, "contexts": [context], "id": "copy-" + context + "-with-md"});
  }
});
