chrome.history.onVisited.addListener(RNGInit());

//SCAN RESULT

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting === "scanPositive") {
    if (RNGInitResult <= 0.7) {
      sendResponse({ farewell: "RNGinitOK" });
      saveData(request.data);
      console.log(saveData(request.data));
      //send data to popup ***
    } else {
      sendResponse({ farewell: "RNGinitBlock" });
    }
  }
});

//POPUP SEARCH

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting === "searchFPage") {
    sendResponse({ farewell: "initFPage" });
  }
});

//FPAGE LOADED

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting === "searchFPage") {
    sendResponse({ farewell: "initFPage" });
  }
});

//DATA RECEPTION

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "saveToDatabase") {
    saveData(request.data);
  }
});

const RNGInit = () => {
  return Math.random();
};
let RNGInitResult = RNGInit();

const saveData = (data) => {
  let PTP = data;
  return PTP;
};
