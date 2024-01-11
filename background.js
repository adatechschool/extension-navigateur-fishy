chrome.webNavigation.onCompleted.addListener(function () {
  RNGInit();
});

//SCAN RESULT

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.message === "scanPositive" && request.data) {
    if (RNGInitResult <= 0.7) {
      // sendResponse({ farewell: "RNGinitOK" });
      saveData(request.data);
      console.log("P.T.P", saveData(request.data));
      chrome.runtime.sendMessage({
        message: "RNGinitOK",
        data: request.data,
      });
    } else {
      console.log("message receiver but RNG not passed");
      sendResponse({ farewell: "RNGinitBlock" });
    }
  }
});

//POPUP SEARCH

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting === "searchFPage") {
    sendResponse({ farewell: "initFPage" });
  }
});

//FPAGE LOADED

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
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