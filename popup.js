// Demande au background.js de lui envoyer PTP
document.getElementById("search").addEventListener("click", () => {
  chrome.runtime.sendMessage({
    message: "givePTP",
  });
  chrome.runtime.onMessage.addListener((request) => {
    if (request.message === "sendPTP" && request.data) {
      document.getElementById("overlay1").style.display = "flex";
      console.log("Trop facile :", request.data);
      let object = request.data;
      let image = object.image;
      let title = object.title;
      let price = object.price;

      document.getElementById("title").style.display = "block";
      document.getElementById("price").style.display = "block";
      document.getElementById("image").style.display = "block";
    }
  });
});

// Reçoit la réponse de background.js, afficher l'overlay 1.1 et dans cet overlay display les élements de PTP (Titre, Image et Prix)

document.getElementById("go").addEventListener("click", () => {
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("overlay3").style.display = "flex";

  document.getElementById("overlay1").style.display = "block";
  document.getElementById("popup").style.display = "block";
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://blog.ippon.fr/2018/02/08/developper-une-extension-pour-navigateur/",
    });
  });
  document.getElementById("overlay3").style.display = "none";
});

// Fonction pour désactiver le popup
