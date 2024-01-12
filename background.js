chrome.webNavigation.onCompleted.addListener(function () {
  RNGInit();
});

//SCAN RESULT
let PTP;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.message === "scanPositive" && request.data) {
    if (RNGInitResult <= 0.7) {
      console.log("P.T.P", request.data);
      PTP = request.data;
    } else {
      console.log("message receiver but RNG not passed");
      sendResponse({ farewell: "RNGinitBlock" });
    }
  }
});

// SEND PTP TO POPUP

chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "givePTP") {
    chrome.runtime.sendMessage({
      message: "sendPTP",
      data: PTP,
    });
  }
});

//POPUP SEARCH

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.greeting === "searchFPage") {
//     sendResponse({ farewell: "initFPage" });
//   }
// });

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
