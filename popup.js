// document.getElementById("search").addEventListener("click", () => {
//   document.getElementById("overlay").style.display = "block";
//   document.getElementById("popup").style.display = "block";
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.update(tabs[0].id, {
//       url: "https://mail.google.com/mail/u/0/#inbox",
//     });
//   });
// });

// Demande au background.js de lui envoyer PTP
document.getElementById("search").addEventListener("click", () => {
  chrome.runtime.sendMessage({
    message: "givePTP",
  });
});

// Reçoit la réponse de background.js, afficher l'overlay 1.1 et dans cet overlay display les élements de PTP (Titre, Image et Prix)
chrome.runtime.onMessage.addListener((request) => {
  if (request.message === "sendPTP" && request.data) {
    console.log("Trop facile :", request.data);
    // overlay 1.1 lunched
  }
});

// Fonction pour désactiver le popup
