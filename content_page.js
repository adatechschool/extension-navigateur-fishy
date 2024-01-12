// // Listen from message from background
// chrome.runtime.onMessage.addEventListener((message) => {
// if (message.action === "" && message.);
// //do things
// })

// script to search for a book in the current amazon page

let bookTitle = document.getElementsByClassName("a-size-extra-large celwidget");
let bookImg = document.getElementsByClassName(
  "a-dynamic-image a-stretch-vertical"
);
let bookPrice = document.getElementsByClassName(
  "a-size-base a-color-price a-color-price"
);
if (bookTitle && bookImg && bookPrice) {
  let data = {
    title: bookTitle[0].innerText,
    image: bookImg[0].src,
    price: bookPrice[0].innerText,
  };
  console.log("data :", data);
  chrome.runtime.sendMessage({
    message: "scanPositive",
    data: data,
  });
} else {
  console.log("no product found on this page");
}

// chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
//   if (response.farewell === "RNGinitOK") {
//     console.log("Trop simple");
//   }
// });
